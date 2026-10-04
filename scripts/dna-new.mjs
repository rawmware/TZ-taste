#!/usr/bin/env node
// Scaffold a new style DNA markdown file.
// Usage: node scripts/dna-new.mjs <id>
// Refuses to overwrite an existing file (exit 1).

import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `dna-new — scaffold a new style DNA file for TZ-taste

usage: node scripts/dna-new.mjs <id>

  <id>            kebab-case DNA id, e.g. neon-grunge (also the file stem)
  --help, -h     print this help

Creates styles/<id>.md with every section the format expects: title, vibe
line, Tokens table, Type, Spacing & shape, Motion, Do, Don't, The one weird
thing, Best for, Pairs with patterns. Refuses if the file already exists.`;

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

const titleCase = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const { flags, pos } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const id = pos[0];
if (!id) { console.error("error: missing <id>\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`error: invalid id "${id}" — use kebab-case, e.g. neon-grunge`);
  process.exit(2);
}

const rel = `styles/${id}.md`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const name = titleCase(id);
const meta = JSON.stringify({
  id,
  name,
  vibe: "TODO: one-line vibe.",
  file: rel,
  tags: [],
  best_for: [],
  fonts: { display: "TODO", body: "TODO", mono: "TODO" },
  tokens: { bg: "#ffffff", ink: "#111111", accent: "#5b5bd6", muted: "#6b6b6b", line: "#11111114", surface: "#f5f5f5" },
  dials: { density: 5, motion: 5, variance: 5 },
});

const md = `<!--tz-meta ${meta} -->
# ${name}

> TODO: one-line vibe — the emotional register of this DNA in one sentence.

## Tokens

| Token | Value | Role |
|---|---|---|
| \`--bg\` | \`#ffffff\` | Page background |
| \`--surface\` | \`#f5f5f5\` | Cards, inset panels |
| \`--ink\` | \`#111111\` | Primary text |
| \`--muted\` | \`#6b6b6b\` | Secondary text, captions |
| \`--accent\` | \`#5b5bd6\` | The one accent — links, highlights, focal elements |
| \`--line\` | \`#11111114\` | Hairlines, borders, rules |

## Type

- **Display:** TODO (tracking, sizing, when to use italics)
- **Body:** TODO (size range, line-height, measure)
- **Mono:** TODO (eyebrows, labels, captions)

Google Fonts: \`TODO: font families with axes\`

## Spacing & shape

- Rhythm: TODO section padding scale (e.g. \`24 / 48 / 96 / 160\`).
- Radius: TODO what border radii this DNA allows (and which it forbids).
- Rules: TODO how borders, hairlines, and dividers behave here.

## Motion

TODO: entrance style, hover behavior, transition timing. What does motion feel
like in this DNA — glide, snap, bounce, drift?

## Do

- TODO concrete pattern this DNA loves
- TODO another signature move
- TODO a third

## Don't

- TODO the signature slop tell this DNA kills
- TODO another banned move

## The one weird thing

TODO: the single strange, opinionated detail that makes this DNA memorable.
Pick one and commit to it.

## Best for

TODO use cases, e.g. studios, blogs, portfolios — where this DNA shines.

## Pairs with patterns

TODO pattern ids that suit this DNA, e.g. \`hero-editorial\`, \`testimonials\`.

<!-- TODO: add an entry for "${id}" to styles/index.json
     {"id":"${id}","name":"${name}","vibe":"...","file":"${rel}",
      "tags":[],"best_for":[],"fonts":{"display":"...","body":"...","mono":"..."},
      "tokens":{...},"dials":{"density":5,"motion":5,"variance":5}} -->
`;

writeFileSync(full, md, "utf8");
console.log(`created ${rel}`);
console.log(`next: fill in the TODOs, then add "${id}" to styles/index.json`);
