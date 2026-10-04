<!--tz-meta {"id":"transit-swiss","name":"Transit Swiss","vibe":"Wayfinding systems: line colors, station dots, route-map clarity — designed to be read at a sprint.","file":"styles/transit-swiss.md","tags":["transit","wayfinding","signage"],"best_for":["transit-apps","cities","campuses"],"fonts":{"display":"Archivo","body":"DM Sans","mono":"IBM Plex Mono"},"tokens":{"bg":"#ffffff","ink":"#111417","accent":"#d0342c","muted":"#5c6670","line":"#dfe3e6"},"dials":{"variance":4,"motion":2,"density":7}} -->

# Transit Swiss

> A wayfinding system on the web: line colors, station dots, interchange symbols, route-map clarity. Designed to be read at a sprint through a station — no decoration that doesn't point somewhere.

## Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#ffffff` | platform white |
| `--surface` | `#f2f4f5` | panel gray |
| `--ink` | `#111417` | signage black |
| `--muted` | `#5c6670` | timetable gray |
| `--accent` | `#d0342c` | line red |
| `--line` | `#dfe3e6` | track line |
| `--accent-2` | `#0f6fbf` | line blue |

## Type

- **Display:** Archivo — bold, grotesque, uppercase for station-name-scale headlines. Headlines are signage: name the thing, nothing else.
- **Body:** DM Sans — clear small text for directions, schedules, service notes. Set slightly larger than usual; wayfinding type is never small.
- **Mono:** IBM Plex Mono — times, line numbers, platform codes, coordinates. Departure-board language: `12:04 · PLATFORM 3 · ON TIME`.

Google Fonts: `Archivo:wght@600;700;800`, `DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700`, `IBM+Plex+Mono:wght@400;500;700`

## Spacing & shape

- High density, strict alignment: information packed like a departure board, every row on the same baseline grid.
- Line-color chips (small rounded squares) precede every list item, link, and label — the route-map key is the decoration.
- Station dots (●) and interchange markers (◎) punctuate headings and lists; draw them, don't emoji them.
- Corners square or micro-rounded; signage has no pillows.

## Motion

Minimal and purposeful: a route line draws itself across the hero (SVG stroke animation) to set the map metaphor. Hover states highlight the line chip and nudge the row. A live-status feel comes from small pulsing dots on "active" items — one pulse style, reused everywhere.

## Do

- Build a color key: every category gets a line color shown as a chip, used consistently site-wide like real transit lines.
- Number everything: lines, platforms, sections — wayfinding is an index, not an essay.
- Use dots and route segments as dividers and bullets; they're native vocabulary here.
- Keep hierarchy ruthless: station name, line, time. If a fourth element appears, cut something.

## Don't

- Don't use the line colors decoratively — a color must always mean a category, or it means nothing.
- Don't write paragraphs where a board would do — times, routes, and statuses belong in tables and rows.
- Don't soften with imagery — a route diagram drawn in SVG is more on-brand than any photograph.
- Don't confuse this with data-grid Swiss — this is signage for moving humans, not tables for analysts.

## The one weird thing

Draw the site's nav as a route map: a horizontal line with station dots for each section, the current section highlighted like "YOU ARE HERE", and clicking a dot scrolls to that stop. Or make the hero a departure board: rows of mono text with destinations, times, and statuses ("BOARDING", "DELAYED") that cycle realistically. Pick one.

## Best for

Transit apps, city guides, campuses, conference wayfinding, event logistics.

## Pairs with patterns

`hero-kinetic`, `nav-minimal`, `stats`, `bento`, `marquee`, `footer`

## Lineage

The wayfinding principle that a lost person reads in a fixed order — color, shape, word — and every sign must survive that order; the departure board as the densest honest information layout ever designed; the interchange-dot grammar of metro maps.
