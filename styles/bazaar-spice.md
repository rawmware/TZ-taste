<!--tz-meta {"id":"bazaar-spice","name":"Bazaar Spice","vibe":"Spice-market maximalism: turmeric dust in the air, paprika-red textiles, patterned awnings, and stalls stacked to the sky.","file":"styles/bazaar-spice.md","tags":["maximalist","spice","market","colorful"],"best_for":["food-brands","restaurants","markets","travel"],"fonts":{"display":"Yeseva One","body":"Work Sans","mono":"IBM Plex Mono"},"tokens":{"bg":"#241109","ink":"#f7e8cf","accent":"#e9a820","muted":"#b0854f","line":"#e9a82066"},"dials":{"variance":9,"motion":5,"density":9}} -->
# Bazaar Spice

> Spice-market maximalism: turmeric dust in the air, paprika-red textiles,
> patterned awnings, and stalls stacked to the sky. More is more.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#241109` | Charred-ember dark, the shade under the awnings |
| `--surface` | `#3a1d0e` | Stall-counter panels |
| `--ink` | `#f7e8cf` | Flour-sack cream |
| `--muted` | `#b0854f` | Dry-spice brown, captions |
| `--accent` | `#e9a820` | Turmeric gold — prices, marks, the good stuff |
| `--line` | `#e9a82066` | Textile-pattern rules (alpha allowed on lines) |

Secondary spice palette (flat swatches only, never gradients): paprika `#c1442e`,
cardamom green `#6f7d3a`, indigo dye `#2e3a68`.

## Type

- **Display:** Yeseva One (bold, spiced, slightly exotic — shouts like a stall sign)
- **Body:** Work Sans (0.95–1rem; keeps up with the noise, stays legible)
- **Mono:** IBM Plex Mono (weights, measures, prices — "500g · ₹120")

Google Fonts: `Yeseva+One` `Work+Sans:wght@400;500;700`
`IBM+Plex+Mono:wght@400;600`

## Spacing & shape

- Density is the aesthetic: fill the viewport edge to edge like a stall. Overlapping cards, stacked swatches, patterned bands.
- Textile borders: 8–12px patterned strip dividers between sections (CSS repeating patterns — diamonds, zigzags, dots).
- Radius: `0px` mostly; a few `4px` tags like price labels tied with string.
- One focal pyramid per page: a stacked pyramid of spice-color swatches or products, like the displays at a real stall.

## Motion

Busy but warm: marquee ribbons drift slowly (one direction, `prefers-reduced-motion` stops them), swatch pyramids settle with a soft bounce on load,
hover states deepen color like a hand pressing into spice. Never jittery,
never glitchy — the bazaar bustles, it doesn't panic.

## Do

- Name real things: "Smoked paprika, La Vera", "Turmeric, ground this week". Specificity is the whole market.
- Use the price-tag pattern: a small rotated tag with string — "₹120 / 500g" — pinned to products.
- Let patterns do structural work: textile strips as section dividers, patterned bands as footers.
- Microcopy in stall-keeper voice: "Smell this one first." / "The red one's hotter. You've been warned."

## Don't

- No gradients anywhere — spices are flat color, piled high.
- No minimal whitespace-as-luxury; emptiness here reads as a closed stall.
- No emoji icons; use Lucide line icons in turmeric or paprika.
- No lorem ipsum; every label names a real spice, dish, or price.

## The one weird thing

Add one sensory detail per page: a "smell this" scratch-panel describing an
aroma ("warm, peppery, faintly sweet"), a heat-scale of 1–5 chili marks, or a
grind-freshness note ("ground Tuesday"). The bazaar is the one DNA allowed to
talk about smell.

## Best for

Food brands, restaurants, markets and grocers, travel and tourism.

## Pairs with patterns

`heroes-gig-poster` `backgrounds-halftone` `cards-product` `features-stickers` `testimonials-masonry` `cta-sticker` `marquee`

## Lineage

Spice-market stall displays: color pyramids, hand-lettered price tags,
patterned textile awnings; the maximalist density of souks and bazaars where
abundance is the advertising. Principles only — 100% original implementation.
