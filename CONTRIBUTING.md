# Contributing to TZ-taste

Taste is a community project. This repo gets better every time someone adds a
style, a pattern, a prompt, or a source. Here's how.

## What we accept

- **Style DNAs** (`styles/<name>.md` + entry in `styles/index.json`)
- **Patterns** (`patterns/<id>.html` + entry in `patterns/index.json`)
- **Prompts** (`prompts/<name>.md`)
- **Sources** (entries in `sources/sources.json` — free resources only)
- **New slop tells** (additions to `docs/ANTI-SLOP.md` — slop evolves)

## Rules for contributions

1. **Original work only.** Don't paste in code from paid libraries or
   copyrighted designs. Extract principles, write your own implementation.
   Everything here is MIT.
2. **One DNA per contribution.** A style DNA is a complete, committed visual
   language — not a mood board. Include tokens, type pairing, do/don't, and
   the one-weird-thing suggestion. Copy the format of an existing DNA.
3. **Patterns must be standalone.** One file: the section markup plus its
   `<style>` block, `tz-`-prefixed classes, no external dependencies, works
   pasted into any page. Test it.
4. **Free forever.** Sources must be free to use (MIT/Apache/CC0/freemium with
   a real free tier). Paid-only tools don't belong here — that's the point.
5. **No slop.** Run your contribution against `docs/ANTI-SLOP.md`. Zero
   blockers.

## Process

1. Fork the repo, branch off `main`.
2. Add your files. Update the relevant `index.json`.
3. Run `node scripts/validate.mjs` — it must pass.
4. Open a PR describing what you added and which DNA/pattern it pairs with.

Weekly CI keeps sources fresh automatically; human PRs keep the taste fresh.
Both matter.

## Code of conduct

Be kind, be specific, critique the work not the person. "This violates
ANTI-SLOP #2" is useful feedback. "This sucks" is not.
