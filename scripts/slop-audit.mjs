// TZ-taste slop auditor. Run: node scripts/slop-audit.mjs <file.html>
// Scans an HTML file against docs/ANTI-SLOP.md with structural heuristics.
// Exit codes: 2 = blocker found, 1 = warnings only, 0 = clean.

import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/slop-audit.mjs <file.html>

Scans an HTML file against TZ-taste's anti-slop checklist (docs/ANTI-SLOP.md)
using structural heuristics. Violations print as:

  RULE n [blocker|warning] file:line — detail

Exit codes: 2 = any blocker found, 1 = warnings only, 0 = clean.`);
  process.exit(0);
}

const target = args[0];
if (!target) {
  console.error("error: missing <file.html>. See --help.");
  process.exit(2);
}
const filePath = resolve(process.cwd(), target);
if (!existsSync(filePath)) {
  console.error(`error: file not found: ${target}`);
  process.exit(2);
}

const src = readFileSync(filePath, "utf8");
const lines = src.split("\n");
const lower = src.toLowerCase();
const blockers = [];
const warnings = [];

function lineOf(index) {
  return src.slice(0, index).split("\n").length;
}
function report(list, n, severity, index, detail) {
  list.push({ n, severity, line: lineOf(index), detail });
}

// --- RULE 1 (blocker): purple gradient ---------------------------------
const purpleHexes = ["7c3aed", "8b5cf6", "a855f7", "c084fc"];
const blueHexes = ["3b82f6", "2563eb", "60a5fa", "1d4ed8", "1e40af"];
const gradRe = /linear-gradient\s*\(([^;{}]*)/gi;
let m;
while ((m = gradRe.exec(src))) {
  const body = m[1].toLowerCase();
  const hasPurple = purpleHexes.some((h) => body.includes(h)) || /\b(purple|violet)\b/.test(body);
  const hasBlue = blueHexes.some((h) => body.includes(h)) || /\bblue\b/.test(body);
  if (hasPurple || (hasBlue && /\b(purple|violet|7c3aed|8b5cf6|a855f7)\b/.test(body)) || (hasBlue && body.includes("purple"))) {
    report(blockers, 1, "blocker", m.index, "purple-ish linear-gradient hero background");
    break;
  }
}

// --- RULE 2 (blocker): three equal cards --------------------------------
const cardClasses = [];
const classRe = /class="([^"]*card[^"]*)"/gi;
while ((m = classRe.exec(src))) cardClasses.push({ cls: m[1], index: m.index });
if (cardClasses.length >= 3) {
  const counts = {};
  for (const c of cardClasses) counts[c.cls] = (counts[c.cls] || 0) + 1;
  const repeated = Object.entries(counts).find(([, n]) => n >= 3);
  if (repeated) {
    report(blockers, 2, "blocker", cardClasses[0].index,
      `${cardClasses.length} elements with class containing "card" (${repeated[1]} identical class="${repeated[0]}")`);
  }
}

// --- RULE 3 (blocker): template hero ------------------------------------
if (lower.includes("get started") && lower.includes("learn more")) {
  const idx = lower.indexOf("get started");
  report(blockers, 3, "blocker", idx,
    'template hero pattern: "Get started" + "Learn more" buttons in the same file');
}

// --- RULE 4 (blocker): Inter everywhere ----------------------------------
const interRe = /font-family\s*:[^;{}]*\binter\b/gi;
while ((m = interRe.exec(src))) {
  report(blockers, 4, "blocker", m.index, "font-family Inter — default sans, no real type pairing");
  break;
}

// --- RULE 5 (blocker): lorem ipsum ---------------------------------------
const loremRe = /lorem ipsum/i;
m = loremRe.exec(src);
if (m) report(blockers, 5, "blocker", m.index, "placeholder text in visible copy");

// --- RULE 6 (blocker): emoji icons ----------------------------------------
const emojiRe = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]\uFE0F?/gu;
const emojiLines = new Set();
while ((m = emojiRe.exec(src))) emojiLines.add(lineOf(m.index));
for (const ln of emojiLines) {
  const idx = src.split("\n").slice(0, ln - 1).join("\n").length + 1;
  report(blockers, 6, "blocker", idx, "emoji used as interface icon — use Lucide/Phosphor instead");
}

// --- RULE 7 (warning): pill buttons everywhere ----------------------------
const pillCount = (src.match(/border-radius\s*:\s*9999?px/gi) || []).length;
if (pillCount >= 3) {
  const idx = src.search(/border-radius\s*:\s*9999?px/i);
  report(warnings, 7, "warning", idx, `${pillCount} pill radii (border-radius:999px) — radius for no reason`);
}

// --- RULE 8 (warning): gray-on-gray text -----------------------------------
const textGray = ["6b7280", "9ca3af", "718096", "a0aec0", "78716c", "737373"];
const bgGray = ["f3f4f6", "e5e7eb", "edf2f7", "f9fafb", "f5f5f4"];
const grayTextRe = new RegExp(`color\\s*:\\s*#(${textGray.join("|")})`, "i");
const grayBgRe = new RegExp(`background(?:-color)?\\s*:\\s*#(${bgGray.join("|")})`, "i");
const tailwindGrayRe = /\btext-gray-[45]00\b[^"']*\bbg-gray-[12]00\b|\bbg-gray-[12]00\b[^"']*\btext-gray-[45]00\b/;
const gt = grayTextRe.exec(src);
const gb = grayBgRe.exec(src);
const gt2 = tailwindGrayRe.exec(src);
if ((gt && gb) || gt2) {
  report(warnings, 8, "warning", (gt || gt2).index,
    "gray-on-gray body text — verify contrast is >= 4.5:1");
}

// --- RULE 11 (warning): banned words ---------------------------------------
const banned = ["delve", "leverage", "cutting-edge", "seamless", "elevate"];
const bannedRe = new RegExp(`\\b(${banned.join("|")})\\b`, "gi");
while ((m = bannedRe.exec(src))) {
  report(warnings, 11, "warning", m.index, `banned AI word "${m[1].toLowerCase()}" in copy`);
}

// --- RULE 12 (warning): layout-thrash animations ---------------------------
const layoutAnimRe = /(transition|animation)\s*:[^;{}]*\b(width|height|top|left)\b/gi;
while ((m = layoutAnimRe.exec(src))) {
  report(warnings, 12, "warning", m.index,
    `${m[1]} on ${m[2]} — layout thrash, animate transform/opacity instead`);
}

// --- RULE 13 (warning): h-screen --------------------------------------------
const hsRe = /\bh-screen\b/;
m = hsRe.exec(src);
if (m) report(warnings, 13, "warning", m.index, "h-screen section — can clip content on small viewports");

// --- RULE 14 (warning): footer-only copyright ----------------------------------
const arrRe = /all rights reserved/i;
m = arrRe.exec(src);
if (m) {
  const hasFooter = /<footer/i.test(src);
  report(warnings, 14, "warning", m.index,
    hasFooter ? 'footer contains only "All rights reserved" boilerplate'
      : '"All rights reserved" boilerplate — give the footer a real baseline');
}

for (const v of [...blockers, ...warnings]) {
  console.log(`RULE ${v.n} [${v.severity}] ${target}:${v.line} — ${v.detail}`);
}

if (blockers.length) {
  console.log(`\n${blockers.length} blocker(s), ${warnings.length} warning(s). Zero blockers to ship.`);
  process.exit(2);
}
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s), no blockers. Two or more = rethink the page.`);
  process.exit(1);
}
console.log("Clean — no slop tells detected.");
process.exit(0);
