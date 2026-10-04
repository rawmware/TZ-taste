#!/usr/bin/env node
// Print a markdown gallery index of the whole TZ-taste library.
// Usage: node scripts/gallery-index.mjs [--out file.md]
// Default: print to stdout. Always exits 0 on success.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `gallery-index — print a markdown gallery of the TZ-taste library

usage: node scripts/gallery-index.mjs [--out file.md]

  --out FILE     write to FILE (relative to repo root) instead of stdout
  --help, -h     print this help

Prints tables for: style DNAs (name/vibe/file), patterns (title/category/file),
three-d scenes (title/description from tz-meta), sources (name/license), and a
list of prompts.`;

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

function json(path) {
  const full = join(root, path);
  if (!existsSync(full)) throw new Error(`missing file: ${path}`);
  return JSON.parse(readFileSync(full, "utf8"));
}

const esc = (s) => String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");

function metaFromFirstLine(rel) {
  const first = readFileSync(join(root, rel), "utf8").split("\n", 1)[0];
  const m = first.match(/^<!--tz-meta (.*?) -->\s*$/);
  if (!m) throw new Error(`no tz-meta header on line 1 of ${rel}`);
  return JSON.parse(m[1]);
}

function table(headers, rows) {
  const head = `| ${headers.join(" | ")} |`;
  const sep = `| ${headers.map(() => "---").join(" | ")} |`;
  return [head, sep, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }
if (pos.length) { console.error("error: this script takes no positional arguments\n\n" + USAGE); process.exit(2); }

try {
  const styles = json("styles/index.json");
  const patterns = json("patterns/index.json");
  const sources = json("sources/sources.json");

  const scenes = [];
  const td = join(root, "three-d");
  if (existsSync(td)) {
    for (const f of readdirSync(td).filter((f) => f.endsWith(".html")).sort()) {
      try { scenes.push(metaFromFirstLine(`three-d/${f}`)); }
      catch (e) { console.error(`warning: skipping three-d/${f}: ${e.message}`); }
    }
  }

  const pd = join(root, "prompts");
  const promptFiles = existsSync(pd)
    ? readdirSync(pd).filter((f) => f.endsWith(".md")).sort()
    : [];

  let md = `# TZ-taste gallery\n\n`;
  md += `Generated ${new Date().toISOString().slice(0, 10)} from the repo indexes.\n`;

  md += `\n## Style DNAs\n\n`;
  md += table(
    ["Name", "Vibe", "File"],
    (styles.dnas || []).map((d) => [`\`${d.id}\` ${esc(d.name)}`, esc(d.vibe), `\`${d.file}\``])
  );

  md += `\n\n## Patterns\n\n`;
  md += table(
    ["Title", "Category", "File"],
    (patterns.patterns || []).map((p) => [`\`${p.id}\` ${esc(p.title)}`, esc(p.category), `\`${p.file}\``])
  );

  md += `\n\n## 3D scenes\n\n`;
  if (scenes.length) {
    md += table(
      ["Title", "Description", "File"],
      scenes.map((s) => [`\`${s.id}\` ${esc(s.title)}`, esc(s.description), `\`${s.file}\``])
    );
  } else {
    md += `None yet — \`three-d/\` is empty.\n`;
  }

  md += `\n## Sources\n\n`;
  md += table(
    ["Name", "License", "URL"],
    (sources.sources || []).map((s) => [esc(s.name), esc(s.license), esc(s.url)])
  );

  md += `\n\n## Prompts\n\n`;
  if (promptFiles.length) {
    for (const f of promptFiles) md += `- \`prompts/${f}\`\n`;
  } else {
    md += `None yet — \`prompts/\` is empty.\n`;
  }

  if (flags.out) {
    writeFileSync(join(root, flags.out), md, "utf8");
    console.error(`wrote ${flags.out}`);
  } else {
    process.stdout.write(md);
  }
  process.exit(0);
} catch (e) {
  console.error(`error: ${e.message}`);
  process.exit(1);
}
