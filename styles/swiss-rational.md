<!--tz-meta {"id":"swiss-rational","name":"Swiss Rational","vibe":"Strict grid, black on white, one red. Information architecture as aesthetic.","file":"styles/swiss-rational.md","tags":["grid","minimal","rational","uppercase"],"best_for":["agencies","archives","data products","museums"],"fonts":{"body":"Archivo","display":"Archivo","mono":"Space Mono"},"tokens":{"accent":"#e30613","bg":"#fafafa","ink":"#111111","line":"#111111","muted":"#6b6b6b","surface":"#f0f0f0"},"dials":{"density":6,"motion":2,"variance":4}} -->
# Swiss Rational

> Strict grid, black on white, one red. Information architecture as aesthetic.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#fafafa` | Paper white |
| `--surface` | `#f0f0f0` | Inset panels, table zebra |
| `--ink` | `#111111` | Everything structural |
| `--muted` | `#6b6b6b` | Secondary text |
| `--accent` | `#e30613` | Swiss red — sparing: active states, one data highlight |
| `--line` | `#111111` | Full-strength black rules (this DNA uses real lines) |

## Type

- **Display:** Archivo 800/900, uppercase, `-0.02em`, tight leading
- **Body:** Archivo 400/500, generous but not loose
- **Mono:** Space Mono for data, labels, coordinates

Google Fonts: `Archivo:wght@400;500;700;800;900` `Space+Mono:wght@400;700`

## Spacing & shape

- 12-column grid, visible if you squint. Gutters `24px`, margins `5vw`.
- Radius: `0`. Corners are square. Buttons are rectangles with black borders.
- Everything aligns to the grid. If it doesn't align, it's wrong.

## Motion

Almost none. Instant state changes or 120ms linear fades. Motion here is a
rounding error.

## Do

- Tables, indexes, numbered lists — this DNA loves structured information
- Uppercase micro-labels with wide tracking above every section
- Big index numerals, crosshairs, registration marks as decoration
- One red element per screen, placed with intent

## Don't

- No border-radius anywhere. Not even avatars (use squares).
- No shadows. Depth comes from rules and weight, not blur.
- No decorative gradients or imagery without a data reason

## The one weird thing

An oversized index number, a full-bleed data table, or a red diagonal slash
through one element. Precision with one deliberate violation.

## Best for

Agencies, archives, data products, museums, anyone who respects the grid.

## Pairs with patterns

`stats`, `nav-minimal`, `footer`, `hero-editorial`
