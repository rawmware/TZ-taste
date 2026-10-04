<!--tz-meta {"id":"pop-art-halftone","name":"Pop-Art Halftone","vibe":"Ben-Day dots, thick black outlines, and color turned up until it shouts.","file":"styles/pop-art-halftone.md","tags":["pop-art","halftone","comic"],"best_for":["comics","streetwear","youth-brands"],"fonts":{"display":"Bungee","body":"Space Grotesk","mono":"Space Mono"},"tokens":{"bg":"#fff6e8","ink":"#171412","accent":"#e83a2f","muted":"#8f8577","line":"#171412"},"dials":{"variance":8,"motion":6,"density":5}} -->
# Pop-Art Halftone

> Ben-Day dots, thick black outlines, and color turned up until it shouts.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#fff6e8` | Newsprint cream — the page |
| `--surface` | `#ffffff` | Panel white — comic panels, cards |
| `--ink` | `#171412` | Panel black — outlines, text, rules |
| `--muted` | `#8f8577` | Halftone gray — secondary text |
| `--accent` | `#e83a2f` | Poster red — headlines, CTAs |
| `--accent-2` | `#ffc700` | Burst yellow — stars, prices, hits |
| `--line` | `#171412` | `3–4px` black panel borders |

## Type

- **Display:** Bungee 400 — massive, playful, engineered for impact words:
  `POW`, `NEW`, `DROP 07`. One to three words per headline max.
- **Body:** Space Grotesk 400/500 — keeps the energy without fighting the
  display font.
- **Mono:** Space Mono — issue numbers, prices (`$24 — ISSUE 07`), onomatopoeia
  captions.

Google Fonts: `Bungee&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700`

## Spacing & shape

- Comic panel layout: thick black gutters, panels that tilt 1–3 degrees.
- Ben-Day dot fields as section backgrounds — radial-gradient dots, dense
  enough to see, never photo-noise.
- Starbursts and jagged speech bubbles for prices, CTAs, "new" callouts.
- Radius: `0` on panels; bursts and bubbles are the only curves allowed.

## Motion

Panels pop in with a comic-frame thud. Starbursts rotate slowly; hover on a
card makes it lift with a hard offset shadow (no blur). Sound-effect words
(`BAM!`) can appear on click — once, then it's done. Loud, fast, then stop.

## Do

- Headlines in speech balloons, not plain text blocks
- Halftone dots behind every hero element
- Starburst badges for prices and drops
- Thick black rules between every section — the grid is visible

## Don't

- No soft shadows, no blurs, no translucency — hard edges only
- No muted or pastel colors; commit to the saturation
- No serif anything; this DNA has never met a serif
- No paragraphs longer than three lines; comics are dialogue, not essays

## The one weird thing

One onomatopoeia per page — `ZAP!`, `WHAM!`, `LOOK!` — set in Bungee at
hero scale, used as a divider. Or every price inside a starburst. Pick one.

## Best for

Comics, streetwear, youth brands, sneakers, toy lines, music merch.

## Pairs with patterns

`hero-kinetic`, `marquee`, `cta`, `cards`, `pricing`

## Lineage

The panel economy of newsprint comics — every frame earns its ink; the color
logic of screen-printed gig posters, where flat saturated blocks do all the
work.
