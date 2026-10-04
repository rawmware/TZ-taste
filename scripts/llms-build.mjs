#!/usr/bin/env node
// Regenerate the agent-readable llms.txt from the repo indexes.
// Usage: node scripts/llms-build.mjs [--out llms.txt]
// Default --out writes root llms.txt. Always exits 0 on success.

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `llms-build — regenerate llms.txt from the repo indexes

usage: node scripts/llms-build.mjs [--out llms.txt]

  --out FILE     output path, relative to repo root (default: llms.txt)
  --help, -h     print this help

Rebuilds the agent-readable overview from styles/index.json,
patterns/index.json, sources/sources.json, manifest.json, and the three-d/
tz-meta headers.`;

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

function metaFromFirstLine(rel) {
  const first = readFileSync(join(root, rel), "utf8").split("\n", 1)[0];
  const m = first.match(/^<!--tz-meta (.*?) -->\s*$/);
  if (!m) throw new Error(`no tz-meta header on line 1 of ${rel}`);
  return JSON.parse(m[1]);
}

function htmlFiles(dir) {
  const full = join(root, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full).filter((f) => f.endsWith(".html")).map((f) => `${dir}/${f}`);
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }
if (pos.length) { console.error("error: this script takes no positional arguments\n\n" + USAGE); process.exit(2); }

try {
  const styles = json("styles/index.json");
  const patterns = json("patterns/index.json");
  const sources = json("sources/sources.json");
  const manifest = json("manifest.json");
  const prompts = existsSync(join(root, "prompts/index.json")) ? json("prompts/index.json") : { prompts: [] };

  const scenes = [];
  for (const rel of htmlFiles("three-d")) {
    try { scenes.push(metaFromFirstLine(rel)); }
    catch (e) { console.error(`warning: skipping ${rel}: ${e.message}`); }
  }

  const dnas = styles.dnas || [];
  const pats = patterns.patterns || [];
  const srcs = sources.sources || [];
  const prs = prompts.prompts || [];
  const version = manifest.version || "?.?.?";
  const updated = manifest.updated || new Date().toISOString().slice(0, 10);
  const demo = manifest.demo || "https://rawmware.github.io/TZ-taste/";
  const repoUrl = manifest.repo || "https://github.com/rawmware/TZ-taste";

  const wrap = (items, width) =>
    items.reduce((lines, item) => {
      const last = lines[lines.length - 1];
      if (last && (last + ", " + item).length <= width) lines[lines.length - 1] = last + ", " + item;
      else lines.push("  " + item);
      return lines;
    }, []).join("\n");

  let out = `# TZ-taste (v${version}, updated ${updated})

> The free anti-slop design reference for AI agents and developers.
> ${repoUrl} · Live demo: ${demo}

GENERATED FILE — do not edit by hand. Regenerate with: node scripts/llms-build.mjs

## What this is

TZ-taste is a free, MIT-licensed design reference that AI agents and developers
point at when building interfaces. It exists so AI-built UI stops looking like
AI-built UI: no purple gradients, no three identical cards, no default fonts.

## How to use it (for AI agents)

1. Read \`AGENT.md\` — the machine-first bootstrap and protocol.
2. State your one-sentence design read, then pick exactly ONE style DNA from
   \`styles/index.json\` (load only that file).
3. Obey \`skill/SKILL.md\`: set VARIANCE/MOTION/DENSITY dials, run pre-flight,
   respect the slop blocklist.
4. Build from DNA tokens. Self-review against \`docs/ANTI-SLOP.md\`.

The one-line instruction a human gives you:

> Use ${repoUrl} as a reference to build: [brief].
> Follow its AGENT.md protocol and pick one style DNA before writing any code.

## Contents (${dnas.length} DNAs, ${pats.length} patterns, ${scenes.length} 3D scenes, ${srcs.length} sources, ${prs.length} prompts)

- \`AGENT.md\` — agent bootstrap, modes, hard rules, file map
- \`manifest.json\` — machine-readable version, counts, and file map
- \`skill/SKILL.md\` — portable anti-slop skill (install: \`npx skills add ${repoUrl} --skill "tz-taste"\`)
- \`styles/\` — ${dnas.length} style DNAs with tokens, type pairings, and rules; machine index at \`styles/index.json\`
- \`patterns/\` — ${pats.length} copy-paste HTML/CSS section patterns; machine index at \`patterns/index.json\`
- \`prompts/\` — ${prs.length} ready-made build prompts: ${prs.map((p) => p.id).join(", ") || "none"}
- \`docs/ANTI-SLOP.md\` — concrete checklist of AI-slop tells (blockers, warnings, taste test)
- \`docs/DECISION-MATRIX.md\` — brief → style DNA routing table
- \`docs/TASTE-GUIDE.md\` — the short philosophy
- \`sources/sources.json\` — curated index of free design resources with verified licenses;
  freshness snapshots in \`sources/FRESHNESS.json\`
- \`docs/\` — live demo site (GitHub Pages): browsable DNAs, patterns with live previews, prompt library, agent kit

## Style DNAs

Pick exactly ONE. Load only that DNA's file.
`;

  for (const d of dnas) {
    out += `\n- \`${d.id}\` — ${d.name}. ${d.vibe || ""}\n`;
    out += `  File: ${d.file}. Best for: ${(d.best_for || []).join(", ")}. Dials: density ${d.dials?.density ?? "?"}/motion ${d.dials?.motion ?? "?"}/variance ${d.dials?.variance ?? "?"}.\n`;
  }

  out += `\n## Patterns\n\nCopy the snippet's markup plus its <style> block; classes are tz- prefixed.\n`;
  for (const p of pats) {
    out += `\n- \`${p.id}\` — ${p.title} (${p.category}). ${p.description || ""}\n`;
    out += `  File: ${p.file}. Tags: ${(p.tags || []).join(", ")}. DNAs: ${(p.dnas || []).join(", ")}.\n`;
  }

  out += `\n## 3D scenes\n`;
  if (scenes.length) {
    out += `\nStandalone Three.js scenes (CDN import). All original, MIT.\n`;
    for (const s of scenes) {
      out += `\n- \`${s.id}\` — ${s.title}. ${s.description || ""}\n`;
      out += `  File: ${s.file}.\n`;
    }
  } else {
    out += `\nNone yet — three-d/ is empty. Check three-d/index.json for the catalog when scenes land.\n`;
  }

  out += `\n## Sources\n\n${srcs.length} curated free resources; licenses verified, re-checked weekly by CI.\n`;
  out += wrap(srcs.map((s) => `${s.name} (${s.license})`), 76) + "\n";
  out += `\nFull index: \`sources/sources.json\`.\n`;

  out += `\n## License\n\nMIT. Free forever — no signup, no API key, no paid tier.\n`;

  const outRel = flags.out || "llms.txt";
  const outPath = isAbsolute(outRel) ? outRel : join(root, outRel);
  writeFileSync(outPath, out, "utf8");
  console.log(`wrote ${outRel} (${dnas.length} DNAs, ${pats.length} patterns, ${scenes.length} 3D scenes, ${srcs.length} sources)`);
  process.exit(0);
} catch (e) {
  console.error(`error: ${e.message}`);
  process.exit(1);
}
