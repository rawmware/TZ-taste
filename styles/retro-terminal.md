# Retro Terminal

> Phosphor green on black, scanlines, amber warnings. The machine is the message.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0b0f0a` | CRT black with green tint |
| `--surface` | `#0e140d` | Panel black |
| `--ink` | `#33ff66` | Phosphor green — primary text |
| `--muted` | `#1f6b3a` | Dim green — secondary, borders-as-text |
| `--accent` | `#ffb000` | Amber — warnings, highlights, CTAs |
| `--line` | `#33ff6633` | Green rules |

## Type

- **Display:** IBM Plex Mono 700 — yes, display is mono here
- **Body:** IBM Plex Mono 400
- **Mono:** IBM Plex Mono. It's mono all the way down.

Google Fonts: `IBM+Plex+Mono:wght@400;500;700`

## Spacing & shape

- ASCII is the ornament: `+---+`, `>`, `#`, `[OK]`, dividers of dashes.
- Radius: `0`. Scanline overlay via repeating-linear-gradient.
- Text glow: `text-shadow: 0 0 8px #33ff6688` — subtle, not blurry.

## Motion

Typewriter reveals, blinking cursors (`▊`), boot sequences. Keep it fast —
nostalgia, not loading screens.

## Do

- `$` prompts, command-style navigation
- Status lines: `[OK]`, `[WARN]`, `[FAIL]` with color coding
- Fake-but-functional CLI interactions in heroes
- ASCII diagrams and box-drawing characters as layout

## Don't

- No rounded anything, no gradients (except scanlines), no photography
- No emoji — use `[*]`, `[!]`, `[x]`
- Don't overdo the glow; readability first

## The one weird thing

One full-color element (a photo, a chart) inside the monochrome world hits
incredibly hard. Or one section that "boots" on scroll.

## Best for

Dev tools, games, security products, CLI tools, hackathons.

## Pairs with patterns

`hero-kinetic`, `stats`, `marquee`, `pricing`
