<!--tz-meta {"id":"alpine-after-dark","name":"Alpine After Dark","vibe":"Night at altitude: deep indigo snowfields, a single headlamp amber, constellations plotted over ridgelines.","file":"styles/alpine-after-dark.md","tags":["night","mountain","stars","dark"],"best_for":["observatories","mountain-resorts","night-tours","science-centers"],"fonts":{"display":"Fraunces","body":"Mulish","mono":"Spline Sans Mono"},"tokens":{"bg":"#0b1026","ink":"#e8e4d8","accent":"#f5a623","muted":"#6b7394","line":"#f5a62333"},"dials":{"variance":7,"motion":4,"density":3}} -->
# Alpine After Dark

> Night at altitude: deep indigo snowfields, a single headlamp amber,
> constellations plotted over ridgelines.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0b1026` | Deep indigo night sky, almost black |
| `--surface` | `#131a38` | Tent-canvas panels, data cards |
| `--ink` | `#e8e4d8` | Moonlit snow text |
| `--muted` | `#6b7394` | Fading twilight, captions |
| `--accent` | `#f5a623` | Headlamp amber — the only warm thing out here |
| `--line` | `#f5a62333` | Faint amber hairlines (alpha allowed on lines) |

## Type

- **Display:** Fraunces (large, tight tracking, mixed case — reads like a park ranger's signage carved at 10,000 feet)
- **Body:** Mulish (0.95–1.05rem, relaxed leading; plain talk)
- **Mono:** Spline Sans Mono (elevations, coordinates, temperatures — uppercase, `0.08em` tracking)

Google Fonts: `Fraunces:opsz,wght@9..144,500;9..144,700` `Mulish:wght@400;600`
`Spline+Sans+Mono:wght@400;500`

## Spacing & shape

- Vast vertical rhythm: sections breathe like thin air — `py-32 md:py-48`.
- One amber element per viewport: a dot on the map, a single underlined word, a pinpoint stat. The dark does the rest.
- Radius: `2px` max on cards — snow huts, not pillows. Images full-bleed, edge to edge.
- Broken center: hero type offset-left with a huge empty indigo field to the right where a constellation plot sits.

## Motion

Motion should feel like your eyes adjusting to the dark. Slow fades in
(900ms), star fields that drift on a barely-there parallax, amber accents
that ease in last — like a headlamp clicking on. Never slide whole sections;
reveal, don't relocate. Honor `prefers-reduced-motion` fully.

## Do

- Let the dark carry the page: 80% night, 10% snow, 10% amber. Count it.
- Plot something real: an actual constellation line-map, a real elevation profile, tonight's actual moon phase. Night pages earn trust with real data.
- Microcopy in field-log voice: "Trailhead 2.4 mi · Headlamp required after 17:40."
- Use mono for all numbers: "−14°C wind chill", "48.7758° N", "Sleeping bag rated to −20°".

## Don't

- No gradients pretending to be auroras — flat indigo, flat amber.
- No light-mode sections "for contrast"; this DNA commits to the night.
- No purple nebula clichés — amber is the only warm color allowed.
- No three equal cards for the route/itinerary data; use a single offset column or an annotated map.

## The one weird thing

Add one real nocturnal instrument per page: tonight's moon phase rendered in
type ("Waxing gibbous, 78%"), a tiny star chart of one constellation visible
tonight, or an elevation tick strip down the left edge of the hero. Alpine
After Dark is a page for people who look up.

## Best for

Observatories, mountain resorts and huts, night tours and star parties,
science centers.

## Pairs with patterns

`heroes-noir` `backgrounds-stars` `stats-ticker` `testimonials-solo` `cta-luxe` `nav-minimal` `footer`

## Lineage

The wayfinding signage of national-park dark-sky preserves; the amber glow of
a headlamp against blue hour; printed star charts and topographic maps with
contour discipline. Principles only — 100% original implementation. Explicitly
not `alpine-ledger`: this is night on the mountain, not ledger documents —
amber light and star charts instead of ruled pages and balance columns.
