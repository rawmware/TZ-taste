// TZ-taste stats. Run: node scripts/stats.mjs
// Read-only repo content counts: DNAs, patterns, 3D scenes, templates,
// showcases, prompts, docs, sources, and CLI tools. Prefers manifest.json
// and each */index.json; tolerates a missing index.json (printed as
// "not indexed yet"). Always exits 0.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/stats.mjs

Prints a tidy table of repo content counts: style DNAs, patterns, 3D
scenes, templates, showcases, prompts, docs, curated sources, and CLI
tools (scripts/*.mjs).

Reads manifest.json plus every */index.json and sources/sources.json.
A missing index.json is tolerated and shown as "not indexed yet".
Read-only. Always exits 0.`);
  process.exit(0);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

// Returns a number, or null when nothing provides a count.
function indexCount(dir, indexFile, arrayKeys) {
  const idx = readJson(join(root, dir, indexFile));
  if (!idx) return null;
  if (typeof idx.count === "number") return idx.count;
  for (const k of arrayKeys || []) {
    if (Array.isArray(idx[k])) return idx[k].length;
  }
  return null;
}

function dirFileCount(dir, exts) {
  const d = join(root, dir);
  if (!existsSync(d)) return null;
  try {
    return readdirSync(d).filter((n) => {
      const full = join(d, n);
      try {
        if (!statSync(full).isFile()) return false;
      } catch {
        return false;
      }
      return exts.some((e) => n.endsWith(e));
    }).length;
  } catch {
    return null;
  }
}

const manifest = readJson(join(root, "manifest.json")) || {};
const mCounts = manifest.counts || {};

const rows = [
  ["Style DNAs", indexCount("styles", "index.json", ["dnas"]) ?? mCounts.style_dnas ?? null],
  ["Patterns", indexCount("patterns", "index.json", ["patterns"]) ?? mCounts.patterns ?? null],
  ["3D scenes", indexCount("three-d", "index.json", ["scenes"]) ?? mCounts.scenes_3d ?? null],
  ["Templates", indexCount("templates", "index.json", ["templates"]) ?? mCounts.templates ?? null],
  ["Showcases", indexCount("showcase", "index.json", ["showcases"]) ?? mCounts.showcases ?? null],
  ["Prompts", indexCount("prompts", "index.json", ["prompts"]) ?? mCounts.prompts ?? null],
  ["Docs", indexCount("docs", "index.json", ["docs"]) ?? dirFileCount("docs", [".md"])],
  ["Sources", indexCount("sources", "sources.json", ["sources"]) ?? dirFileCount("sources", [".json"])],
  ["CLI tools", dirFileCount("scripts", [".mjs"])],
];

const labelW = Math.max(...rows.map(([l]) => l.length), 8);
console.log(`TZ-taste content stats — ${root}\n`);
for (const [label, value] of rows) {
  const shown = typeof value === "number" ? String(value) : "not indexed yet";
  console.log(`${label.padEnd(labelW)}  ${shown}`);
}
console.log(`\nversion: ${manifest.version || "?"}`);
