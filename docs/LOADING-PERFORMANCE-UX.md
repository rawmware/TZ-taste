<!--tz-meta {"id":"loading-performance-ux","title":"Loading & Performance UX","file":"docs/LOADING-PERFORMANCE-UX.md","description":"Skeletons, perceived performance, and performance budgets — making waits feel short and honest."} -->
# Loading & Performance UX

Performance is a design material, not an engineering afterthought. A page
that loads in 1 second but shows a blank white void for that second feels
slower than a page that loads in 2 seconds with a well-staged skeleton.
This doc covers both halves: the **perceived** performance (what the
visitor experiences during the wait) and the **actual** budgets (the
numbers the wait must fit inside).

## The budgets (Core Web Vitals + a few more)

These are the numbers. Hit them or the perceived-performance tricks below
are makeup on a structural problem.

| Metric | Budget | What it measures |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.5s | when the main content is visible |
| INP (Interaction to Next Paint) | ≤ 200ms | responsiveness to clicks/taps/keys |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | visual stability — no jumping layout |
| TTFB (Time to First Byte) | ≤ 800ms | server + network responsiveness |
| Hero image | ≤ 250KB | the LCP element on most pages |
| Total page weight (landing) | ≤ 1.5MB | everything, all-in |

Rules:

- **Measure on a mid-range phone over throttled 4G**, not on your fiber
  desktop. Your users are not you.
- **CLS ≤ 0.1 is a design constraint:** every image and embed gets
  explicit `width`/`height` (or `aspect-ratio`), every font swap gets
  `font-display: swap` with matched fallback metrics. Layout that jumps
  when content arrives feels broken regardless of speed.
- **INP ≤ 200ms means heavy work leaves the main thread.** Debounce
  search input at 150–200ms, virtualize lists past ~100 rows, and never
  run layout-thrashing loops on scroll (ANTI-SLOP #12 covers the animation
  half; the JS half is the same rule).

## The loading-pattern decision tree

**Skeleton screens** — for content with a known shape (article page, card
grid, dashboard panels). Gray blocks approximating the final layout,
shimmer or static pulse.

- Show the skeleton only if loading exceeds **300ms** — below that, the
  flash of skeleton-then-content feels *slower* than a brief blank.
- Once shown, keep it a **minimum of 500ms** — a skeleton that flickers
  for 120ms reads as a glitch.
- Skeletons must match the final layout's geometry. A generic spinner
  where a card grid will appear causes a layout shift *and* a broken
  expectation. Two failures for the price of one.
- Shimmer animation: slow (1.5–2s cycle), subtle, transform/opacity only.
  Fast aggressive shimmer reads as anxiety. Honor
  `prefers-reduced-motion`: skeletons go static.

**Spinners** — for indeterminate waits with no known shape (submitting a
form, processing a payment). Small, inline, next to the action — never a
full-page spinner for an inline action.

- Full-page spinners are a last resort: they say "we have no idea what's
  coming or when." If the wait exceeds ~3s, replace with staged content
  or a progress indicator.
- Always pair with a label: "Processing payment…" — a naked spinner is a
  shrug. Timeout messaging after ~10s: "Still working — you can wait or
  we'll email you when it's done."

**Progress bars (determinate)** — for measurable processes: uploads,
multi-step flows, exports. Show real progress, not theater.

- **Fake progress is worse than none.** A bar that jumps to 90% then
  stalls for 30 seconds destroys trust in every future progress bar.
  If you can't measure it, use a spinner with step labels ("Uploading…
  Processing… Done") instead.
- Uploads: show bytes/percentage + rate + cancel. Cancel is mandatory —
  a progress bar with no cancel is a hostage situation.
- Multi-step flows: "Step 2 of 4" with the step names visible. Named steps
  ("Shipping → Payment → Review") reduce abandonment because the end is
  visible.

**Optimistic UI** — for actions that almost always succeed: likes, saves,
toggles, starring, upvotes. Apply the change instantly, sync in the
background, roll back on failure with a plain-language note
(docs/ERROR-HANDLING-UX.md).

- Rule: optimistic only when success rate is **>95%** and failure is
  recoverable. Never optimistic for payments, deletions, or anything
  irreversible.
- The rollback must be visible: "Couldn't save — tap to retry." Silent
  rollbacks gaslight the user.

**Route transitions** — keep the old screen up with a thin top progress
bar (2–3px, accent color, 200–400ms ease-out) instead of blanking to white
between pages. The app feels instant when it never shows an empty frame.

## Staged loading: the honest sequence

For content-heavy pages, load in this order and say so with the layout:

1. **Shell + text** first (layout, headlines, body copy) — readable in
   under 1s is the goal.
2. **Images** progressively: hero eager, everything below the fold lazy
   (`loading="lazy"`), each with blur-up or dominant-color placeholder so
   no gray boxes pop.
3. **Interactive widgets** last (comments, recommendations, embeds) —
   below-the-fold widgets can hydrate on intersection, not on load.

Each stage should be *usable*, not just visible. Text without its images
is fine; buttons that don't work yet are not — disable or defer them
honestly rather than faking interactivity.

## Image and font rules (the usual LCP killers)

- Hero image: `fetchpriority="high"`, modern format (AVIF/WebP), ≤ 250KB,
  explicit dimensions. Preload it if it's the LCP element.
- Responsive images: `srcset` with 3–4 widths; never serve a 2400px image
  to a 390px phone.
- Fonts: preload the display face only, `font-display: swap`, and pick a
  fallback with matched x-height/ascent so the swap doesn't shift layout
  (this is a CLS issue wearing a font costume).
- Third-party scripts: every embed, chat widget, and analytics tag is a
  performance tax — audit quarterly, lazy-load below-fold embeds
  (facade pattern for videos: thumbnail + play button, load the player on
  click).

## Empty and error intersections

- A load that fails is an error state, not a loading state —
  docs/ERROR-HANDLING-UX.md takes over: retry in place, backoff
  1s/2s/4s, max 3 auto-attempts.
- A load that returns nothing is an empty state —
  docs/EMPTY-STATES.md takes over. The skeleton must never resolve into
  a blank screen; it resolves into content or into a designed state.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| "The site feels slow" at 1.8s LCP | blank white void during load | skeleton after 300ms matching final geometry |
| Layout jumps as images load | no dimensions on images | width/height or aspect-ratio on everything |
| Skeleton flickers | shown for <300ms loads | 300ms threshold, 500ms minimum display |
| Progress bar stalls at 90% | fake determinate progress | real measurement or spinner-with-steps instead |
| Page weight 4MB | unoptimized hero + 6 font weights + chat widget | 250KB hero cap, 2 font weights, lazy third-parties |
| Interactions feel laggy | main-thread JS on input | debounce 150–200ms, virtualize past ~100 rows |

## Pre-ship audit

- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, TTFB ≤ 800ms — measured on throttled 4G mid-range phone
- [ ] Hero image ≤ 250KB, AVIF/WebP, `fetchpriority="high"`, explicit dimensions; below-fold images lazy
- [ ] Skeleton: only after 300ms, minimum 500ms display, geometry matches final layout, static under reduced-motion
- [ ] Spinners inline with labels; no full-page spinner past ~3s without staged content
- [ ] Progress bars measure real progress (or become spinner-with-steps); uploads show % + rate + cancel
- [ ] Optimistic UI only for >95%-success reversible actions, with visible rollback
- [ ] Route transitions keep old screen + 2–3px top progress bar; no blank white frames
- [ ] Fonts: display face preloaded, `font-display: swap`, matched fallback metrics
- [ ] Third-party scripts audited; below-fold embeds use facade pattern
- [ ] Failed loads → error states (retry, backoff); empty loads → designed empty states — never blank

## Per-DNA notes

- **retro-terminal:** loading as a boot log — lines appearing with
  timestamps. Genuinely informative if the lines map to real stages;
  theater if they don't. Keep it under 5 lines.
- **neo-brutalist-pop:** progress bars with thick borders and hard
  shadows; skeletons as dashed outlined boxes (matches the empty-state
  language in docs/EMPTY-STATES.md). Loud but honest.
- **dark-luxe:** loading is nearly invisible — a 1px hairline progress in
  brass, no shimmer, no spinners. The calm must survive the wait.
- **soft-minimal / glass-calm:** gentle pulse skeletons, slow shimmer
  (2s cycle), frosted placeholders. Nothing may feel urgent.
- **ma-japanese:** staged loading suits this DNA perfectly — text first
  in vast space, images arriving like prints being hung. The wait becomes
  part of the aesthetic; still keep it under budget.
- **editorial-serif:** skeleton as ruled column outlines — the grid
  showing through. Progress as a thin rule filling left to right, like
  ink.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/ERROR-HANDLING-UX.md (failed loads), docs/EMPTY-STATES.md (empty
loads), docs/HERO-ANATOMY.md (LCP budgets), skill/SKILL.md motion rules.*
