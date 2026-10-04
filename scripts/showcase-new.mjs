#!/usr/bin/env node
// Scaffold a full standalone showcase demo page for a style DNA.
// Usage: node scripts/showcase-new.mjs <slug> [--dna <dna-id>] [--title "Title"]
// Refuses to overwrite an existing file (exit 1).

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `showcase-new — scaffold a standalone showcase demo page

usage: node scripts/showcase-new.mjs <slug> [--dna <dna-id>] [--title "Title"]

  <slug>             kebab-case page slug, e.g. editorial-demo
  --dna <dna-id>     style DNA whose tokens the page uses (default: editorial-serif)
  --title "Title"    page <title> (default: "<DNA name> showcase")
  --help, -h         print this help

Creates showcase/<slug>.html: a standalone demo page that loads the DNA's
Tokens table from styles/<dna-id>.md as CSS vars and renders a hero, a bento
grid, and a CTA using them, with a caption crediting TZ-taste.
Refuses if the file already exists.`;

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

function loadDna(id) {
  const rel = `styles/${id}.md`;
  const full = join(root, rel);
  if (!existsSync(full)) throw new Error(`DNA file not found: ${rel}`);
  const text = readFileSync(full, "utf8");
  const lines = text.split("\n");

  // tz-meta header carries name, vibe, fonts, fallback tokens
  let meta = {};
  const mm = lines[0].match(/^<!--tz-meta (.*?) -->\s*$/);
  if (mm) { try { meta = JSON.parse(mm[1]); } catch { /* ignore */ } }

  // Tokens table: rows like | `--bg` | `#ffffff` | role |
  const tokens = {};
  const re = /^\|\s*`--([a-z]+)`\s*\|\s*`([^`]+)`\s*\|/;
  for (const line of lines) {
    const m = line.match(re);
    if (m) tokens[m[1]] = m[2].trim();
  }
  const fallback = (meta.tokens || {});
  for (const k of ["bg", "surface", "ink", "muted", "accent", "line"]) {
    if (!tokens[k] && fallback[k]) tokens[k] = fallback[k];
  }
  for (const k of ["bg", "surface", "ink", "muted", "accent", "line"]) {
    if (!tokens[k]) tokens[k] = "#888888";
  }
  return {
    id,
    name: meta.name || titleCase(id),
    vibe: meta.vibe || "",
    fonts: meta.fonts || {},
    tokens,
  };
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const slug = pos[0];
if (!slug) { console.error("error: missing <slug>\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`error: invalid slug "${slug}" — use kebab-case, e.g. editorial-demo`);
  process.exit(2);
}

const dnaId = flags.dna || "editorial-serif";
let dna;
try { dna = loadDna(dnaId); }
catch (e) { console.error(`error: ${e.message}`); process.exit(1); }

const rel = `showcase/${slug}.html`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const title = flags.title || `${dna.name} showcase`;
const t = dna.tokens;
const font = (f) => (f ? `'${f}', ` : "");
const cssVars = Object.entries(t).map(([k, v]) => `  --${k}: ${v};`).join("\n");
const gFonts = [dna.fonts.display, dna.fonts.body, dna.fonts.mono]
  .filter((f, i, a) => f && a.indexOf(f) === i)
  .map((f) => f.replace(/\s+/g, "+"))
  .join("&family=");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — TZ-taste</title>
${gFonts ? `<link href="https://fonts.googleapis.com/css2?family=${gFonts}&display=swap" rel="stylesheet">` : ""}
<style>
:root {
${cssVars}
}
* { box-sizing: border-box; margin: 0; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: ${font(dna.fonts.body)}system-ui, sans-serif;
  line-height: 1.6;
}
.wrap { max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); }

/* HERO */
.tz-hero { padding: clamp(96px, 14vw, 200px) 0 clamp(64px, 8vw, 120px); }
.tz-eyebrow {
  font-family: ${font(dna.fonts.mono)}ui-monospace, monospace;
  font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 28px;
}
.tz-hero h1 {
  font-family: ${font(dna.fonts.display)}Georgia, serif;
  font-size: clamp(56px, 10vw, 148px);
  line-height: 1.0; letter-spacing: -0.02em; margin-bottom: 32px;
}
.tz-hero h1 em { color: var(--accent); font-style: italic; }
.tz-lede { font-size: clamp(18px, 2.2vw, 24px); color: var(--muted); max-width: 44ch; margin-bottom: 48px; }
.tz-btn {
  display: inline-block; background: var(--accent); color: var(--bg);
  font-weight: 700; padding: 18px 44px; text-decoration: none;
}
.tz-btn:hover { transform: translateY(-2px); }

/* BENTO */
.tz-bento { padding: clamp(64px, 9vw, 128px) 0; }
.tz-bento h2 {
  font-family: ${font(dna.fonts.display)}Georgia, serif;
  font-size: clamp(32px, 5vw, 64px); margin-bottom: 40px; letter-spacing: -0.01em;
}
.tz-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px;
}
.tz-cell {
  background: var(--surface); border: 1px solid var(--line);
  padding: 32px; min-height: 180px;
}
.tz-cell.big { grid-column: span 4; }
.tz-cell.small { grid-column: span 2; }
.tz-cell.wide { grid-column: span 6; }
.tz-cell h3 { font-size: 22px; margin-bottom: 12px; }
.tz-cell p { color: var(--muted); font-size: 15px; }
.tz-num {
  font-family: ${font(dna.fonts.mono)}ui-monospace, monospace;
  font-size: 12px; letter-spacing: 0.18em; color: var(--accent); display: block; margin-bottom: 16px;
}

/* CTA */
.tz-cta {
  border-top: 1px solid var(--line);
  padding: clamp(80px, 11vw, 160px) 0 clamp(64px, 8vw, 112px);
  text-align: center;
}
.tz-cta h2 {
  font-family: ${font(dna.fonts.display)}Georgia, serif;
  font-size: clamp(40px, 7vw, 96px); margin-bottom: 24px; letter-spacing: -0.01em;
}
.tz-cta p { color: var(--muted); max-width: 52ch; margin: 0 auto 40px; }
.tz-credit {
  border-top: 1px solid var(--line); padding: 32px 0;
  font-family: ${font(dna.fonts.mono)}ui-monospace, monospace;
  font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);
  text-align: center;
}
</style>
</head>
<body>
  <header class="tz-hero wrap">
    <p class="tz-eyebrow">Showcase — ${esc(dna.name)}</p>
    <h1>This is what <em>taste</em> looks like.</h1>
    <p class="tz-lede">${esc(dna.vibe || "A demo page built entirely from one style DNA.")}</p>
    <a class="tz-btn" href="https://github.com/rawmware/TZ-taste">Steal this DNA</a>
  </header>

  <section class="tz-bento wrap">
    <h2>The DNA, demonstrated</h2>
    <div class="tz-grid">
      <div class="tz-cell big">
        <span class="tz-num">01</span>
        <h3>Tokens do the work</h3>
        <p>Every color on this page comes from the ${esc(dna.name)} token table — six values, zero guesses. Swap the DNA and the whole page re-skins itself.</p>
      </div>
      <div class="tz-cell small">
        <span class="tz-num">02</span>
        <h3>One accent</h3>
        <p>Used sparingly. An accent shouted everywhere is an accent nowhere.</p>
      </div>
      <div class="tz-cell small">
        <span class="tz-num">03</span>
        <h3>Type pairing</h3>
        <p>Display, body, and mono — each with a job, none freelancing.</p>
      </div>
      <div class="tz-cell big">
        <span class="tz-num">04</span>
        <h3>No slop</h3>
        <p>No purple gradient, no three identical cards, no default system font. This page obeys the anti-slop checklist or it doesn't ship.</p>
      </div>
      <div class="tz-cell wide">
        <span class="tz-num">05</span>
        <h3>The recipe</h3>
        <p>Pick one DNA. Copy the tokens. Build the page. Run the checklist. That's the whole TZ-taste protocol — generated by <code>node scripts/showcase-new.mjs ${esc(slug)}</code>.</p>
      </div>
    </div>
  </section>

  <section class="tz-cta wrap">
    <p class="tz-eyebrow">Ready?</p>
    <h2>Give your AI taste.</h2>
    <p>Free forever. MIT licensed. Twelve style DNAs, fourteen section patterns, zero purple gradients.</p>
    <a class="tz-btn" href="https://github.com/rawmware/TZ-taste">Use TZ-taste</a>
  </section>

  <footer class="tz-credit wrap">
    Built from TZ-taste · Style DNA: ${esc(dna.name)} · github.com/rawmware/TZ-taste
  </footer>
</body>
</html>
`;

mkdirSync(join(root, "showcase"), { recursive: true });
writeFileSync(full, html, "utf8");
console.log(`created ${rel} (DNA: ${dnaId})`);
console.log(`next: open ${rel} in a browser to preview`);
