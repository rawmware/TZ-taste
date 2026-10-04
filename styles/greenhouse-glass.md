<!--tz-meta {"id":"greenhouse-glass","name":"Greenhouse Glass","vibe":"A Victorian glasshouse: black iron ribs arcing overhead, condensation beading on the panes, fern greens breathing in the humidity.","file":"styles/greenhouse-glass.md","tags":["victorian","greenhouse","botanical","light"],"best_for":["botanical-gardens","florists","garden-centers","wellness-brands"],"fonts":{"display":"Cormorant Garamond","body":"Source Sans 3","mono":"Courier Prime"},"tokens":{"bg":"#eef2ea","ink":"#1e2b1f","accent":"#2f7a4d","muted":"#7d8a7a","line":"#2f7a4d4d"},"dials":{"variance":5,"motion":3,"density":4}} -->
# Greenhouse Glass

> A Victorian glasshouse: black iron ribs arcing overhead, condensation
> beading on the panes, fern greens breathing in the humidity.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#eef2ea` | Condensation-glass pale green |
| `--surface` | `#e2e9dc` | Potting-bench panels |
| `--ink` | `#1e2b1f` | Deep loam ink |
| `--muted` | `#7d8a7a` | Mist-muted fern, captions |
| `--accent` | `#2f7a4d` | Fern green — the living color |
| `--line` | `#2f7a4d4d` | Iron-rib rules and pane dividers (alpha allowed on lines) |

Ironwork ink `#232a24` is reserved for ribs, frames, and engraved labels —
never for body text.

## Type

- **Display:** Cormorant Garamond (botanical-plate elegance — italic for Latin names, always: *Nephrolepis exaltata*)
- **Body:** Source Sans 3 (0.95–1.05rem; the helpful gardener's voice)
- **Mono:** Courier Prime (accession numbers, potting dates — "ACC. 1894-221 · POTTED MAR")

Google Fonts: `Cormorant+Garamond:ital,wght@0,500;0,600;1,500`
`Source+Sans+3:wght@400;500;600` `Courier+Prime:wght@400;700`

## Spacing & shape

- The iron-rib arch as layout rhythm: sections divided by arched or ribbed dividers (CSS arcs), content in pane-like columns separated by thin ironwork lines.
- Radius: `0px` on panes and frames; plant labels get a `2px` tag like real nursery stakes.
- Airy but structured: `py-24 md:py-36`, wide gutters like the aisles between benches. Plants need room; so does type.
- One specimen plate per page: a botanical-illustration-style hero panel with Latin name, accession number, and origin — engraved, formal.

## Motion

Greenhouse motion is weather: condensation beads that slowly form and slide
on the hero pane (CSS/canvas, subtle), leaves that sway on a 6s loop,
sections that fade up like morning light through glass. Slow, humid, patient.
`prefers-reduced-motion` leaves a still, dewy page.

## Do

- Name plants properly: common name big, Latin name in italic beneath — "Boston Fern · *Nephrolepis exaltata*".
- Use the nursery-stake label pattern: small iron-framed tags with accession numbers pinned to every product or section.
- Write microcopy in head-gardener voice: "Mist twice daily. She likes the humidity." / "Repotted last Tuesday — settling in."
- Let ironwork frame and green live: ribs and rules in iron ink, all living color in fern green.

## Don't

- No purple/blue gradients — the light here is daylight through glass, flat and pale.
- No sterile minimalism; a glasshouse is full of living things, not empty.
- No emoji icons; use Lucide leaf and tool line icons in fern green.
- No lorem ipsum; every label names a real plant or a real care instruction.

## The one weird thing

Add one climate detail per page: a tiny "glasshouse conditions" readout in
the header — "24°C · 78% humidity · vents open" — or a potting-bench log of
what was planted this week. A greenhouse page should know its own weather.

## Best for

Botanical gardens, florists, garden centers, wellness brands.

## Pairs with patterns

`hero-editorial` `backgrounds-paper` `cards-editorial` `features-spread` `how-it-works-chapters` `testimonials-masonry` `footers-sitemap`

## Lineage

Victorian glasshouse architecture: iron ribs, glazed panes, potting benches;
botanical specimen plates with engraved Latin names and accession numbers.
Principles only — 100% original implementation. Explicitly not `glass-calm`
and not `botanical-lab`: this is Victorian iron-and-glass — arched ribs,
condensation, accession tags — not calm minimalism and not a sterile lab;
the plants here have Latin names and history.
