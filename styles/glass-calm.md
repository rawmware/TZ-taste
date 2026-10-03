# Glass Calm

> Frosted surfaces over pastel light. Weather-app serenity as a design language.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#e8ecf5` | Pale periwinkle wash (often a soft gradient) |
| `--surface` | `#ffffff8c` | Frosted glass — always with `backdrop-filter: blur(18px)` |
| `--ink` | `#2b3245` | Deep slate text |
| `--muted` | `#8b93a8` | Secondary |
| `--accent` | `#7c8cf8` | Periwinkle — active states, key data |
| `--line` | `#ffffff88` | Light catching glass edges |

## Type

- **Display:** Outfit 600/700, `-0.02em`, calm and rounded
- **Body:** Outfit 400/500
- **Mono:** JetBrains Mono for data readouts

Google Fonts: `Outfit:wght@300..700` `JetBrains+Mono:wght@400;500`

## Spacing & shape

- Radius: `20–28px` for glass cards, `999px` for pills and toggles.
- Glass recipe: `background: #ffffff8c; backdrop-filter: blur(18px) saturate(1.4);
  border: 1px solid #ffffff88; box-shadow: 0 8px 32px #2b324514`.
- Backgrounds: slow-drifting radial gradients (periwinkle, peach, mint).

## Motion

Buoyant: gentle float on hero cards (`translateY ±8px`, 6s ease-in-out),
springy toggles, soft crossfades. Everything feels suspended.

## Do

- Big friendly numerals (temperatures, balances, scores)
- Layered glass cards with real depth ordering
- Soft gradient mesh backgrounds, slowly animated
- Rounded data visualizations with soft fills

## Don't

- No glass on glass on glass — max two layers, keep text readable
- No dark mode inversion of this DNA; calm lives in the light
- No sharp corners or harsh black — soften everything 10%

## The one weird thing

One card that breaks the frost (solid, bold, opaque), a hand-drawn underline,
or a surprisingly serious data table inside all the softness.

## Best for

Wellness, weather, fintech, consumer apps, anything that should feel like a
deep breath.

## Pairs with patterns

`background-aurora`, `cards`, `nav-pill`, `cta`
