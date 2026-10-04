// TZ-taste index builder.
// Scans content dirs for <!--tz-meta {...} --> headers and regenerates every
// index.json + manifest counts. Run: node scripts/build-indexes.mjs
// This is how parallel contributors avoid index conflicts: files carry metadata,
// indexes are derived.

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const today = new Date().toISOString().slice(0, 10);

const INDEXES = [
  { dir: "styles", key: "dnas", index: "styles/index.json",
    usage: "Agents: pick exactly ONE dna. Load only that file. Never load all." },
  { dir: "patterns", key: "patterns", index: "patterns/index.json",
    usage: "Each file is a standalone snippet: markup plus a <style> block. Copy both into your page. Classes are tz- prefixed to avoid collisions." },
  { dir: "three-d", key: "scenes", index: "three-d/index.json",
    usage: "Each file is a standalone Three.js scene (CDN import). Copy the whole file or lift the scene code. All original, MIT." },
  { dir: "templates", key: "templates", index: "templates/index.json",
    usage: "Complete standalone landing pages. Open in a browser, view source, adapt. All original, MIT." },
  { dir: "prompts", key: "prompts", index: "prompts/index.json",
    usage: "Copy-paste build prompts. Fill the [BRACKETS], paste into any AI builder." },
  { dir: "showcase", key: "showcases", index: "showcase/index.json",
    usage: "One live demo page per style DNA. Open in a browser to see the DNA working. Classes are tz- prefixed." },
  { dir: "docs", key: "docs", index: "docs/index.json",
    usage: "Prose guides for humans and agents. Not code." },
];

function metaOf(file) {
  const text = readFileSync(file, "utf8");
  const m = text.match(/<!--tz-meta\s+(\{.*?\})\s*-->/s);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
}

const counts = {};
for (const { dir, key, index, usage } of INDEXES) {
  const dirPath = join(root, dir);
  if (!existsSync(dirPath)) { console.log(`skip ${dir} (missing)`); continue; }
  const entries = [];
  for (const f of readdirSync(dirPath).sort()) {
    if (f === "index.json" || f.startsWith(".")) continue;
    const full = join(dirPath, f);
    let stat;
    try { stat = (await import("node:fs")).statSync(full); } catch { continue; }
    if (!stat.isFile()) continue;
    const meta = metaOf(full);
    if (!meta) { console.log(`WARN: ${dir}/${f} has no tz-meta header`); continue; }
    entries.push(meta);
  }
  entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeFileSync(join(root, index),
    JSON.stringify({ count: entries.length, updated: today, usage, [key]: entries }, null, 1) + "\n");
  counts[key] = entries.length;
  console.log(`${index}: ${entries.length} entries`);
}

// manifest counts
const mPath = join(root, "manifest.json");
if (existsSync(mPath)) {
  const m = JSON.parse(readFileSync(mPath, "utf8"));
  m.counts = {
    style_dnas: counts.dnas ?? 0,
    patterns: counts.patterns ?? 0,
    scenes_3d: counts.scenes ?? 0,
    templates: counts.templates ?? 0,
    prompts: counts.prompts ?? 0,
    showcases: counts.showcases ?? 0,
  };
  m.updated = today;
  writeFileSync(mPath, JSON.stringify(m, null, 1) + "\n");
  console.log("manifest.json counts updated");
}
