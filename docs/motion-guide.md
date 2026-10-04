<!--tz-meta {"id":"motion-guide","title":"The Motion Guide","file":"docs/motion-guide.md","description":"When and how to animate: easing, duration, stagger, scroll choreography, reduced motion, per-DNA motion notes."} -->
# The Motion Guide

Most animation in AI-generated UI falls into two buckets: nothing, or
everything jiggling at once. Both read as defaulted. Motion has taste when it
follows rules — and when most of the page stays still so the animated parts
mean something.

## The core rule

From the skill: **motion explains or delights — never both at once, never
neither.**

- **Explains:** a drawer sliding in tells you where content lives. A tab
  underline moving tells you which state is active. Skeleton shimmer tells
  you data is loading.
- **Delights:** a hover lift on a card, a staggered hero entrance, a marquee
  drift. No information content — pure feeling.

Before adding any animation, say which one it is. If it's neither, delete it.

## The motion budget

Set the skill's MOTION dial (1–10) before writing code, then spend it:

| MOTION | Allowed |
|---|---|
| 1 | Hover states only. Nothing moves without a pointer. |
| 2–3 | Hover + simple entrances (fade/slide, staggered). |
| 4–5 | Scroll reveals, tab transitions, one signature interaction. |
| 6–7 | Scroll choreography, magnetic elements, parallax (subtle). |
| 8–10 | Cinematic sequences, 3D, scene transitions. Rare. |

Defaults from the skill: landing page 4 · dashboard 2 · portfolio 5. Each
DNA also ships a motion dial in `styles/index.json` — e.g. `docs-solar`
motion 2, `y2k-chrome` motion 8. Don't exceed the DNA's motion dial without
a reason written down.

Rule: **one hero animation per page.** The entrance, OR the scroll
choreography, OR the interactive moment. Two max on marketing pages.

## Easing

Easing is where cheap animation is exposed. The defaults are wrong.

- **Entrances:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo). Fast start,
  soft landing. Use for anything appearing: modals, menus, reveals.
- **Exits:** `cubic-bezier(0.5, 0, 0.75, 0)` or `ease-in`. Exits should be
  snappier than entrances — 60–70% of the entrance duration. Things leave
  faster than they arrive.
- **Loops (marquee, pulse, shimmer):** linear only, or ease-in-out for
  back-and-forth. Loops with expo easing look seasick.
- **Never:** default `ease`, default `ease-in-out` on entrances, spring
  physics on more than one element per page. Springs on everything is the
  2024 Framer-template tell.

Consistency rule: **one entrance easing per project.** Don't mix
ease-out-expo on cards with springy on buttons. Pick one and commit.

## Duration

Motion under 150ms feels instant (use for feedback). Over 500ms feels
cinematic (use sparingly). The middle is where everything lives.

| Element | Duration |
|---|---|
| Hover feedback (color, lift, underline) | 120–200ms |
| Small UI transitions (tabs, toggles, tooltips) | 150–250ms |
| Dropdowns, popovers, toasts | 200–300ms |
| Modals, drawers, mobile nav | 250–350ms |
| Page/view transitions | 300–500ms |
| Choreographed section entrance (total, including stagger) | under 800ms |
| Signature hero moment | up to 1200ms, once per page |

Bigger travel distance = longer duration, but scale sublinearly. An element
moving 800px doesn't need 4x the duration of one moving 200px.

## Transform and opacity only

Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.
These trigger layout recalculation every frame — jank on real devices and
an ANTI-SLOP #12 warning. Animate `transform` (translate, scale, rotate)
and `opacity` only.

Common rewrites:

- Don't animate `height` for accordions — animate `grid-template-rows`
  (0fr → 1fr) or use `transform: scaleY` on an inner, or just crossfade.
- Don't animate `top` for sticky reveals — use `translateY`.
- Don't animate `width` for progress — use `scaleX` with
  `transform-origin: left`.
- Don't animate `left` for carousels — translate a track.

Exception: FLIP animations (measure, then invert with transform) — that's
still transform under the hood.

## Stagger

Staggering children 60–90ms apart is the fastest way to make an entrance
feel designed instead of template. Rules:

- **60–90ms between siblings.** Less than 60 reads as simultaneous; more
  than 90 reads as laggy.
- **Cap the total.** A 12-item grid at 80ms = 960ms before the last item
  starts. Cap: after 5 items, shorten to 40ms or drop stagger. Total
  entrance under 800ms (skill rule).
- **Stagger direction follows reading order:** top-to-bottom, left-to-right
  (flip for RTL). Staggering bottom-up on a hero reads as a bug.
- **One stagger axis.** Don't stagger both x and y offsets randomly —
  pick a rise (translateY 16–24px + fade) and repeat it.
- **Hero entrance pattern:** headline rises first, then subhead, then
  CTAs, then the supporting visual. The focal point moves first.

Standard rise: `translateY(20px)` + `opacity: 0 → 1`, ease-out-expo,
each child delayed 75ms after the previous.

## Scroll choreography

Scroll-triggered animation at MOTION 4+. Where people go wrong: animating
every section into view with the same fade-up. That's decoration, not
choreography.

- **Reveal once.** Elements animate in the first time they enter the
  viewport, then stay. Re-triggering on every scroll pass is distracting
  and burns performance.
- **Use IntersectionObserver, not scroll listeners.** Threshold 0.15–0.3.
  Add a `in-view` class; CSS handles the rest.
- **Vary the vocabulary sparingly.** Two reveal types per page max: e.g.
  rise for text blocks, clip-reveal for images. (Clip-reveal: an image
  masked by `clip-path: inset(0 100% 0 0)` wiping to `inset(0 0 0 0)` —
  transform-friendly via clip-path, reads as premium on `dark-luxe` and
  `editorial-serif`.)
- **Parallax:** keep it under 8% of scroll distance, apply only to
  decorative layers, never to text anyone must read. Background drift
  only. Parallax on body copy is motion sickness.
- **Scroll-linked progress:** thin progress bar via `scaleX` is fine;
  it's transform-only and informational.
- **Sticky choreography:** pin a section while steps cycle through it
  (one sticky stage, 3–4 steps). Effective, but it counts as your one
  signature moment. Don't also animate the hero.

## Reduced motion

Non-negotiable. `prefers-reduced-motion: reduce` must disable
non-essential animation entirely (skill rule).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Then audit: with that block active, is everything still reachable and
legible? Reveals that use opacity must end at `opacity: 1` — never leave
content hidden if JS never runs. Default to visible; animate *from* the
hidden state via a class that JS adds (`js-anim` pattern), so no-JS and
reduced-motion users see content.

Carousel autoplay, marquees, and 3D scenes: pause or replace with a static
frame under reduced motion.

## Hover and micro-interactions

Hover is MOTION 1 — the floor, not the ceiling. Rules:

- Every interactive element needs a visible hover state. No dead-feeling
  buttons.
- Hover feedback: one property change, 150ms. Color shift OR lift
  (translateY -2px) OR underline draw — not all three.
- Buttons: darken/lighten the fill, or shift the accent. Keep the layout
  identical — no size change on hover (layout shift reads as a bug).
- Links: underline draw via `background-size` or a `::after` scaleX.
  Simple color change is fine on body links.
- Cards: lift 4px + shadow deepen, or border-color shift to accent. Pick
  one per DNA. On `neo-brutalist-pop`, the hover is a hard-shadow shift
  (translate -2px, shadow grows) — matches the DNA's physics.
- Magnetic buttons (cursor pull): MOTION 6+. One per page, hero CTA only,
  desktop only, disabled on touch and reduced motion.

Focus-visible gets the same design attention as hover (see
docs/accessibility-checklist.md) — keyboard users are users.

## Per-DNA motion notes

Motion vocabulary should match the DNA. A springy bounce on `dark-luxe`
is as wrong as a whisper fade on `acid-rave`.

- **acid-rave** (motion 7): loud and fast. Hard cuts over fades, marquee
  marquees (`patterns/marquee.html`), glitch flickers, strobe-free
  flashes. Keep flashes under 3/second (seizure safety — see
  accessibility checklist). Easing can be linear or steps().
- **dark-luxe** (motion 4): slow, restrained, expensive. Long crossfades
  (600–900ms), clip-reveals on imagery, generous delays. Never bounce.
- **docs-solar** (motion 2): almost none. Anchor scroll smoothing, code
  block copy feedback, subtle hover. Docs that dance are docs that
  distract.
- **editorial-serif** (motion 3): print-inspired. Hairline rules that
  draw in (scaleX), drop-cap settles, gentle rise on article headers.
  Restraint is the aesthetic.
- **glass-calm** (motion 6): springy and soft. Frosted panels that glide,
  spring physics allowed here (the one DNA where springs fit), gentle
  ambient drift on background blobs. Keep it slow — calm, not carnival.
- **industrial-brutalist** (motion 3): mechanical. Hard steps, no
  easing curves softer than ease-out, stamp-in entrances, clunky
  transitions that feel like machinery. Honest, not slick.
- **ma-japanese** (motion 2): near-stillness. A single slow fade is the
  whole vocabulary. Vast emptiness should not shimmer.
- **neo-brutalist-pop** (motion 6): playful physics. Hard-shadow shifts
  on hover, sticker-peel card entrances, wobble on the one weird thing.
  Steps() and spring both fine — it's a toybox, commit to it.
- **retro-terminal** (motion 3): machine motion. Typewriter reveals
  (character-by-character, 15–30ms/char — and a skip on click),
  scanline flicker, block-cursor blink, status-line ticks. Never smooth
  fades; the machine doesn't fade.
- **soft-minimal** (motion 5): spring motion, subtle scale. The
  Linear/Notion register: 150ms hovers, gentle rise entrances, command-K
  style modal pops (scale 0.96 → 1 + fade). Polish, not performance.
- **swiss-rational** (motion 2): minimal and exact. Instant state
  changes, hard cuts between sections, maybe one clip-reveal. The grid
  doesn't dance.
- **y2k-chrome** (motion 8): maximum shimmer. Iridescent gradient
  shifts, chrome text gleam sweeps, floating 3D (see
  docs/using-3d-in-ui.md). Still: one hero moment, restrained
  supporting motion. Shimmer everywhere is just noise.

## Motion anti-patterns

- Autoplaying video backgrounds with no pause control and no reduced-motion
  fallback. If you must: muted, under 5MB, poster frame, pause button.
- Loading spinners longer than 2 seconds with no progress information.
  After 2s, say what's happening.
- Scroll-jacking (hijacking scroll speed/direction). Never. No exceptions.
- Entrance animation on every section with the same fade-up. Pick two
  reveal types, vary by content.
- Animating `box-shadow` on scroll — it's a paint cost; transition it on
  hover only.
- Text that animates letter-by-letter on body copy. Headline-only, and
  keep it under 3 seconds total with reduced-motion skip.
- Cursor-following everything. One magnetic element per page max.
- Infinite bounce on CTAs ("click me!"). Desperation is not a design
  language.

## Self-review checklist

- [ ] MOTION dial set and stated; animation stays within it
- [ ] Every animation is filed as "explains" or "delights" — none are neither
- [ ] Entrances use the project's one easing curve, not mixed curves
- [ ] Only `transform` and `opacity` are animated (no width/height/top/left)
- [ ] Stagger 60–90ms, total entrance under 800ms
- [ ] Scroll reveals fire once, via IntersectionObserver
- [ ] `prefers-reduced-motion` disables non-essential motion; content still
      reachable with JS off
- [ ] Hover states exist on all interactive elements, one property change each
- [ ] Motion vocabulary matches the DNA (see per-DNA notes)
- [ ] Zero items from the motion anti-patterns list

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Motion that doesn't
earn its place is decoration — cut it.*
