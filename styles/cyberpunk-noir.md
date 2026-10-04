<!--tz-meta {"id":"cyberpunk-noir","name":"Cyberpunk Noir","vibe":"Rain-slicked neon city: near-black, electric pink and cyan, glitch under the surface. Dense, alert, humming.","file":"styles/cyberpunk-noir.md","tags":["cyberpunk","neon","dark"],"best_for":["games","tech","streaming"],"fonts":{"display":"Orbitron","body":"Rajdhani","mono":"Share Tech Mono"},"tokens":{"bg":"#08080d","ink":"#e8e6f0","accent":"#ff2e88","muted":"#6b6f85","line":"#1e2030"},"dials":{"variance":7,"motion":8,"density":8}} -->
# Cyberpunk Noir

> Rain-slicked neon city: near-black, electric pink and cyan, glitch under
> the surface. Dense, alert, humming.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#08080d` | Near-black asphalt |
| `--surface` | `#101018` | Panels, terminal windows, cards |
| `--ink` | `#e8e6f0` | Off-white neon glow text |
| `--muted` | `#6b6f85` | Rain-gray secondary copy |
| `--accent` | `#ff2e88` | Electric pink — the hot wire, CTAs, key terms |
| `--accent-2` | `#00e5ff` | Electric cyan — data, secondary highlights, frames |
| `--line` | `#1e2030` | Dark seams, hairline borders |

## Type

- **Display:** Orbitron (900 weight, uppercase, `0.08em` tracking — signage on a wet street)
- **Body:** Rajdhani (500/600, slightly condensed, 1.55 line-height — console readouts)
- **Mono:** Share Tech Mono (system logs, stats, coordinates — never for paragraphs)

Google Fonts: `Orbitron:wght@700;900` `Rajdhani:wght@500;600;700`
`Share+Tech+Mono`

## Spacing & shape

- Dense like a city block: columns packed, gutters tight, information everywhere.
- Radius: `2–4px`, clipped corners preferred — chamfered edges, not rounded.
- Scanlines and noise texture over the whole page, kept subtle (`4–6%` opacity).
- Glitch accents: offset duplicate text layers (pink/cyan split) on key headlines.

## Motion

Alive. Flicker on load, typewriter on terminal lines, ambient glitch pulses on
the hero. Data ticks and scans behind the content. Hover states light up like
signage powering on. Motion is constant but shallow — atmosphere, not
annoyance. Respect reduced-motion aggressively: the glitch dies first.

## Do

- Pair pink and cyan as information, not decoration: pink = action/human, cyan = system/data.
- Use terminal-style panels with headers ("SYS.LOG", "NET.STATUS") for specs and stats.
- Write copy like a dispatch: short, urgent, specific. "Server's up. Yours?"
- Let neon glow sparingly — one glowing element per viewport, the rest is dark.

## Don't

- No purple/blue gradients anywhere — flat dark surfaces, neon as light not wash.
- No rounded friendly bubbles; this DNA is angular and clipped.
- No serif, no script, no handwriting — the city has no time.
- No empty hero with one line of type; density is the aesthetic.

## The one weird thing

Add one diegetic detail per page: a fake system timestamp in the footer
("GRID TIME 03:47 · SECTOR 7"), a weather readout ("RAIN: HEAVY · 11°C"), or a
scrambled serial number under the logo. The city keeps humming whether you
read it or not. Pick one.

## Best for

Game studios, dev tools, streaming platforms.

## Pairs with patterns

`hero-kinetic` `background-grain` `bento` `stats` `cards` `marquee` `cta` `footer`

## Lineage

The neon-noir principle of light as information in darkness; the density of
arcade and terminal interfaces; the glitch aesthetic of failing machines used
as texture, not error. Principles only — 100% original implementation.
