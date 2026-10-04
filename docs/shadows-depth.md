<!--tz-meta {"id":"shadows-depth","title":"Shadows & Depth","file":"docs/shadows-depth.md","description":"Shadows as an elevation language: a 3-level scale, hairlines vs blur, dark-mode rules, and when to delete the shadow entirely."} -->
# Shadows & Depth

Shadows are elevation made visible. A page where every card has the same
soft shadow reads as pancakes (ANTI-SLOP #16) because the shadows say
nothing — if everything floats at the same height, nothing does. Depth is a
language with levels; most pages need exactly three.

## The three-level scale

Define elevation once per DNA, in pixels, and never invent a fourth level
mid-page:

| Level | Use | Light-mode recipe | Dark-mode recipe |
|---|---|---|---|
| **0 — flat** | Content cards, panels, most surfaces | No shadow. Hairline border (`1px solid line`) instead. | No shadow. Hairline border instead. |
| **1 — raised** | Hover states, active cards, dropdown menus | `0 2px 8px rgb(0 0 0 / 0.08)` | `0 2px 8px rgb(0 0 0 / 0.5)` |
| **2 — floating** | Modals, toasts, drag-ghosts, command palettes | `0 12px 40px rgb(0 0 0 / 0.16)` | `0 12px 40px rgb(0 0 0 / 0.6)` + hairline border |

Rules:

1. **Level 0 is the default.** Reach for a shadow only when the element's
   height in the stacking order *changed* — hover lifts, a modal opens, an
   item drags. Static content doesn't need static shadows.
2. **Never stack two shadowed elements.** A shadowed card inside a shadowed
   panel is two elevations claiming the same height. Flatten the parent.
3. **Shadows are tinted.** Pure-black shadows on colored surfaces look
   dirty. Tint the shadow with the DNA's ink color at low alpha — on
   night-market's `#161009`, shadow with `rgb(0 0 0 / ...)`, on
   cottage-warm's cream, use `rgb(61 50 41 / 0.12)`.
4. **Blur grows faster than offset.** Offset `2px` → blur `8px`;
   offset `12px` → blur `40px`. Long offsets with small blurs look like
   drop-shadows from 2004.

## Hairlines vs shadows

SKILL.md says it plainly: hairlines and real borders beat soft shadows for
structure. The decision rule:

- **Structure → border.** Card grids, tables, panels that sit side by side:
  `1px` hairlines. Borders define edges; shadows suggest floating. Grids
  don't float.
- **Temporary elevation → shadow.** Menus, tooltips, modals, anything that
  appears above the page and will leave: shadow. The shadow explains *why*
  it's on top.
- **Interactive lift → shadow on hover only.** A card that gains a level-1
  shadow on hover communicates "this is clickable." A card that *always* has
  one communicates nothing.

## Per-DNA notes

- **swiss-rational / industrial-brutalist:** no shadows, ever. Depth comes
  from rule weight and overlap. A shadow here is a category error.
- **neo-brutalist-pop:** the "shadow" is a hard offset (`4px 4px 0 ink`) —
  solid, no blur. It's drawn, not cast.
- **glass-calm:** blur is the DNA's whole identity, but shadow-blur and
  backdrop-blur are different tools. Keep drop shadows minimal (`0 8px 24px
  rgb(0 0 0 / 0.10)`) so the frosted surface stays the star.
- **dark-luxe / night-market:** shadows on near-black need help — increase
  alpha and add a hairline border at level 2, or the floating element melts
  into the background.
- **ma-japanese / editorial-serif:** almost no shadows. One level-1 on the
  single interactive hero element is the maximum.

## When to delete the shadow

The most common shadow bug in AI-generated UI is the **ambient card
shadow**: `box-shadow: 0 4px 24px rgb(0 0 0 / 0.06)` on every card, for no
reason. If you remove it and the page still reads fine, it was decoration,
not information. Delete it. Flat pages with good borders look more
expensive than shadowed pages with bad ones.

## The depth audit (run before ship)

- [ ] Exactly 3 elevation levels, defined once, no invented extras
- [ ] Level 0 (flat + hairline) is the default for static surfaces
- [ ] No shadowed element nested inside another shadowed element
- [ ] Shadows tinted with the DNA ink, not pure black on colored surfaces
- [ ] Hover shadows exist only on interactive elements
- [ ] Modals/toasts/menus sit at level 2 with a hairline in dark mode
- [ ] Zero shadows on swiss-rational / industrial-brutalist builds
- [ ] Deleted at least one decorative shadow (prove it)

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
skill/SKILL.md layout rules, docs/spacing-rhythm.md, docs/dark-mode-guide.md.*
