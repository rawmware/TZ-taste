// scripts/build-demo-data.mjs
// Builder B generator: reads the repo's real index JSON files and writes
// docs/assets/data.js as a single `window.TZDATA = {...};` assignment.
// No dependencies. Run: node scripts/build-demo-data.mjs
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "docs", "assets", "data.js");

const read = (p) => JSON.parse(readFileSync(join(ROOT, p), "utf8"));

// ---- styles -> dnas ----
const stylesIndex = read("styles/index.json");
const dnas = stylesIndex.dnas.map((d) => ({
  id: d.id,
  name: d.name,
  vibe: d.vibe,
  file: d.file,
  tags: d.tags,
  best_for: d.best_for,
  fonts: d.fonts,
  tokens: d.tokens,
  dials: d.dials,
  showcase: `showcase/${d.id}.html`,
}));

// ---- generic item picker ----
const pick = (o) => ({
  id: o.id,
  title: o.title,
  file: o.file,
  category: o.category,
  tags: o.tags,
  description: o.description,
  dnas: o.dnas,
});

const templates = read("templates/index.json").templates.map(pick);
const generative = read("generative/index.json").generative.map(pick);
const scenes = read("three-d/index.json")
  .scenes.filter((s) => s.file.endsWith(".html"))
  .map(pick);
const patterns = read("patterns/index.json").patterns.map(pick);
const prompts = read("prompts/index.json").prompts.map((p) => ({
  id: p.id,
  title: p.title,
  file: p.file,
  description: p.description,
}));
const sources = read("sources/sources.json").sources.map((s) => ({
  name: s.name,
  url: s.url,
  what: s.what,
  license: s.license,
}));

const LANGUAGES = [
  "TypeScript", "JavaScript", "Python", "Vue", "Svelte", "Astro",
  "Swift", "Go", "Ruby", "Kotlin", "Dart", "PHP", "C#", "Rust",
  "Java", "Elixir",
];

const data = {
  counts: {
    dnas: dnas.length,
    patterns: patterns.length,
    generative: generative.length,
    scenes: scenes.length,
    templates: templates.length,
    prompts: prompts.length,
    languages: LANGUAGES.length,
    sources: sources.length,
  },
  languages: LANGUAGES,
  dnas,
  templates,
  generative,
  scenes,
  patterns,
  prompts,
  sources,
};

// ---- verify every referenced file exists on disk (fail loudly) ----
const refs = [];
for (const d of dnas) {
  refs.push(d.file, d.showcase);
}
for (const items of [templates, generative, scenes, patterns, prompts]) {
  for (const it of items) refs.push(it.file);
}
let missing = 0;
for (const f of refs) {
  if (!existsSync(join(ROOT, f))) {
    console.error(`MISSING FILE: ${f}`);
    missing++;
  }
}
if (missing > 0) {
  console.error(`FAIL: ${missing} referenced files missing on disk`);
  process.exit(1);
}
// Warn (non-fatal) for showcase check is redundant now that it's asserted above,
// but keep a distinct warning path per spec for any showcase gap:
for (const d of dnas) {
  if (!existsSync(join(ROOT, d.showcase))) {
    console.warn(`WARN: showcase missing for DNA "${d.id}": ${d.showcase}`);
  }
}

const js = "window.TZDATA = " + JSON.stringify(data) + ";\n";
writeFileSync(OUT, js);
const kb = statSync(OUT).size / 1024;
if (statSync(OUT).size >= 300 * 1024) {
  console.error(`FAIL: data.js is ${kb.toFixed(1)}KB, must be <300KB`);
  process.exit(1);
}
console.log("counts:", JSON.stringify(data.counts));
console.log(`wrote ${OUT} (${kb.toFixed(1)}KB, ${refs.length} refs verified)`);
