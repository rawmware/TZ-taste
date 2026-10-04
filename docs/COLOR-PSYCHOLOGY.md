<!--tz-meta {"id":"color-psychology","title":"Color Psychology","file":"docs/COLOR-PSYCHOLOGY.md","description":"What colors make people feel and do — emotion, cultural meaning, and conversion effects, with concrete usage rules."} -->
# Color Psychology

This is not color theory. `docs/color-theory-crash.md` covers hue,
saturation, and harmony — the mechanics. This doc covers *meaning*: what a
color makes a visitor feel, what it signals about price and trust, how it
behaves across cultures, and how it moves conversion. Get the mechanics
right and the meaning wrong and the page still fails — a luxury brand in
safety orange reads as a coupon site no matter how harmonious the palette
is.

## The one rule underneath everything

Color meaning is **contextual, not universal**. There is no color that always
means one thing. Red means danger on a form, luck on a Lunar New Year banner,
and "sale" on a price tag — the same hue, three different readings, decided
entirely by context. So every entry below is a *default reading*, and your
job is to check whether the surrounding context (industry, audience,
adjacent colors, copy) confirms or fights it. When context fights the
default, the default loses and visitors feel uneasy without knowing why.

## The working map: color → default read → where it wins → where it dies

| Color | Default emotional read | Wins at | Dies at |
|---|---|---|---|
| Red | Urgency, appetite, alarm, passion | Sale badges, destructive actions, food brands, error states | Long-form reading surfaces; chronic red across a whole UI (alarm fatigue); form fields flagged red before the user types anything |
| Orange | Friendly energy, value, playfulness | CTAs on blue-dominant pages (high separation), creative tools, youthful brands | Premium/luxury positioning — orange discounts the perceived price |
| Yellow | Attention, optimism, caution | Highlights, warning banners, "new" tags | Body text (fails contrast at small sizes — always pair with near-black text); large yellow fields feel anxious, not cheerful |
| Green | Go, growth, money, nature, health | Success states, eco/sustainability brands, finance "growth" framing | CTAs on pages where everything is already "go" — green disappears into green; luxury (reads mass-market) |
| Blue | Trust, calm, competence, stability | Finance, healthcare, B2B SaaS, anything asking for credentials | Standing out — blue is the default color of the internet, so blue brands must earn distinction elsewhere (type, layout, voice) |
| Purple | Luxury, creativity, spirituality, mystery | Beauty, premium subscription, editorial/arts brands | Gradient heroes — ANTI-SLOP #1: blue-to-purple gradients are the single most recognized AI tell online |
| Pink | Warmth, youth, tenderness, play | DTC beauty, community products, brands aimed under-30 | Enterprise trust contexts — pink asks to be liked, not obeyed |
| Black | Power, luxury, precision, finality | Fashion, premium pricing pages, high-contrast editorial | Cramped layouts — black + tight spacing reads as a banner ad (see docs/spacing-rhythm.md); cheap products (black can't save a $3 item, it just looks funereal) |
| White / off-white | Cleanliness, honesty, space | Paper backgrounds, minimal DNAs, health/wellness | Zero texture — pure white with no grain, rule, or tonal shift reads clinical and unfinished; warm it (`#FAF8F4`) or structure it |
| Gray | Neutral, professional, quiet | Structure, secondary text, disabled states | Body text below 4.5:1 contrast — ANTI-SLOP #8; gray as the *only* personality (the page reads as a wireframe someone shipped) |

## Conversion rules with numbers

**1. One accent color, 5–10% of the viewport.** Count it roughly: if more
than ~15% of what the visitor sees is your accent hue, it stops being an
accent and becomes the page. Accents work by scarcity. A red that appears
only on the primary CTA and the sale badge converts; a red that also tints
headings, icons, and section backgrounds just raises heart rates.

**2. The CTA color must separate from the page's dominant family.**
If the page is blue-dominant, a blue button is camouflage. Pick the CTA hue
from a different family with a clear luminance gap — orange or green on blue,
for example. One exception is allowed: a dedicated **action color** that
differs from the brand color, used *only* for actions (buttons, links that
do things). If the action color ever appears decoratively, the contract
breaks and visitors stop noticing buttons.

**3. Semantic colors are fixed and non-negotiable.** Red = error/destructive.
Green = success. Amber = warning. Blue = info. Never repurpose them: a red
"success!" toast or a green delete button creates a micro-moment of distrust
that the visitor can't articulate but remembers. Destructive confirmations
get red backgrounds or red text on neutral — never a neutral button for an
irreversible action.

**4. Saturation is volume.** Fully saturated hues are shouting. Rule: hues
above ~85% saturation appear only on accents under 10% of surface area.
Backgrounds and large surfaces stay under ~30% saturation in calm DNAs
(soft-minimal, glass-calm, editorial-serif) — higher only in DNAs whose
whole point is loudness (acid-rave, neo-brutalist-pop).

**5. Text contrast is a conversion issue, not just an a11y one.**
Body text at 3:1 contrast doesn't just fail WCAG — it measurably reduces
reading completion. Hold body copy at **4.5:1 minimum** (ANTI-SLOP #8),
large display type at 3:1 minimum. Muted secondary text gets *smaller
saturation of gray*, not lighter gray — `#6B7280` on white passes, `#9CA3AF`
at 14px does not.

**6. Dark mode is not inverted light mode.** Never ship pure `#000` with pure
`#FFF` text — the contrast is harsh and cheap-feeling. Concrete values:
background `#0A0A0B`–`#111113`, surface `#1A1A1E`, text `#F4F4F5`, muted
`#A1A1AA`. Desaturate accent hues 10–15% for dark surfaces or they vibrate.

## Price signaling: color tells people what things cost

- **Luxury is restraint.** Black, white, one metallic or deep hue, enormous
  whitespace. Color *variety* signals cheapness — a page with six bright hues
  reads as a discount bin regardless of the actual prices.
- **Discount is red and orange** — but chronic red trains visitors to never
  pay full price. Use red for genuine, time-bound offers; a site that is
  always "SALE" has no full price, and visitors learn it within two visits.
- **Trust purchases (finance, health, legal) want blue, green, or deep
  neutrals.** A bank in hot pink isn't disruptive, it's alarming — the
  visitor's money-anxiety overrides the brand's cleverness.
- **Charm vs. round pricing has a color analogue:** loud colors pair with
  charm pricing ($49), quiet palettes pair with round pricing ($50). Mixing
  them — neon palette, round prices — creates a subtle register clash.

## Culture table: the same color, different reading

If your audience spans cultures, never encode meaning in color alone —
always pair it with an icon and a text label.

| Color | Western default | Elsewhere |
|---|---|---|
| White | Purity, weddings, cleanliness | Mourning and funerals in China, Korea, and parts of South Asia |
| Red | Danger, stop, sale | Luck, prosperity, celebration in China; mourning in parts of South Africa |
| Yellow | Caution, optimism | Sacred and imperial in parts of Asia; can signal mourning in some Latin American contexts |
| Purple | Royalty, luxury, creativity | Mourning in Brazil and Thailand (in specific traditional contexts) |
| Green | Go, nature, money | Strong Islamic association (positive); "inexperienced" in some Western idioms |
| Black | Sophistication, mourning | Also mourning in the West — but in some African contexts, red carries that weight instead |

The practical takeaway: **success/error/warning must never be color-only.**
A red border plus the word "Error" plus an alert icon survives every
culture. A red border alone does not.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Page feels "AI-generated" | blue-to-purple gradient hero (ANTI-SLOP #1) | a DNA background token — paper, concrete, black — and commit |
| Nothing feels clickable | accent used decoratively everywhere | restrict accent to actions; decorations go neutral |
| Form feels hostile | fields outlined red on load | validate on blur/submit; red appears only after a real error (see docs/ERROR-HANDLING-UX.md) |
| Premium product looks cheap | 5+ saturated hues | cut to one accent; let neutrals and space do the luxury work |
| Dark mode looks harsh | `#000`/`#FFF` | `#0A0A0B` bg, `#F4F4F5` text, desaturate accents |

## Pre-ship audit

- [ ] Exactly one accent color; it covers roughly 5–10% of the viewport
- [ ] CTA hue separates from the page's dominant color family
- [ ] Semantic colors (red/green/amber/blue) used only for their fixed meanings
- [ ] Body text contrast ≥ 4.5:1, checked, not eyeballed
- [ ] No blue-to-purple gradient anywhere (ANTI-SLOP #1)
- [ ] Dark mode uses softened blacks and desaturated accents, not `#000`/`#FFF`
- [ ] Any color-coded meaning (success/error) is paired with icon + text label
- [ ] Palette resolves to DNA tokens — no stray hex values (SKILL.md color rules)

## Per-DNA notes

- **dark-luxe:** color does almost no work — value contrast does. One deep
  accent (oxblood, emerald, brass) at <5% coverage; everything else is black,
  charcoal, and bone.
- **neo-brutalist-pop / acid-rave:** high saturation is the native language,
  but even here pick *one* loud hue per viewport. Two loud hues argue; three
  is noise.
- **ma-japanese:** color is seasonal and restrained — indigo, vermillion,
  warm paper. A single vermillion mark on a paper field carries more weight
  than a rainbow.
- **retro-terminal:** green/amber phosphor is meaning, not decoration. Keep
  the palette to 2–3 phosphor hues max; red reserved strictly for errors.
- **soft-minimal / glass-calm:** accents at 60–70% saturation read as calm;
  full saturation reads as an alarm. When in doubt, mute the accent one step.
- **industrial-brutalist:** safety orange and hazard yellow are native, but
  they are *signal* colors — use them where a factory would: warnings,
  boundaries, actions. Decorative orange is a contradiction.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/color-theory-crash.md (mechanics), docs/dark-mode-guide.md,
skill/SKILL.md color rules.*
