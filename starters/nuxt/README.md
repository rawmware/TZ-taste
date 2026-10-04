<!--tz-meta {"id":"nuxt-readme","title":"Nuxt starter README (Bauhaus Primary)","category":"Starter","file":"starters/nuxt/README.md","tags":["nuxt","readme","starter"],"description":"Setup, DNA reference, and DNA-switching instructions for the Nuxt 3 bauhaus-primary starter.","dnas":["bauhaus-primary"]} -->
# Gridhouse — Nuxt 3 starter (TZ-taste)

A landing page for **Gridhouse**, a fictional coworking space for designers in
Rotterdam, built on the **bauhaus-primary** style DNA: a Bauhaus workshop
poster with primary shapes, hard black rules, and zero decoration.

## Prerequisites

- Node.js 18 or newer
- npm (ships with Node)

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build` (production build), `npm run preview`
(preview the production build).

## DNA and tokens

This starter uses exactly one style DNA: **bauhaus-primary**.

- All design tokens live in `assets/main.css` as CSS custom properties:
  `--bg`, `--surface`, `--ink`, `--accent`, `--accent-2`, `--yellow`,
  `--muted`, `--line`, plus `--font-display`, `--font-body`, `--font-mono`.
- Fonts load from Google Fonts via `<link>` tags in the `app.head` section of
  `nuxt.config.ts` (Archivo Black / Archivo / Space Mono).

## How an agent switches DNA

1. Read the new DNA file at `styles/<dna-name>.md` in the TZ-taste repo.
2. In `assets/main.css`, replace the `:root` custom properties with the new
   DNA's tokens — keep the same variable names (`--bg`, `--ink`, `--accent`,
   `--muted`, `--line`) so the page styles keep working, and add any extras
   the DNA defines.
3. In `nuxt.config.ts`, replace the Google Fonts `<link>` with the new DNA's
   font pairing, and update `--font-display` / `--font-body` / `--font-mono`.
4. Adjust page accents in `pages/index.vue` to the DNA's rules (e.g. swap the
   geometric shapes, rules, and distinctive choice to match the new vibe).
