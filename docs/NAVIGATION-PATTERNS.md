<!--tz-meta {"id":"navigation-patterns","title":"Navigation Patterns","file":"docs/NAVIGATION-PATTERNS.md","description":"Nav architectures that orient instead of overwhelm — top bar, mega menu, rail, command palette, mobile."} -->
# Navigation Patterns

Navigation has one job: tell the visitor where they are and get them where
they're going, in under two seconds, without thinking. Every pattern below
is judged on that. The moment navigation becomes a showcase — clever
animations, mystery-meat labels, hidden primary links — it has failed at its
only job.

## The iron rules (all patterns)

- **5–7 top-level items max.** Past 7, visitors stop reading the nav and
  start using search (if it exists) or leaving (if it doesn't). If you have
  12 sections, that's an information-architecture problem, not a nav-design
  problem — group them.
- **Labels are 1–2 word nouns, never verbs, never clever.** "Pricing",
  "Docs", "About" — not "Explore", "Discover", "Solutions" (solutions to
  *what*?). Clever labels are a tax every new visitor pays.
- **Current location is always indicated** — underline, pill, accent text —
  plus `aria-current="page"`. A visitor who can't tell which page they're on
  doesn't trust the rest of the chrome.
- **The primary CTA lives in the nav** (right side, desktop): "Get started",
  "Book a call", "Start free". It's the highest-converting button on most
  sites because it's visible on every scroll position.
- **Touch targets ≥ 44px.** Nav links are tapped, not just clicked.

## Pattern 1: Simple top bar

Logo left, 4–6 links center or right, CTA right. The default for a reason —
it works for ~80% of sites.

- Height **64–72px desktop, 56–64px mobile**. Logo-to-links gap `space-8`,
  link-to-link gap `space-6` (docs/spacing-rhythm.md).
- Fixed/sticky navs need page top padding equal to nav height + `space-4`.
  Content sliding under a fixed header is a spacing bug, not a z-index bug.
- **Sticky behavior:** `sticky` with backdrop blur (`backdrop-blur-md` +
  70–80% opaque background) beats `fixed` — no layout jump, no padding math.
  Optional refinement: hide on scroll down, reveal on scroll up — but only
  if the nav is tall or the page is long; on short pages it's motion for
  motion's sake.
- Border or hairline under the nav on scroll (appears after ~24px of
  scroll). A nav that never separates from content looks broken once you
  scroll.

## Pattern 2: Mega menu

For sites with real depth: docs, product suites, universities, e-commerce
categories. Triggered from 1–2 top-level items ("Products", "Resources"),
never from all of them.

- **Hover intent, not hover:** 150–200ms delay before opening, and the menu
  stays open while the pointer travels diagonally toward it (the classic
  Amazon triangle problem). Instant-open mega menus flicker and punish
  imprecise pointers.
- Full-width panel, 3–4 columns max, each column with a micro-cap header
  and 4–6 links. One featured block allowed (new release, featured guide)
  — it gets 1 column, not 3.
- **Keyboard accessible:** focus opens it, Escape closes it, arrow keys
  move within it. A mega menu that traps or ignores keyboard users is
  broken, not fancy.
- Mobile: mega menu content becomes an accordion section inside the mobile
  drawer, not a separate pattern.

## Pattern 3: Rail (vertical nav)

Left-edge vertical nav for apps, dashboards, docs. 64–72px wide collapsed
(icons + tooltips) or 240–280px expanded (icons + labels).

- **Collapsed vs expanded is a density decision** (SKILL.md DENSITY dial):
  density 8+ dashboards can live collapsed; docs and settings need labels.
  Offer a toggle; remember the preference.
- Active item: accent indicator bar or filled background — visible at a
  glance from across the room. The rail's whole point is orientation.
- Bottom of rail: user/settings/help. Never put primary navigation at the
  bottom — the bottom is where utilities go to be found when needed.
- **Don't use a rail for marketing sites.** Rails say "application." A
  landing page with a rail confuses the visitor about what kind of thing
  they're looking at.

## Pattern 4: Command palette (⌘K)

For products with 10+ destinations: docs sites, dashboards, complex apps.
A modal search that jumps anywhere.

- Trigger: `⌘K` / `Ctrl+K`, plus a visible button showing the hint
  ("Search or jump to… ⌘K"). The hint teaches the shortcut; the shortcut
  rewards learning it.
- Results grouped: Pages / Actions / Recent. Recent items first — the
  fastest navigation is back to where you just were.
- **Fuzzy matching, keyboard-first:** type-ahead filter, ↑↓ to move, Enter
  to go, Esc to close. Mouse support is secondary but must work.
- Response budget: results appear in **under 100ms** of keystroke for local
  indexes. If search is server-side, show the skeleton of results instantly
  and stream in — a ⌘K that lags feels broken in a way a slow page doesn't.

## Pattern 5: Mobile — drawer, tabs, or both

- **Marketing sites: hamburger drawer.** Full-screen or 320px slide-in
  from the right, links at 20–24px, generous 56px+ tap rows, CTA pinned at
  the bottom. Transition 200–300ms on transform + opacity only
  (ANTI-SLOP #12). The drawer must trap focus while open and return focus
  to the trigger on close.
- **Apps: bottom tab bar, ≤ 5 tabs.** The thumb zone is the bottom 1/3 of
  the screen — that's where app navigation lives. 5 tabs max; more becomes
  a "More" tab, which is where features go to die.
- **Don't hamburger primary navigation on desktop.** A desktop hamburger
  hiding the main links is a pattern for fashion lookbooks, not for sites
  that want visitors to find things. If the brief demands it, the drawer
  must open in under 300ms and show all 5–7 items immediately — no staged
  reveals making people wait for links.

## Breadcrumbs and secondary nav

- **Breadcrumbs for depth ≥ 3 levels:** Home / Docs / API / Auth. Each
  segment a link except the current page. They orient, they give crawlers
  structure, and they cost one line.
- **In-page secondary nav** (docs sidebar, settings tabs): sticky,
  scroll-spies the current section, collapsible on mobile. The scroll-spy
  highlight must track within ~100px accuracy or it lies about your
  position — worse than no indicator.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Visitors can't find pricing | buried in a mega menu or hamburger | pricing is top-level, always, on commercial sites |
| Nav feels "mystery meat" | clever labels ("Discover", "Solutions") | 1–2 word nouns; label what it is |
| Content hides under fixed nav | missing top padding | page `pt-` = nav height + `space-4`, or use sticky |
| Mega menu flickers | instant hover open | 150–200ms intent delay + diagonal tolerance |
| Mobile drawer traps users | no focus management | trap while open, Esc closes, focus returns to trigger |
| 12 top-level items | IA problem disguised as nav | group into ≤ 7; overflow goes to footer (docs/FOOTER-STRATEGY.md) |

## Pre-ship audit

- [ ] ≤ 7 top-level items; labels are 1–2 word nouns, zero cleverness
- [ ] Current page indicated visually + `aria-current="page"`
- [ ] Primary CTA present in nav, right side on desktop
- [ ] Nav height 64–72px desktop / 56–64px mobile; sticky preferred over fixed
- [ ] Hairline appears under nav on scroll (~24px threshold)
- [ ] Mega menu (if any): 150–200ms intent delay, keyboard accessible, ≤ 4 columns
- [ ] Mobile: drawer 200–300ms transform/opacity transition, focus trapped; or ≤ 5 bottom tabs for apps
- [ ] ⌘K palette (if any): results under 100ms, grouped, keyboard-first
- [ ] Breadcrumbs on depth ≥ 3; in-page nav scroll-spy accurate within ~100px
- [ ] All touch targets ≥ 44px; reduced-motion honored (drawer becomes instant)

## Per-DNA notes

- **brutalist (industrial/neo):** nav as bordered bar, hard edges, active
  link gets a filled box or thick underline. No blur — solid background,
  border-bottom 2px.
- **ma-japanese:** nav nearly invisible — small type, vast margins, maybe
  right-aligned vertical text on desktop. The quieter the nav, the louder
  the content.
- **retro-terminal:** nav as command prompt — `[home] [docs] [pricing]`
  with a blinking block cursor on the active item. ⌘K becomes a real
  command line; lean into it.
- **glass-calm:** backdrop blur is native here — 80% opaque frosted bar.
  Keep links few; blur + many links = smudge.
- **editorial-serif:** nav as masthead — centered wordmark, hairlines
  above and below, section links like a newspaper. Date or issue number
  optional, one-weird-thing eligible.
- **dark-luxe:** minimal top bar, hairline separators, CTA as quiet outline
  button. A loud nav would break the gallery calm.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/FOOTER-STRATEGY.md (nav overflow), docs/spacing-rhythm.md (nav
spacing), skill/SKILL.md layout rules.*
