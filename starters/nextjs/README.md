<!--tz-meta {"id":"nextjs-readme","title":"Next.js starter README","category":"Starter","file":"starters/nextjs/README.md","tags":["nextjs","readme"],"description":"Setup, DNA, and token guide for the Next.js editorial-serif starter.","dnas":["editorial-serif"]} -->

# Crumb & Craft — Next.js starter

A fictional sourdough bakery in Kittery, Maine, built as a starter kit for
[TZ-taste](https://github.com/rawmware/TZ-taste). It demonstrates the
**editorial-serif** style DNA with real copy, an offset (non-template) hero, a
perforated "Today's bake" ticket, and a full footer.

Dials for this build: **VARIANCE 5 / MOTION 4 / DENSITY 3.**

## Prerequisites

- Node.js 18 or later
- npm (ships with Node)

## Run it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

- `npm run build` — production build
- `npm start` — serve the production build

## The DNA

This starter uses exactly one style DNA: **editorial-serif**
(`styles/editorial-serif.md` in the TZ-taste repo — warm paper, oversized
serif, hairline rules).

- **Tokens** live in `app/globals.css` under `:root`:
  `--bg #f5f1e8`, `--ink #1c1a15`, `--accent #b5461f`, `--muted #6f6a5e`,
  `--line #1c1a1526`, `--surface #efe9da`.
- **Fonts** load via `next/font/google` in `app/layout.tsx`: Fraunces
  (display), Newsreader (body), Space Mono (mono). No Inter anywhere.

## Switching DNA (for agents)

1. Read the new DNA file: `styles/<dna>.md` in the TZ-taste repo.
2. Replace the six `:root` hex values in `app/globals.css` with the new DNA's
   tokens — keep the variable names, so every component keeps resolving.
3. Swap the three `next/font/google` imports in `app/layout.tsx` for the new
   DNA's display / body / mono fonts, keeping the `--font-*` variable names.
4. Check the page once: every color and font should resolve to the new DNA
   with no stray hex values left in the CSS.

## What's on the page

- Offset hero — claim headline, one CTA, one focal "out of the oven" card
- Story section — 48-hour ferment proof points and a pull quote (no equal-cards grid)
- "Today's bake" — a perforated-edge ticket stub with loaves, prices, and oven times
- Order CTA — pickup-order mailto with real ordering rules
- Real footer — hours, address, contact, and a colophon that owns the fiction
