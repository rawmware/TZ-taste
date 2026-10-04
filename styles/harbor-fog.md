<!--tz-meta {"id":"harbor-fog","name":"Harbor Fog","vibe":"Maritime fog: muted grays, signal red, foghorn typography. The lighthouse keeps its own hours.","file":"styles/harbor-fog.md","tags":["maritime","fog","lighthouse"],"best_for":["ferries","seafood","coastal-inns","weather-apps"],"fonts":{"display":"Anton","body":"Karla","mono":"IBM Plex Mono"},"tokens":{"bg":"#e8e6df","ink":"#2b3138","accent":"#c33a2c","muted":"#7d838a","line":"#2b31381f"},"dials":{"variance":5,"motion":4,"density":3}} -->
# Harbor Fog

> Maritime fog: muted grays, signal red, foghorn typography.
> The lighthouse keeps its own hours.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#e8e6df` | Fog |
| `--surface` | `#dcd9d0` | Denser fog — horizontal bands |
| `--ink` | `#2b3138` | Wet-slate type |
| `--muted` | `#7d838a` | Distant gray, secondary text |
| `--accent` | `#c33a2c` | Signal red — the beam, one per page |
| `--line` | `#2b31381f` | Hairline rules (alpha allowed on lines) |

## Type

- **Display:** Anton (uppercase, huge — the foghorn; 4–7rem, tight leading)
- **Body:** Karla (1rem, plainspoken, no flourishes)
- **Mono:** IBM Plex Mono (coordinates, tide times — "43.07° N", "High tide 06:12")

Google Fonts: `Anton` `Karla:wght@400;500;700` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- Horizontal fog bands: content sits in wide, quiet strata of the two gray tones.
- Lighthouse-stripe accents — two thin red lines — mark section breaks, used sparingly.
- Vast whitespace above the headline, like open water before the shore.
- Radius: `0px`. Fog has no corners.

## Motion

Fog bands drift almost imperceptibly (a 60s translate loop, transform only).
The headline arrives once, like a foghorn blast — big, then still. With
reduced motion: still air.

## Do

- Say it plain: "Fog till noon. Ferry runs anyway."
- Set tide tables as real data tables in mono — honest information, well set.
- Spend the signal red once per page: the CTA or the beam, never both in one viewport.
- Microcopy from the harbor: "Last crossing 23:40. Don't miss it."

## Don't

- No blue or purple gradients — fog is flat gray bands, never a gradient sky.
- No nautical kitsch: no anchor icons, no rope borders, nothing cute.
- No emoji icons; no lorem — the harbor keeps real hours.
- No dark, moody overlays. The fog is the atmosphere; let it be light.

## The one weird thing

A visibility meter pinned in the header — "Visibility: 200 m" — set
differently per page, in mono. When it reads under 100 m, the headline gets
quieter: smaller, muted, half-heard through the fog.

## Best for

Ferries, seafood, coastal inns, weather apps.

## Pairs with patterns

`hero-editorial` `stats-table` `cards-event` `faq-hairline` `cta-card` `footer`

## Lineage

Maritime signaling craft — the foghorn blast, lighthouse daymarks, tide
tables set in plain type. Set apart from arctic-field: a working harbor in
gray weather, not a polar expedition. Principles only — 100% original
implementation.
