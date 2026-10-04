<!--tz-meta {"id":"chalkboard-cafe","name":"Chalkboard Cafe","vibe":"A cafe menu board in chalk: slate black, hand-lettered specials, doodled borders.","file":"styles/chalkboard-cafe.md","tags":["chalk","cafe","handwritten"],"best_for":["cafes","bakeries","menus","small-shops"],"fonts":{"display":"Caveat","body":"Patrick Hand","mono":"DM Mono"},"tokens":{"bg":"#1d1f1e","ink":"#f2efe6","accent":"#e8c15a","muted":"#9aa0a0","line":"#f2efe633"},"dials":{"variance":5,"motion":2,"density":6}} -->
# Chalkboard Cafe

> A café menu board in chalk: slate black, hand-lettered specials, doodled borders.
> Nothing here was typed. Everything here was written.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#1d1f1e` | Slate blackboard background |
| `--surface` | `#242726` | Framed menu panels, special boards |
| `--ink` | `#f2efe6` | Chalk white text |
| `--muted` | `#9aa0a0` | Smudged chalk — notes, hours, asides |
| `--accent` | `#e8c15a` | Chalk yellow — the daily special, one underline per board |
| `--line` | `#f2efe633` | Chalk-dust dividers (alpha allowed on lines) |

## Type

- **Display:** Caveat (hand-lettered, slightly rotated, sentence case — like the owner wrote it this morning)
- **Body:** Patrick Hand (menu items, notes, 1–1.125rem)
- **Mono:** DM Mono (prices with leader dots — "espresso .... $3.50", tabular and tidy)

Google Fonts: `Caveat:wght@500;700` `Patrick+Hand:wght@400`
`DM+Mono:wght@400;500`

## Spacing & shape

- Sections framed like separate boards on a wall: 2px chalk borders, small gaps between.
- Radius: `2px` — chalk corners are never perfectly square.
- Headlines tilt −1° to 1.5°; body copy stays level so it stays readable.
- Rhythm: one framed board, one unframed doodle, alternating down the page.

## Motion

Chalk strokes draw themselves in once per section (SVG stroke animation on
the dividers, 600ms). Everything else fades in gently. Nothing loops —
chalk does not move after it is written. Honor `prefers-reduced-motion`:
dividers render already drawn.

## Do

- End every section with a hand-drawn divider doodle — a different squiggle each time: an arrow, a coffee ring, a small sun.
- Set prices in mono with leader dots, right-aligned: "oat latte ........ $5.25".
- Use chalk yellow for exactly the daily special: "Today's soup: roasted tomato · $7".
- Doodle the borders: a thin chalk coffee cup in the corner, a wheat stalk by the bakery list.

## Don't

- No perfect geometry, no pixel-snapped grids — the charm is the wobble.
- No neon, no gradients; chalk is matte or it is not chalk.
- No stock photos of lattes — draw the cup in chalk line, or skip the image.
- No lorem — a chalkboard with fake writing is a blank board. Write the actual menu.

## The one weird thing

Pin one "specials" board per page with a rotated chalk-yellow frame and a
doodled star in each corner: "Soup of the day — roasted tomato · $7.
Bread's out of the oven at 8." One board, always slightly crooked, always
the first thing a regular looks for.

## Best for

Cafés, bakeries, handwritten menus, small neighborhood shops.

## Pairs with patterns

`features-checklist` `cards-recipe` `faq-hairline` `heroes-typed-letter` `forms-newsletter-inline` `nav-minimal` `pricing-single`

## Lineage

Café chalkboard lettering and hand-painted menu boards; the economy of chalk —
one color for the board, one for the special; chalk-art doodles as the only
illustration a small shop can afford. Principles only — 100% original
implementation.
