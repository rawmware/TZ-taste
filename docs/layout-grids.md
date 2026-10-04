<!--tz-meta {"id":"layout-grids","title":"Layout and Grids","file":"docs/layout-grids.md","description":"12-column grids, asymmetric grids, bento logic, rhythm, and breaking the grid exactly once."} -->
# Layout and Grids

Layout slop is structural: everything centered, everything in threes,
every section the same padding, cards floating in soft shadows. Good
layout is a grid with opinions — most of the page obeys it, one thing
deliberately doesn't.

## The 12-column grid

Twelve columns because 12 divides by 2, 3, 4, and 6 — every common split
without fractions. The rules:

1. **Everything aligns to it.** Text, images, cards, dividers — if an
   edge doesn't sit on a column line, it's either a mistake or the one
   deliberate break (see "break the grid once").
2. **Gutters, not margins, separate columns.** One gutter width
   (24–32px desktop, 16–20px mobile), consistent everywhere. Eyeballing
   gaps between cards is how "almost aligned" happens.
3. **Content rarely spans all 12.** Full-bleed-everything is a template
   tell. Real layouts live in 8, 7+5, 8+4, 6+6 splits. The 12-col grid
   is a *constraint* — if everything is 12 wide, you don't have a grid,
   you have a stack.
4. **Max width, then stop.** 1200–1280px for marketing, 1440px for
   dashboards, 720px (65ch) for long-read. Beyond that, whitespace —
   not stretched content. Full-viewport-width text columns are a
   readability failure (see typography guide: measure).

CSS: `grid-template-columns: repeat(12, 1fr)` on the container, children
placed with `grid-column: span N` / explicit lines. On mobile, collapse
to 4–6 columns — don't just stack everything single-file unless the
content wants it (cards can go 2-up on mobile; text goes full width).

## Asymmetry beats symmetry

Symmetry is the default; asymmetry is the decision (skill rule). The
common asymmetric moves:

- **Offset hero:** headline starting at column 2, visual bleeding off
  the right edge. (See `patterns/hero-editorial.html`.)
- **7/5 split:** text 7, visual 5 — or 5/7. Unequal splits create
  tension; 6/6 is a standoff.
- **Staggered rows:** cards offset vertically (second column starts 64px
  lower). Instant editorial feel, zero extra components.
- **Hanging elements:** a pull-quote or numeral breaking out of the
  text column into the margin. `editorial-serif`'s signature.
- **Bottom-heavy sections:** dense content low, vast whitespace above.
  `ma-japanese` lives here.

Asymmetry rule: **offset with intent, align everything else.** An offset
headline with ragged body alignment looks broken. The grid still governs
— asymmetry is a placement decision inside the grid, not the absence of
one.

## Bento logic

Bento grids (see `patterns/bento.html`) are the current default for
feature sections — which means they're one step from slop. Bento works
when it follows logic; it's slop when it's decorative tiling.

**When bento is right:** heterogeneous content with a natural size
hierarchy — one big visual, a few medium features, small stats. The
sizes *mean* something: big = important.

**Bento rules:**

1. **One hero cell.** The largest cell is 2× the others and holds the
   strongest content (product shot, key metric, primary visual). Bento
   with four equal cells is just cards with extra steps (ANTI-SLOP #2).
2. **Cells align to the grid.** Bento inside the 12-col grid, not
   instead of it. Cell edges on column lines.
3. **Vary the content type per cell:** visual, stat, quote, mini-feature.
   Four text-only cells in a bento is a list pretending to be a grid.
4. **Gaps are hairlines or gutters, not shadows.** Bento cells separated
   by `line`-color hairlines read as designed; soft-shadow-separated
   cells read as pancake stack (ANTI-SLOP #16).
5. **Don't bento everything.** One bento section per page. Two bentos
   and the page is a tile catalog.

**When to use rows instead:** homogeneous content (pricing tiers, team
members, changelog entries) wants rows or a simple grid — uniform items
in uniform containers. Forcing uniform content into varied bento cells
is decoration.

## Rhythm

Rhythm is vertical spacing with a system. ANTI-SLOP #15: every section
the same padding = no rhythm = template.

**The spacing scale:** pick one and never eyeball margins (skill rule).
`8 / 16 / 32 / 64 / 128` (px) covers everything. Every margin, padding,
and gap is a scale step. "24px because it looked right" is banned —
round to 16 or 32 and move on.

**Section padding:** `py-24 md:py-40` minimum for marketing sections
(skill rule) — 96px mobile, 160px desktop. Cramped sections read as
cheap; generous whitespace reads as confidence. Dense DNAs
(`retro-terminal` density 8, `industrial-brutalist` 7) compress to
`py-16 md:py-24` — density is a DNA trait, still on a scale.

**Rhythm = variation with pattern.** Alternate section *weights*, not
just padding: dense section → airy section → dense. A full-bleed
statement (one huge line of type, vast padding) between two dense
sections is a rest — music needs rests. What you must not do: alternate
light/dark/light/dark bands with identical padding (ANTI-SLOP #10).

**Internal rhythm:** within a section, the gap between eyebrow→headline
(16) < headline→subhead (24) < subhead→CTA (32) < CTA→visual (64).
Related things sit closer; section breaks are the largest gaps. If all
gaps are equal, nothing is grouped.

## One focal point per viewport

Each screenful gets one thing to look at first (skill rule). Everything
else supports it. Enforcement:

- The focal point is the largest, highest-contrast, or most-isolated
  element. Only one of those superlatives per viewport.
- Supporting elements step down clearly: focal → secondary → tertiary.
  If two elements compete for first look, demote one (smaller, muted
  color, less whitespace around the other).
- Above the fold, the focal point is usually the headline *or* the
  visual — not both at full volume. A huge headline plus a huge
  competing visual is two focal points.

## Hairlines beat shadows

Structure via `1px` lines and real borders, not soft shadows (skill
rule). Why: hairlines are precise and cheap; stacked soft shadows are
the AI-card-stack tell (ANTI-SLOP #16).

- Sections separated by hairline rules (`line` token) read as editorial.
- Cards: 1px border in `line` color, sharp or small radius. Shadow only
  on hover-lift, and even then subtle — or the DNA's signature shadow
  (`neo-brutalist-pop`'s hard offset shadow is structural, not soft).
- Tables and data: hairlines between rows, never card-per-row.
- The exception that proves it: `glass-calm` uses blur + translucency
  instead of borders — that's the DNA's concept, committed fully, not
  a half-measure.

## Break the grid once

The one-weird-thing rule applied to layout: exactly one deliberate grid
violation per page. A rotated label, an overlapping image, a full-bleed
marquee cutting through a contained layout, a numeral at 20vw.

Rules for the break:

1. **One.** Two breaks is chaos; zero is a template.
2. **Deliberate and legible as deliberate.** It should look *chosen* —
   oversized, aligned to something unexpected, clearly on purpose. A
   4px misalignment looks like a bug; a 120px overlap looks like design.
3. **The rest stays disciplined.** The break lands because everything
   around it obeys the grid. Contrast needs a background of order.
4. **Never break with content that must be read.** The break is for
   decoration, numerals, labels — not body copy, not CTAs, not forms.

## Viewport and flow rules

- **Use `min-h-[100dvh]`, never `h-screen`** (skill rule, ANTI-SLOP
  #13). Fixed viewport heights clip content on small screens and when
  browser chrome resizes. `dvh` tracks the *dynamic* viewport (mobile
  URL bars); `svh`/`lvh` exist for special cases.
- **Heroes don't need to be full-height.** A hero that's 70vh with the
  next section peeking in invites scrolling; a forced 100vh hero with
  clipped content frustrates. Let content set height.
- **Sticky elements:** one sticky thing per page (nav *or* a
  scroll-stage, not both competing). Sticky nav: solid bg after scroll
  — transparent-over-content sticky navs that become unreadable are a
  classic generated-site bug.
- **Footers** are real: sitemap columns, contact, status, legal —
  never just "© 2026 All rights reserved" (ANTI-SLOP #14). The footer
  is the page's last impression; a real one signals a real company.

## Z-patterns and F-patterns (and when to ignore them)

Eye-tracking patterns are descriptive, not prescriptive. What matters:

- **Put the primary action where the eye lands after the headline.**
  Usually directly under the subhead (left-aligned layouts) — the
  template hero gets this right; it's the *surrounding sameness* that's
  slop, not the CTA placement.
- **Left-aligned beats centered** for anything longer than 3 lines.
  Centered layouts force the eye to re-find the line start every line.
  Center only short statements.
- **The bottom-right is the terminal point** of a left-to-right scan —
  secondary CTAs and "next step" links live there naturally.

## Self-review checklist

- [ ] 12-col grid (or deliberate alternative); every edge on a column line
- [ ] Content uses real splits (7/5, 8/4) — nothing full-bleed by default
- [ ] Asymmetric placement somewhere; symmetry only where content wants it
- [ ] Bento (if used): one hero cell, grid-aligned, varied content types,
      hairline gaps, once per page
- [ ] Spacing scale (8/16/32/64/128) — zero eyeballed margins
- [ ] Section padding generous (`py-24 md:py-40` marketing); rhythm varies
      by section weight, not zebra striping
- [ ] One focal point per viewport; clear visual hierarchy below it
- [ ] Hairlines/borders for structure; soft shadows only on hover or as
      DNA signature
- [ ] Exactly one deliberate grid break, legible as deliberate
- [ ] `min-h-[100dvh]` not `h-screen`; sticky limited to one element;
      footer is real

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). The grid is a
discipline, not a cage — obey it everywhere except the one place you
don't, on purpose.*
