<!--tz-meta {"id":"soft-minimal","name":"Soft Minimal","vibe":"Off-white calm, iris accent, spring motion. The Linear/Notion register, done right.","file":"styles/soft-minimal.md","tags":["saas","calm","product","clean"],"best_for":["saas","productivity","developer tools","mobile apps"],"fonts":{"body":"Instrument Sans","display":"Instrument Sans","mono":"JetBrains Mono"},"tokens":{"accent":"#5b5bd6","bg":"#f7f7f5","ink":"#1a1a1a","line":"#1a1a1414","muted":"#8a8a93","surface":"#ffffff"},"dials":{"density":5,"motion":5,"variance":3}} -->
# Soft Minimal

> Off-white calm, iris accent, spring motion. The Linear/Notion register, done right.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f7f7f5` | Soft off-white |
| `--surface` | `#ffffff` | Cards, popovers |
| `--ink` | `#1a1a1a` | Primary text |
| `--muted` | `#8a8a93` | Secondary text |
| `--accent` | `#5b5bd6` | Iris — primary actions, active states |
| `--line` | `#1a1a1414` | Whisper borders |

## Type

- **Display:** Instrument Sans 600, `-0.03em` — quiet confidence
- **Body:** Instrument Sans 400/500
- **Mono:** JetBrains Mono for shortcuts, code, metadata

Google Fonts: `Instrument+Sans:ital,wght@0,400..700;1,400..700`
`JetBrains+Mono:wght@400;500`

## Spacing & shape

- Radius: `10–14px` cards, `8px` buttons, `999px` only for avatars/pills.
- Shadows: one soft layer — `0 1px 2px #1a1a1a08, 0 8px 24px #1a1a1a08`.
- Density is medium: comfortable, not airy. Information workers live here.

## Motion

Spring physics. `cubic-bezier(0.22, 1, 0.36, 1)` entrances, 60–90ms staggers,
hover lifts of `translateY(-2px)`. Keyboard shortcut hints (`⌘K`) everywhere
useful.

## Do

- Command palettes, keyboard-first affordances
- Subtle gradient washes in hero backgrounds (radial, low opacity)
- Feature lists with checkmarks, not cards — density without noise
- Empty states with genuine personality in the copy

## Don't

- No purple-blue gradient buttons (the global slop tell)
- No three equal feature cards — use asymmetric bento or rows
- No heavy marketing hero; lead with the product, ideally interactive

## The one weird thing

A live interactive widget in the hero (not a screenshot), a command palette
easter egg, or one hand-drawn-feeling annotation. Product-led, one surprise.

## Best for

SaaS, productivity, developer tools, mobile apps.

## Pairs with patterns

`bento`, `nav-pill`, `pricing`, `cards`
