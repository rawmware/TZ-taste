# Industrial Brutalist

> Exposed structure, safety orange, condensed type. A factory that ships software.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#d8d8d4` | Concrete gray |
| `--surface` | `#c9c9c4` | Darker concrete for panels |
| `--ink` | `#141412` | Near-black |
| `--muted` | `#5c5c58` | Stamped secondary text |
| `--accent` | `#ff4d00` | Safety orange — warnings, CTAs, stamps |
| `--line` | `#141412` | 2px structural borders |

## Type

- **Display:** Anton, uppercase, massive, tight — headlines are signage
- **Body:** Space Grotesk 400/500
- **Mono:** JetBrains Mono for specs, coordinates, serial numbers

Google Fonts: `Anton` `Space+Grotesk:wght@400;500;700` `JetBrains+Mono:wght@400;700`

## Spacing & shape

- Borders are `2px` solid ink. Panels butt against each other — no gaps, no shadows.
- Radius: `0`. Always.
- Stamps and labels: bordered boxes with mono text, slight rotation (`-2deg`).

## Motion

Mechanical: stepped or fast (150–250ms) transitions, hard cuts over fades.
Hover states invert (ink bg, bg text). Marquees welcome.

## Do

- Spec-sheet layouts: tables of features like machine parts
- Caution stripes, registration marks, "FIG. 01" labels
- ALL CAPS headlines with tight leading
- Raw `<hr>`-style dividers, exposed grid lines

## Don't

- No rounded anything, no soft shadows, no pastel
- No centered delicate layouts — left-align with conviction
- No stock photography smiling people; use diagrams, textures, machinery

## The one weird thing

A giant rotated stamp ("CERTIFIED", "NO SLOP"), a full-width caution stripe,
or one section set entirely in mono like a manifest.

## Best for

Dev tools, zines, hardware, labels, infrastructure products.

## Pairs with patterns

`marquee`, `stats`, `hero-kinetic`, `pricing`
