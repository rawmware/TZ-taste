<!--tz-meta {"id":"observatory-star","name":"Observatory Star","vibe":"A working astronomical observatory as a website: deep-space navy, brass instrument dials, hand-plotted star charts, and the hush of the dome at 2am.","file":"styles/observatory-star.md","tags":["space","science","brass","dark"],"best_for":["observatories","space-startups","planetariums","research-institutes"],"fonts":{"display":"Marcellus","body":"Spectral","mono":"Spline Sans Mono"},"tokens":{"bg":"#060a18","ink":"#dfe6f5","accent":"#c9a24b","muted":"#5f6b8a","line":"#c9a24b44"},"dials":{"variance":6,"motion":5,"density":5}} -->
# Observatory Star

> A working astronomical observatory as a website: deep-space navy, brass
> instrument dials, hand-plotted star charts, and the hush of the dome at 2am.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#060a18` | Deep-space navy, darker than night blue |
| `--surface` | `#0d1328` | Instrument-housing panels |
| `--ink` | `#dfe6f5` | Starlight on the page |
| `--muted` | `#5f6b8a` | Distant-star dim, captions |
| `--accent` | `#c9a24b` | Aged brass — dials, rings, keylines |
| `--line` | `#c9a24b44` | Fine brass hairlines (alpha allowed on lines) |

## Type

- **Display:** Marcellus (engraved-plaque Roman capitals — the words on the observatory wall, set with wide tracking)
- **Body:** Spectral (1–1.1rem; the logbook voice, measured and literate)
- **Mono:** Spline Sans Mono (right ascension, declination, magnitudes — "RA 05h 35m · DEC −05° 23′ · MAG 4.0")

Google Fonts: `Marcellus` `Spectral:wght@300;400;500`
`Spline+Sans+Mono:wght@400;500`

## Spacing & shape

- Instrument-panel order: precise grids, generous margins, everything squared to the brass hairline. Radius `0px` on panels, full circles only for dials and lenses.
- Circular motifs: brass ring dividers, round coordinate readouts, an orrery-style nav or section marker.
- Charts as structure: one hand-plotted star chart or orbital diagram per page, drawn in SVG with brass strokes on navy — not decoration, the actual content frame.
- Sections alternate wide chart / narrow logbook column, like the dome and the desk.

## Motion

Telescope motion: slow, deliberate, mechanical. Dials rotate into place,
charts draw themselves stroke by stroke, numbers count up like setting
circles. Everything eases over 800–1200ms. One celestial event per page —
a slow transit, a rotating star field — at `prefers-reduced-motion` stillness.

## Do

- Use real coordinates and real objects: "M42 · Orion Nebula · visible tonight 21:14". Fictional sky data breaks the spell.
- Set instrument labels in engraved style: small caps, wide tracking, brass — "MERIDIAN CIRCLE · 1897".
- Write logbook microcopy: "Dome opened 20:40. Seeing: fair. Wind: NW 12 kt."
- Let brass do the emphasis: one ring, one dial, one underlined coordinate per section.

## Don't

- No purple nebula gradients — flat navy, flat brass, real star points.
- No sci-fi HUD clutter or glowing cyan readouts; this is 1897 brass, not a spaceship.
- No stock "galaxy" hero with white headline; plot the actual chart.
- No three equal feature cards; observatories publish findings, tables, and plates.

## The one weird thing

Add one working instrument per page: a tonight's-sky readout with the real
date, a brass dial that tracks scroll position like a setting circle, or a
"first light" date stamped in the footer ("First light: 14 March 1897").
An observatory page should keep time.

## Best for

Observatories, space startups, planetariums, research institutes.

## Pairs with patterns

`backgrounds-stars` `heroes-docs-hero` `stats-terminal` `features-speclist` `how-it-works-diagram` `misc-timeline` `cta-terminal`

## Lineage

Victorian scientific-instrument engraving; observatory logbooks and brass
setting circles; hand-plotted celestial charts with coordinate discipline.
Principles only — 100% original implementation. Distinct from `art-deco-luxe`
by intent: deco is ceremony and symmetry for an audience; this is a working
instrument room — charts, dials, and log entries for people who measure the sky.
