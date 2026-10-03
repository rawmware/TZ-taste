// TZ-taste validator. Run: node scripts/validate.mjs
// Fails loudly on broken indexes, missing files, or slop in contributions.

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const ok = (cond, msg) => { if (!cond) errors.push(msg); };

function json(path) {
  const full = join(root, path);
  ok(existsSync(full), `missing file: ${path}`);
  try {
    return JSON.parse(readFileSync(full, "utf8"));
  } catch (e) {
    errors.push(`invalid JSON in ${path}: ${e.message}`);
    return null;
  }
}

function checkIndex(path) {
  const idx = json(path);
  if (!idx) return;
  const list = idx.dnas ?? idx.patterns ?? idx.sources ?? [];
  const countKey = idx.count;
  ok(countKey === list.length, `${path}: count=${countKey} but ${list.length} entries`);
  for (const item of list) {
    if (!item.file) continue;
    ok(existsSync(join(root, item.file)), `${path}: ${item.id} → missing ${item.file}`);
  }
}

// styles
checkIndex("styles/index.json");
const styles = json("styles/index.json");
if (styles) {
  const ids = new Set();
  for (const d of styles.dnas) {
    ok(d.id && !ids.has(d.id), `styles: duplicate/missing id ${d.id}`);
    ids.add(d.id);
    for (const t of ["bg", "ink", "accent", "muted", "line"])
      ok(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(d.tokens?.[t] ?? ""), `styles/${d.id}: bad token ${t}`);
    const md = readFileSync(join(root, d.file), "utf8");
    ok(md.includes("## Tokens") && md.includes("## Do"), `styles/${d.id}: missing required sections`);
  }
}

// patterns
checkIndex("patterns/index.json");
const patterns = json("patterns/index.json");
if (patterns) {
  for (const p of patterns.patterns) {
    const html = readFileSync(join(root, p.file), "utf8");
    ok(html.includes("<style>"), `patterns/${p.id}: no <style> block`);
    ok(/class="tz-/.test(html), `patterns/${p.id}: classes must be tz- prefixed`);
  }
}

// sources
checkIndex("sources/sources.json");
const sources = json("sources/sources.json");
if (sources) {
  for (const s of sources.sources) {
    ok(s.url?.startsWith("https://"), `sources/${s.id}: url must be https`);
    ok(s.license, `sources/${s.id}: license required`);
    ok(["free", "freemium", "paid-reference"].includes(s.cost), `sources/${s.id}: cost must be free|freemium|paid-reference`);
  }
}

// manifest
const manifest = json("manifest.json");
if (manifest) {
  ok(manifest.version && manifest.updated, "manifest.json: version + updated required");
  ok(existsSync(join(root, "AGENT.md")), "manifest references missing AGENT.md");
}

if (errors.length) {
  console.error(`\nVALIDATION FAILED (${errors.length}):\n- ${errors.join("\n- ")}\n`);
  process.exit(1);
}
console.log("Validation passed: indexes, files, tokens, and licenses all check out.");
