<!--tz-meta {"id":"handoff-to-dev","title":"Handoff to Dev","file":"docs/handoff-to-dev.md","description":"What a buildable handoff package contains: the token contract, spec anatomy, asset rules, and the QA checklist designers run."} -->
# Handoff to Dev

A design isn't done when it looks right — it's done when someone else can
build it without guessing. Every guess a developer makes is a coin flip
between your intent and their deadline. Handoff is the discipline of
removing coin flips.

## The handoff package (the whole thing)

| Artifact | Contains | Format |
|---|---|---|
| **Token contract** | Every color, font, spacing value as named tokens | W3C tokens JSON (tokens/*.json) — never a screenshot of a palette |
| **Spec annotations** | Spacing, sizes, and behavior on the design itself | Inspectable file (Figma dev mode) or annotated export — not a PDF |
| **State inventory** | Every component in every state: default, hover, active, focus, disabled, loading, error, empty | One artboard/section per component × states |
| **Responsive map** | 1440 / 768 / 390 layouts for every distinct template | Breakpoint behavior noted: what collapses, what hides, what reorders |
| **Motion spec** | Duration, easing, trigger for every animation | `150ms cubic-bezier(0.22,1,0.36,1) on hover` — numbers, not "smooth" |
| **Copy deck** | All strings, including errors, empties, tooltips, alt text | Plain text doc or strings file — copy-pasteable, no retyping from mockups |
| **Asset pack** | Icons (SVG), illustrations, images at 1x/2x | SVG for icons always; raster only for photography |

If any row is missing, say so in the handoff note — "motion spec TBD,
defaults to 150ms ease-out" beats silence. Silence gets invented.

## Spec anatomy: what "done" looks like per component

For each component, the developer should be able to answer without asking:

- **Box:** exact padding, gap, radius, border (token names, not px
  where tokens exist).
- **Type:** font, size, weight, line-height, tracking, color token —
  per text element.
- **States:** what changes on hover/focus/active/disabled, with values.
  "Button darkens on hover" is not a spec; "bg shifts ink→ink-80,
  150ms" is.
- **Content rules:** max lines before truncation, truncation style
  (ellipsis? fade?), what happens with long names / missing avatars /
  zero results.
- **Behavior:** what it does on click, on keyboard, on error. The happy
  path is 20% of the spec; the other 80% is states and edges.

## The unbuildable audit

Before handoff, check your design against what code can actually do:

- **No 13px values.** Every spacing value on the 8pt scale or a commented
  optical correction (docs/spacing-rhythm.md). Developers implement what
  you spec — spec noise becomes code noise.
- **No "make it pop."** Every visual decision has a token or a number.
- **Text is real.** No placeholder copy, no "headline goes here" — real
  copy changes layouts, and finding out in QA is expensive.
- **Contrast verified.** WCAG AA on every text/background pair, checked
  with a tool, not eyeballed. Fixing contrast post-build means reworking
  the palette.
- **One DNA.** All values resolve to one style DNA's tokens
  (skill/SKILL.md). Mixed-DNA designs hand off as contradictions.

## Handoff is a conversation, not a file drop

- **Walk through the edges first.** The 10-minute handoff call should
  spend 8 minutes on empty states, errors, and responsive breaks — the
  happy path is self-evident.
- **Stay available for the first build.** The cheapest time to answer a
  question is while the component is being written, not in QA.
- **Review the build against the spec, not the mockup.** Mockups are
  illustrations; the spec is the contract. If the build matches the spec
  and looks off, fix the spec.

## The handoff QA checklist (designer runs this on the build)

- [ ] Token contract delivered (W3C JSON); zero hard-coded hex in review
- [ ] All component states built: hover, active, focus, disabled, loading, error, empty
- [ ] Responsive map honored at 1440/768/390 — nothing clipped, nothing overlapping
- [ ] Motion matches spec durations/easings; reduced-motion verified
- [ ] Real copy everywhere; truncation behaves per spec
- [ ] Focus states visible; keyboard path complete
- [ ] Contrast AA verified in the built product, not just the mockup
- [ ] Edge cases built: long names, missing images, zero results, slow network

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/design-tokens-explained.md, docs/shipping-checklist.md, docs/spacing-rhythm.md,
docs/working-with-agents.md.*
