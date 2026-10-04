// TZ-taste token exporter. Run: node scripts/token-export.mjs <dna-id> [--format css|tailwind|json]
// Parses the "## Tokens" table from styles/<id>.md and emits it as CSS
// custom properties, a Tailwind theme snippet, or JSON.
// Exit 1 on unknown DNA id or unparsable tokens table.

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/token-export.mjs <dna-id> [--format css|tailwind|json]

Reads the "## Tokens" table from styles/<dna-id>.md and prints it in the
requested format (default: css):
  css       :root { --token: #hex; } custom properties
  tailwind  theme.extend.colors snippet for tailwind.config.js
  json      { "--token": "#hex" } object`);
  process.exit(0);
}

const dnaId = args[0];
if (!dnaId) {
  console.error("error: missing <dna-id>. See --help.");
  process.exit(1);
}
const fmtIdx = args.indexOf("--format");
const format = (fmtIdx >= 0 ? args[fmtIdx + 1] : "css") || "css";
if (!["css", "tailwind", "json"].includes(format)) {
  console.error(`error: unknown format "${format}" — want css|tailwind|json.`);
  process.exit(1);
}

const indexPath = join(root, "styles/index.json");
if (!existsSync(indexPath)) {
  console.error("error: styles/index.json not found — is this the TZ-taste repo root?");
  process.exit(1);
}
const styles = JSON.parse(readFileSync(indexPath, "utf8"));
const dna = (styles.dnas || []).find((d) => d.id === dnaId);
if (!dna) {
  console.error(`error: unknown DNA id "${dnaId}". Available: ${(styles.dnas || []).map((d) => d.id).join(", ")}`);
  process.exit(1);
}

const mdPath = join(root, dna.file);
if (!existsSync(mdPath)) {
  console.error(`error: missing style file ${dna.file}`);
  process.exit(1);
}
const md = readFileSync(mdPath, "utf8");
const tokensSection = md.split("## Tokens")[1]?.split("##")[0] || "";
const rowRe = /\|\s*`(--[\w-]+)`\s*\|\s*`(#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8}))`\s*\|\s*([^|]*?)\s*\|/g;
const tokens = [];
let m;
while ((m = rowRe.exec(tokensSection))) {
  tokens.push({ name: m[1], value: m[2], role: m[3].trim() });
}
if (!tokens.length) {
  console.error(`error: no parsable "## Tokens" table in ${dna.file}`);
  process.exit(1);
}

if (format === "css") {
  console.log(":root {");
  for (const t of tokens) console.log(`  ${t.name}: ${t.value}; /* ${t.role} */`);
  console.log("}");
} else if (format === "tailwind") {
  console.log("theme: {");
  console.log("  extend: {");
  console.log("    colors: {");
  for (const t of tokens) console.log(`      ${t.name.slice(2)}: '${t.value}', // ${t.role}`);
  console.log("    },");
  console.log("  },");
  console.log("},");
} else {
  const obj = Object.fromEntries(tokens.map((t) => [t.name, t.value]));
  console.log(JSON.stringify(obj, null, 2));
}
process.exit(0);
