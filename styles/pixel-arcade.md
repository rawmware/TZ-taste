<!--tz-meta {"id":"pixel-arcade","name":"Pixel Arcade","vibe":"Insert coin. Dark cabinet, neon scoreboards, chunky pixels you can almost bite.","file":"styles/pixel-arcade.md","tags":["pixel","arcade","retro-gaming"],"best_for":["games","esports","streamers"],"fonts":{"display":"Press Start 2P","body":"Space Mono","mono":"Space Mono"},"tokens":{"bg":"#0b0b14","ink":"#e8f0e8","accent":"#ff2fb3","muted":"#5c6b8c","line":"#1f2a44"},"dials":{"variance":7,"motion":7,"density":6}} -->

# Pixel Arcade

> Insert coin. Dark cabinet, neon scoreboards, chunky pixels you can almost bite.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0b0b14` | Dark cabinet interior |
| `--surface` | `#141422` | Lifted panel |
| `--ink` | `#e8f0e8` | CRT off-white |
| `--muted` | `#5c6b8c` | Dim cabinet plastic |
| `--accent` | `#ff2fb3` | Neon magenta — scores, inserts, highlights |
| `--accent-2` | `#22ff88` | High-score green |
| `--line` | `#1f2a44` | Screen bezels |

## Type

- **Display:** Press Start 2P, uppercase only, sizes in 8px multiples (`clamp(2rem, 6vw, 5rem)` — but always line-height `1.2`, never tighter, because the font is already crushed)
- **Body:** Space Mono 400, reads like a cabinet service manual
- **Mono:** Space Mono 700 for scores, timers, "1UP" counters

Google Fonts: `Press+Start+2P` `Space+Mono:wght@400;700`

## Spacing & shape

- Radius: `0` everywhere. Corners are aliased, not rounded.
- 8px pixel grid — margins and padding snap to it.
- Panels as chunky bordered boxes with 4px borders and hard offset shadows (`4px 4px 0 accent`), never blur.
- Buttons look like arcade buttons: bordered, pressable, inset shadow on `:active`.

## Motion

Blink on purpose. CRT flicker on hero text (subtle, with `prefers-reduced-motion`
killed), marquee leaderboards, coin-insert scale bounce on click, screen-wipe
transitions between sections. Nothing smooths in — everything snaps in 2-frame
steps.

## Do

- Leaderboards, score counters, "INSERT COIN" CTAs — arcade idioms as real UI
- Limited palette: one neon accent per screen section, swapped like cabinet art
- Scanline / phosphor-dot texture overlays (SVG or repeating background)
- Treat whitespace like the dark around a CRT — generous and intentional

## Don't

- No pastel, no kawaii — this DNA is the dark twin; cute pixels belong to `kawaii-pixel`
- No gradients, no glows wider than 1px (glow is a pixel-wide text-shadow, not a bloom)
- No vector-crisp curves against the pixel type — commit to the grid
- No placeholder copy: write microcopy like real cabinet copy — "PLAYER 1 READY?", "NO CONTINUE?"

## The one weird thing

Pick a cabinet. Are you the dark mahogany 1981 cocktail cabinet, the loud neon
1995 fighting-game cab, or the minimal white Japanese candy cab? Whiplash-free
consistency wins — choose one cabinet and never break character. Pick one.

## Best for

Games, esports orgs, streamers, arcade bars, indie game launches.

## Pairs with patterns

`hero-kinetic`, `marquee`, `stats`, `cta`, `background-grain`

## Lineage

The economy of arcade bezels and attract modes; the hierarchy of a high-score
table, where one number matters more than all the others.
