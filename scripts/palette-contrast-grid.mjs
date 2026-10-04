// TZ-taste palette contrast grid. Run: node scripts/palette-contrast-grid.mjs styles/foo.md
// Parses the tz-meta JSON block from a style-DNA markdown file, computes the
// WCAG relative-luminance contrast ratio for EVERY token pair, and prints an
// aligned matrix. Pairs below 4.5:1 are flagged for normal text; pairs below
// 3:1 are flagged for large-scale text. Pure math, no network.
// Exit 1 when the bg/ink pair itself fails 4.5:1, else 0.

import { readFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h") || args.length === 0) {
  console.log(`usage: node scripts/palette-contrast-grid.mjs <dna-markdown-file>

Parses the tz-meta JSON block (<!--tz-meta {...} -->) from a style-DNA
markdown file and computes the WCAG 2.x contrast ratio for every pair of
color tokens (bg, ink, accent, muted, line, surface, ...).

Prints an aligned ratio matrix, then flags pairs below 4.5:1 (normal text)
and below 3:1 (large-scale text). 8-digit hex tokens (with alpha) are
evaluated on their opaque RGB; the alpha is noted.

Exit 1 if the bg/ink pair fails 4.5:1, else 0. Pure math, no network.`);
  process.exit(0);
}

const fileArg = resolve(root, args.find((a) => !a.startsWith("-")));

let text;
try {
  text = readFileSync(fileArg, "utf8");
} catch (e) {
  console.error(`error: cannot read ${fileArg} (${e.message})`);
  process.exit(1);
}

const metaMatch = /<!--tz-meta\s+(\{.*?\})\s*-->/.exec(text);
if (!metaMatch) {
  console.error(`error: no <!--tz-meta {...} --> block found in ${fileArg}`);
  process.exit(1);
}

let meta;
try {
  meta = JSON.parse(metaMatch[1]);
} catch (e) {
  console.error(`error: tz-meta JSON is invalid (${e.message})`);
  process.exit(1);
}

const tokens = meta.tokens || {};
const names = Object.keys(tokens);
if (names.length < 2) {
  console.error(`error: expected at least 2 tokens, found ${names.length}`);
  process.exit(1);
}

function parseHex(h) {
  const m = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.exec(h || "");
  if (!m) return null;
  let hex = m[1];
  let alpha = null;
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  if (hex.length === 8) {
    alpha = hex.slice(6);
    hex = hex.slice(0, 6);
  }
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, alpha };
}

function luminance({ r, g, b }) {
  const lin = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

const colors = {};
for (const name of names) {
  const c = parseHex(tokens[name]);
  if (!c) {
    console.error(`error: token "${name}" has an unparseable color value "${tokens[name]}"`);
    process.exit(1);
  }
  colors[name] = c;
}

const lum = {};
for (const name of names) lum[name] = luminance(colors[name]);

const ratio = (a, b) => (Math.max(lum[a], lum[b]) + 0.05) / (Math.min(lum[a], lum[b]) + 0.05);

const dnaName = meta.name || meta.id || fileArg;
console.log(`palette contrast grid — ${dnaName}`);
console.log(`tokens: ${names.map((n) => `${n}=${tokens[n]}`).join("  ")}`);
for (const n of names) {
  if (colors[n].alpha) console.log(`note: "${n}" is 8-digit hex (#${colors[n].alpha} alpha); evaluated opaque.`);
}
console.log("");

const cellW = 8;
const nameW = Math.max(...names.map((n) => n.length), 6);
const header = " ".repeat(nameW + 2) + names.map((n) => n.padStart(cellW)).join("");
console.log(header);
for (const a of names) {
  let row = a.padEnd(nameW) + "  ";
  for (const b of names) {
    row += (a === b ? "—".padStart(cellW) : ratio(a, b).toFixed(2).padStart(cellW));
  }
  console.log(row);
}
console.log("");

const weakText = [];
const weakLarge = [];
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const r = ratio(names[i], names[j]);
    const pair = `${names[i]} ↔ ${names[j]} (${r.toFixed(2)}:1)`;
    if (r < 3) weakLarge.push(pair);
    else if (r < 4.5) weakText.push(pair);
  }
}

if (weakText.length > 0) {
  console.log("below 4.5:1 — not safe for normal text:");
  for (const p of weakText) console.log(`  ✗ ${p}`);
}
if (weakLarge.length > 0) {
  console.log("below 3:1 — not safe even for large-scale text:");
  for (const p of weakLarge) console.log(`  ✗✗ ${p}`);
}
if (weakText.length === 0 && weakLarge.length === 0) {
  console.log("every pair passes 4.5:1 for normal text.");
}

const bgInk =
  colors.bg && colors.ink ? ratio("bg", "ink") : null;
if (bgInk === null) {
  console.log("\nno bg/ink token pair to gate on.");
  process.exit(0);
}
console.log(`\nbg ↔ ink: ${bgInk.toFixed(2)}:1 ${bgInk >= 4.5 ? "PASS" : "FAIL (below 4.5:1)"}`);
process.exit(bgInk >= 4.5 ? 0 : 1);
