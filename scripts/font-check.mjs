#!/usr/bin/env node
// Verify that the Google Fonts named in style DNAs actually exist.
// Usage: node scripts/font-check.mjs [styles/foo.md | styles/] [--offline]
// Exit 1 if any font is missing, unreachable, or absent from a DNA's meta.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, basename, isAbsolute, resolve } from "node:path";

// repo root from this script's own path (no node:url needed)
const root = join(dirname(process.argv[1] || "."), "..");

const USAGE = `font-check — verify Google Fonts named in style DNAs

usage: node scripts/font-check.mjs [styles/foo.md | styles/] [--offline]

  no arg        check every styles/*.md DNA
  styles/foo.md check one DNA file
  styles/       check every .md file in that directory
  --offline     skip the network; only check that fonts are named in tz-meta
  --help        print this help

Extracts fonts.display / fonts.body / fonts.mono from each file's tz-meta
JSON and requests https://fonts.googleapis.com/css2?family=<EncodedName> for
each one, reporting OK (HTTP 200) or MISSING (non-200 / unreachable).
Fonts deduplicated across DNAs. Prints a per-DNA summary.
Exit 1 if any font is missing, unreachable, or absent from meta.`;

function parseArgs(argv) {
  const flags = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a === "--offline") { flags.offline = true; continue; }
    if (a.startsWith("--")) { console.error(`error: unknown flag ${a}\n\n${USAGE}`); process.exit(2); }
    pos.push(a);
  }
  return { flags, pos };
}

const META_RE = /^<!--tz-meta (\{.*\}) -->\s*$/;

function extractMeta(file) {
  const first = readFileSync(file, "utf8").split("\n")[0];
  const m = first.match(META_RE);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

function isPlaceholder(v) {
  return !v || typeof v !== "string" || v.trim() === "" || v.trim().toUpperCase() === "TODO";
}

function css2Url(name) {
  return "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(name.trim()).replace(/%20/g, "+");
}

async function checkFont(name, offline) {
  if (isPlaceholder(name)) return { status: "MISSING META", ok: false };
  if (offline) return { status: "META ONLY", ok: true };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(css2Url(name), { signal: controller.signal, redirect: "follow" });
    return res.status === 200
      ? { status: "OK", ok: true }
      : { status: `MISSING (HTTP ${res.status})`, ok: false };
  } catch (err) {
    return { status: `UNREACHABLE (${err.name})`, ok: false };
  } finally {
    clearTimeout(timer);
  }
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

// Resolve the target files.
let files = [];
const target = pos[0];
if (!target) {
  files = readdirSync(join(root, "styles")).filter((f) => f.endsWith(".md")).map((f) => join(root, "styles", f));
} else {
  const p = isAbsolute(target) ? target : join(root, target);
  let st;
  try { st = statSync(p); } catch { st = null; }
  if (!st) { console.error(`error: no such file or directory: ${target}`); process.exit(2); }
  files = st.isDirectory()
    ? readdirSync(p).filter((f) => f.endsWith(".md")).map((f) => join(p, f))
    : [p];
}

const cache = new Map(); // font name -> {status, ok}
let anyBad = false;

for (const file of files) {
  const rel = basename(file) === "index.json" ? null : file.replace(root + "/", "");
  const meta = extractMeta(file);
  if (!meta) {
    console.log(`${rel}: no tz-meta found — skipped`);
    continue;
  }
  const fonts = meta.fonts || {};
  const slots = { display: fonts.display, body: fonts.body, mono: fonts.mono };
  const parts = [];
  for (const [slot, name] of Object.entries(slots)) {
    let result;
    if (isPlaceholder(name)) {
      result = { status: "MISSING META", ok: false };
      parts.push(`${slot}=(unnamed) ${result.status}`);
    } else {
      if (!cache.has(name)) cache.set(name, await checkFont(name, flags.offline));
      result = cache.get(name);
      parts.push(`${slot}="${name}" ${result.status}`);
    }
    if (!result.ok) anyBad = true;
  }
  console.log(`${rel}: ${parts.join(" · ")}`);
}

console.log(`\nchecked ${cache.size} unique font(s)${flags.offline ? " (offline — meta only)" : ""}`);
process.exit(anyBad ? 1 : 0);
