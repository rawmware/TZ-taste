<!--tz-meta {"id":"astro-readme","title":"Nightline starter README","category":"Starter","file":"starters/astro/README.md","tags":["astro","starter"],"description":"Setup, DNA tokens, and DNA-swap instructions for the Nightline starter.","dnas":["midnight-railway"]} -->
# Nightline — Astro starter (midnight-railway DNA)

A sleeper-train booking page for the fictional operator **Nightline**: the hero is a live-feeling midnight departure board — timetable rows with times, platforms, and ON TIME / BOARDING status set in mono, brass rules on deep navy, one highlighted departure.

- **Design read:** a booking page that feels like a midnight departure board — brass on deep navy, total confidence.
- **DNA:** `midnight-railway` (brass `#c9a227` on night navy `#101a2e`)
- **Dials:** VARIANCE 4 / MOTION 3 / DENSITY 5
- **Distinctive choice:** the hero IS the departure board.

## Prerequisites

- Node.js 18 or newer
- npm

## Run it

```bash
npm install
npm run dev
```

Then open the URL Astro prints (usually `http://localhost:4321`). `npm run build` builds to `dist/`, `npm run preview` serves the build.

## DNA + tokens

All color tokens live in one place: [`src/styles/global.css`](src/styles/global.css) as CSS custom properties:

```css
:root {
  --bg: #101a2e;
  --ink: #e9e2d0;
  --accent: #c9a227;
  --muted: #7d8698;
  --line: #2a3a5c;
}
```

Fonts load in the `<head>` of [`src/pages/index.astro`](src/pages/index.astro): DM Serif Display (display), DM Sans (body), Space Mono (mono).

## How an agent switches DNA

1. Read the target DNA file — e.g. `styles/<dna>.md` in TZ-taste — for its token table and font pairing.
2. Replace the `:root` values in `src/styles/global.css` with the new DNA's tokens (keep the variable names or update them everywhere they are used).
3. Swap the Google Fonts `<link>` in `src/pages/index.astro` for the new DNA's display/body/mono fonts, and update the `font-family` references in the page's scoped `<style>`.
4. Re-run the anti-slop checklist (`docs/ANTI-SLOP.md`): zero red blockers, fewer than two yellow warnings.
