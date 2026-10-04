<!--tz-meta {"id":"swiss-airline","name":"Swiss Airline","vibe":"Mid-century airline identity: timetable grids, the red arrow, Helvetica-like order. Departures on time, forever.","file":"styles/swiss-airline.md","tags":["airline","swiss","timetable"],"best_for":["airlines","travel-agencies","rail-operators","logistics"],"fonts":{"display":"Archivo","body":"Libre Franklin","mono":"IBM Plex Mono"},"tokens":{"bg":"#f7f5ef","ink":"#1a1a1a","accent":"#d52b1e","muted":"#6e6e6e","line":"#1a1a1a1f"},"dials":{"variance":2,"motion":2,"density":8}} -->
# Swiss Airline

> Mid-century airline identity: timetable grids, the red arrow, Helvetica-like order.
> Departures on time, forever.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f7f5ef` | Timetable paper |
| `--surface` | `#ffffff` | White card stock — schedule panels |
| `--ink` | `#1a1a1a` | Black type, always |
| `--muted` | `#6e6e6e` | Gray for secondary times |
| `--accent` | `#d52b1e` | Airline red — the arrow, one per viewport |
| `--line` | `#1a1a1a1f` | Hairline grid rules (alpha allowed on lines) |

## Type

- **Display:** Archivo (700, uppercase for route codes, tight tracking — "ZRH → JFK")
- **Body:** Libre Franklin (400/500, left-aligned, measured)
- **Mono:** IBM Plex Mono (timetables, flight numbers — "LX 316", "08:40")

Google Fonts: `Archivo:wght@500;700` `Libre+Franklin:wght@400;500;600` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- The grid is law: 12 columns, hairline rules, generous margins. Left-align everything to it.
- Timetable rows separated by `1px` rules; generous row height — schedules breathe.
- The red arrow motif points right. It means onward. It is never decorative.
- Radius: `0px`.

## Motion

Almost none: hover states, and a red arrow that slides `8px` onward. The
timetable does not dance. With reduced motion, nothing changes — there was
nothing to reduce.

## Do

- Make the hero a timetable: "ZRH 08:40 → JFK 11:55. On time."
- Set route codes big in mono; let tabular figures do the talking.
- Spend the red arrow once per section — restraint is the brand.
- Microcopy clipped and certain: "Boarding closes 15 minutes before departure."

## Don't

- No decoration without a job — every element earns its seat.
- No gradients, no shadows, no rounded corners.
- No centered layouts; align left to the grid.
- No emoji icons; no more than one red element per viewport; no lorem — schedules are real data.

## The one weird thing

A departures-board strip under the nav: flipping times, gate numbers, and one
delayed flight for honesty — "LX 318 — delayed 20 min."

## Best for

Airlines, travel agencies, rail operators, logistics.

## Pairs with patterns

`stats-table` `pricing` `faq-hairline` `forms-search-hero` `cta-card` `footers-sitemap`

## Lineage

Mid-century airline identity systems — timetable typography, the wayfinding
arrow, schedule grids as brand. Not swiss-poster: this is aviation systems —
routes, times, arrows that mean "go" — where swiss-poster is poster art — the
single image, the gallery wall. Principles only — 100% original implementation.
