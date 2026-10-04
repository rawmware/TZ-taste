# TZ-taste

**The free anti-slop design reference for AI agents and developers.**

Tell any AI to use this repo as a reference and it will build interfaces with
an actual point of view — not the same purple-gradient, three-card, Inter-font
slop every model defaults to.

**Live demo:** https://rawmware.github.io/TZ-taste/
**License:** MIT — free forever. No signup, no API key, no paid tier.

---

## The one line that matters

Paste this into any AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT, …):

> Use https://github.com/rawmware/TZ-taste as a reference to build: [your brief].
> Follow its AGENT.md protocol and pick one style DNA before writing any code.

That is the whole product. Everything in this repo exists to make that sentence work.

## What's inside

| Path | What it is |
|---|---|
| `AGENT.md` | Machine-first bootstrap. The file your agent reads first. |
| `skill/SKILL.md` | Portable anti-slop skill: dials, pre-flight checks, the slop blocklist. Drop it into any agent or conversation. |
| `styles/` | 72 style DNAs — complete visual languages with tokens, type pairings, and rules. Machine-readable via `styles/index.json`. |
| `patterns/` | 164 copy-paste HTML/CSS section patterns (heroes, navs, bento grids, pricing, backgrounds…). Each with a live preview on the demo site. `patterns/index.json` for machines. |
| `three-d/` | 30 original Three.js ambient 3D environments — aurora domes, voxel cities, coral reefs. Standalone files, zero external assets. `three-d/index.json` for machines. |
| `generative/` | 40 interactive generative-art pieces (flow fields, boids, reaction-diffusion…). Vanilla canvas, zero deps. |
| `templates/` | 25 complete landing pages, each committed to one style DNA. `templates/index.json` for machines. |
| `showcase/` | 72 live demo pages — one per style DNA. `showcase/index.json` for machines. |
| `react/` `vue/` `svelte/` `astro/` | The best patterns ported to React (TSX), Vue SFCs, Svelte, and Astro. Zero extra deps. |
| `python/` | Stdlib-only page builders, including a DNA-to-page static site generator. |
| `tokens/` `tailwind/` | All 72 DNAs as W3C design tokens and Tailwind presets. Machines welcome. |
| `emails/` | 12 table-based HTML email templates — inline CSS, Outlook-safe. |
| `app-ui/` | 20 app-interface patterns: kanban, data tables, command palettes, dashboards. |
| `prompts/` | 36 ready-made build prompts for landing pages, dashboards, portfolios, mobile screens, 3D scenes, and redesign audits. Free alternative to paid prompt libraries. |
| `scripts/` | 15 zero-dependency CLI tools: slop-auditor, DNA picker, token exporter, contrast checker, page composer, scaffolders, and more. |
| `sources/` | Curated index of the best free design resources on the internet — skills, component libraries, motion tools, type foundries, 3D playgrounds — with licenses verified. |
| `docs/` | The taste doctrine: the anti-slop checklist, the brief-to-style decision matrix, 20 practical guides, and the freshness report. |
| `scripts/` + `.github/workflows/` | The freshness engine. Weekly checks keep every source link, release, and style current. This repo updates itself. |

## Why this exists

Paid prompt libraries charge monthly for what should be a public good: taste.
Meanwhile every AI ships the same generic UI because nobody gave it better
instructions. TZ-taste fixes both sides — it is a free, MIT-licensed,
always-updating reference that any agent or developer can point at and say
*"build it like that."*

It stands on the shoulders of great open work: the anti-slop skill movement
([taste-skill](https://github.com/Leonxlnx/taste-skill)), live component
catalogs ([ThreeUI](https://github.com/MengTo/threeui)), and prompt libraries
([sceneai.art](https://sceneai.art)). TZ-taste curates the best of that world,
adds original style systems and patterns, and keeps it all free.

## Quick start

**For agents:** read `AGENT.md`, then `manifest.json` for the machine file map.

**For developers:** browse the [live demo](https://rawmware.github.io/TZ-taste/),
copy a pattern or a prompt, install the skill:

```bash
npx skills add https://github.com/rawmware/TZ-taste --skill "tz-taste"
```

**For contributors:** see `CONTRIBUTING.md`. New style DNAs, patterns, prompts,
and sources are welcome — taste is a community project.

---

Built by [Roman's Proposal](https://romansproposal.com) · MIT Licensed ·
Freshness checked weekly by CI.
