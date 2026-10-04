<!--tz-meta {"id":"paris-metro","name":"Paris Metro","vibe":"Art Nouveau metro wayfinding: Guimard curves, navy enamel, gold lettering. Mind the gap, in style.","file":"styles/paris-metro.md","tags":["metro","art-nouveau","wayfinding"],"best_for":["transit","museums","cafes","city-guides"],"fonts":{"display":"Marcellus","body":"Cormorant Garamond","mono":"Space Mono"},"tokens":{"bg":"#f4efe3","ink":"#14243d","accent":"#b98a2f","muted":"#7d7a6e","line":"#14243d33"},"dials":{"variance":4,"motion":3,"density":4}} -->
# Paris Metro

> Art Nouveau metro wayfinding: Guimard curves, navy enamel, gold lettering.
> Mind the gap, in style.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f4efe3` | Station tile cream |
| `--surface` | `#14243d` | Navy enamel — plaques |
| `--ink` | `#14243d` | Enamel navy, text on cream |
| `--muted` | `#7d7a6e` | Stone gray, small print |
| `--accent` | `#b98a2f` | Brass gold — lettering on enamel, one plaque per section |
| `--line` | `#14243d33` | Hairline rules (alpha allowed on lines) |

## Type

- **Display:** Marcellus (uppercase, `0.14em` tracking — inscriptional, like the station-name tablets)
- **Body:** Cormorant Garamond (1.05rem, sentence case, literary)
- **Mono:** Space Mono (line numbers — "Ligne 4", "Sortie 2")

Google Fonts: `Marcellus` `Cormorant+Garamond:ital,wght@0,400;0,500;1,400` `Space+Mono:wght@400;700`

## Spacing & shape

- Guimard curve flourishes (SVG, sparing) crown the plaques — ornament with a civic job.
- Navy enamel plaques carry gold headlines; compositions are centered and ceremonial.
- Plaque cards get an arched top (`border-radius: 50% 50% 0 0 / 30% 30% 0 0`) — an arch, deliberate, the only curve allowed.

## Motion

Plaques fade and settle (opacity + `12px` rise, 600ms). Curves draw once on
entry (`stroke-dashoffset`). Nothing hurries — the metro runs on its own time.
With reduced motion, the signage is simply hung.

## Do

- Set headlines as station-name tablets: navy plaque, gold caps — "STATION: MENUS".
- Mark sections with line-number roundels in enamel navy.
- Make the CTA a "Sortie" exit sign: "Sortie → Book a table".
- Microcopy with civic warmth: "Correspondance: Line 4 → Line 12. Two minutes, on foot."

## Don't

- No gradients — enamel is flat.
- No neon, no glow; the gold is brass, not light.
- No fashion-editorial gloss or model photography — that is a different DNA.
- No emoji icons; no lorem — write the signage like it will be cast in metal.

## The one weird thing

The nav is a metro line map: each link a stop, the current page a filled
roundel, the line drawn in navy with one gold interchange.

## Best for

Transit, museums, cafes, city guides.

## Pairs with patterns

`navs-rail` `hero-editorial` `how-it-works-chapters` `faq-accordion` `cta-luxe` `footer`

## Lineage

Guimard's metro entrances and enamel station signage — civic wayfinding as
ornament, the city speaking in plaques and roundels. Not parisian-chic: this
is civic wayfinding — enamel, brass, the public realm — where parisian-chic
is fashion editorial — gloss, models, the private wardrobe. Principles only —
100% original implementation.
