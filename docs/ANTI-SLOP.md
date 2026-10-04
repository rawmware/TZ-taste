<!--tz-meta {"id":"anti-slop","title":"The Anti-Slop Checklist","file":"docs/ANTI-SLOP.md","description":"Concrete, checkable tells of AI-generated UI. Zero blockers to ship."} -->
# ANTI-SLOP.md — the concrete checklist

"AI slop" isn't a vibe. It's a set of specific, repeatable defaults. If your UI
matches items on this list, it reads as machine-generated regardless of how
"clean" it looks. Score honestly: **zero 🔴 BLOCKERS to ship.**

## 🔴 Blockers (fix before shipping)

1. **The purple gradient.** Blue-to-purple (or pink-to-purple) gradient hero
   background. The single most recognized AI tell on the internet.
   *Fix: pick a DNA background token — paper, concrete, black — and commit.*
2. **Three equal cards.** Icon on top, title, two lines of text, three across.
   *Fix: asymmetric bento, rows, or a single strong statement.*
3. **The template hero.** Centered badge → big headline → subtext → two buttons
   → logo row. *Fix: change the composition — offset, full-bleed type, split,
   or one focal image.*
4. **Inter everywhere.** Default sans with default weights.
   *Fix: a real pairing from your DNA (display + body + mono).*
5. **Lorem ipsum.** Anywhere visible, including "placeholder" images with fake text.
   *Fix: write real microcopy. Short and honest beats long and fake.*
6. **Emoji icons.** 🚀✨🎨 as interface icons. *Fix: Lucide or Phosphor, one
   consistent stroke weight.*

## 🟡 Warnings (two or more = rethink the page)

7. Pill buttons on everything (`border-radius: 999px` for no reason).
8. Gray-on-gray body text below 4.5:1 contrast.
9. Stock hero photo + dark overlay + white headline.
10. Sections alternating light/dark/light/dark with no reason.
11. "Delve", "leverage", "cutting-edge", "seamless", "elevate" in copy.
12. Animations on `width`/`height`/`top`/`left` (layout thrash).
13. `h-screen` sections that clip content on small viewports.
14. Footer containing only "© 2026 All rights reserved."
15. Every section the same vertical padding — no rhythm.
16. Cards with identical soft shadows stacked like pancakes.

## 🟢 The taste test (all should be true)

- [ ] One-sentence design read exists and the page matches it
- [ ] Exactly one style DNA, all values resolve to its tokens
- [ ] The page has one deliberate distinctive choice
- [ ] A stranger could describe the page's personality in 3 words
- [ ] Nothing on the 🔴 list, fewer than two 🟡 items

## How to use this

- **Agents:** run this as the self-review step in AGENT.md before delivering.
- **Humans:** paste into any AI with "audit my page against this checklist."
- **Reviewers:** link the specific item number, not "it looks AI-generated."

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Add new tells via PR — slop evolves, so does this list.*
