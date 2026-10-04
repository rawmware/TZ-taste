// TZ-taste contrast checker. Run: node scripts/contrast-check.mjs <hex1> <hex2>
// WCAG 2.x relative-luminance contrast ratio. Prints the ratio and AA/AAA
// pass/fail for normal and large text. Exit 0 if AA for normal text passes,
// else 1.

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
void root;

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/contrast-check.mjs <hex1> <hex2>

Computes the WCAG relative-luminance contrast ratio between two hex colors
(e.g. #6b7280 #f3f4f6) and reports AA/AAA pass/fail for normal and large text.

Exit 0 if AA for normal text (ratio >= 4.5) passes, else 1.`);
  process.exit(0);
}

function parseHex(h) {
  const m = /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.exec(h || "");
  if (!m) return null;
  let hex = m[1];
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function luminance({ r, g, b }) {
  const lin = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

const [h1, h2] = args;
const c1 = parseHex(h1);
const c2 = parseHex(h2);
if (!c1 || !c2) {
  console.error(`error: expected two hex colors, got "${h1}" "${h2}". Example: node scripts/contrast-check.mjs #6b7280 #f3f4f6`);
  process.exit(1);
}

const l1 = luminance(c1);
const l2 = luminance(c2);
const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
const r = ratio.toFixed(2);

const aaNormal = ratio >= 4.5;
const aaLarge = ratio >= 3.0;
const aaaNormal = ratio >= 7.0;
const aaaLarge = ratio >= 4.5;

console.log(`contrast ratio: ${r}:1`);
console.log(`AA  normal text (>= 4.5): ${aaNormal ? "PASS" : "FAIL"}`);
console.log(`AA  large text  (>= 3.0): ${aaLarge ? "PASS" : "FAIL"}`);
console.log(`AAA normal text (>= 7.0): ${aaaNormal ? "PASS" : "FAIL"}`);
console.log(`AAA large text  (>= 4.5): ${aaaLarge ? "PASS" : "FAIL"}`);

process.exit(aaNormal ? 0 : 1);
