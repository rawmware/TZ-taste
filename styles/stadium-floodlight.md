<!--tz-meta {"id":"stadium-floodlight","name":"Stadium Floodlight","vibe":"Concrete bowl at 9pm: floodlights on, turf glowing, everything else shadow.","file":"styles/stadium-floodlight.md","tags":["stadium","sports","brutalist"],"best_for":["sports-clubs","esports","live-events","fitness"],"fonts":{"display":"Archivo Black","body":"Archivo","mono":"JetBrains Mono"},"tokens":{"bg":"#141719","ink":"#f4f7f5","accent":"#3fae5a","muted":"#8b9490","line":"#3fae5a3d"},"dials":{"variance":6,"motion":6,"density":7}} -->
# Stadium Floodlight

> Concrete bowl at 9pm: floodlights on, turf glowing, everything else shadow.
> Everything big. Everything now.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#141719` | Night concrete background |
| `--surface` | `#1e2325` | Stands-shadow panels, fixture cards |
| `--ink` | `#f4f7f5` | Floodlight white text |
| `--muted` | `#8b9490` | Concrete gray — labels, away-team everything |
| `--accent` | `#3fae5a` | Turf green — scores, live states, one numeral per section |
| `--line` | `#3fae5a3d` | Pitch-line rules (alpha allowed on lines) |

## Type

- **Display:** Archivo Black (huge, uppercase, tight tracking — cropped by the viewport edge on purpose)
- **Body:** Archivo (1–1.125rem, plainspoken; the announcer between the roars)
- **Mono:** JetBrains Mono (scoreboards, clocks, tables — tabular numerals, "HOME 2 — 1 AWAY · 90+2'")

Google Fonts: `Archivo+Black:wght@400` `Archivo:wght@400;600;800`
`JetBrains+Mono:wght@400;700`

## Spacing & shape

- Radius: `0px`. Concrete does not round.
- Display type bleeds off the edge; body copy stays in a disciplined column.
- Thick turf-green pitch lines divide sections; concrete panels hold fixtures and tables.
- Rhythm: one roaring full-bleed moment, then the quiet order of the fixture list. Loud, then legible.

## Motion

Floodlights flicker on: the hero enters with stepped opacity, like banks of
lamps warming up (three steps, 300ms apart). Score tickers slide on transform
only. Numbers tick with a 120ms fade-swap. Honor `prefers-reduced-motion`:
the lights are simply on.

## Do

- Pin a scoreboard strip under the nav: mono, tabular, "GATES 18:00 · KICKOFF 20:00", live scores in turf green.
- Reserve turf green for scores and live states — if it is on a paragraph, it is wrong.
- Write fixtures like the club would: "Sat — Rovers (H) — 20:00 — Section 112 still open."
- Let one display headline get enormous per page: "DERBY NIGHT" at 12vw, cropped.

## Don't

- No rounded cards, no soft shadows, no pastels — the stands are concrete.
- No purple, no gradients; night here is black and floodlight white.
- No three-equal-cards of "features" — fixtures are a table, ranked by date.
- No lorem — a fixture list with fake teams is a joke. Name the actual clubs.

## The one weird thing

Add minute-markers: tiny mono timestamps ("12'", "45+1'", "90+2'") in the
margin beside key paragraphs, like a match report running down the page.
One page, one timeline — it turns any copy into a match.

## Best for

Sports clubs, esports orgs, live events, fitness brands.

## Pairs with patterns

`heroes-diagonal-split` `stats-table` `features-numbered` `misc-compare` `cta-card` `navs-rail` `footers-brutalist`

## Lineage

Brutalist stadium concrete and night-match broadcast graphics; the economy of
a scoreboard — white type, one green number, black behind it; floodlit pitch
photography where everything outside the light does not exist. Principles
only — 100% original implementation.
