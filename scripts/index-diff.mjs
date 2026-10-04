#!/usr/bin/env node
// Find files missing from index.json indexes (and index entries missing files).
// Usage: node scripts/index-diff.mjs
// Exit 1 if any diffs, 0 if clean.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

// repo root from this script's own path (no node:url needed)
const root = join(dirname(process.argv[1] || "."), "..");

const USAGE = `index-diff — find files missing from TZ-taste indexes

usage: node scripts/index-diff.mjs

  --help    print this help

Scans styles/, patterns/, three-d/, templates/, prompts/, docs/, showcase/,
generative/ and reports, per directory:
  (a) files on disk with a tz-meta first line that are absent from that
      directory's index.json
  (b) index.json entries whose "file" no longer exists on disk
Human-readable output. Exit 1 if any diffs, 0 if clean.`;

if (process.argv.slice(2).includes("--help") || process.argv.slice(2).includes("-h")) {
  console.log(USAGE);
  process.exit(0);
}

const DIRS = [
  { dir: "styles", key: "dnas" },
  { dir: "patterns", key: "patterns" },
  { dir: "three-d", key: "scenes" },
  { dir: "templates", key: "templates" },
  { dir: "prompts", key: "prompts" },
  { dir: "docs", key: "docs" },
  { dir: "showcase", key: "showcases" },
  { dir: "generative", key: "generative" },
];

const META_RE = /^<!--tz-meta \{/;

function metaFiles(dir) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return null; // directory itself missing
  return readdirSync(abs, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.(md|html)$/.test(e.name))
    .map((e) => `${dir}/${e.name}`)
    .filter((rel) => {
      const first = readFileSync(join(root, rel), "utf8").split("\n")[0];
      return META_RE.test(first);
    })
    .sort();
}

let diffCount = 0;

for (const { dir, key } of DIRS) {
  const disk = metaFiles(dir);
  if (disk === null) {
    console.log(`\n== ${dir}/ — directory not found on disk`);
    diffCount++;
    continue;
  }
  const indexPath = join(root, dir, "index.json");
  if (!existsSync(indexPath)) {
    console.log(`\n== ${dir}/ — no index.json`);
    if (disk.length) {
      console.log(`   unindexed files on disk (${disk.length}):`);
      for (const f of disk) { console.log(`     - ${f}`); diffCount++; }
    } else {
      console.log("   (no tz-meta files on disk either — nothing to index)");
    }
    continue;
  }
  let index;
  try {
    index = JSON.parse(readFileSync(indexPath, "utf8"));
  } catch (err) {
    console.log(`\n== ${dir}/ — index.json unreadable: ${err.message}`);
    diffCount++;
    continue;
  }
  const entries = index[key] || [];
  const indexedFiles = new Set(entries.map((e) => e.file).filter(Boolean));
  const diskSet = new Set(disk);

  const onDiskNotIndexed = disk.filter((f) => !indexedFiles.has(f));
  const indexedNotOnDisk = [...indexedFiles].filter((f) => !diskSet.has(f)).sort();

  if (!onDiskNotIndexed.length && !indexedNotOnDisk.length) {
    console.log(`\n== ${dir}/ — clean (${disk.length} files, ${entries.length} entries)`);
    continue;
  }
  console.log(`\n== ${dir}/`);
  if (onDiskNotIndexed.length) {
    console.log(`   on disk, missing from index.json (${onDiskNotIndexed.length}):`);
    for (const f of onDiskNotIndexed) { console.log(`     - ${f}`); diffCount++; }
  }
  if (indexedNotOnDisk.length) {
    console.log(`   in index.json, missing on disk (${indexedNotOnDisk.length}):`);
    for (const f of indexedNotOnDisk) { console.log(`     - ${f}`); diffCount++; }
  }
}

console.log(diffCount ? `\n${diffCount} diff(s) found — exit 1` : "\nall indexes clean — exit 0");
process.exit(diffCount ? 1 : 0);
