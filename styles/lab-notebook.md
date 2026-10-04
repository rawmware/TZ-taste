<!--tz-meta {"id":"lab-notebook","name":"Lab Notebook","vibe":"A scientist's field notebook: graph-paper grids, photos held down with masking tape, red-pen marginalia, and a coffee ring on page 47.","file":"styles/lab-notebook.md","tags":["notebook","science","handwritten","paper"],"best_for":["research-labs","field-guides","science-blogs","citizen-science"],"fonts":{"display":"Caveat","body":"Karla","mono":"Courier Prime"},"tokens":{"bg":"#f4f1e6","ink":"#2b2a26","accent":"#b3402e","muted":"#7a756a","line":"#2b2a2633"},"dials":{"variance":8,"motion":3,"density":7}} -->
# Lab Notebook

> A scientist's field notebook: graph-paper grids, photos held down with
> masking tape, red-pen marginalia, and a coffee ring on page 47.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f4f1e6` | Aged graph paper |
| `--surface` | `#ece7d6` | Taped-in photo mounts, inset notes |
| `--ink` | `#2b2a26` | Pencil-and-pen black |
| `--muted` | `#7a756a` | Faded pencil, old entries |
| `--accent` | `#b3402e` | Red pen — corrections, underlines, "SEE FIG. 3!" |
| `--line` | `#2b2a2633` | Ruled and grid lines (alpha allowed on lines) |

## Type

- **Display:** Caveat (handwritten headlines, slightly rotated — the scientist wrote these in the field, in a hurry)
- **Body:** Karla (0.95–1rem; clean reading voice, the typed-up version of the notes)
- **Mono:** Courier Prime (field readings, timestamps, specimen IDs — "SPEC-114 · 06:42")

Google Fonts: `Caveat:wght@500;700` `Karla:wght@400;500;700`
`Courier+Prime:wght@400;700`

## Spacing & shape

- Gridded: a faint graph-paper background on every page (CSS only, 24px grid).
- Elements pin like they're taped: images slightly rotated (1–3°), masking-tape strips across corners, notes overlapping at odd margins.
- Radius: `0px` on photos (they're prints, not thumbnails), `1px` on tape.
- Density is high — margins full of marginalia. Red-pen annotations in the gutters: "recheck this!", "n=3, redo".

## Motion

Paper doesn't animate. Entrances are a simple fade (500ms). Tape "sticks"
with a tiny scale settle on load — subtle, once. Hovering a taped photo
straightens it (rotation to 0°). That's the whole budget. Anything fancier
would not exist in a real notebook.

## Do

- Number everything like a real log: "ENTRY 12 · 14 JUN · OVERCAST".
- Use red pen sparingly and only for emphasis: one underlined word, one arrow, one circled figure per section.
- Add coffee rings: a faint brown ring graphic on one panel per page, `opacity 0.15`. It has to be there.
- Write microcopy in field voice: "Wind ate the first attempt. Second held." Real observations beat summaries.

## Don't

- No sterile white backgrounds or pristine layouts — this notebook is used.
- No lorem ipsum anywhere; every caption is a real observation.
- No stock "science" imagery (beakers on white). Show the muddy boot, the actual specimen, the handwritten table.
- No three equal cards; data goes in taped-down tables and figure plates.

## The one weird thing

Add one honest imperfection per page: a crossed-out line left visible, a
smudged thumbprint near a figure, or a margin note that says "ask Mara about
the missing sample". Lab notebooks are evidence — the mess is the proof.

## Best for

Research labs, field guides, science blogs, citizen-science projects.

## Pairs with patterns

`heroes-typed-letter` `backgrounds-blueprint` `features-checklist` `how-it-works-steps` `stats-table` `forms-feedback` `footers-docs`

## Lineage

Actual field-notebook practice: numbered entries, dated observations, taped
figure plates, red-pen review marks; the grid-paper discipline of engineering
pads. Principles only — 100% original implementation. Explicitly not
`laboratory-clean` and not `botanical-lab`: this is handwritten notes —
coffee rings, tape, crossed-out lines — against the sterile lab; nothing here
is autoclaved.
