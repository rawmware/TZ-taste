<!--tz-meta {"id":"laboratory-clean","name":"Laboratory Clean","vibe":"A calibrated instrument, not a landing page: sterile white, spec tables, every label measured.","file":"styles/laboratory-clean.md","tags":["laboratory","clinical","precision"],"best_for":["biotech","labs","medical"],"fonts":{"display":"IBM Plex Sans","body":"IBM Plex Sans","mono":"IBM Plex Mono"},"tokens":{"bg":"#fbfcfd","ink":"#0f1720","accent":"#0a7d8c","muted":"#6b7684","line":"#dfe4ea"},"dials":{"variance":3,"motion":2,"density":8}} -->

# Laboratory Clean

> A calibrated instrument, not a landing page: sterile white, spec tables, every label measured.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#fbfcfd` | Sterile white |
| `--surface` | `#f2f5f7` | Tray / bench surface |
| `--ink` | `#0f1720` | Instrument black |
| `--muted` | `#6b7684` | Calibration gray |
| `--accent` | `#0a7d8c` | Teal — the one diagnostic color |
| `--accent-2` | `#c23b3b` | Alert red — out-of-spec only |
| `--line` | `#dfe4ea` | Hairline grid |

## Type

- **Display:** IBM Plex Sans 600, `clamp(1.75rem, 4vw, 3.5rem)` — a display face that refuses to perform; headlines read like specimen labels
- **Body:** IBM Plex Sans 400, even measure, table-adjacent prose
- **Mono:** IBM Plex Mono for everything data: specs, serials, readings, timestamps

Google Fonts: `IBM+Plex+Sans:wght@400;500;600;700` `IBM+Plex+Mono:wght@400;500;700`

## Spacing & shape

- Tabular everything: spec tables, parameter rows, hairline grids replace decorative layout.
- 8pt precision spacing — no whimsical offsets; alignment is the ornament.
- Radius: `2px` max, usually `0`. Instruments don't round.
- Status dots and rule lines carry hierarchy; type size stays nearly constant.

## Motion

Minimal and functional: table row reveals, readout counters, tab switches with
hard cuts. Motion reports a state change; it never performs. Duration never
exceeds 200ms.

## Do

- Spec tables as the core layout primitive — datasheets, parameters, tolerances
- Mono data everywhere it belongs: batch numbers, dates, measurements
- One diagnostic teal; red exists only for out-of-spec warnings
- Microcopy like an instrument panel: "Calibrated 2026-09-30. Drift: 0.02."

## Don't

- No hero photography, no lifestyle imagery — diagrams and data, or nothing
- No playful copy — every word reads like it was reviewed for accuracy
- No shadows, no depth, no cards floating over backgrounds; flat and true
- No dark mode theatrics — sterile means white

## The one weird thing

The whole page should feel auditable. Either every section carries a visible
"spec plate" (version, last calibrated date, tolerance) or the footer includes
a literal changelog table. One mechanism that says: this was measured. Pick one.

## Best for

Biotech, labs, medical devices, research institutes, instrument makers.

## Pairs with patterns

`nav-minimal`, `stats`, `pricing`, `footer`, `cards`

## Lineage

Scientific instrument design and laboratory datasheets: the authority of
numbers printed small, and trust built from stated tolerances, not claims.
