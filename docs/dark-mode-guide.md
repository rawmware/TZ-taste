<!--tz-meta {"id":"dark-mode-guide","title":"The Dark Mode Guide","file":"docs/dark-mode-guide.md","description":"True dark vs dark-luxe, surface elevation, accent behavior, OLED blacks, text warmth."} -->
# The Dark Mode Guide

Dark mode is not "the same page but dark." It is a separate lighting design
with its own rules for surfaces, text, and accent color. Most AI-generated
dark modes fail the same way: pure black background, pure white text, accent
at full saturation — a combination that vibrates, glares, and reads as
unfinished.

## True dark vs dark-luxe

Two different goals, two different palettes. Pick one per product.

**True dark** — the OLED-native, battery-saving, terminal-adjacent dark.
Background at or near `#000000`. Text slightly dimmed, never pure white.
Surfaces elevated with *lighter* fills, not shadows (shadows don't exist in
the dark). DNAs: **acid-rave** (`bg #0a0a0a`, `ink #f2f2f2`), **retro-terminal**
(`bg #0b0f0a`, phosphor `ink #33ff66`), **y2k-chrome** (`bg #0d0d12`).

**Dark-luxe** — the expensive dark. Background is *near*-black with a warm or
cool tint, never pure `#000`. Text is warm off-white. The luxury signal is
restraint: low contrast ratios between surfaces, whisper-thin type, one muted
metallic accent. DNA: **dark-luxe** (`bg #0e0d0b`, `ink #ece5d8`, `accent
#c9a96a` champagne).

| | True dark | Dark-luxe |
|---|---|---|
| Background | `#000`–`#0a0a0a`, neutral | `#0e0d0b`, warm-tinted |
| Text | `#f2f2f2` max, often dimmer | `#ece5d8` warm off-white |
| Accent | high-energy, full saturation | muted metallic, desaturated |
| Surface separation | fill steps + hairlines | hairlines mostly, fills rarely |
| Feels like | a machine room at night | a bar after 10pm |

**Rule: never mix the two.** Champagne accents on pure-black OLED backgrounds
look like a luxury brand wearing a Halloween costume. Commit.

## Surface elevation in the dark

On light mode, elevation = shadow. In dark mode, shadows are nearly invisible,
so elevation = **lighter surface fills + hairline borders**. The standard
stack, bottom to top:

1. **Base:** `bg` token (e.g. dark-luxe `#0e0d0b`)
2. **Raised:** `surface` token (`#161411`) — cards, panels
3. **Overlay:** surface lightened ~4–6% — modals, dropdowns, tooltips
4. **Top:** overlay lightened again — nested popovers, toasts

Each step gets a **1px hairline** in the DNA's `line` token (e.g.
`#ece5d822`) — never a soft shadow. ANTI-SLOP #16 (pancake shadows) is
especially damning in dark mode, where shadows read as muddy gray blobs.

Rules:

- **Maximum three elevation levels visible at once.** More than that and the
  page looks like a layer cake.
- **Borders beat fills for adjacent surfaces.** Two side-by-side panels at
  different fills look striped; same fill + hairline between them looks
  structured.
- **Never use pure white (`#ffffff`) fills** for elevated surfaces. It reads
  as a flashbang. The brightest surface should still be ≥10% below white.

## Text: warmth and contrast

The #1 dark-mode mistake is `#ffffff` body text on `#000000`. It halochromes —
white text on black blooms at the edges, especially on OLED, and causes eye
fatigue within minutes.

Contrast targets (dark mode is *not* exempt from WCAG):

- **Body text:** aim for 7:1+ (AAA-ish). In practice: `ink` tokens in TZ-taste
  DNAs already land here — dark-luxe `#ece5d8` on `#0e0d0b` is ~13:1.
- **Muted/secondary text:** 4.5:1 minimum (ANTI-SLOP #8 applies double in the
  dark, where gray-on-black fails faster than gray-on-white). acid-rave's
  `muted #7a7a7a` on `#0a0a0a` is ~4.6:1 — legal, but only for non-essential
  text. Body copy should never use `muted`.
- **Warm the text.** Pure neutral grays in dark mode feel clinical. Every
  TZ-taste dark DNA warms or cools its ink deliberately: dark-luxe warm
  (`#ece5d8`), y2k-chrome cool-neutral (`#f4f4f8`), retro-terminal green
  phosphor (`#33ff66`). Pick the temperature from the DNA; don't neutralize it.

Disabled text in dark mode: drop opacity to ~38% of ink, never below. Below
that it's decoration, not information.

## Accent behavior in the dark

Accent colors behave differently against dark backgrounds — they advance,
saturate, and demand attention far more aggressively than on light.

1. **Desaturate accents 10–20% for dark themes** relative to their light-mode
   equivalent. The same hex that is a tasteful highlight on white becomes a
   laser on black. dark-luxe's champagne `#c9a96a` is already muted; a neon
   `#c6ff00` (acid-rave) is *supposed* to be a laser — that's the DNA's
   whole point.
2. **One accent, used sparingly** (SKILL.md color rules). In dark mode this
   rule is load-bearing: a second accent color at night reads as a casino.
3. **Never put saturated accent text on dark backgrounds at small sizes.**
   Accent-colored body copy vibrates. Accent is for: active states, key
   numerals, the one CTA, hairline highlights. Body copy stays ink-colored.
4. **Focus rings must be visible.** The default blue outline disappears on
   dark backgrounds. Use the accent at 2px with a 2px offset, and test it —
   keyboard users in dark mode are abandoned more often than anyone.

## OLED blacks: when to go true `#000`

True `#000000` backgrounds turn off OLED pixels — pure black, zero battery.
Use it when:

- The product is media-first (video, photography, music players) — content
  floats on void.
- Battery life is a feature (mobile apps, always-on displays).
- The DNA is true-dark native (acid-rave, retro-terminal).

Don't use true black when:

- The page is text-heavy (docs, articles, dashboards) — pure black + long
  reading sessions = maximum fatigue. Use `#0a0a0a`–`#111111` instead.
- You're doing dark-luxe — true black kills the warmth that makes it luxe.

**The OLED trap:** designing on an LCD monitor, where `#000` and `#0a0a0a`
look identical, then shipping to OLED phones where the difference is stark.
Check the darkest surfaces on a real OLED screen before calling it done.

## Images and media in dark mode

- **Photography:** images shot for light mode often look washed out on dark.
  Apply a slight contrast lift (+5–8%) and consider a hairline border in the
  `line` token so photos have a defined edge against the background.
- **Logos and wordmarks:** need a dark-mode variant. A dark logo on a dark
  header is the most common dark-mode bug in existence. Ship both, switch
  with the theme.
- **Illustrations:** flat illustrations with white backgrounds are dark-mode
  poison. Either use transparent-background art or put illustrations on
  `surface` cards with deliberate framing — never let a white rectangle float
  on black.
- **Avoid the stock-photo + dark overlay hero** (ANTI-SLOP #9). In dark mode
  it's doubly lazy: the page is already dark, so the overlay adds nothing but
  mud.

## The dark-mode checklist

- [ ] Committed to true dark OR dark-luxe — not a blend
- [ ] Background is not pure `#000` unless OLED/media justified
- [ ] Body text contrast ≥ 7:1; muted text ≥ 4.5:1
- [ ] Text warmed/cooled per DNA, never neutral gray by accident
- [ ] Elevation via fills + hairlines; zero soft shadows
- [ ] ≤ 3 elevation levels visible simultaneously
- [ ] Accent desaturated appropriately; used sparingly; never as body-copy color
- [ ] Focus rings visible and tested on the dark background
- [ ] Logo has a dark variant; illustrations have no white rectangles
- [ ] `prefers-color-scheme` respected; manual toggle persists the choice
- [ ] Checked on a real OLED screen, not just the design monitor

## Migrating a light page to dark (without redesigning it)

Sometimes the brief adds dark mode to an existing light page. The disciplined
migration, step by step:

1. **Remap Tier-2 tokens, don't restyle components.** If every color
   resolves to tokens (docs/design-tokens-explained.md), theming is a value
   swap in one file. If colors are scattered hex, stop — tokenize first,
   then theme. Theming scattered hex produces the muddy "dark mode filter"
   look.
2. **Re-derive accent.** Lighten or desaturate per the accent rules above.
   Never ship the light accent unchanged into dark — it will either vibrate
   or disappear.
3. **Convert shadows to fills.** Every `box-shadow` becomes a surface step +
   hairline. This is mechanical: find all shadows, replace with the
   elevation stack.
4. **Re-check every muted text instance.** Muted grays that passed 4.5:1 on
   white routinely fail on black. Run the contrast check per instance, not
   per token — a token can pass while a specific pairing fails.
5. **Flip imagery treatment.** Photos keep their content but get the dark
   grade recipe; illustrations with light backgrounds get contained on
   surface cards or replaced. Logo swap: dark variant goes in.
6. **Re-run the full ANTI-SLOP pass.** Dark mode migrations love to
   reintroduce warnings: gray-on-gray text (#8), alternating sections that
   made sense in light but strobe in dark (#10), shadows that survived the
   conversion (#16).

**What not to do:** the `filter: invert(1)` shortcut. It inverts photos,
destroys brand colors, and produces the exact muddy gray-on-gray that the
checklist bans. There is no shortcut. Token swap or nothing.

## Dark mode QA in the browser

- [ ] Toggle theme with the OS in both positions — `prefers-color-scheme`
      picks up the change live, no reload needed.
- [ ] Manual toggle overrides OS and **persists** (localStorage). Reload the
      page — the choice survives. Clear storage — it falls back to OS.
- [ ] No flash of wrong theme on load. The theme class must be set before
      first paint (inline script in `<head>`, not a deferred bundle).
- [ ] Every page and modal checked in both themes — theme bugs hide in
      rarely-visited corners (settings pages, empty states, error pages).
- [ ] Screenshots of both themes, side by side, at 1440 and 390. The dark
      theme should feel like the *same product at night*, not a different
      product.

## Per-DNA notes

- **acid-rave:** the accent `#c6ff00` is *meant* to hurt a little. Don't tame
  it — but keep it to <5% of pixels or the page becomes unreadable.
- **dark-luxe:** the hardest dark to do well and the easiest to fake. If it
  doesn't feel expensive, the problem is usually type (needs the thin
  Cormorant) or spacing (needs more air), not color.
- **retro-terminal:** scanlines and glow are texture, not content. Keep CRT
  effects subtle enough that a security analyst can read logs through them.
- **y2k-chrome:** iridescent gradients are the DNA's signature — in dark
  mode they work *because* the background is dark. This is the one place a
  gradient isn't slop, and only because it's the DNA's deliberate choice.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/design-tokens-explained.md for the token schema behind these values.*
