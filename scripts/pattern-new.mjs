#!/usr/bin/env node
// Scaffold a new section pattern snippet.
// Usage: node scripts/pattern-new.mjs <id> [--title "Title"] [--category Sections]
// Refuses to overwrite an existing file (exit 1).

import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `pattern-new — scaffold a new section pattern for TZ-taste

usage: node scripts/pattern-new.mjs <id> [--title "Title"] [--category Sections]

  <id>            kebab-case pattern id, e.g. hero-split (also the file stem)
  --title        human-readable title (default: id with words capitalized)
  --category     pattern category, e.g. Hero, Sections, Nav (default: Sections)
  --help, -h     print this help

Creates patterns/<id>.html: a tz- prefixed <section> skeleton plus a <style>
block with the standard CSS vars. Refuses if the file already exists.`;

function parseArgs(argv) {
  const flags = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a.startsWith("--")) {
      const eq = a.indexOf("=");
      if (eq > -1) { flags[a.slice(2, eq)] = a.slice(eq + 1); }
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) { flags[a.slice(2)] = argv[++i]; }
      else { flags[a.slice(2)] = true; }
    } else pos.push(a);
  }
  return { flags, pos };
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const titleCase = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const id = pos[0];
if (!id) { console.error("error: missing <id>\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`error: invalid id "${id}" — use kebab-case, e.g. hero-split`);
  process.exit(2);
}

const rel = `patterns/${id}.html`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const title = flags.title || titleCase(id);
const category = flags.category || "Sections";

const meta = JSON.stringify({ id, title, category, file: rel, tags: [], description: "TODO: one-line description.", dnas: [] });

const html = `<!--tz-meta ${meta} -->
<!-- TODO: add an entry for "${id}" to patterns/index.json:
     {"id":"${id}","title":"${title}","category":"${category}",
      "file":"${rel}","tags":[],"description":"...","dnas":[]} -->
<section class="tz-${id}">
  <p class="tz-eyebrow">TODO: eyebrow label</p>
  <h2>TODO: headline</h2>
  <p class="tz-lede">TODO: one-sentence lede explaining what this section does.</p>
  <div class="tz-row">
    <a class="tz-primary" href="#">Primary action</a>
    <a class="tz-secondary" href="#">Secondary action</a>
  </div>
</section>
<style>
.tz-${id} {
  /* DNA tokens — replace with your DNA's values (see styles/<dna>.md) */
  --bg: #ffffff;
  --surface: #f5f5f5;
  --ink: #111111;
  --muted: #6b6b6b;
  --accent: #5b5bd6;
  --line: #11111114;
  background: var(--bg);
  color: var(--ink);
  padding: clamp(64px, 9vw, 128px) clamp(24px, 6vw, 96px);
  font-family: system-ui, -apple-system, sans-serif;
}
.tz-${id} .tz-eyebrow {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 24px;
}
.tz-${id} h2 {
  font-size: clamp(40px, 6vw, 88px);
  line-height: 1.02;
  margin: 0 0 24px;
  letter-spacing: -0.02em;
}
.tz-${id} .tz-lede {
  font-size: 18px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 56ch;
  margin: 0 0 44px;
}
.tz-${id} .tz-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.tz-${id} .tz-primary {
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  padding: 16px 36px;
}
.tz-${id} .tz-secondary {
  color: var(--ink);
  text-decoration: none;
  padding: 16px 36px;
  border: 1px solid var(--line);
}
</style>
`;

writeFileSync(full, html, "utf8");
console.log(`created ${rel}`);
console.log(`next: replace the TODOs, then add "${id}" to patterns/index.json`);
