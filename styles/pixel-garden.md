<!--tz-meta {"id":"pixel-garden","name":"Pixel Garden","vibe":"A cozy 8-bit gardening sim as a website: tilled soil rows, sprout-green pixels, and a blocky sun that rises on scroll.","file":"styles/pixel-garden.md","tags":["pixel","garden","cozy","retro"],"best_for":["indie-games","garden-shops","kids-education","farm-csas"],"fonts":{"display":"Press Start 2P","body":"DotGothic16","mono":"VT323"},"tokens":{"bg":"#20291d","ink":"#f5efdc","accent":"#ffc93c","muted":"#8a9a7b","line":"#7fc24d55"},"dials":{"variance":6,"motion":7,"density":6}} -->
# Pixel Garden

> A cozy 8-bit gardening sim as a website: tilled soil rows, sprout-green
> pixels, and a blocky sun that rises on scroll.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#20291d` | Dark tilled soil |
| `--surface` | `#2c3a27` | Garden-bed panels |
| `--ink` | `#f5efdc` | Seed-packet cream |
| `--muted` | `#8a9a7b` | Dusk-green, captions |
| `--accent` | `#ffc93c` | 8-bit sun yellow — the star of the page |
| `--line` | `#7fc24d55` | Sprout-green row lines (alpha allowed on lines) |

## Type

- **Display:** Press Start 2P (tiny and mighty — set at 1.25–2rem max, wide line-height; pixel type is unreadable big)
- **Body:** DotGothic16 (0.95–1.05rem; readable, still pixel-native)
- **Mono:** VT323 (stats, day counters, weather readouts — "DAY 12 · SUNNY")

Google Fonts: `Press+Start+2P` `DotGothic16` `VT323`

## Spacing & shape

- Tilled rows: sections separated by dotted sprout-green row lines like furrows in a field.
- Everything is a block: `border-radius: 0px` everywhere, chunky 3–4px borders, hard offset shadows (`box-shadow: 6px 6px 0`) — the "pressed into soil" look.
- Pixel type needs air: generous line-height (1.6–1.8) and padding around display text.
- One 8-bit sun per page: a blocky pixel sun, fixed in the hero, rising on scroll. Commit to it.

## Motion

Steps, not slides. Elements move in 4–8px increments with `steps()` timing —
a sprout popping up, a sun rising one block at a time. Sprites bob on a
3-frame loop. Everything honoring `prefers-reduced-motion` goes still as a
photograph. Garden motion is gentle: nothing here moves fast.

## Do

- Write microcopy like a game tutorial: "Press START. Plant something." / "Water daily. The pixels remember."
- Use a day-counter as a design element: "DAY 12 OF THE SEASON" in the nav.
- Pixelate your imagery: render photos through a pixelation filter or use genuine pixel art. Half-real is the uncanny valley of this DNA.
- Let green draw the structure (rows, borders, furrows) and save yellow for the sun and the one thing you want clicked.

## Don't

- No gradients, no soft shadows, no rounded corners — the soil is flat and square.
- No neon arcade glow — the sun here is warm, not electric.
- No lorem ipsum; every label is a real instruction or readout.
- No three equal feature cards; use a seed-packet row or a tool-shed shelf layout.

## The one weird thing

Add one growing thing per page: a pixel sprout in the footer that gains a
leaf on every return visit (localStorage day counter), or a "weather" readout
that changes the sun's position by time of day. The page should feel tended.

## Best for

Indie games, garden shops and nurseries, kids' education, farm CSAs.

## Pairs with patterns

`heroes-pixel-arcade` `features-arcade` `backgrounds-dots` `how-it-works-steps` `stats-bars` `cta-sticker` `footer`

## Lineage

Cozy farming-sim UI: day counters, tool-shed inventories, seed-packet
typography; the hard-shadow block discipline of 8-bit interfaces. Principles
only — 100% original implementation. Explicitly not `pixel-arcade` and not
`kawaii-pixel`: this is a garden sim — soil, sun, slow growth — not an
arcade; no high scores, no cabinet glow, no pastel mascot energy.
