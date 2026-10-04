<!--tz-meta {"id":"pricing-psychology","title":"Pricing Psychology","file":"docs/PRICING-PSYCHOLOGY.md","description":"Anchoring, decoys, tier naming, and annual framing — how pricing pages actually persuade."} -->
# Pricing Psychology

A pricing page is a persuasion instrument with a table attached. The table
is the easy part — three columns, checkmarks, a highlighted tier. The
psychology is the order people read it in, which tier their eye lands on
first, and what the prices *next to* your price say about it. Nobody
evaluates a price in isolation; every number on the page is an anchor for
every other number.

## The reading order you are designing

Visitors scan pricing pages in a fixed pattern: **middle column first, then
left, then right** (on a 3-tier layout). They read the highlighted tier's
price, then check what the cheaper tier lacks, then glance at the expensive
tier to calibrate. Design for that order:

1. The highlighted tier must be legible at a glance — price, one-line
   positioning, CTA — without reading the feature list.
2. The tier to its left exists to make the highlighted tier look like the
   sensible step up, not a leap.
3. The tier to its right exists to make the highlighted tier look restrained.

If the highlighted tier isn't the middle one, you're fighting the scan
pattern — which is fine if deliberate (e.g. highlighting the entry tier for
a volume play), but never accidental.

## Anchoring: the first number sets the scale

The first price a visitor processes becomes the reference for all others.
Concrete applications:

- **Show the highest tier first (left-to-right: high → low) or list annual
  totals before monthly equivalents.** A $99/mo tier seen after a $499/mo
  tier feels moderate; seen first, it feels expensive. Order is a pricing
  decision, not a layout decision.
- **Anchor against the alternative, not against nothing.** "Less than one
  hour of agency time" or "$2,400/yr for the tool it replaces" gives the
  brain a comparison. A price with no anchor is evaluated against zero, and
  everything loses against zero.
- **The enterprise/"Contact us" tier is an anchor even with no price.**
  Its presence stretches the scale upward and makes the top numbered tier
  feel like the reasonable middle. Removing it compresses everything
  downward.

## The decoy: a tier designed to lose

A decoy tier is slightly worse than the tier you want to sell, at a price
close enough that the comparison is effortless. Classic shape: three tiers
at $29 / $59 / $65, where the $65 tier is barely better than $59. Nobody
buys the decoy; its job is to make $59 feel like the smart choice instead
of the expensive one.

Rules:

- The decoy must be **adjacent** to the target tier — a decoy three tiers
  away doesn't get compared.
- The price gap between decoy and target should be **under 25%**; wider
  gaps break the comparison and the decoy just looks overpriced.
- Never label the decoy as the recommended tier. The highlight goes on the
  target, always.
- One decoy per page. Two decoys is just a confusing pricing page.

## How many tiers

| Count | When | Warning |
|---|---|---|
| 1 | Single product, take-it-or-leave-it; or "everything" simplicity brands | No anchor — the price is evaluated against zero. Add a comparison ("vs. hiring") nearby. |
| 2 | A real choice: light vs full, monthly commitment vs flexibility | Fine, but the page must do the anchoring work elsewhere (testimonials with ROI, alternative-cost framing). |
| 3 | The default. Entry / standard / scale. Highlight the middle. | The classic — which is why ANTI-SLOP #2 applies: three *equal* cards are slop. The highlighted tier must be visually distinct (see below). |
| 4+ | Genuinely different buyer types (starter/team/enterprise/custom) | Needs a real comparison table, not cards. Past 4, add a "which tier is for me" quiz or guided question — choice paralysis is real past 4 options. |

## Tier naming

Names beat "Basic / Pro / Enterprise" because names carry positioning:

- **Name by outcome or user, not by size.** "Starter / Growth / Scale"
  tells a story; "S / M / L" tells a clothing size. "Solo / Studio /
  Agency" names the buyer and lets them self-select in one glance.
- **Never name a tier "Basic."** Nobody aspires to Basic. "Starter" implies
  a beginning; "Essential" implies wisdom. The cheapest tier's name sets the
  floor of the brand — name it like you respect the people buying it.
- **The top tier's name should sound like an achievement**, not a tax
  bracket: "Scale," "Unlimited," "Enterprise" in that order of warmth.
- Keep names to **one word** each. Two-word tier names ("Business Plus")
  read as telecom plans.

## Annual framing

Annual billing is a discount wrapped in a commitment. Frame it to sell the
commitment, not the discount:

- Show the **monthly-equivalent price big** ("$24/mo") with "billed annually
  ($288/yr)" small beneath it. The brain compares monthly numbers; $288
  next to a $29/mo monthly plan looks like a different product.
- The standard annual sweet spot is **~2 months free (≈17% off)**. Less
  than 10% doesn't move anyone to prepay; more than 30% trains visitors to
  wait for the annual "sale."
- Put the toggle **above** the prices, defaulting to annual. Visitors who
  see annual first anchor lower; visitors who must opt into annual feel
  upsold.
- Never show annual as the only price without the monthly equivalent
  nearby — "$288" with no "/mo" context spikes sticker shock and bounces.

## The feature list: 5–7 bullets, aligned checkmarks

- **5–7 features per tier.** Fewer and the tier looks thin; more and nobody
  reads past the seventh. The rest belong in the comparison table below.
- Use "Everything in [Previous], plus:" as the first line of upper tiers.
  It compresses the list and reinforces the upgrade path.
- **Checkmarks align vertically** across tiers — the eye compares down
  columns, and ragged alignment breaks the scan. Excluded features: omit
  them, or show them grayed with an em-dash, never a red X (red X reads as
  punishment; the tier is already cheaper, don't scold the buyer).
- Lead each tier's list with its **differentiator**, not alphabetically.
  The first bullet is the reason the tier exists.

## Price presentation rules

- **Charm pricing ($49) for value, round pricing ($50) for premium.**
  The .99 signals "deal"; the round number signals "we don't discount."
  Match it to the palette logic in docs/COLOR-PSYCHOLOGY.md — loud colors
  with charm pricing, quiet palettes with round.
- **Currency and cadence always adjacent to the number.** "$49/mo", never
  "$49" with "per month" three lines away. Ambiguity at the price is where
  trust dies.
- **Strike through the old price on genuine discounts** ($99 → $49), with
  the reason and expiry nearby ("Launch pricing ends Friday"). A strikethrough
  with no reason reads as a permanent fake sale.
- Every tier gets its own CTA, and the CTA names the tier's action:
  "Start 14-day trial" / "Talk to sales" / "Start free" — never "Choose
  Pro" (docs/CTA-DESIGN.md: buttons say what happens).

## Beating ANTI-SLOP #2 on pricing pages

Pricing is where "three equal cards" is most tempting and most banned.
The fixes:

- The highlighted tier is **visually distinct**: 2px accent border (or
  filled dark card on a light page), a "Most popular" badge, and
  `scale-[1.02]` on desktop. The other two recede — smaller, quieter,
  less saturated.
- **Break the row once.** An asymmetric layout (highlighted tier wider, or
  a horizontal "recommended" banner tier above two smaller ones) reads as
  designed; three identical boxes read as generated.
- Below the cards: a real comparison table (the cards are the pitch, the
  table is the proof), then FAQ (4–6 questions max, pricing-specific:
  "Can I switch tiers?", "What counts as a seat?"), then a final CTA.
  A pricing page that ends at the cards feels unfinished.

## Trust elements that belong near price

- **Guarantee or trial terms within one viewport of the price.** "30-day
  money-back" next to the CTA de-risks the click. A guarantee buried on
  another page doesn't exist.
- **"No credit card required"** under the free-trial CTA if true — it
  lifts trial starts more than any copy tweak on the page.
- **One testimonial with a number** near the highlighted tier ("Paid for
  itself in 3 weeks — Maya R., Studio North"). Testimonials live fully in
  docs/SOCIAL-PROOF.md; on pricing pages they are ammunition, not decor.
- **FAQ kills objections.** The 4–6 questions are the ones support actually
  gets, not the ones marketing wishes people asked.

## Pre-ship audit

- [ ] 3 tiers default; 4+ only with a comparison table and a "which is for me" aid
- [ ] Highlighted tier is visually distinct — not three equal cards (ANTI-SLOP #2)
- [ ] Reading order designed: middle first, anchors placed deliberately
- [ ] Tier names are one word, outcome/user-based, never "Basic"
- [ ] Annual toggle above prices, default annual, monthly-equivalent shown big
- [ ] Feature lists 5–7 bullets, checkmarks aligned, differentiator first
- [ ] Every CTA names the action ("Start 14-day trial"), none says "Choose X"
- [ ] Guarantee/trial terms within one viewport of the price
- [ ] FAQ has 4–6 real pricing questions from actual support tickets
- [ ] Currency + cadence adjacent to every price; no ambiguous "$49"

## Per-DNA notes

- **dark-luxe:** round pricing, no charm digits, no strikethroughs — a
  luxury brand on sale is a contradiction. The highlighted tier is
  distinguished by material (deeper black, brass rule), not by a badge.
- **neo-brutalist-pop:** the "Most popular" badge can be loud — starburst,
  rotated, hard shadow. This DNA is allowed to shout about the highlight.
- **soft-minimal / glass-calm:** the highlight is the *only* filled card;
  everything else is hairlines. Restraint makes the filled card magnetic.
- **retro-terminal:** pricing as a config file or ASCII table. Charm
  pricing fits the playful register; keep the toggle as a `[x] annual`
  checkbox for the bit.
- **editorial-serif:** price as headline type, large and quiet. The
  comparison table gets ruled columns and generous whitespace — a price
  list set like a menu.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/CTA-DESIGN.md (button copy), docs/SOCIAL-PROOF.md (testimonials near
price), docs/COLOR-PSYCHOLOGY.md (price signaling).*
