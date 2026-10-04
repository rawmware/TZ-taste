#!/usr/bin/env node
// Check tz-meta headers on every docs/*.md and three-d/*.html file.
// Usage: node scripts/meta-check.mjs
// Line 1 must be <!--tz-meta {...} --> with valid JSON containing id, title,
// and file matching the file's real repo-relative path. Exit 1 if any FAIL.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `meta-check — verify tz-meta headers across docs and three-d

usage: node scripts/meta-check.mjs

  --help, -h     print this help

Walks docs/*.md and three-d/*.html. Every file must start with
<!--tz-meta {...} --> on line 1: valid JSON containing id, title, and a file
field that matches the file's real repo-relative path. Prints per-file
OK/FAIL plus a summary. Exits 1 if any file fails.`;

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

function collect(dir, ext) {
  const full = join(root, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full).filter((f) => f.endsWith(ext)).map((f) => `${dir}/${f}`).sort();
}

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }
if (pos.length) { console.error("error: this script takes no positional arguments\n\n" + USAGE); process.exit(2); }

const files = [...collect("docs", ".md"), ...collect("three-d", ".html")];
let pass = 0;
let fail = 0;

for (const rel of files) {
  const failWith = (why) => { fail++; console.log(`FAIL ${rel} — ${why}`); };
  const text = readFileSync(join(root, rel), "utf8");
  const first = text.split("\n", 1)[0];
  const m = first.match(/^<!--tz-meta (.*?) -->\s*$/);
  if (!m) { failWith("line 1 is not a <!--tz-meta {...} --> comment"); continue; }
  let meta;
  try { meta = JSON.parse(m[1]); }
  catch (e) { failWith(`invalid JSON: ${e.message}`); continue; }
  for (const k of ["id", "title", "file"]) {
    if (!meta[k] || typeof meta[k] !== "string" || !meta[k].trim()) {
      failWith(`missing or empty "${k}" in tz-meta JSON`); meta = null; break;
    }
  }
  if (!meta) continue;
  if (meta.file !== rel) {
    failWith(`file field "${meta.file}" does not match real path "${rel}"`);
    continue;
  }
  pass++;
  console.log(`OK   ${rel}`);
}

console.log(`\n${files.length} checked, ${pass} OK, ${fail} FAIL`);
process.exit(fail ? 1 : 0);
