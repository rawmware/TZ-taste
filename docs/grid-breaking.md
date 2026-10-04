<!--tz-meta {"id":"grid-breaking","title":"Grid Breaking","file":"docs/grid-breaking.md","description":"When and how to break the grid on purpose: the three legal breaks, bleed rules, and the optical-correction pass."} -->
# Grid Breaking

Grids exist so breaks mean something. A page where nothing breaks the grid
reads as a template; a page where everything breaks reads as an accident. The
craft is in the ratio: **roughly 90% of elements obey the grid, one to three
deliberate breaks per viewport carry the personality.**

ANTI-SLOP rule #2 (three equal cards) and #15 (identical section padding) are
both grid-obedience failures in disguise — the grid became the design instead
of serving it. Breaking the grid is not the opposite of using one. It's the
proof you know where it is.

## The three legal breaks

**1. The bleed.** Content extends past the container gutter to the viewport
edge (or past it). Images, color bands, oversized numerals. The bleed is the
most common and safest break because it keeps the baseline grid and the
column structure — it only changes the horizontal extent.

**2. The hang-off.** An element sits half inside the grid, half outside: a
caption that starts inside a text column and extends two columns past it, an
image that overlaps the gutter between two grid columns. Hang-offs create
depth without changing the page's skeleton.

**3. The collision.** Two grid-aligned elements intentionally overlap or
crowd: a headline that sits on top of an image's corner, a rotated label
that crosses a rule line. Collisions are the highest-variance move — one per
page maximum, and never on interactive elements (click targets must keep
their grid position even if their visuals overlap).

What's never legal: breaking the **baseline rhythm** (text must keep its
vertical cadence), breaking the **gutter on both sides at once** (a
full-bleed element with extra side margins reads as a mistake, not a choice),
and breaking the grid **on navigation or footers** — chrome obeys; content
plays.

## Breaks per DNA

| DNA family | Native break | Breaks to avoid |
|---|---|---|
| swiss-rational | Hang-off index numerals, one full-bleed table | No collisions — precision is the point |
| editorial-serif | Offset pull-quotes across 2 columns | Random rotation |
| neo-brutalist-pop | Collisions with hard borders | Soft bleeds (bleeds need edges here) |
| ma-japanese | Asymmetric white space (the "empty" break) | Crowding — ma never collides |
| y2k-chrome / acid-rave | Collisions everywhere; the DNA's native language | Timid half-bleeds — commit or don't |
| retro-terminal | None — break with ASCII/block decoration instead | Geometric overlaps |

## The break budget

Numbers, because "be tasteful" isn't a spec:

- **Max 3 breaks per viewport.** The fourth break is not a design decision,
  it's a lost grid.
- **One break type per section.** A section that bleeds *and* collides is
  arguing with itself.
- **Bleeds need a minimum run:** a color band that bleeds 12px past the
  container looks like a rendering bug. Minimum honest bleed is `48px`
  (or to the viewport edge — pick one, no in-between).
- **Collisions need a minimum overlap:** 8–24px reads as accidental.
  Overlap by at least `10%` of the smaller element's width or don't
  overlap at all.
- **Hang-off ratio:** the element should keep at least 60% of its mass
  inside its grid column. Less than that and it's not a hang-off, it's a
  misplaced element.

## The optical-correction pass

After placing your breaks, zoom out and check three things:

1. **The edge tension.** A bleed should touch the viewport edge with intent —
   if there's a 4px gap, either the element is inside the grid or it's
   bleeding. Fix the gap or extend to the edge.
2. **The text line.** No text should *accidentally* cross a grid line.
   Hanging text is a choice; text that just misses the margin is a bug.
3. **The mobile collapse.** Breaks designed at 1440px become collisions at
   390px. Rule: at mobile widths, bleeds stay bleeds (they scale fine),
   hang-offs collapse back into the grid, collisions get removed. Plan the
   mobile version of every break at design time.

## The grid-break audit (run before ship)

- [ ] I can point to the grid on a screenshot (it exists, it's documented)
- [ ] 1–3 breaks per viewport, each one deliberate and named
- [ ] No more than one break type per section
- [ ] Bleeds run ≥48px past the container or to the viewport edge
- [ ] Collisions overlap ≥10% of the smaller element; never on click targets
- [ ] No accidental near-misses (4px gaps, text just off the margin)
- [ ] Hang-offs keep ≥60% of their mass in-grid
- [ ] Every break has a planned mobile behavior (keep / collapse / remove)
- [ ] Chrome (nav, footer) obeys the grid everywhere

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/layout-grids.md, skill/SKILL.md layout rules, docs/spacing-rhythm.md.*
