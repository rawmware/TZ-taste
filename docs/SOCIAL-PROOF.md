<!--tz-meta {"id":"social-proof","title":"Social Proof","file":"docs/SOCIAL-PROOF.md","description":"Logos, testimonials, and stats that earn trust — credibility rules, placement, and fake-proof detection."} -->
# Social Proof

Social proof works because visitors trust strangers more than they trust
you — but only when the strangers look real. A testimonial from "John D.,
CEO" with a stock-photo avatar converts *negatively*: it tells the visitor
you manufacture trust, which makes everything else on the page suspect.
This doc is the credibility system: what to show, how to show it so it
reads as true, and where each type belongs.

## The credibility ladder

Not all proof is equal. Ranked by persuasive power:

1. **Video testimonial** (30–60s, customer speaking) — hardest to fake,
   highest trust.
2. **Named testimonial with specific numbers** — "Cut onboarding from 3
   weeks to 4 days." Specificity is unfakeable at scale.
3. **Ratings with distribution** — 4.8 with 2,300 reviews and a visible
   histogram beats 5.0 with 12 reviews. Perfection reads as curated.
4. **Customer logos** — borrowed credibility, weakest alone, strong in
   aggregate.
5. **Raw stats** — "12,000 teams" — persuasive only with a denominator and
   a date.

The rule: **climb as high as you honestly can.** One real video beats a
wall of anonymous quotes. Never pad downward — twelve fake testimonials
are worth less than zero; they actively subtract.

## Logos: the borrowed-credibility strip

- **4–6 logos.** Fewer than 4 looks thin; more than 6 becomes wallpaper
  nobody reads. If you have 20 customers, rotate 6.
- **Grayscale, uniform height (24–32px), ~60% opacity**, on hover: full
  color. Uniform treatment says "these are equivalent endorsements";
  mixed sizes say "we're name-dropping."
- **Only real, current customers** with permission. A logo you don't have
  rights to is a legal problem; a logo of a churned customer is a trust
  problem waiting for someone to check.
- **Recognizability beats prestige-count.** Six logos nobody recognizes
  prove nothing. Two recognizable + four niche beats six unknown.
- Placement: after the hero's promise has landed (docs/HERO-ANATOMY.md —
  the logo row is *not* default hero furniture, ANTI-SLOP #3), or above
  the final CTA as a last nudge. Caption it honestly: "Trusted by teams
  at" — not "Loved by millions" unless millions is true.

## Testimonials: anatomy of one that reads as real

- **Full name + role + company.** "Maya R., Operations Lead, Studio
  North" — every missing element subtracts credibility. Anonymous quotes
  ("— Marketing Director, SaaS company") read as written by marketing,
  because they usually are.
- **Photo or initials avatar — never a stock face.** A stock-photo avatar
  next to a testimonial is the fastest trust-killer in this doc; visitors
  have seen that same face on forty other sites. Initials in a colored
  circle are more honest than a fake human.
- **40–60 words, one specific outcome.** "We cut client onboarding from
  three weeks to four days, and support tickets dropped by half in the
  first month." Specific numbers, specific timeframe. "Great product,
  highly recommend!" is content-free — cut it no matter who said it.
- **Slight imperfection is credibility.** A testimonial that mentions a
  minor caveat ("took a week to get the team on board, but…") converts
  better than pure praise. Curate for honesty, not for glow.
- **12–20 max on a "wall of love"** — curated, categorized, searchable.
  200 unfiltered tweets is a firehose, not proof.

## Stats: specific beats round, always

- **Exact numbers beat round ones.** "1,247 teams" reads as counted;
  "1,000+" reads as rounded up from 600. If the real number is small,
  pair it with a timeframe: "312 teams joined this quarter."
- **Always label the denominator and the date.** "4.8/5 from 2,314
  reviews (2026)" — a stat with no denominator is a claim; with one, it's
  evidence. Stale stats are lies: audit every number quarterly, and drop
  any you can't re-verify.
- **3 stats max per row**, each with a ≤ 6-word label. More than 3 and
  the eye skims; the fourth stat is where attention dies.
- **Percentages need the base.** "94% renew" means nothing without "of
  1,100 annual customers". A percentage without a base is a magic trick.
- **Comparative stats need the comparator named:** "3.2x faster than
  [previous workflow]" — faster than *what*? Unnamed comparators read as
  invented.

## Ratings and reviews

- Show the **distribution**, not just the average. A 4.6 with a real
  histogram (some 3s, a few 1s) is more believable than a flat 5.0.
- **Link to the source** (G2, Capterra, App Store) when the rating lives
  there. A star graphic with no source is decoration.
- **Respond to bad reviews publicly** and link the good ones — a profile
  with only 5-star reviews and no responses reads as managed, not loved.
- Never buy reviews, never review-gate (only soliciting happy users).
  Both are policy violations on most platforms and trust violations with
  everyone else.

## Case studies: proof with a narrative

- Structure: **situation → friction → change → measured outcome**, 300–500
  words. The outcome needs numbers; the friction needs honesty (what was
  actually hard, including about your product).
- **One chart or screenshot** of the customer's real result beats three
  paragraphs. Redact what you must, but real artifacts prove the story
  happened.
- Gate nothing. A case study behind a lead form reaches 5% of its
  audience; the other 95% bounce. If sales needs gated assets, write
  separate ones — the public proof stays public.

## Placement map

| Location | Proof type | Why |
|---|---|---|
| After hero | Logo strip (4–6, grayscale) | borrowed credibility once the promise landed |
| After features | 2–3 named testimonials with numbers | proof follows claims |
| Near pricing | 1 testimonial with ROI number + guarantee | de-risks the price (docs/PRICING-PSYCHOLOGY.md) |
| Before final CTA | Stats row (≤ 3) or logo strip | last nudge for the convinced-but-hesitant |
| Dedicated page | Case studies, wall of love (12–20) | depth for the researchers |

Never stack all types in one section — a logos + testimonials + stats +
reviews mega-section reads as desperation. Distribute proof along the
page's argument like evidence in a case.

## Fake-proof detection (audit others — and yourself)

- Reverse-image-search testimonial avatars. Stock faces are everywhere.
- "John D., CEO" with no company: fabricated until proven otherwise.
- Round-number stats with no date or denominator: invented.
- Logo strips of companies that never used the product: checkable in one
  search — and someone will.
- Testimonials all in the same voice, same length, same enthusiasm curve:
  written by one person.

## Pre-ship audit

- [ ] Every logo is a real current customer with permission; 4–6, grayscale, 24–32px, ~60% opacity
- [ ] Every testimonial: full name + role + company, photo or initials (never stock faces), 40–60 words, one specific numbered outcome
- [ ] Stats: exact numbers, denominator labeled, dated, audited this quarter; ≤ 3 per row
- [ ] Ratings show distribution + source link; no bought or gated reviews
- [ ] Case studies ungated, 300–500 words, situation → friction → change → measured outcome, one real artifact
- [ ] Proof distributed along the page (hero-adjacent, post-features, near pricing, pre-final-CTA) — not stacked in one mega-section
- [ ] No anonymous quotes, no round-number claims without base, no "Loved by millions" without millions
- [ ] Logo strip placed after the hero promise, not as default hero furniture (ANTI-SLOP #3)

## Per-DNA notes

- **editorial-serif:** testimonials as pull-quotes — large serif, generous
  whitespace, attribution in small caps. The magazine register makes
  quotes feel reported, not marketing.
- **dark-luxe:** proof is whispered — client names in muted type, no star
  graphics, no badges. Loud proof would break the register; restraint
  implies the clients are too important to shout about.
- **neo-brutalist-pop:** testimonial cards with thick borders and hard
  shadows, star ratings as chunky glyphs. Loud proof suits loud DNA.
- **retro-terminal:** reviews as `$ cat testimonials.txt` — monospace,
  star ratings as `[****-]`. Stats as system output. Keep it terse.
- **soft-minimal:** one testimonial at a time, large and quiet, generous
  space. The wall of love becomes a slow carousel, not a grid.
- **industrial-brutalist:** proof as spec sheet — client, metric, delta,
  in a bordered table. Numbers do all the talking.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/HERO-ANATOMY.md (logo rows), docs/PRICING-PSYCHOLOGY.md
(testimonials near price), docs/imagery-art-direction.md (avatar honesty).*
