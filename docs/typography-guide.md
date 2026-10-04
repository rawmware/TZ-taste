<!--tz-meta {"id":"typography-guide","title":"The Typography Guide","file":"docs/typography-guide.md","description":"Pairing rules, scale construction, measure, tracking and leading, and webfont loading done right."} -->
# The Typography Guide

Typography is the highest-leverage design decision on any page. It's also
where AI slop is most obvious: Inter at default weights, one size for
everything, line-lengths running edge to edge. Fix the type and a mediocre
layout starts looking intentional.

## The trio: display, body, mono

Three typefaces max, each with a job (skill rule):

- **Display** — headlines, hero, big numerals. Voice and personality live
  here. This is the typeface people remember.
- **Body** — paragraphs, UI labels, everything readable. Invisible when
  working; the display's quiet partner.
- **Mono** — code, data, labels, timestamps, eyebrows. Structure and
  technical texture.

Not every DNA needs all three visibly. `retro-terminal` runs mono-only
(IBM Plex Mono for everything — the DNA's concept *is* the terminal).
`soft-minimal` uses Instrument Sans for display and body (same family,
different weights — harmony over contrast). `glass-calm` runs Outfit for
both. The rule is three *max*, not three *required*.

What never works: two display faces fighting (pick one voice), or body
text set in a display face (display faces are drawn for large sizes —
their spacing falls apart in paragraphs).

See docs/picking-type-pairings.md for the full pairing method and eight
worked examples mapped to DNAs.

## Pairing rules

1. **One voice per page.** The display face is the personality; body and
   mono support it. If the display is loud (Anton, Archivo Black), the
   body must be quiet (Space Grotesk, Inter-ish neutrals). Two loud
   faces = shouting match.
2. **Contrast or harmony — pick one axis.** Contrast pairing: serif
   display + grotesque body (`editorial-serif`: Fraunces + Newsreader —
   actually both serif, so that's harmony; true contrast would be
   Fraunces display + a neutral sans body). Harmony pairing: one family,
   weight/scale doing the work (`soft-minimal`, `glass-calm`). Mixing
   both strategies looks undecided.
3. **Check x-heights.** Body candidates should have similar x-height to
   sit well together in mixed lines (e.g. a mono label inside a sans
   sentence). Mismatched x-heights make mixed text look broken.
4. **Mono is seasoning.** Mono works for eyebrows, captions, data, and
   buttons — small doses. A whole page in mono is a concept
   (`retro-terminal`), not a default.
5. **Weights: buy the range, use two.** Load 400/500/700 (or a variable
   font), but design with regular + one strong weight. If every heading
   is a different weight, you don't have a scale — you have indecision.

## Scale construction

One type scale, used consistently (skill rule): display / h1 / h2 / body /
small / micro. Build it, then never eyeball a font-size again.

**The modular method:**

1. Pick body size: 16px (17–18px for long-read DNAs like `docs-solar`,
   `editorial-serif`).
2. Pick a ratio: 1.25 (major third, calm) for `soft-minimal`,
   `glass-calm`; 1.333 (perfect fourth) for editorial DNAs; 1.5+ for
   loud DNAs (`acid-rave`, `neo-brutalist-pop` — display type *should*
   feel oversized).
3. Generate: body × ratio^n. Round to whole pixels.

Example (ratio 1.333, body 16): micro 12 · small 14 · body 16 · h2 21 ·
h1 28 · display 37. Then display gets fluid sizing (below).

**Fluid display type:** fixed px display sizes break across viewports.
Use `clamp()`:

```css
.display { font-size: clamp(2.5rem, 1.5rem + 5vw, 5rem); }
```

This gives 40px at 390px wide, 80px at 1440px — one declaration, no
breakpoints. Every DNA's hero should use fluid display. ANTI-SLOP #13
(clipped `h-screen` sections) usually comes from fixed display sizes
colliding with small viewports — fluid type fixes the root cause.

**Scale discipline:** if a size isn't on the scale, it doesn't ship.
"17px because it looked right" is how pages accumulate eleven font
sizes. Six steps, committed.

## Tracking (letter-spacing)

- **Display, large:** tight. `-0.02em` to `-0.05em` (skill rule). Big
  type with default spacing looks loose and cheap; tightening it is the
  single fastest typographic upgrade. The larger the size, the tighter
  the tracking.
- **Body:** `0`. Never letter-space lowercase body text (skill rule).
  It destroys readability and always looks like a mistake.
- **Uppercase labels/eyebrows:** `+0.05em` to `+0.12em`, small size
  (11–13px), often mono. This is the *only* place positive tracking
  belongs. Uppercase + tracking + small = the "label" voice every DNA
  uses for eyebrows, kickers, and metadata.
- **Buttons:** `0` or very slight `+0.01em`. Tracked-out buttons read
  as 2014 Bootstrap.

## Leading (line-height)

- **Display/headlines:** 1.0–1.15. Tight leading on big type; let
  descenders nearly touch across lines. `1.0` on a two-line hero is
  correct and looks expensive.
- **h2/h3:** 1.2–1.3.
- **Body:** 1.5–1.7. Long-read DNAs (`docs-solar`, `editorial-serif`)
  go 1.65–1.75. Dense DNAs (`retro-terminal`, `swiss-rational`) can run
  1.4–1.5. Below 1.4 on paragraphs is a readability failure.
- **Small/micro:** 1.4–1.5. Small text needs proportionally *more*
  leading, not less.
- **Never** set line-height in px on body text — unitless ratios scale
  with the font-size.

## Measure (line length)

45–75 characters per line for body copy (skill rule). This is the most
violated rule in generated UI — full-width paragraphs on desktop.

- Implement with `max-width: 65ch` on the text container, not by
  eyeballing column widths. `ch` units track the font.
- Long-read: 60–70ch. Marketing: 45–55ch (shorter lines read as more
  confident — compare a manifesto's narrow column to a terms page).
- Centered text: keep it short (2–3 lines max) and narrow. Centered
  paragraphs at full measure are unreadable — another reason the
  template centered hero is slop (ANTI-SLOP #3).
- `ma-japanese` and `editorial-serif` can go narrower than 45ch for
  pull-quotes and statements — narrow measure as a deliberate voice,
  not an accident.

## Hierarchy without size

Size isn't the only hierarchy tool, and over-relying on it produces the
"everything is a different size" mess. The full toolkit, in order of
subtlety:

1. **Weight** — 400 vs 600 within the same size.
2. **Color** — ink vs muted (typographic emphasis, per the color guide).
3. **Case + tracking** — uppercase micro-labels vs sentence case.
4. **Size** — the scale steps.
5. **Style** — italic serif for emphasis inside roman body
   (`editorial-serif`'s signature move).

A section header system using only 1–3 (mono eyebrow in accent, h2 in
ink, body in ink/muted) beats one using size jumps everywhere. Restraint
reads as confidence.

## Webfont loading

Slow or flashing type is a quality failure users feel but can't name.
Rules:

- **`font-display: swap` always.** Text renders immediately in the
  fallback, then swaps. `block` (invisible text while loading) and
  `auto` are never correct for content.
- **Preload the display face only** (the hero's font). One
  `<link rel="preload" as="font">` for the woff2 you need above the
  fold. Preloading everything defeats the purpose.
- **Subset ruthlessly.** `latin` subset unless the brief needs more.
  A full variable font with every glyph is 200KB+; latin-subset is
  often under 30KB.
- **Prefer variable fonts.** One file for all weights (e.g. Fraunces
  variable, 72pt optical size for display). Fewer requests, finer
  weight control.
- **Match fallback metrics.** Set `size-adjust`, `ascent-override`,
  `descent-override` on the `@font-face` fallback so the swap doesn't
  reflow the layout. Or accept system-ui as the body face deliberately
  (some DNAs do — but then it's a *decision*, documented, not a default).
- **Two families max in practice.** Display + body from two families is
  the common case; mono is small enough to be system mono
  (`ui-monospace`) in a pinch. Every additional family is another
  render-blocking request.

Self-host fonts (Google Fonts download, serve from your CDN) rather
than hotlinking — one less third-party dependency, no FOUT from slow
font CDNs, and it works offline.

## Per-DNA type notes

- **editorial-serif:** Fraunces (display, with optical sizing — use the
  144pt cut huge, 9pt cut small) + Newsreader (body). Italic emphasis.
  The DNA where type *is* the design.
- **swiss-rational:** Archivo throughout, weight contrast only. Type
  does structural work — tables, indexes, numbered sections.
- **dark-luxe:** Cormorant Garamond whisper-thin at large sizes +
  Outfit for UI. Never set Cormorant below 20px — thin serifs die small.
- **acid-rave:** Anton at maximum size, tight leading, uppercase. Body
  in Space Grotesk. The display should feel like it's shouting through
  a PA system.
- **glass-calm:** Outfit everywhere, soft weights. Rounded, friendly
  letterforms match the frosted aesthetic.
- **retro-terminal:** IBM Plex Mono only. Line-height 1.4–1.5, generous
  for a dense DNA — terminals are readable because of rhythm, not size.
- **neo-brutalist-pop:** Archivo Black display + Space Grotesk body.
  Display can rotate (-2deg) or get an outline treatment — the DNA
  allows type as illustration.
- **industrial-brutalist:** Anton condensed uppercase + Space Grotesk.
  All-caps labels, tabular numerals for data.
- **ma-japanese:** Shippori Mincho display + Zen Kaku Gothic New body.
  Vertical text (writing-mode) is legal here — the one DNA where it's
  a feature, not a gimmick.
- **y2k-chrome:** Unbounded display (bubbly, wide) + Space Grotesk body.
  Chrome/gradient text treatments allowed — sparingly, hero only.
- **docs-solar:** Source Serif 4 for prose (long-read comfort) + IBM
  Plex Mono for code. Body at 17–18px, leading 1.7.
- **soft-minimal:** Instrument Sans throughout. The restraint DNA —
  hierarchy from weight and color, not face changes.

## Self-review checklist

- [ ] Max three faces, each with a job (display / body / mono)
- [ ] One scale (display/h1/h2/body/small/micro), no off-scale sizes
- [ ] Display type is fluid (`clamp()`), tight tracking (-0.02 to -0.05em),
      leading 1.0–1.15
- [ ] Body leading 1.5–1.7, measure capped at 45–75ch via `max-width`
- [ ] Positive tracking only on uppercase labels; never on lowercase body
- [ ] Hierarchy uses weight/color/case before reaching for size
- [ ] `font-display: swap`, display face preloaded, subsets trimmed,
      variable fonts preferred, fonts self-hosted
- [ ] Fallback font metrics matched — no layout shift on swap
- [ ] Pairing follows the DNA's type logic (see per-DNA notes and
      docs/picking-type-pairings.md)

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). If the type is
right, half the design is done before you start.*
