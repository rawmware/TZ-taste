<!--tz-meta {"id":"origami-fold","name":"Origami Fold","vibe":"Paper-fold geometry: crisp creases, washi texture, single-sheet discipline. Nothing is added; everything is folded.","file":"styles/origami-fold.md","tags":["origami","paper","fold"],"best_for":["stationery","tea-brands","architecture-studios","gift-shops"],"fonts":{"display":"Space Grotesk","body":"Outfit","mono":"Space Mono"},"tokens":{"bg":"#f6f2e8","ink":"#23272e","accent":"#b3402e","muted":"#8b8579","line":"#23272e1f"},"dials":{"variance":6,"motion":4,"density":3}} -->
# Origami Fold

> Paper-fold geometry: crisp creases, washi texture, single-sheet discipline.
> Nothing is added; everything is folded.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f6f2e8` | Washi paper |
| `--surface` | `#ece5d3` | Folded facet — the slightly darker plane |
| `--ink` | `#23272e` | Ink for type and crease labels |
| `--muted` | `#8b8579` | Soft gray, captions |
| `--accent` | `#b3402e` | Folded red — one crease of color per page |
| `--line` | `#23272e1f` | Crease hairlines (alpha allowed on lines) |

## Type

- **Display:** Space Grotesk (500/700, precise, sentence case)
- **Body:** Outfit (1rem, clear, unhurried)
- **Mono:** Space Mono (fold steps — "Step 04", "Valley fold")

Google Fonts: `Space+Grotesk:wght@500;700` `Outfit:wght@400;500;600` `Space+Mono:wght@400;700`

## Spacing & shape

- Facets: panels are flat planes in the two paper tones, joined at crease lines. Mountain and valley hairlines divide content.
- Compositions fold diagonally — a section creases from bottom-left to top-right.
- Radius: `0px`. Paper cuts; it doesn't round.

## Motion

Sections unfold — a crisp `rotateX` from the crease line (transform only,
500ms). Hover deepens a facet's tone instead of lifting a shadow. With reduced
motion: flat, folded, finished.

## Do

- Number everything like fold steps: "Step 01 — Choose your paper."
- Run one red crease line the length of the page as its spine.
- Show facets with the two paper tones, not depth — flatness is the point.
- Microcopy with discipline: "One sheet. Seven folds. No glue."

## Don't

- No drop shadows — paper facets are flat.
- No gradients; tone changes happen at the crease, never in a blend.
- No technical grid overlays or dimension lines — that is a different DNA.
- No rounded corners, no emoji icons — draw crease diagrams; no lorem.

## The one weird thing

The footer carries the unfolded net: a flat crease-pattern diagram of the
whole page, every section a labeled facet. One diagram, honest geometry.

## Best for

Stationery, tea brands, architecture studios, gift shops.

## Pairs with patterns

`hero-editorial` `how-it-works-steps` `cards-editorial` `faq-hairline` `cta-type` `footer`

## Lineage

Origami crease-pattern discipline — one sheet, mountain and valley folds, the
economy of nothing added. Not blueprint-tech: this is paper craft — folds,
facets, washi grain — where blueprint-tech is technical drawing — grids,
dimension lines, drafting precision. Principles only — 100% original
implementation.
