<!--tz-meta {"id":"blueprint-tech","name":"Blueprint Tech","vibe":"Cyanotype schematics: deep blueprint blue, white line work, everything labeled.","file":"styles/blueprint-tech.md","tags":["blueprint","technical","schematic"],"best_for":["engineering","hardware","dev-tools"],"fonts":{"display":"Space Grotesk","body":"IBM Plex Mono","mono":"IBM Plex Mono"},"tokens":{"bg":"#17407f","ink":"#f2f6fc","accent":"#ffcf3f","muted":"#8fb3e8","line":"#ffffff40"},"dials":{"variance":5,"motion":3,"density":7}} -->
# Blueprint Tech

> Cyanotype schematics: deep blueprint blue, white line work, everything
> labeled.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#17407f` | Blueprint blue — the whole sheet |
| `--surface` | `#0f2f66` | Darker blue — inset panels, callouts |
| `--ink` | `#f2f6fc` | Drafting white — text, line work |
| `--muted` | `#8fb3e8` | Faded pencil blue — secondary text |
| `--accent` | `#ffcf3f` | Highlighter yellow — warnings, CTAs, key specs |
| `--line` | `#ffffff40` | Technical rules, grid, dimension lines |

## Type

- **Display:** Space Grotesk 700 — big white headlines, engineering-conference
  confident. Set in all caps for hero lines.
- **Body:** IBM Plex Mono 400 — yes, body copy is mono. Specs are the copy.
- **Mono:** IBM Plex Mono — part numbers, dimensions, tolerances
  (`REV C — ±0.1 MM — FIG. 3`).

Google Fonts: `Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500;700`

## Spacing & shape

- Drafting grid background (fine white lines, `24px` or `32px`) across the
  full page — the sheet is always a sheet.
- Dimension lines with arrowheads, figure labels (`FIG. 1`, `SECTION A-A`),
  crosshair markers — annotations are decoration.
- Corner registration marks on cards, like cropped print sheets.
- Radius: `0`. Blueprints don't round.

## Motion

Line drawings that draw themselves on scroll (`stroke-dashoffset` animation).
Crosshairs that track the cursor in hero areas. Everything moves like it's
being drafted in front of you — deliberate, never playful.

## Do

- White technical line drawings of the product, drawn as SVG diagrams
- Spec annotations with leader lines pointing at diagram parts
- Figure labels and revision marks (`REV B`) on every section
- Yellow reserved for warnings, CTAs, and the one number that matters

## Don't

- No photography without converting to white-on-blue line treatment
- No rounded corners, no gradients, no shadows
- No more than two colors per viewport: white lines + one yellow accent
- No marketing fluff — every claim gets a number next to it

## The one weird thing

Either a running "sheet index" in the nav (`SHEET 01/08 — REV C`), or every
button drawn as a labeled part (`[ BOLT — CLICK TO TORQUE ]`). Pick one.

## Best for

Engineering firms, hardware startups, dev tools, architecture software,
manufacturing.

## Pairs with patterns

`hero-editorial`, `stats`, `pricing`, `cards`, `background-grain`

## Lineage

The drafting discipline of hand-drawn engineering sheets — every line has a
purpose and a label; the information density of a good datasheet, where the
diagram is the argument.
