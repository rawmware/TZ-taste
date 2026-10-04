<!--tz-meta {"id":"spacing-rhythm","title":"Spacing & Rhythm","file":"docs/spacing-rhythm.md","description":"The 8pt system, section padding scales, optical vs mathematical spacing, density dials."} -->
# Spacing & Rhythm

Spacing is the cheapest form of taste. It costs no creativity — only
discipline. A page with a real spacing system looks expensive; a page with
eyeballed margins looks generated, because eyeballed margins *are* what
models produce.

## The 8pt system

Base unit: **8px**. Every spacing value in the UI is a multiple of 8, with 4px
allowed for micro-adjustments (icon-to-text gaps, hairline offsets). That's
the whole system:

| Token | Value | Used for |
|---|---|---|
| `space-1` | 4px | icon/text gaps, hairline nudges |
| `space-2` | 8px | tight gaps, list item padding |
| `space-3` | 12px | — (avoid; not a multiple of 8) |
| `space-4` | 16px | card padding, input padding |
| `space-6` | 24px | related-element groups |
| `space-8` | 32px | component separation |
| `space-12` | 48px | block separation |
| `space-16` | 64px | section-internal rhythm |
| `space-24` | 96px | small section padding |
| `space-32` | 128px | standard section padding |
| `space-40` | 160px | large section padding |

In Tailwind these map directly (`p-4`, `gap-8`, `py-32`). In raw CSS, define
them as custom properties once and never write a bare pixel value again:

```css
:root {
  --space-2: 8px;  --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px; --space-32: 128px; --space-40: 160px;
}
```

**Rule: if a spacing value isn't on this scale, it's wrong until proven
otherwise.** The one legal exception is optical correction (below).

## Section padding: rhythm, not wallpaper

ANTI-SLOP #15: *every section the same vertical padding — no rhythm.* The fix
is a **padding scale with at least three distinct levels**, used deliberately:

- **Hero/intro:** `pt-32 pb-40` (asymmetric — more air *below* the first
  viewport content pulls the eye down).
- **Standard content sections:** `py-24 md:py-32`.
- **Breath sections:** `py-32 md:py-40` — the one big pause in the middle of
  the page (statement, quote, full-bleed image).
- **Dense/utility sections:** `py-16` — footers, FAQ lists, form blocks that
  are meant to feel efficient.

Rules:

1. **Never repeat the same `py-` three sections in a row.** Vary between
   standard and breath at minimum.
2. **Mobile gets roughly 60% of desktop section padding.** `py-24 md:py-40`
   is the canonical pair. Cramped desktop sections read as cheap (SKILL.md:
   `py-24 md:py-40` minimum).
3. **Adjacent sections can share an edge.** Two `py-24` sections back to back
   produce 192px of dead air between them — merge into one section or drop
   one's padding.
4. **Dark sections need a reason** (ANTI-SLOP #10) — and when they appear,
   give them *more* padding than light sections, not less. Dark + cramped
   reads as a banner ad.

## Optical vs mathematical spacing

The scale is mathematical. Your eye is not. Two corrections you must apply
by hand:

**1. Overshoot.** Rounded shapes (circles, pills, rounded cards) look smaller
than square ones at the same size. Add 2–4px of padding around circles and
fully-rounded elements so they *feel* equal. Avatars in a row need `space-1`
more gap than square thumbnails do.

**2. Baseline weighting.** A headline followed by body copy needs *less* gap
below the headline than the math says, because the headline's descenders and
the paragraph's cap-height already create air. `mt-4` after an h1 usually
feels like `mt-6`. Conversely, a button under a paragraph needs the full
`mt-8` — buttons are dense rectangles and they sit heavy.

**3. Icons sit 1–2px high.** A 20px icon next to 16px text always looks
slightly low. Nudge with `translate-y-[-1px]` or equivalent. This is the
single most common "something looks off" in AI-generated UI and the fix is
one line.

Optical correction is the *only* place bare pixel values are allowed. Comment
them: `/* optical: icon baseline nudge */`.

## Density dials

SKILL.md's DENSITY dial (1–10) is a spacing instruction in disguise. Map it
to your scale:

| Density | Meaning | Section padding | Gaps | Example DNA |
|---|---|---|---|---|
| 1–2 | Vast whitespace, one idea per screen | `py-40`+ | `space-16`+ | ma-japanese (1), dark-luxe (2) |
| 3–4 | Airy but functional | `py-32` | `space-8`–`space-12` | editorial-serif (2→4), soft-minimal |
| 5–6 | Standard product density | `py-24` | `space-6`–`space-8` | soft-minimal (5), neo-brutalist-pop (5) |
| 7–8 | Dense, data-forward | `py-16` | `space-4`–`space-6` | industrial-brutalist (7), retro-terminal (8) |
| 9–10 | Dashboard maximalism | `py-8`–`py-12` | `space-2`–`space-4` | dashboards built on swiss-rational |

Rules:

- **Set density from the brief, not from fear.** Empty-feeling pages are
  usually density 2 pages that needed density 5 — the designer was afraid of
  clutter. Clutter is a *grouping* problem, not a *spacing* problem.
- **Density is page-level, not section-level.** One dense pricing table on an
  airy landing page is fine; five sections each at a different density is a
  page arguing with itself.
- **Dashboards invert the section rule.** App shells use tight, uniform
  spacing *on purpose* — rhythm there comes from hierarchy (type size, rule
  weight), not from padding variety. Don't apply landing-page breathing to
  a data table.

## The common failures (and the one-line fixes)

| Symptom | Cause | Fix |
|---|---|---|
| Page feels "template-y" | identical `py-16` everywhere | three-level padding scale |
| Hero feels disconnected from nav | `pt-16` under a fixed header | `pt-32`, asymmetric hero padding |
| Cards feel cramped | `p-4` on dense content | `p-6` minimum for cards; `p-8` for feature cards |
| Form feels endless | equal gaps between all fields | group related fields at `gap-4`, groups at `gap-8` |
| Footer feels glued on | `py-8` footer after `py-32` section | footer gets `py-16` minimum + a hairline rule above |
| Mobile feels broken | desktop padding unscaled | audit every section at 390px; apply the 60% rule |
| "Something's off" near icons | icon baseline | 1–2px optical nudge |

## The spacing audit (run before ship)

- [ ] Every spacing value is on the 8pt scale or commented as optical
- [ ] No section repeats the previous section's exact padding
- [ ] Hero uses asymmetric padding (more below than above)
- [ ] Card padding ≥ `p-6`
- [ ] Icon baselines optically nudged
- [ ] 390px viewport checked — nothing cramped, nothing clipping
- [ ] Dark sections (if any) have *more* padding, not less

## Per-DNA notes

- **ma-japanese:** spacing *is* the design. When in doubt, add one more
  `space-8`. Empty space here is content.
- **industrial-brutalist / neo-brutalist-pop:** tight is correct, but borders
  replace padding as structure — `p-4` with a 2px border reads roomier than
  `p-4` without one.
- **retro-terminal:** density 8 is the DNA's native habitat. Line-height gets
  tight (1.4) and gaps shrink — but never below `space-2`, or scanline text
  becomes soup.
- **glass-calm:** frosted surfaces need *extra* internal padding (`p-8`
  minimum) or the blur reads as smudged glass.
- **y2k-chrome / acid-rave:** high variance means deliberate collisions are
  legal — overlapping elements still snap to the 8pt grid underneath.

## Spacing in common components

**Nav bars.** Height 64–72px desktop, 56–64px mobile. Logo-to-links gap
`space-8`; link-to-link gap `space-6`. A nav with 12px gaps feels apologetic;
with 48px gaps it falls apart. Fixed navs need page `pt-` equal to nav height
+ `space-4` — content hiding under a fixed header is a spacing bug, not a
z-index bug.

**Heroes.** The most under-spaced element on the internet. Minimum viable
hero: `pt-32 pb-40` desktop, `pt-24 pb-32` mobile. Headline-to-subtext
`space-6`; subtext-to-CTA `space-8`. If the hero has a background treatment
(image, color band), the padding grows one level — treatments need air to
read as intentional rather than decorative.

**Cards.** Internal padding `p-6` minimum, `p-8` for feature cards. Title to
body `space-2`; body to action `space-4`. Card-to-card gap `space-6` (grid)
— tighter and they merge visually, looser and the grid dissolves. Cards in
neo-brutalist-pop or industrial-brutalist can go `p-4` because the 2px border
does structural work that padding would otherwise do.

**Footers.** `py-16` minimum, `pt-16` always paired with a hairline rule
above — the rule is what separates footer from content, not the padding.
Column gap `space-12`; link-to-link within a column `space-2`. Footers are
utility space: density goes *up* here (tighter than body sections), but the
top edge gets ceremony (the rule, the padding) so it doesn't feel glued on.

**Forms.** Covered in docs/designing-forms.md — the short version: fields at
`space-6`, groups at `space-8`–`space-12`, labels at `space-2` above inputs.
A form is a rhythm instrument; equal gaps everywhere make it a drone.

## Scale violations: a rogues' gallery

Real examples of values that break the scale, and what they should be:

| Violation | Why it's wrong | Fix |
|---|---|---|
| `margin: 13px` | not on the scale; eyeballed | `space-2` (8px) or `space-4` (16px) — decide |
| `gap: 10px` between cards | in-between value, reads as accidental | `space-4` if tight, `space-6` if airy |
| `padding: 40px` on a section | not a scale value; also too small for a section | `space-12` (48px) minimum, usually `space-24`+ |
| `margin-top: 7px` optical nudge, uncommented | optical corrections must be commented | keep the 7px, add `/* optical */` |
| `py-16` on every section | scale-legal but rhythm-dead | vary: standard / breath / dense |
| `space-1` (4px) section padding on mobile | micro-token used at macro scale | mobile sections start at `py-16` |

**The 13px rule of thumb:** if you see a spacing value that isn't divisible
by 4, someone eyeballed it. Divisible-by-4-but-not-8 (12, 20, 28) is a
judgment call — allowed for optical corrections, suspect everywhere else.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
skill/SKILL.md layout rules, docs/design-tokens-explained.md.*
