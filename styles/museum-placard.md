<!--tz-meta {"id":"museum-placard","name":"Museum Placard","vibe":"Gallery walls and catalog restraint: a placard, a number, and nothing you don't need.","file":"styles/museum-placard.md","tags":["museum","gallery","placard"],"best_for":["galleries","museums","auctions"],"fonts":{"display":"Cormorant Garamond","body":"EB Garamond","mono":"Space Mono"},"tokens":{"bg":"#f7f4ed","ink":"#1c1a16","accent":"#8c2b1f","muted":"#7a746a","line":"#d8d3c6"},"dials":{"variance":3,"motion":2,"density":2}} -->
# Museum Placard

> Gallery walls and catalog restraint: a placard, a number, and nothing you
> don't need.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f7f4ed` | Gallery wall — warm white |
| `--surface` | `#ffffff` | Placard white — cards, labels |
| `--ink` | `#1c1a16` | Catalog black — text |
| `--muted` | `#7a746a` | Pencil gray — wall labels, captions |
| `--accent` | `#8c2b1f` | Oxblood — the single red line, the one red dot |
| `--line` | `#d8d3c6` | Placard edges, hairlines |

## Type

- **Display:** Cormorant Garamond 500 — large, quiet, museum-title elegant.
  Italics for artwork titles, always.
- **Body:** EB Garamond 400 — wall-text voice: clear, unhurried, authoritative.
- **Mono:** Space Mono — catalog numbers, dates, dimensions
  (`No. 042 — 1889 — 73 × 92 CM`).

Google Fonts: `Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=EB+Garamond:ital@0;1&family=Space+Mono:wght@400;700`

## Spacing & shape

- Enormous margins; a placard is small text on a large wall. Generosity is the
  luxury.
- Every work gets a label block: title (italic), artist/year, one-sentence
  note, catalog number in mono — the placard layout, reused everywhere.
- Hairline rules frame each section like a gallery wall boundary.
- Radius: `0` on placards, `999px` nowhere. The red dot is a perfect circle.

## Motion

Barely any — fade in slowly, like the lights coming up. Hover on a work:
a slight scale and the label brightens. The art shouldn't compete with the
frame; neither should the animation.

## Do

- Title, artist, year, medium, dimensions — the five-line placard, always
- Numbered galleries: "Room 1", "Room 2", with wall-text intros
- Oxblood used once per room: one headline word, one sold dot, one rule
- Bid/price in mono, set apart like a lot number at auction

## Don't

- No color beyond the wall, the ink, and the oxblood
- No busy grids — one work per row on desktop, always with breathing room
- No exclamation marks, no hype adjectives; the work speaks or it doesn't
- No dark mode; galleries are lit

## The one weird thing

Either every section opens with a wall-text paragraph of exactly three
sentences, or each piece carries a red dot when "acquired/sold" that appears
on scroll. Pick one.

## Best for

Galleries, museums, auction houses, framers, art advisors.

## Pairs with patterns

`hero-editorial`, `nav-minimal`, `stats`, `footer`, `cards`

## Lineage

The restraint of a well-hung exhibition — the label never upstages the work;
the catalog logic of auction lots, where numbering and order carry authority.
