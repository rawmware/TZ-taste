// TZ-taste bundle-size report. Run: node scripts/bundle-size.mjs [--json]
// Walks the repo root (skipping .git and node_modules), totals bytes and
// file count per top-level directory, prints them sorted by bytes desc in
// human-readable units, plus the single largest file in each directory.
// --json prints the same data machine-readable.

import { readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/bundle-size.mjs [--json]

Repo weight report. Walks the repo root, skipping .git and node_modules,
and reports total bytes and file count per top-level directory, sorted by
bytes descending, in human-readable units (KB/MB). Also names the single
largest file in each directory.

--json   print the raw numbers as JSON instead of the table.`);
  process.exit(0);
}

function fmtBytes(b) {
  if (b < 1024) return `${b} B`;
  const kb = b / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(2)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
}

function walk(dir, acc) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walk(full, acc);
    } else {
      acc.files++;
      acc.bytes += st.size;
      if (st.size > acc.largest.size) {
        acc.largest = { path: relative(root, full), size: st.size };
      }
    }
  }
}

const top = readdirSync(root)
  .filter((n) => n !== ".git" && n !== "node_modules")
  .sort();

const rows = [];
for (const name of top) {
  const full = join(root, name);
  const st = statSync(full);
  if (st.isDirectory()) {
    const acc = { files: 0, bytes: 0, largest: { path: "-", size: 0 } };
    walk(full, acc);
    rows.push({ dir: name + "/", files: acc.files, bytes: acc.bytes, largest: acc.largest });
  }
}

// Top-level loose files (README.md, manifest.json, ...) grouped together.
const loose = { files: 0, bytes: 0, largest: { path: "-", size: 0 } };
for (const name of top) {
  const full = join(root, name);
  if (statSync(full).isFile()) {
    loose.files++;
    loose.bytes += statSync(full).size;
    const s = statSync(full).size;
    if (s > loose.largest.size) loose.largest = { path: name, size: s };
  }
}
if (loose.files > 0) rows.push({ dir: "(root files)", files: loose.files, bytes: loose.bytes, largest: loose.largest });

rows.sort((a, b) => b.bytes - a.bytes);

if (args.includes("--json")) {
  console.log(
    JSON.stringify(
      {
        root,
        directories: rows.map((r) => ({
          dir: r.dir,
          files: r.files,
          bytes: r.bytes,
          largest_file: r.largest.path,
          largest_file_bytes: r.largest.size,
        })),
        total_bytes: rows.reduce((s, r) => s + r.bytes, 0),
        total_files: rows.reduce((s, r) => s + r.files, 0),
      },
      null,
      2
    )
  );
  process.exit(0);
}

const totalBytes = rows.reduce((s, r) => s + r.bytes, 0);
const totalFiles = rows.reduce((s, r) => s + r.files, 0);
const dirW = Math.max(...rows.map((r) => r.dir.length), 9);
const sizeW = 10;

console.log(`repo weight — ${root}\n`);
console.log(`${"dir".padEnd(dirW)}  ${"size".padStart(sizeW)}  ${"files".padStart(6)}  largest file`);
for (const r of rows) {
  console.log(
    `${r.dir.padEnd(dirW)}  ${fmtBytes(r.bytes).padStart(sizeW)}  ${String(r.files).padStart(6)}  ${r.largest.path} (${fmtBytes(r.largest.size)})`
  );
}
console.log(`\ntotal: ${fmtBytes(totalBytes)} in ${totalFiles} files`);
