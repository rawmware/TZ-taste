<!--tz-meta {"id":"docs-solar","name":"Docs Solar","vibe":"Warm documentation, amber accents, serif readability. Docs people actually enjoy reading.","file":"styles/docs-solar.md","tags":["docs","warm","readable","open-source"],"best_for":["documentation","open source","blogs","handbooks"],"fonts":{"body":"Source Serif 4","display":"Source Serif 4","mono":"IBM Plex Mono"},"tokens":{"accent":"#cb4b16","bg":"#fdf6e3","ink":"#3d3a2e","line":"#3d3a2e1f","muted":"#8a8672","surface":"#f7eeda"},"dials":{"density":6,"motion":2,"variance":3}} -->
# Docs Solar

> Warm documentation, amber accents, serif readability. Docs people actually
> enjoy reading.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#fdf6e3` | Solarized light base |
| `--surface` | `#f7eeda` | Code blocks, callouts |
| `--ink` | `#3d3a2e` | Warm dark text |
| `--muted` | `#8a8672` | Secondary |
| `--accent` | `#cb4b16` | Solarized orange — links, highlights |
| `--line` | `#3d3a2e1f` | Soft rules |

## Type

- **Display:** Source Serif 4 600, `-0.01em` — documentation with dignity
- **Body:** Source Serif 4 400, `1.7` line-height — long reads stay comfortable
- **Mono:** IBM Plex Mono for code, commands, paths

Google Fonts: `Source+Serif+4:opsz,wght@8..60,400..700` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- Content column `68ch` max, generous line-height, sticky side nav.
- Radius: `6px` — code blocks and callouts only.
- Callouts: left-bordered (`3px` accent) info/warning/tip boxes.

## Motion

Minimal: smooth anchor scrolling, subtle heading permalinks on hover, copy
buttons with success states. Docs are a tool, not a show.

## Do

- Excellent code blocks: language labels, copy buttons, highlighted lines
- "On this page" side navigation with scroll-spy
- Copy-paste-first examples — every concept ships with runnable code
- Search (even just `Ctrl+K` filtering headings) for long pages

## Don't

- No marketing-hero fluff above the content — title, lede, then docs
- No dark code blocks on this light DNA; use the warm surface instead
- No walls of text without headings every ~300 words

## The one weird thing

A hand-annotated diagram, a "try it" live playground per page, or genuinely
funny code comments. Docs can have one personality beat.

## Best for

Documentation, open source, blogs, handbooks, changelogs.

## Pairs with patterns

`nav-minimal`, `stats`, `cards`, `footer`
