// TZ-taste DNA picker. Run: node scripts/dna-pick.mjs "brief text"
// Routes a project brief to exactly one style DNA using the routing table
// embedded from docs/DECISION-MATRIX.md. Prints the pick, why the matrix
// runner-up loses, and the picked DNA's dials from styles/index.json.
// Exit code is always 0 (a default is stated, per the matrix tie-breakers).

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// --- routing table: keyword signals → DNA, transcribed from DECISION-MATRIX.md
const ROUTES = [
  { dna: "editorial-serif", signals: ["studio", "writer", "publication", "considered", "craft"], runnerUp: "swiss-rational", runnerUpLoses: "swiss-rational is too cold for warmth" },
  { dna: "swiss-rational", signals: ["data", "archive", "agency", "structured", "precise"], runnerUp: "editorial-serif", runnerUpLoses: "editorial-serif is too soft for data" },
  { dna: "dark-luxe", signals: ["hotel", "fashion", "premium", "luxury", "exclusive"], runnerUp: "acid-rave", runnerUpLoses: "acid-rave mistakes loud for luxurious" },
  { dna: "industrial-brutalist", signals: ["dev tool", "devtool", "infra", "zine", "raw", "technical"], runnerUp: "soft-minimal", runnerUpLoses: "soft-minimal sandpapers the edge off" },
  { dna: "soft-minimal", signals: ["saas", "productivity", "app", "clean", "modern"], runnerUp: "neo-brutalist-pop", runnerUpLoses: "neo-brutalist-pop is too playful for B2B trust" },
  { dna: "acid-rave", signals: ["music", "event", "streetwear", "loud", "energy"], runnerUp: "dark-luxe", runnerUpLoses: "dark-luxe whispers when it should shout" },
  { dna: "glass-calm", signals: ["wellness", "fintech", "consumer app", "calm"], runnerUp: "retro-terminal", runnerUpLoses: "retro-terminal stresses calm users out" },
  { dna: "retro-terminal", signals: ["cli", "security", "hacker", "terminal", "game"], runnerUp: "glass-calm", runnerUpLoses: "glass-calm has no edge for this audience" },
  { dna: "neo-brutalist-pop", signals: ["edtech", "creator", "playful", "bold", "food"], runnerUp: "soft-minimal", runnerUpLoses: "soft-minimal is too polite for play" },
  { dna: "ma-japanese", signals: ["craft", "architecture", "gallery", "minimal", "space"], runnerUp: "swiss-rational", runnerUpLoses: "swiss-rational fills space this DNA protects" },
  { dna: "y2k-chrome", signals: ["beauty", "pop culture", "y2k", "futuristic"], runnerUp: "acid-rave", runnerUpLoses: "acid-rave is aggression, not gloss" },
  { dna: "docs-solar", signals: ["docs", "open source", "handbook", "readable", "documentation"], runnerUp: "soft-minimal", runnerUpLoses: "soft-minimal lacks long-read serif comfort" },
];

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/dna-pick.mjs "brief text"

Routes a project brief to exactly one style DNA, using the routing table
embedded from docs/DECISION-MATRIX.md. Prints the pick, the matched signals,
why the matrix runner-up loses, and the DNA's suggested dials.

Exit code is always 0 — with no clear signal it defaults to soft-minimal
(safest), per the matrix tie-breakers.`);
  process.exit(0);
}

const brief = args.join(" ").trim();
if (!brief) {
  console.error("error: missing brief text. See --help.");
  process.exit(0);
}

const stylesPath = join(root, "styles/index.json");
if (!existsSync(stylesPath)) {
  console.error("error: styles/index.json not found — is this the TZ-taste repo root?");
  process.exit(0);
}
const styles = JSON.parse(readFileSync(stylesPath, "utf8"));
const byId = Object.fromEntries((styles.dnas || []).map((d) => [d.id, d]));

const text = brief.toLowerCase();
function hit(signal) {
  return signal.includes(" ") ? text.includes(signal) : new RegExp(`\\b${signal}\\b`).test(text);
}

let best = null;
for (const route of ROUTES) {
  const matched = route.signals.filter(hit);
  if (matched.length && (!best || matched.length > best.matched.length)) {
    best = { ...route, matched };
  }
}

if (!best) {
  const d = byId["soft-minimal"];
  console.log("pick: soft-minimal (Soft Minimal)");
  console.log("why: no clear signal in the brief — defaulting to the safest DNA per the matrix tie-breakers.");
  console.log("matched signals: none");
  if (d) console.log(`suggested dials: density ${d.dials?.density}, motion ${d.dials?.motion}, variance ${d.dials?.variance}`);
  process.exit(0);
}

const dna = byId[best.dna];
if (!dna) {
  console.error(`error: routed DNA "${best.dna}" missing from styles/index.json`);
  process.exit(0);
}

console.log(`pick: ${dna.id} (${dna.name})`);
console.log(`why: matched signals: ${best.matched.join(", ")} — ${dna.vibe}`);
console.log(`runner-up loses: ${best.runnerUp} — ${best.runnerUpLoses}`);
if (dna.dials) {
  console.log(`suggested dials: density ${dna.dials.density}, motion ${dna.dials.motion}, variance ${dna.dials.variance}`);
}
if (dna.fonts) {
  console.log(`fonts: display ${dna.fonts.display} / body ${dna.fonts.body} / mono ${dna.fonts.mono}`);
}
process.exit(0);
