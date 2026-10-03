# TZ-taste skill — anti-slop frontend protocol

Portable agent skill. Paste this file into any AI conversation, or install it:

```bash
npx skills add https://github.com/rawmware/TZ-taste --skill "tz-taste"
```

## The dials

Set these 1–10 from the brief before writing code. State them out loud.

- **VARIANCE** — layout experimentation. 1: centered, calm, safe. 10: asymmetric,
  overlapping, editorial, weird on purpose.
- **MOTION** — animation depth. 1: hover states only. 10: scroll choreography,
  magnetic elements, cinematic transitions.
- **DENSITY** — information per viewport. 1: vast whitespace, one idea per
  screen. 10: dense dashboards, data everywhere.

Defaults: landing page 5/4/3 · dashboard 3/2/8 · portfolio 7/5/2.

## Pre-flight check

Before any code, answer in one line each:

1. What is the one-sentence design read? (audience + feeling + goal)
2. Which style DNA, and why does the runner-up lose?
3. What is the page's *one distinctive choice*?
4. Dial settings: VARIANCE / MOTION / DENSITY.

If you can't answer #3, you don't have a design yet. Go back.

## The slop blocklist

These are banned unless the brief explicitly demands them:

- Inter (or system-ui) body + purple/blue gradient hero. The #1 tell.
- Three equal feature cards in a row with an icon on top. Never ship this.
- Centered hero: eyebrow badge, huge headline, subtext, two buttons, logos row.
  If your hero looks like this, start over.
- Emojis as icons. Use Lucide or Phosphor.
- `border-radius: 999px` pill buttons on everything.
- Lorem ipsum, "Lorem", or placeholder copy anywhere visible.
- Gray-on-gray low-contrast body text.
- Generic stock-photo hero with dark overlay and white text.
- "Delve", "leverage", "cutting-edge", "seamless" in copy. Write like a human.
- Animations on `width`, `height`, `top`, `left`. Transform and opacity only.
- `h-screen` sections that clip content. Use `min-h-[100dvh]`.
- Footers that say "© 2026 All rights reserved." and nothing else.

## Typography rules

- Pick a real pairing from your style DNA. Display + body + mono, three max.
- One type scale, used consistently: display / h1 / h2 / body / small / micro.
- Tight letter-spacing on big display type (-0.02em to -0.05em). Never
  letter-space lowercase body text.
- Measure: 45–75 characters per line for body copy.

## Layout rules

- Asymmetry beats symmetry. Offset the grid, break it once on purpose.
- Rhythm: pick a spacing scale (e.g. 8/16/32/64/128) and never eyeball margins.
- One focal point per viewport. Everything else supports it.
- Hairlines (`1px`) and real borders beat soft shadows for structure.
- Generous section padding: `py-24 md:py-40` minimum. Cramped sections read
  as cheap.

## Color rules

- Every color resolves to a DNA token. No stray hex values.
- One accent color, used sparingly. If it's everywhere, it's nowhere.
- Dark sections need a reason. Don't alternate light/dark/light/dark like a
  template.

## Motion rules

- Motion explains or delights — never both at once, never neither.
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances. No linear fades.
- Stagger children by 60–90ms. Keep total entrance under 800ms.
- Honor `prefers-reduced-motion`: disable non-essential animation entirely.

## The one-weird-thing rule

Every page needs exactly one deliberate, distinctive choice: an oversized
numeral, a rotated label, a brutal table, a marquee, a wild background done
right. One. The rest of the page stays disciplined so the weird thing lands.

## Copy rules

- Headlines make a claim or ask a question. No "Welcome to [Product]".
- Buttons say what happens: "See the patterns" beats "Learn more".
- Microcopy is written, not generated. Read it out loud once.

## Done criteria

- [ ] Design read stated, DNA chosen, dials set
- [ ] Zero slop-blocklist violations
- [ ] All values resolve to DNA tokens
- [ ] One distinctive choice, deliberate
- [ ] Renders clean at 1440 / 768 / 390
- [ ] Reduced-motion and contrast verified

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste) — MIT licensed, free forever.*
