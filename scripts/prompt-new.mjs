// TZ-taste prompt scaffolder. Run: node scripts/prompt-new.mjs <name>
// Scaffolds prompts/<name>.md from an inline template matching the repo's
// existing prompts: title, copy-paste prompt body with [BRACKETS], and a
// taste-directive footer. Refuses to overwrite an existing file (exit 1).

import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/prompt-new.mjs <name>

Scaffolds prompts/<name>.md from the repo's standard prompt template:
title, copy-paste prompt body with [BRACKETS] for the user to fill in,
and a taste-directive footer pointing at docs/ANTI-SLOP.md.

Refuses to overwrite an existing file. Exit 1 if the file already exists.`);
  process.exit(0);
}

const rawName = args[0];
if (!rawName) {
  console.error("error: missing <name>. See --help.");
  process.exit(1);
}
const name = rawName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
if (!name) {
  console.error(`error: "${rawName}" is not a usable prompt name — use letters and numbers.`);
  process.exit(1);
}

const dest = join(root, "prompts", `${name}.md`);
if (existsSync(dest)) {
  console.error(`error: prompts/${name}.md already exists — refusing to overwrite.`);
  process.exit(1);
}

const title = name.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
const template = `<!--tz-meta {"id":"${name}","title":"${title}","file":"prompts/${name}.md","description":"[ONE-LINE DESCRIPTION OF THIS PROMPT]"} -->
# Prompt: ${title}

Copy everything below the line into your AI builder. Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol and pick ONE style DNA from styles/index.json before writing code.
Obey skill/SKILL.md — the slop blocklist is non-negotiable.

Build [THING] for [PRODUCT].

- **Headline claim:** [the one thing we want visitors to believe]
- **Subhead:** [one supporting sentence]
- **CTA:** [button text + where it goes]
- **Feeling:** [3 adjectives]
- **DNA hint:** [optional — e.g. "lean industrial-brutalist"]

Rules for this [THING]:
- [what it must do]
- [what it must never do]
- No template hero compositions. No lorem ipsum. Real microcopy everywhere.
- No purple gradients, no Inter, no emoji icons.

Taste directive: before you deliver, run docs/ANTI-SLOP.md as the self-review
step. Zero blockers to ship.

Show me the [THING] plus one sentence explaining the distinctive choice you made.
`;

writeFileSync(dest, template, "utf8");
console.log(`Created prompts/${name}.md — fill in the [BRACKETS] and the description.`);
process.exit(0);
