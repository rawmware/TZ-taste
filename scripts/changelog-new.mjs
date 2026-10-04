#!/usr/bin/env node
// Append a dated entry to CHANGELOG.md.
// Usage: node scripts/changelog-new.mjs "message"
// Creates the file with a "# Changelog" header if missing. Always exits 0 on success.

import { appendFileSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `changelog-new — append a dated entry to CHANGELOG.md

usage: node scripts/changelog-new.mjs "message"

  "message"      the changelog entry text (one entry per line is fine)
  --help, -h     print this help

Appends "## YYYY-MM-DD" (if not the latest heading) plus the message as a
bullet under it. Creates CHANGELOG.md with a "# Changelog" header if missing.`;

function parseArgs(argv) {
  const flags = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a.startsWith("--")) { flags[a.slice(2)] = true; }
    else pos.push(a);
  }
  return { flags, pos };
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const message = pos[0];
if (!message) { console.error("error: missing \"message\"\n\n" + USAGE); process.exit(2); }

const full = join(root, "CHANGELOG.md");
const today = new Date().toISOString().slice(0, 10);
const lines = message.split("\n").map((l) => `- ${l.replace(/^-\s*/, "")}`);

if (!existsSync(full)) {
  writeFileSync(full, `# Changelog\n\n## ${today}\n\n${lines.join("\n")}\n`, "utf8");
  console.log(`created CHANGELOG.md with entry under ## ${today}`);
  process.exit(0);
}

let content = readFileSync(full, "utf8");
if (!content.endsWith("\n")) content += "\n";

// Find the first ## heading; if it's today's date, append under it.
const head = content.match(/^##\s+(.+)$/m);
if (head && head[1].trim() === today) {
  const after = head[0] + "\n" + lines.join("\n") + "\n";
  const idx = content.indexOf(head[0]);
  content = content.slice(0, idx) + after + content.slice(idx + head[0].length);
} else {
  if (!content.endsWith("\n\n")) content += content.endsWith("\n") ? "\n" : "\n\n";
  content += `## ${today}\n\n${lines.join("\n")}\n`;
}
writeFileSync(full, content, "utf8");
console.log(`appended to CHANGELOG.md under ## ${today}`);
process.exit(0);
