<!--tz-meta {"id":"design-tokens-explained","title":"Design Tokens, Explained","file":"docs/design-tokens-explained.md","description":"What tokens are, naming, the TZ-taste token schema, theming, Tailwind mapping."} -->
# Design Tokens, Explained

"Design tokens" sounds like enterprise jargon. It's actually a simple idea:
**name every design decision once, then reference the name everywhere.**
`#b5461f` scattered across 40 files is a liability; `--accent: #b5461f`
defined once is a decision. TZ-taste DNAs are token sets — this doc explains
the schema so you can read, extend, and theme them.

## What tokens are (and aren't)

A token is a named, platform-agnostic design value. Not a CSS variable
(though CSS variables are one *output*), not a Tailwind class (another
output) — the token is the decision *behind* both.

```
token:    accent        = #b5461f        ← the decision
css:      --accent: #b5461f;            ← one output
tailwind: accent: '#b5461f'             ← another output
```

Tokens aren't:

- **Not a theme.** A theme is a *set* of token values (light theme, dark
  theme). Tokens are the vocabulary themes are written in.
- **Not component styles.** `--button-padding` is a component concern. Tokens
  are primitives (`--space-4`, `--accent`); components compose them.
- **Not magic.** If a value appears once and will never change, it doesn't
  need a token. Tokenize the values that repeat or that theming must swap.

## Naming: the three-tier system

TZ-taste uses three tiers. Every token name tells you its tier by its prefix.

**Tier 1 — Options (raw values, rarely referenced directly):**

```
color.red.600, color.paper.100, space.8, font.fraunces
```

The palette, the scale, the font list. Designers edit here; code almost never
references these directly.

**Tier 2 — Decisions (semantic roles, the working vocabulary):**

```
bg, surface, ink, muted, line, accent
```

"What is this color *for*?" — not "what hue is it?" `accent` might be
fire-red in editorial-serif and acid-lime in acid-rave; the *role* is stable
across DNAs. This tier is what components use. This is the tier TZ-taste DNA
files define.

**Tier 3 — Components (specific applications, sparingly):**

```
button.primary.bg, input.border.focus, card.shadow
```

Only for values that genuinely differ per component *within* a DNA. Most
TZ-taste pages need zero Tier-3 tokens — Tier 2 plus the spacing/type scales
covers it. If your Tier 3 list is long, your Tier 2 is under-designed.

**Naming rules:**

- Names describe *purpose*, never appearance: `accent` not `red`,
  `surface` not `light-gray`, `ink` not `black`. (Dark mode is the proof:
  `ink` stays readable when its value flips from `#1c1a15` to `#ece5d8`.)
- One concept, one name. If `muted` and `line` drift toward the same value,
  that's fine — they're still different decisions and may diverge later.
- No abbreviations except industry-standard (`bg`, not `background` — fine;
  `sfc` — never).

## The TZ-taste token schema

Every DNA file in `styles/` defines the same schema. Learn it once, read all
twelve.

```json
{
  "id": "editorial-serif",
  "fonts": {
    "display": "Fraunces",
    "body": "Newsreader",
    "mono": "Space Mono"
  },
  "tokens": {
    "bg":      "#f5f1e8",
    "surface": "#efe9da",
    "ink":     "#1c1a15",
    "muted":   "#6f6a5e",
    "line":    "#1c1a1526",
    "accent":  "#b5461f"
  },
  "dials": {
    "variance": 6,
    "motion": 3,
    "density": 2
  }
}
```

Token roles, precisely:

| Token | Role | Contrast rule |
|---|---|---|
| `bg` | page background | — |
| `surface` | raised panels, cards | must differ visibly from `bg` |
| `ink` | primary text, key borders | ≥ 7:1 on `bg` for body text |
| `muted` | secondary text, captions | ≥ 4.5:1 on `bg` (ANTI-SLOP #8) |
| `line` | hairlines, dividers, input borders | visible but quiet; often ink at low alpha |
| `accent` | the one highlight color | never body text at small sizes on dark |

Note the `line` convention: most DNAs define it as ink-at-alpha
(`#1c1a1526` = ink at ~15%). This keeps hairlines in the DNA's temperature
family automatically — a warm DNA gets warm hairlines for free.

**The alpha-suffix trick:** 8-digit hex (`#RRGGBBAA`) lets hairlines,
overlays, and scrims derive from base tokens without new decisions.
`#ece5d822` is dark-luxe's ink at 13% — a hairline that can never clash.

## Extending a DNA

You will eventually need a token the DNA doesn't define. The protocol:

1. **Check Tier 2 first.** Nine times out of ten, the need is actually
   `accent`, `muted`, or `surface` misjudged. A "highlight background" is
   `accent` at 10% alpha, not a new token.
2. **Derive with alpha before inventing.** `accent` at 12% covers selected
   states, info banners, and focus rings. New hex values are a last resort.
3. **If you must add, name it Tier 2-style** (`warning`, `success`) and add
   it to the DNA file with a comment explaining why Tier 2 couldn't cover
   it. The DNA file is the source of truth — not your component CSS.
4. **Never add a token for one instance.** Tokens are for repeating or
   themeable values. A one-off is just a value; write it inline and move on.

Common legitimate additions: `success`, `warning`, `error` (semantic status
colors — every DNA needs them eventually; keep them desaturated in dark-luxe,
phosphor-appropriate in retro-terminal).

## Theming: light/dark from one schema

Because tokens are semantic, theming is a value swap, not a rewrite:

```css
:root { /* editorial-serif, light */
  --bg: #f5f1e8; --ink: #1c1a15; --accent: #b5461f; /* ... */
}
[data-theme="dark"] { /* same roles, dark values */
  --bg: #1c1a15; --ink: #f5f1e8; --accent: #d96a3f;
}
```

Rules:

- **Accent usually shifts between themes**, not just inverts. editorial-serif's
  `#b5461f` on dark paper needs lightening to `#d96a3f` to hold the same
  visual weight. Copy-pasting the light accent into dark mode is how you get
  muddy highlights.
- **Don't invert `line` naively.** Recompute it as new-ink-at-alpha.
- **Images don't theme** (docs/imagery-art-direction.md) — but image
  *treatments* do: borders, scrims, and duotone overlays reference tokens,
  so they follow the theme automatically.
- **One theme per DNA is enough.** Don't build light+dark for all twelve
  DNAs; theme the DNA the brief chose. (See docs/dark-mode-guide.md for the
  full dark-mode discipline.)

## Tailwind mapping

The fastest way to make tokens real in a Tailwind project:

```js
// tailwind.config.js — generated from styles/<dna>.md
const dna = require('./styles/editorial-serif.json');
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: dna.tokens.bg,
        surface: dna.tokens.surface,
        ink: dna.tokens.ink,
        muted: dna.tokens.muted,
        line: dna.tokens.line,
        accent: dna.tokens.accent,
      },
      fontFamily: {
        display: [dna.fonts.display, 'serif'],
        body: [dna.fonts.body, 'serif'],
        mono: [dna.fonts.mono, 'monospace'],
      },
      spacing: {
        /* 8pt scale — docs/spacing-rhythm.md */
      },
    },
  },
};
```

Then components speak DNA fluently: `bg-bg text-ink border-line`,
`text-accent`, `font-display`. **The lint rule that matters:** no arbitrary
hex in classnames (`bg-[#b5461f]` is a violation — that's what `bg-accent`
is for). One grep — `#[0-9a-fA-F]{3,8}` outside the config — audits the
whole codebase. SKILL.md's "every color resolves to a DNA token" becomes
mechanically checkable.

For non-Tailwind projects, the same schema emits CSS custom properties —
the DNA files are the source, the output format is a build detail.

## The token audit

- [ ] Every color in the UI resolves to a Tier-2 token (grep for stray hex)
- [ ] Token names describe purpose, not appearance
- [ ] `ink` ≥ 7:1 on `bg`; `muted` ≥ 4.5:1 on `bg`
- [ ] `line` derives from ink-at-alpha (temperature-safe hairlines)
- [ ] New tokens justified in the DNA file; none added for single instances
- [ ] Dark theme (if any) re-derives accent and line, not just inverts
- [ ] Tailwind config generated from the DNA file — single source of truth

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). The twelve DNA
token sets live in styles/index.json — pick one, load only that file.*
