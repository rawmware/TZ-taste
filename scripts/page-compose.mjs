// TZ-taste page composer. Run: node scripts/page-compose.mjs <pattern-id...> [--title "..."] [--out file.html]
// Stitches one or more patterns into a single full HTML document: each
// patterns/<id>.html contributes its markup and <style> block; tz- styles
// are deduped across patterns. Default --out is stdout.
// Exit 1 on unknown pattern id.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/page-compose.mjs <pattern-id...> [--title "..."] [--out file.html]

Reads each patterns/<id>.html, extracts its section/nav/footer/div markup and
<style> block, and stitches them into one full HTML document. tz- style rules
are deduped across patterns. Default --out is stdout.

Example: node scripts/page-compose.mjs nav-minimal hero-editorial footer --title "My page"`);
  process.exit(0);
}

const ids = [];
let title = "TZ-taste page";
let out = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--title") title = args[++i] ?? title;
  else if (args[i] === "--out") out = args[++i] ?? out;
  else ids.push(args[i]);
}
if (!ids.length) {
  console.error("error: need at least one <pattern-id>. See --help.");
  process.exit(1);
}

const indexPath = join(root, "patterns/index.json");
if (!existsSync(indexPath)) {
  console.error("error: patterns/index.json not found — is this the TZ-taste repo root?");
  process.exit(1);
}
const index = JSON.parse(readFileSync(indexPath, "utf8"));
const byId = Object.fromEntries((index.patterns || []).map((p) => [p.id, p]));

const seenRules = new Set();
const cssBlocks = [];
const markups = [];

for (const id of ids) {
  const entry = byId[id];
  if (!entry) {
    console.error(`error: unknown pattern id "${id}". Available: ${(index.patterns || []).map((p) => p.id).join(", ")}`);
    process.exit(1);
  }
  const full = join(root, entry.file);
  if (!existsSync(full)) {
    console.error(`error: missing pattern file ${entry.file}`);
    process.exit(1);
  }
  const html = readFileSync(full, "utf8");

  // collect <style> blocks
  const styleRe = /<style>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRe.exec(html))) {
    const deduped = m[1]
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !seenRules.has(l))
      .map((l) => { seenRules.add(l); return l; });
    if (deduped.length) cssBlocks.push(deduped.join("\n"));
  }

  // markup = everything outside <style> blocks, minus the tz-meta comment
  const markup = html
    .replace(/<style>[\s\S]*?<\/style>/gi, "")
    .replace(/<!--tz-meta[\s\S]*?-->/g, "")
    .trim();
  if (markup) markups.push(markup);
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<style>
${cssBlocks.join("\n\n")}
</style>
</head>
<body>
${markups.join("\n\n")}
</body>
</html>
`;

if (out) {
  writeFileSync(out, doc, "utf8");
  console.log(`Wrote ${out} (${ids.length} pattern${ids.length === 1 ? "" : "s"}: ${ids.join(", ")})`);
} else {
  process.stdout.write(doc);
}
process.exit(0);
