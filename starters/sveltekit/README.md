<!--tz-meta {"id":"sveltekit-readme","title":"Verde starter README","category":"Starter","file":"starters/sveltekit/README.md","tags":["readme","starter"],"description":"Setup, run, and DNA-switching instructions for the Verde SvelteKit starter.","dnas":["botanical-lab"]} -->
# Verde — SvelteKit starter (botanical-lab DNA)

A landing page for **Verde**, a fictional houseplant-care app (watering reminders,
light meter, repotting calendar). The design read: *a botanist's field journal —
specimen labels, Latin names, pressed-leaf calm.* Its one distinctive choice:
features are laid out as **specimen plates** with Latin captions, hairline
frames, and plate numbers (No. 01–No. 04).

Dials: VARIANCE 5 / MOTION 3 / DENSITY 3.

## Prerequisites

- Node.js 18 or newer
- npm

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build
npm run preview  # preview the production build
```

## DNA and tokens

This starter uses exactly one style DNA: **botanical-lab**. Every color on the
page resolves to a DNA token, defined as CSS variables in `src/app.css`:

| Token      | Value     | Used for            |
| ---------- | --------- | ------------------- |
| `--bg`     | `#f4f6ec` | page background     |
| `--ink`    | `#1b3a2b` | text, CTA band      |
| `--accent` | `#3e7d4e` | links, highlights   |
| `--muted`  | `#6f867a` | secondary text      |
| `--line`   | `#cdd8bd` | hairlines, frames   |

Fonts load in `src/app.html` via Google Fonts: **DM Serif Display** (display),
**Karla** (body), **Space Mono** (mono labels and captions).

## How an agent switches the DNA

1. Read the target DNA file at `styles/<dna>.md` in the TZ-taste repo for its
   tokens and type pairing.
2. Replace the five `:root` color variables in `src/app.css` with the new DNA's
   hex values, and update `--font-display`, `--font-body`, `--font-mono` to the
   new pairing.
3. Swap the Google Fonts `<link>` in `src/app.html` for the new fonts.
4. Keep the layout, copy, and structure untouched — the DNA change is a
   re-skin, not a rebuild.
