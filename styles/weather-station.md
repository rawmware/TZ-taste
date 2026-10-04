<!--tz-meta {"id":"weather-station","name":"Weather Station","vibe":"Brass dials, aneroid needles, the logbook filled at 0600 Zulu. The sky, measured honestly.","file":"styles/weather-station.md","tags":["instruments","data","fieldwork"],"best_for":["outdoor-brands","farms","aviation","science"],"fonts":{"display":"Barlow Condensed","body":"Barlow","mono":"IBM Plex Mono"},"tokens":{"bg":"#e9eae4","surface":"#dbddd2","ink":"#23282b","accent":"#c05b2e","muted":"#6f777c","line":"#23282b26"},"dials":{"variance":4,"motion":3,"density":7}} -->
# Weather Station

> Brass dials, aneroid needles, the logbook filled at 0600 Zulu.
> The sky, measured honestly.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#e9eae4` | Instrument-panel enamel |
| `--surface` | `#dbddd2` | The panel's inner plates |
| `--ink` | `#23282b` | Engraved panel lettering |
| `--muted` | `#6f777c` | Worn engraving, secondary text |
| `--accent` | `#c05b2e` | Signal orange — the needle, one per page |
| `--line` | `#23282b26` | Engraved panel rules (alpha allowed on lines) |

## Type

- **Display:** Barlow Condensed (uppercase — instrument-panel engraving, 3–5rem)
- **Body:** Barlow (1rem, the observer's hand — plain and exact)
- **Mono:** IBM Plex Mono (observations, readings — "1013.2 hPa", "0600Z")

Google Fonts: `Barlow+Condensed:wght@500;600;700` `Barlow:wght@400;500;600` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- Instrument-panel grids: dials and gauges in tight, honest rows.
- Logbook tables with ruled lines; every observation gets its row and its hour.
- Gauge-style stat blocks — a big numeral, a small unit, a hairline.
- Radius: `4px`. Enamel panels, slightly eased.

## Motion

Needles ease to their values on load (rotate, transform only). Log rows arrive
in sequence (opacity), like entries written through the day. With reduced
motion: the needles are already set.

## Do

- Write real unit microcopy: "Wind NW 12 kt, gusting 18. Barometer steady."
- Stamp a station ID on the page: "STATION KPSM" — every station has one.
- Keep times in UTC and say so: "Observations hourly, 0000–2300Z."
- Let the data be the decoration; a good table needs nothing else.

## Don't

- No purple or blue gradients — enamel is flat, brass is flat, the sky is data.
- No cartoon clouds, suns, or weather-widget gloss.
- No fake precision; round like an observer rounds.
- No emoji, no lorem — the logbook is always filled in.

## The one weird thing

A pinned observation strip in the header — station ID, UTC time, temperature,
and a rising/falling barometer arrow — set differently per page, all in mono,
like the station never stopped reporting.

## Best for

Outdoor brands, farms, aviation, science.

## Pairs with patterns

`stats-table` `stats-gauges` `features-speclist` `how-it-works-diagram` `faq-terminal` `footers-hairline`

## Lineage

Field-instrument craft — the barometer dial, the observer's logbook, readings
taken on the hour whether anyone's watching or not. ≠ harbor-fog: the
instruments on the wall, not the weather outside it. Principles only — 100%
original implementation.
