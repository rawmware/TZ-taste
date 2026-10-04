// TZ-taste dead-link checker. Run: node scripts/deadlink-check.mjs [dir]
// Scans **/*.md under [dir] (default: repo root), dedupes every http(s) URL,
// and checks them with HEAD (GET fallback on 405). Reports dead and
// redirected links with status codes. Exit 1 if any link is dead — redirects
// do not fail the run. Skips mailto: and localhost/127.0.0.1.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/deadlink-check.mjs [dir]

Scans every *.md file under [dir] (default: repo root) for http(s) URLs,
dedupes them, and checks each one with a HEAD request (falling back to GET
when a server rejects HEAD with 405). Redirects (3xx) are reported but do
not fail the run; only unreachable or 4xx/5xx links do.

Rules: 10s timeout per request, at most 6 concurrent requests, mailto: and
localhost/127.0.0.1 links are skipped, .git and node_modules are skipped.

Exit 0 when every link is alive (or only redirected). Exit 1 when any
link is dead.`);
  process.exit(0);
}

const targetDir = resolve(root, args.find((a) => !a.startsWith("-")) || ".");

const TIMEOUT_MS = 10000;
const MAX_CONCURRENT = 6;
const MAX_REDIRECTS = 5;

function walkMd(dir, out) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (name === ".git" || name === "node_modules") continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walkMd(full, out);
    else if (name.endsWith(".md")) out.push(full);
  }
}

function extractUrls(text) {
  const urls = new Set();
  const re = /https?:\/\/[^\s"'<>)`\]{}]+/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    // Strip trailing punctuation that is rarely part of a URL.
    const cleaned = m[0].replace(/[.,;:!?*]+$/, "");
    if (cleaned) urls.add(cleaned);
  }
  return urls;
}

function isSkipped(url) {
  let host;
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    return true;
  }
  return host === "localhost" || host === "127.0.0.1" || host === "::1" || host.endsWith(".local");
}

function rawRequest(url, method) {
  return new Promise((resolveReq) => {
    let parsed;
    try {
      parsed = new URL(url);
    } catch (e) {
      resolveReq({ error: `bad url (${e.message})` });
      return;
    }
    const req = (parsed.protocol === "https:" ? httpsRequest : httpRequest)(
      parsed,
      {
        method,
        headers: { "user-agent": "tz-taste-deadlink-check/1.0" },
        timeout: TIMEOUT_MS,
      },
      (res) => {
        // Drain the body so sockets close cleanly, especially for GET.
        res.resume();
        res.on("end", () => resolveReq({ status: res.statusCode, headers: res.headers }));
      }
    );
    req.on("timeout", () => {
      req.destroy();
      resolveReq({ error: "timeout" });
    });
    req.on("error", (e) => resolveReq({ error: e.message || String(e) }));
    req.end();
  });
}

async function checkUrl(url) {
  let current = url;
  let redirects = 0;
  let chain = [];
  while (redirects <= MAX_REDIRECTS) {
    let res = await rawRequest(current, "HEAD");
    // Some servers refuse HEAD; retry the same URL with GET.
    if (res.status === 405) res = await rawRequest(current, "GET");
    if (res.error) return { verdict: "dead", status: "-", detail: res.error, chain };
    chain.push({ url: current, status: res.status });
    if (res.status >= 200 && res.status < 300) {
      return {
        verdict: redirects > 0 ? "redirected" : "ok",
        status: res.status,
        chain,
      };
    }
    if (res.status >= 300 && res.status < 400 && res.headers.location) {
      try {
        current = new URL(res.headers.location, current).toString();
      } catch {
        return { verdict: "dead", status: res.status, detail: "bad redirect location", chain };
      }
      redirects++;
      continue;
    }
    // 3xx without a location, or 4xx/5xx.
    const dead = res.status >= 400 || res.status >= 300;
    return {
      verdict: redirects > 0 && res.status < 400 ? "redirected" : dead ? "dead" : "dead",
      status: res.status,
      chain,
    };
  }
  return { verdict: "dead", status: "-", detail: `too many redirects (>${MAX_REDIRECTS})`, chain };
}

const mdFiles = [];
walkMd(targetDir, mdFiles);

const urls = new Set();
for (const file of mdFiles) {
  const text = readFileSync(file, "utf8");
  for (const u of extractUrls(text)) {
    if (!isSkipped(u)) urls.add(u);
  }
}

const list = [...urls];
console.log(`checking ${list.length} unique url(s) in ${mdFiles.length} markdown file(s) under ${targetDir}`);

const results = new Array(list.length);
let next = 0;
async function worker() {
  while (next < list.length) {
    const i = next++;
    results[i] = { url: list[i], ...(await checkUrl(list[i])) };
  }
}
await Promise.all(Array.from({ length: Math.min(MAX_CONCURRENT, list.length) }, worker));

const dead = results.filter((r) => r.verdict === "dead");
const redirected = results.filter((r) => r.verdict === "redirected");
const ok = results.filter((r) => r.verdict === "ok");

for (const r of dead) {
  const extra = r.detail ? ` (${r.detail})` : "";
  console.log(`DEAD  ${r.status}  ${r.url}${extra}`);
}
for (const r of redirected) {
  const hops = r.chain.map((c) => c.status).join(" -> ");
  console.log(`MOVED ${hops}  ${r.url}`);
}

console.log(`\nok: ${ok.length}, redirected: ${redirected.length}, dead: ${dead.length}`);
process.exit(dead.length > 0 ? 1 : 0);
