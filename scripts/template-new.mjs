#!/usr/bin/env node
// Scaffold a page template, styled from a style DNA's tokens.
// Usage: node scripts/template-new.mjs --id bakery --title "Crumb & Craft" --dna cottage-warm
// Refuses to overwrite an existing file (exit 1); exit 2 if the DNA is unknown.

import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `template-new — scaffold a page template for TZ-taste

usage: node scripts/template-new.mjs --id <slug> --title "Title" --dna <dna-slug>

  --id       kebab-case id, e.g. bakery (file: templates/<id>.html)
  --title    human-readable title, e.g. "Crumb & Craft — Neighborhood Bakery"
  --dna      style DNA slug, validated against styles/index.json
  --help     print this help

Creates templates/<id>.html: tz-meta first line (category "Template"), one
<style> block with tz- classes, CSS vars seeded from the DNA's tokens, a hero
with a claim headline + one CTA + one content section, real starter copy (no
lorem), responsive layout, and a prefers-reduced-motion rule.
Refuses if the file already exists.`;

function parseArgs(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a.startsWith("--")) {
      const eq = a.indexOf("=");
      if (eq > -1) { flags[a.slice(2, eq)] = a.slice(eq + 1); }
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) { flags[a.slice(2)] = argv[++i]; }
      else { flags[a.slice(2)] = true; }
    }
  }
  return flags;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const flags = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const id = flags.id;
if (!id) { console.error("error: missing --id\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`error: invalid id "${id}" — use kebab-case, e.g. bakery`);
  process.exit(2);
}
const title = flags.title;
if (!title) { console.error("error: missing --title\n\n" + USAGE); process.exit(2); }
const dna = flags.dna;
if (!dna) { console.error("error: missing --dna\n\n" + USAGE); process.exit(2); }

// Validate the DNA against styles/index.json (exit 2 if unknown).
let dnaMeta;
try {
  const index = JSON.parse(readFileSync(join(root, "styles/index.json"), "utf8"));
  dnaMeta = (index.dnas || []).find((d) => d.id === dna);
} catch (err) {
  console.error(`error: could not read styles/index.json (${err.message})`);
  process.exit(2);
}
if (!dnaMeta) {
  console.error(`error: unknown dna "${dna}" — not in styles/index.json (exit 2)`);
  process.exit(2);
}

const rel = `templates/${id}.html`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const meta = JSON.stringify({
  id,
  title,
  category: "Template",
  file: rel,
  tags: [id],
  description: `Template styled with the ${dnaMeta.name} DNA.`,
  dnas: [dna],
});

// Seed the CSS vars from the DNA's own meta tokens (fall back to neutrals).
const t = dnaMeta.tokens || {};
const vars = {
  bg: t.bg || "#ffffff",
  surface: t.surface || "#f5f5f5",
  ink: t.ink || "#111111",
  muted: t.muted || "#6b6b6b",
  accent: t.accent || "#5b5bd6",
  line: t.line || "#11111114",
};
const f = dnaMeta.fonts || {};
const displayFont = f.display && f.display !== "TODO" ? `"${f.display}", ` : "";
const bodyFont = f.body && f.body !== "TODO" ? `"${f.body}", ` : "";

const html = `<!--tz-meta ${meta} -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — TZ-taste Template</title>
<style>
.tz-tpl {
  --bg: ${vars.bg};
  --surface: ${vars.surface};
  --ink: ${vars.ink};
  --muted: ${vars.muted};
  --accent: ${vars.accent};
  --line: ${vars.line};
  background: var(--bg);
  color: var(--ink);
  font-family: ${bodyFont}system-ui, -apple-system, sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}
.tz-tpl * { box-sizing: border-box; }
.tz-tpl .tz-wrap { max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 64px); }

/* Hero */
.tz-hero { padding: clamp(72px, 10vw, 160px) 0 clamp(56px, 7vw, 110px); }
.tz-hero .tz-eyebrow {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--accent); margin: 0 0 22px;
}
.tz-hero h1 {
  font-family: ${displayFont}Georgia, serif;
  font-size: clamp(42px, 7vw, 96px);
  line-height: 1.02; letter-spacing: -0.025em;
  margin: 0 0 24px; max-width: 14ch;
}
.tz-hero .tz-lede { font-size: clamp(17px, 2vw, 21px); line-height: 1.7; color: var(--muted); max-width: 52ch; margin: 0 0 40px; }
.tz-hero .tz-cta {
  display: inline-block; background: var(--accent); color: #fff;
  text-decoration: none; font-weight: 700; font-size: 16px;
  padding: 16px 40px; border-radius: 999px;
}
.tz-hero .tz-cta:hover { filter: brightness(0.92); }

/* Content section */
.tz-section { padding: clamp(56px, 7vw, 110px) 0; border-top: 1px solid var(--line); }
.tz-section h2 {
  font-family: ${displayFont}Georgia, serif;
  font-size: clamp(30px, 4vw, 52px); letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.tz-section > .tz-wrap > p { color: var(--muted); line-height: 1.7; max-width: 60ch; margin: 0 0 48px; }
.tz-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.tz-card {
  background: var(--surface); border: 1px solid var(--line);
  padding: 32px 28px; border-radius: 12px;
}
.tz-card h3 { margin: 0 0 12px; font-size: 19px; letter-spacing: -0.01em; }
.tz-card p { margin: 0; color: var(--muted); line-height: 1.65; font-size: 15.5px; }

.tz-foot { padding: 40px 0 64px; border-top: 1px solid var(--line); color: var(--muted); font-size: 14px; }

@media (max-width: 760px) { .tz-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) {
  .tz-tpl * { transition: none !important; animation: none !important; }
}
</style>
</head>
<body class="tz-tpl">

<header class="tz-hero">
  <div class="tz-wrap">
    <p class="tz-eyebrow">${esc(dnaMeta.name)} · Template</p>
    <h1>${esc(title)} — baked fresh, every morning</h1>
    <p class="tz-lede">This is starter copy, not filler: swap in your own claim, but keep
    the shape — one eyebrow, one bold headline, one honest lede, one clear
    action. If a visitor can't tell what this page offers in five seconds,
    the headline isn't finished.</p>
    <a class="tz-cta" href="#start">Get started</a>
  </div>
</header>

<main class="tz-section" id="start">
  <div class="tz-wrap">
    <h2>Why this exists</h2>
    <p>Every template needs one content section that earns the scroll. Replace
    these three cards with the real reasons someone should care: what changes
    for them, how it works, and what it costs them in time or attention.</p>
    <div class="tz-grid">
      <article class="tz-card">
        <h3>Made by hand, daily</h3>
        <p>Small batches beat warehouse scale. Say what you actually do every
        day — the routine is the proof, not the slogan.</p>
      </article>
      <article class="tz-card">
        <h3>One street away</h3>
        <p>Proximity is a feature. Tell people exactly where to find you and
        when the door is open; remove every excuse not to show up.</p>
      </article>
      <article class="tz-card">
        <h3>Nothing to decode</h3>
        <p>No jargon, no mystery pricing, no "contact us for a quote." Put the
        plain facts on the page and let the work speak.</p>
      </article>
    </div>
  </div>
</main>

<footer class="tz-foot">
  <div class="tz-wrap">Scaffolded with TZ-taste template-new · DNA: ${esc(dnaMeta.name)}</div>
</footer>

</body>
</html>
`;

writeFileSync(full, html, "utf8");
console.log(`created ${rel} (dna: ${dna})`);
console.log(`next: replace the starter copy, then add "${id}" to templates/index.json`);
