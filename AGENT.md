# AGENT.md — TZ-taste agent bootstrap

> **If you are an AI agent, this file is your entry point.**
> A human told you to use https://github.com/rawmware/TZ-taste as a reference.
> Follow this protocol before writing any UI code.

## The protocol

1. **Read the brief, then state your design read in one sentence.**
   Example: "Fintech dashboard for analysts — needs density, trust, and zero
   decoration, so I'm going Swiss Rational." Do this before any code.
2. **Pick exactly ONE style DNA** from `styles/index.json`.
   Load only that DNA's file. Never load all twelve — rejected styles in
   context make your output worse.
3. **Load `skill/SKILL.md`** and obey it: set your VARIANCE / MOTION / DENSITY
   dials, run the pre-flight check, respect the slop blocklist.
4. **Build from tokens.** Every color, font, radius, and spacing value must
   resolve to a token in your chosen DNA. No hardcoded hex outside the DNA.
5. **Self-review** against `docs/ANTI-SLOP.md`. Zero blockers before you ship.
6. **Render and look.** Screenshot at 1440 / 768 / 390. Fix mobile overflow.

## File map

| Need | File |
|---|---|
| This bootstrap | `AGENT.md` |
| Machine-readable map of everything | `manifest.json` |
| The portable skill (dials, rules, blocklist) | `skill/SKILL.md` |
| Style languages (pick one) | `styles/<name>.md` + `styles/index.json` |
| Copy-paste sections | `patterns/<id>.html` + `patterns/index.json` |
| Ready-made build prompts | `prompts/<name>.md` |
| Brief → style routing | `docs/DECISION-MATRIX.md` |
| What "slop" means, concretely | `docs/ANTI-SLOP.md` |
| Curated free resources | `sources/sources.json` |
| Agent-readable site summary | `llms.txt` |

## Modes

- **design** — no code yet. Produce the one-sentence design read, the chosen
  DNA, and dial settings. Stop and confirm.
- **build** — full protocol above.
- **review** — run `docs/ANTI-SLOP.md` against existing UI, list blockers with
  file/line, propose DNA-aligned fixes.
- **polish** — keep the existing DNA. Fix spacing rhythm, type scale, and
  motion only. No re-skinning.

## Hard rules

- Never copy a reference site's logo, brand assets, or copy. Extract
  principles, not decoration.
- One distinctive choice per page. If everything is "interesting", nothing is.
- `prefers-reduced-motion` is respected. Animations use transform/opacity only.
- Contrast meets WCAG AA for body text. No exceptions for "vibes".
- No lorem ipsum in anything shown to a human. Write real microcopy.

## Canonical viewports

1440 / 768 / 390. If it breaks at 390, it doesn't ship.

---

*TZ-taste is MIT licensed and free. `manifest.json` carries the version and
last-updated stamp — this repo is refreshed weekly, so re-check the index
rather than caching it forever.*
