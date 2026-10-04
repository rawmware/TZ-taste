// TZ-taste README table-of-contents generator.
// Run: node scripts/readme-toc.mjs [--write]
// Reads manifest.json counts plus every */index.json, then prints the
// "What's inside" markdown table to STDOUT (default). --write rewrites that
// table in place inside README.md. Default behavior never touches README.md.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/readme-toc.mjs [--write]

Regenerates the README "What's inside" library table from manifest.json
and each index.json. By default the markdown table is printed to STDOUT
and nothing is modified.

--write   replace the table in README.md in place (between the
          "## What's inside" heading and the next ## heading).`);
  process.exit(0);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function countOf(indexPath, key) {
  const idx = readJson(join(root, indexPath));
  if (idx && typeof idx.count === "number") return idx.count;
  if (idx && Array.isArray(idx[key])) return idx[key].length;
  return null;
}

function dirCount(dir, exts) {
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

const n = (v) => (typeof v === "number" ? v : "?");

const styles = n(countOf("styles/index.json", "dnas") ?? mCounts.style_dnas);
const patterns = n(countOf("patterns/index.json", "patterns") ?? mCounts.patterns);
const scenes = n(countOf("three-d/index.json", "scenes") ?? mCounts.scenes_3d);
const templates = n(countOf("templates/index.json", "templates") ?? mCounts.templates);
const showcases = n(countOf("showcase/index.json", "showcases") ?? mCounts.showcases);
const prompts = n(countOf("prompts/index.json", "prompts") ?? mCounts.prompts);
const docs = n(countOf("docs/index.json", "docs") ?? dirCount("docs", [".md"]));
const tools = n(dirCount("scripts", [".mjs"]));

const rows = [
  ["`AGENT.md`", "Machine-first bootstrap. The file your agent reads first."],
  ["`skill/SKILL.md`", "Portable anti-slop skill: dials, pre-flight checks, the slop blocklist. Drop it into any agent or conversation."],
  ["`styles/`", `${styles} style DNAs — complete visual languages with tokens, type pairings, and rules. Machine-readable via \`styles/index.json\`.`],
  ["`patterns/`", `${patterns} copy-paste HTML/CSS section patterns (heroes, navs, bento grids, pricing, backgrounds…). Each with a live preview on the demo site. \`patterns/index.json\` for machines.`],
  ["`three-d/`", `${scenes} original Three.js ambient 3D environments — aurora domes, voxel cities, coral reefs. Standalone files, zero external assets. \`three-d/index.json\` for machines.`],
  ["`templates/`", `${templates} complete landing pages, each committed to one style DNA. \`templates/index.json\` for machines.`],
  ["`showcase/`", `${showcases} live demo pages — one per style DNA. \`showcase/index.json\` for machines.`],
  ["`prompts/`", `${prompts} ready-made build prompts for landing pages, dashboards, portfolios, mobile screens, 3D scenes, and redesign audits. Free alternative to paid prompt libraries.`],
  ["`scripts/`", `${tools} zero-dependency CLI tools: slop-auditor, DNA picker, token exporter, contrast checker, page composer, scaffolders, and more.`],
  ["`sources/`", "Curated index of the best free design resources on the internet — skills, component libraries, motion tools, type foundries, 3D playgrounds — with licenses verified."],
  ["`docs/`", `The taste doctrine: the anti-slop checklist, the brief-to-style decision matrix, ${docs} practical guides, and the freshness report.`],
  ["`scripts/` + `.github/workflows/`", "The freshness engine. Weekly checks keep every source link, release, and style current. This repo updates itself."],
];

const table = ["| Path | What it is |", "|---|---|", ...rows.map(([p, d]) => `| ${p} | ${d} |`)].join("\n");

if (!args.includes("--write")) {
  console.log(table);
  process.exit(0);
}

// --write: replace the table between "## What's inside" and the next heading.
const readmePath = join(root, "README.md");
const readme = readFileSync(readmePath, "utf8");
const heading = "## What's inside";
const start = readme.indexOf(heading);
if (start === -1) {
  console.error("error: '## What's inside' heading not found in README.md");
  process.exit(1);
}
const afterHeading = readme.indexOf("\n", start + heading.length);
let cursor = afterHeading + 1;
// Skip blank lines after the heading.
while (readme[cursor] === "\n") cursor++;
// Consume consecutive table lines (| ... |).
let end = cursor;
while (end < readme.length && readme[end] === "|") {
  end = readme.indexOf("\n", end) + 1;
}
if (end === 0 || cursor === end) {
  console.error("error: no markdown table found under '## What's inside'");
  process.exit(1);
}
const next = readme.slice(0, cursor) + table + "\n" + readme.slice(end);
writeFileSync(readmePath, next);
console.log(`README.md updated: ${rows.length} table rows written.`);
