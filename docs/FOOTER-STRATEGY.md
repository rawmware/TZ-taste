<!--tz-meta {"id":"footer-strategy","title":"Footer Strategy","file":"docs/FOOTER-STRATEGY.md","description":"What footers actually do — trust, wayfinding, SEO, and the conversion safety net."} -->
# Footer Strategy

The footer is the most under-designed section on most sites and the most
overlooked conversion surface. Visitors scroll to the footer for four
reasons: they didn't find what they wanted, they want to check you're
legitimate, they want to contact you, or they're lost. A footer that serves
all four is a safety net; a footer that says "© 2026 All rights reserved"
and nothing else is ANTI-SLOP #14 — a blocker, not a warning.

## The five jobs of a footer

**1. Trust and legitimacy.** Address, company registration, certifications,
"est. 2019." Visitors deciding whether to hand you money or an email
address scroll down to check you exist. This is the footer's highest-value
job on commerce and SaaS pages.

**2. Wayfinding.** The sitemap for people who missed the nav: product pages,
pricing, docs, support, careers. Footer links get clicked by visitors with
intent — they convert better per-click than nav links because the clicker
is already looking for something specific.

**3. SEO.** Internal links to key pages, in crawlable HTML, with real anchor
text. The footer is one of the few places where a long link list is
legitimate rather than keyword stuffing — but keep anchors honest
("API documentation", not "best cheap API tool 2026").

**4. Conversion safety net.** The newsletter signup and the contact link
catch visitors who scrolled the whole page without converting. The footer
CTA won't beat the hero CTA, but it catches the 5–10% who need one more
nudge — which is the cheapest conversion lift on the page.

**5. Brand personality.** The footer is allowed one human moment: a
colophon ("Set in Fraunces & Inter. Built with too much coffee."),
a one-line manifesto, a tiny illustration. One. The footer is utility
space; personality is a garnish, not the meal.

## Structure: the canonical footer

Top to bottom:

1. **(Optional) Newsletter band** — one line of pitch, one email input, one
   button. Above the link columns, separated by a hairline. Skip it if the
   page already has a newsletter section; two signup forms on one page
   compete with each other.
2. **Link columns** — 4–6 columns: brand column (logo, one-line description,
   social icons) + Product + Company + Resources + Legal. Never more than 6
   columns; never fewer than 3 on desktop (fewer reads as unfinished).
3. **Legal hairline row** — © with auto-updating year, Privacy, Terms,
   Cookies, status link ("All systems operational" with a green dot if you
   have a status page — it's quiet trust signaling).

Rules:

- **4–8 links per column.** Fewer than 4 and the column looks accidental;
  more than 8 and it's a wall. Total footer links: aim under 40.
- **Column headers are micro-caps** (12–13px, uppercase, letter-spacing
  0.08em, muted color) — never full-size headings competing with page H2s.
- **Link-to-link gap `space-2`** (8px), column gap `space-12` (48px)
  (docs/spacing-rhythm.md). Footers are utility space: density goes *up*
  here, tighter than body sections.
- **The top edge gets ceremony:** `pt-16` minimum plus a hairline rule
  above. The rule is what separates footer from content, not the padding —
  without it the footer feels glued on.

## The newsletter band, done right

- **Pitch ≤ 12 words with a concrete promise:** "One teardown of a great
  landing page, every Tuesday." beats "Subscribe to our newsletter."
  Frequency + content + benefit, in one line.
- **Input height 44–48px**, label (visible or sr-only — never placeholder
  as the only label), button says what happens: "Get the teardown", not
  "Submit".
- **Success state inline:** replace the form with "You're in — first issue
  Tuesday." Never navigate away or pop a modal for a newsletter signup.
- **No incentive inflation.** "Get our free ebook!" for a 4-page PDF
  burns trust. If there's no lead magnet, the cadence pitch is enough.

## Social icons: real links only

- Every icon must go somewhere real and maintained. A dead Twitter icon
  linking to a 2019 account is worse than no icon — it tells the visitor
  the company is abandoned.
- **4 icons max** in the footer. If you're on seven platforms, pick the
  four where you actually post. Order by where you're most active.
- Icons at 20–24px, muted color, full color (or accent) on hover. Labels
  via aria-label; visible labels optional but nice ("@romansproposal").

## The legal row

- **© year auto-updates.** A hardcoded "© 2023" in 2026 says nobody
  maintains the site. `© {new Date().getFullYear()} Company Name`.
- Company legal name, not just the brand, if they differ — plus city or
  jurisdiction for trust ("Roman's Proposal LLC · Portsmouth, NH").
- Privacy, Terms, Cookies/Security links. Cookie settings link if you run
  a consent banner (reopening preferences must be possible without clearing
  cookies).
- **Status page link** if you have one. It's the cheapest trust signal in
  SaaS and almost nobody uses the footer for it.

## What doesn't belong in a footer

- A second full nav duplicating the header (pick wayfinding *or*
  navigation, not both — the footer is the overflow, not the mirror).
- A contact form. The footer gets a contact *link*; a form needs room and
  focus the footer can't give it.
- Autoplaying anything, carousels, or motion beyond hover states. The
  footer is the quietest part of the page — motion here reads as desperation.
- Keyword-stuffed link farms ("cheap web design Portsmouth | affordable
  web design NH | ..."). Search engines discount it and humans distrust it.

## Mobile footer

- Columns stack or collapse into **accordions** (one tap to expand).
  Accordions beat a 60-link scroll wall; the legal row stays visible
  without expanding.
- Newsletter band goes *above* the columns on mobile — it's the highest
  value element and shouldn't require scrolling past 30 links.
- Social icons stay in the brand block at top. Tap targets 44px minimum.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Footer is just a © line | ANTI-SLOP #14, blocker | full structure: newsletter (optional) → columns → legal row |
| Footer feels glued on | no top rule, `py-8` after a `py-32` section | `pt-16` + hairline rule above (docs/spacing-rhythm.md) |
| 60-link wall | every page linked "for SEO" | cap at ~40 links, 4–8 per column, honest anchors |
| Dead social icons | linked once, never audited | quarterly audit; 4 max, real and maintained |
| Newsletter converts at ~0% | "Subscribe for updates" pitch | concrete promise: content + frequency in ≤ 12 words |

## Pre-ship audit

- [ ] More than a © line — trust, wayfinding, SEO, safety net, personality all served (ANTI-SLOP #14 clear)
- [ ] 3–6 columns, 4–8 links each, under ~40 total; headers are micro-caps
- [ ] Hairline rule + `pt-16` minimum above the footer; column gap `space-12`, link gap `space-2`
- [ ] Newsletter (if present): ≤12-word concrete pitch, 44–48px input, inline success state
- [ ] Social icons: ≤4, all link to live maintained profiles
- [ ] © year auto-updates; Privacy/Terms/Cookies present; status link if one exists
- [ ] Mobile: newsletter above columns, columns stack or accordion, 44px targets
- [ ] Link contrast ≥ 4.5:1 (ANTI-SLOP #8); no keyword-stuffed anchors

## Per-DNA notes

- **editorial-serif:** the footer is a colophon — set it like one. Type
  credits, paper stock jokes, ruled columns. This DNA's footer can carry
  the most personality.
- **industrial-brutalist:** footer as spec sheet — monospace, bordered
  cells, registration numbers. Trust through precision.
- **dark-luxe:** minimal footer, maximum restraint: brand line, 3 columns,
  legal row. Whitespace is the luxury signal; a dense footer would break it.
- **neo-brutalist-pop:** the newsletter band gets the loud treatment —
  filled background, thick border, hard-shadow button. The link columns stay
  quiet so the band pops.
- **retro-terminal:** footer as `$ whois` output or a man page. Status dot
  becomes `[OK]`. Keep it to one screen of terminal, not an infinite log.
- **ma-japanese:** the footer nearly disappears — one hairline, small type,
  vast space above it. The ceremony *is* the restraint.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/spacing-rhythm.md (footer spacing), docs/CTA-DESIGN.md (newsletter
button), skill/SKILL.md slop blocklist (#14).*
