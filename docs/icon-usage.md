<!--tz-meta {"id":"icon-usage","title":"Icon Usage","file":"docs/icon-usage.md","description":"Lucide/Phosphor, stroke consistency, sizing, when NOT to use icons, emoji ban rationale."} -->
# Icon Usage

Icons are the fastest way to make a page look designed — and the fastest way
to make it look generated. The difference is entirely in discipline: one set,
one stroke weight, one size scale, and the restraint to leave most things
un-iconed.

## Pick one set. Never mix.

**Lucide** or **Phosphor.** That's the menu. Both are MIT-licensed, both ship
as web components/SVG/React/Vue, both have consistent 24px-grid geometry.
ANTI-SLOP #6 bans emoji as icons; the corollary is that *mixed* icon sets are
nearly as bad — a Lucide outline next to a Phosphor duotone next to a random
SVG from a blog post reads as three different designers arguing.

How to choose:

- **Lucide:** neutral, geometric, the safer default. Pairs with soft-minimal,
  swiss-rational, docs-solar, glass-calm, industrial-brutalist.
- **Phosphor:** slightly warmer, more weights available (thin/light/regular/
  bold/fill/duotone). Pairs with editorial-serif, dark-luxe, ma-japanese,
  neo-brutalist-pop, y2k-chrome.
- **retro-terminal / acid-rave:** either set works, but consider going
  *icon-free* — ASCII glyphs (`>`, `+`, `×`, `▸`) and mono symbols are more
  on-DNA than any icon set. A terminal that uses Lucide everywhere missed the
  point.

**Rule: the choice goes in the project README next to the DNA pick.** If the
next person can't tell which set you used, you mixed them.

## Stroke consistency

One stroke weight for the entire product. Not "mostly 2px with some 1.5px."
One.

| DNA | Recommended stroke | Why |
|---|---|---|
| swiss-rational | 2px | matches the 1px/2px grid discipline |
| industrial-brutalist | 2–2.5px | matches 2px borders |
| neo-brutalist-pop | 2.5px | matches thick borders, sticker energy |
| soft-minimal | 1.5–2px | quiet UI, quiet icons |
| glass-calm | 1.5px | frosted surfaces want light lines |
| editorial-serif | 1.5px | hairline register |
| dark-luxe | 1–1.5px | whisper-thin luxury |
| ma-japanese | 1.5px | ink-brush lightness |
| docs-solar | 2px | readable at small sizes in dense docs |
| retro-terminal | ASCII preferred; else 2px mono-adjacent | — |
| acid-rave | 2px | loud needs weight |
| y2k-chrome | 1.5–2px | gloss wants clean geometry |

The test: screenshot five different icons at the same size, convert to
grayscale, squint. If any one looks heavier or lighter than the rest, the
set is mixed or the weight drifted. Fix it.

**Filled vs outline:** pick one. Filled icons (Phosphor Fill) read as
*status* — active nav items, toggled states, ratings. Outline reads as
*action* — buttons, links, affordances. If you use both, the rule is
positional and absolute: filled = current/active state, outline = everything
else. Never decorative mixing.

## Sizing: the scale

Icons snap to a size scale, just like spacing. Never eyeball icon sizes.

| Token | Size | Used for |
|---|---|---|
| `icon-xs` | 14px | inline with micro type, table actions |
| `icon-sm` | 16px | inline with body text, form field icons |
| `icon-md` | 20px | buttons, nav items, list markers |
| `icon-lg` | 24px | feature illustrations, empty states |
| `icon-xl` | 32px+ | hero-adjacent, marketing moments (rare) |

Rules:

1. **Icons align to the text's x-height optically**, not mathematically
   centered. A 20px icon next to 16px body text sits 1–2px high
   (docs/spacing-rhythm.md: the optical nudge). Every inline icon gets it.
2. **One size per context.** All nav icons are `icon-md`. All inline text
   icons are `icon-sm`. If two adjacent icons are different sizes, one of
   them is wrong.
3. **Feature-card icons cap at `icon-lg` (24px).** The slop pattern is a 48px
   icon floating above a card title like a logo. Icons are signposts, not
   illustrations — if it needs to be 48px, it should be an illustration.
4. **Touch targets ≥ 44px** for icon-only buttons, regardless of the icon's
   visual size. The icon is 20px; the button is 44px. Both numbers are
   specified, neither is eyeballed.

## Color: icons inherit, they don't decorate

- Default icon color = the surrounding text color (`currentColor`). An icon
  next to muted text is muted; next to ink text is ink. This one rule
  eliminates 80% of icon slop.
- **Accent-colored icons are rationed.** An accent icon means "look here" —
  active nav state, key stat, the primary action. If more than ~10% of your
  icons are accent-colored, none of them are special.
- **Never multicolor icons in UI.** Duotone/flat-color icon packs (the ones
  with little blue folders and yellow stars) belong in slide decks, not
  interfaces. One color per icon, always.
- **Status colors are semantic, not decorative:** error red, warning amber,
  success green — and they must differ from the accent (docs/designing-forms.md).
  In dark-luxe, even status icons stay desaturated.

## When NOT to use icons

This is the section most guides skip, and it's the most important one.
Icons have a cost: every icon is a tiny translation task for the user
("what does that shape mean?"). Spend the budget where it pays.

**Don't use icons when:**

1. **The label is already clear.** A button that says "Download report" does
   not need a download arrow. Redundant icon + label pairs are the #1 icon
   slop pattern — they signal "the designer didn't trust the words."
2. **Every item in a list would get one.** A features list where each bullet
   has a different icon is decoration, not wayfinding. Use a hairline rule
   or a mono marker (`01`, `02`) instead.
3. **It's a feature-card triptych.** ANTI-SLOP #2's "icon on top" is the
   tell. Kill the icons, keep the structure — or better, kill the triptych
   (docs/case-study-slop-to-taste-3.md).
4. **The icon is ambiguous.** Abstract concepts (synergy, empowerment,
   "solutions") have no good icon. A bad icon is worse than no icon — it
   adds confusion *and* visual noise. Use type.
5. **It's a logo or brand moment.** Social icons in footers are fine
   (functional). A big icon as a "visual" in a hero is a placeholder that
   never got replaced.
6. **Emojis would be "more fun."** See below. No.

**Do use icons when:**

- Wayfinding: nav, tabs, breadcrumbs, back/close/menu.
- Status: success/error/warning/info, sync states, presence dots.
- Actions with established metaphors: search, settings, download, share,
  copy, external link, play/pause.
- Dense data UI: table row actions, toolbar buttons, dashboard controls —
  where labels would bloat the layout.

The heuristic: **if removing the icon changes nothing about comprehension,
remove the icon.** (TASTE-GUIDE.md: cut.)

## The emoji ban, with rationale

ANTI-SLOP #6 bans emoji as interface icons. Here's *why*, since "because the
checklist says so" convinces nobody:

1. **They render differently everywhere.** 🚀 on iOS, Android, Windows, and
   Linux are four different illustrations. Your "consistent" UI has
   platform-dependent clip art in it.
2. **They carry tone you didn't choose.** Emoji are inherently playful. A 🚀
   next to "Deploy to production" in a fintech dashboard is a liability, not
   a delight.
3. **They're inaccessible by default.** Screen readers announce "rocket" —
   sometimes usefully, usually as noise. Lucide/Phosphor with `aria-hidden`
   and a real label is strictly better.
4. **They're the #1 AI tell.** Models reach for emoji when no icon decision
   was made. Using them marks the work as undecided.

The narrow exceptions: user-generated content (chat, comments — the *user's*
emoji, not yours), and a deliberate brand voice moment in marketing copy
(never in UI chrome). Both are decisions, not defaults.

## Icons in code: the system

A consistent icon system needs mechanical enforcement, not good intentions.

**One import path.** All icons come from one module — `@/components/icon`
or equivalent — which wraps the chosen set. Nobody imports Lucide *and*
Phosphor *and* a random SVG. The wrapper sets the default stroke, size, and
`aria-hidden`, so every usage starts consistent:

```jsx
<Icon name="arrow-right" size="md" />  // stroke, color, a11y handled inside
```

**Size as prop, not class.** `size="sm" | "md" | "lg"` maps to the scale
(16/20/24). Arbitrary pixel sizes go through the wrapper's scale or don't
happen. This is the icon equivalent of the token grep — one place where
sizes are decided.

**The icon inventory.** Every project keeps a list of *which* icons it uses
and *where*. When the list has 60 icons for a marketing site, something's
wrong — audit against the removal test and cut. The inventory also catches
duplicates: `search` and `magnifier` and `find` are the same icon wearing
three names.

**Tree-shaking.** Import icons individually (`import { ArrowRight } from
'lucide-react'`), never the whole set. An icon library is thousands of
SVGs; shipping all of them for twelve used icons is a performance bug with
a design-system cause.

## Fixing a legacy icon mess

Inherited a project with four icon sets, emoji in buttons, and 37px icons
next to 12px text? The remediation order:

1. **Freeze.** No new icons until the system exists. Every new icon added
   to a mess makes the cleanup exponentially harder.
2. **Inventory.** Grep every icon usage into a list. You'll find the same
   concept drawn three ways — that's your dedupe map.
3. **Pick the set** (Lucide or Phosphor, per the guidance above) and the
   stroke weight. Write it in the README. This is now law.
4. **Build the wrapper** with the size scale. Migrate usages file by file —
   it's mechanical work, which means it's agent work (docs/working-with-agents.md).
5. **Emoji purge.** Every emoji-as-icon becomes a real icon or gets deleted
   via the removal test. No grandfather clauses.
6. **Audit.** Run the icon audit below. Then add the inventory check to code
   review so the mess can't regrow.

## The icon audit

- [ ] Exactly one icon set, named in the README
- [ ] One stroke weight everywhere (squint test passed)
- [ ] Filled/outline rule defined and followed (if both used)
- [ ] All icons on the size scale; one size per context
- [ ] Inline icons optically nudged to the text baseline
- [ ] Icons inherit text color; accent icons < 10%
- [ ] No multicolor icons; status colors semantic and distinct from accent
- [ ] Every icon passes the removal test (comprehension changes if removed)
- [ ] No emoji as icons anywhere in UI chrome
- [ ] Icon-only buttons have 44px targets and accessible labels
- [ ] One import path; individual imports (tree-shaken)

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Sources: Lucide
(lucide.dev, ISC), Phosphor (phosphoricons.com, MIT) — both in
sources/sources.json.*
