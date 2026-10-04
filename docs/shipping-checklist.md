<!--tz-meta {"id":"shipping-checklist","title":"The Shipping Checklist","file":"docs/shipping-checklist.md","description":"Pre-launch QA: viewports, performance, SEO basics, legal, analytics, the ANTI-SLOP final pass."} -->
# The Shipping Checklist

Taste doesn't survive contact with a broken launch. This is the pre-flight
list: everything that must be true before the URL goes public. Run it in
order — each section gates the next, because there's no point tuning SEO on
a page that clips at 390px.

## 1. Viewports (gates everything)

Render at **1440 / 768 / 390**. Not in a responsive-preview iframe — in real
browser widths, with devtools device emulation at minimum.

- [ ] 390px: no horizontal scroll, no clipped text, no overlapping elements.
      (`h-screen` sections are the usual suspect — ANTI-SLOP #13. Use
      `min-h-[100dvh]`.)
- [ ] 390px: nav collapses to a working menu. "Working" means tappable,
      closable, and keyboard-accessible — not just visually present.
- [ ] 390px: tap targets ≥ 44px. Icon buttons, nav links, form controls.
- [ ] 768px: the awkward middle. Grids reflow (3-col → 2-col → 1-col), type
      scales down without orphaning headlines, images don't balloon.
- [ ] 1440px: max-widths hold. Content doesn't stretch into unreadable
      200-character lines — `max-w-7xl` (or DNA-appropriate measure) on
      sections, 45–75ch on body copy (SKILL.md).
- [ ] 2560px ultrawide (if you can): background treatments extend, content
      stays centered. A hero gradient that ends at 1440px on a 34" monitor
      is a small but real slop tell.
- [ ] Landscape phones (844×390): fixed headers don't eat the viewport;
      heroes with `min-h-[100dvh]` still show content above the fold.

**The one-minute test:** load the page at 390px, scroll top to bottom
without stopping. Anything you have to fight — pinching, horizontal
nudging, tapping twice — is a ship-blocker.

## 2. Performance

Users feel performance as taste. A beautiful page that janks feels cheap.

- [ ] **LCP < 2.5s** on a throttled 4G connection. Hero images: preload the
      one above-the-fold image, `fetchpriority="high"`, everything else lazy.
- [ ] **No layout shift.** Images and embeds have explicit width/height or
      `aspect-ratio`. Webfonts use `font-display: swap` *with* a metric-
      compatible fallback so the swap doesn't reflow text.
- [ ] **Fonts: ≤ 3 families, subsetted.** Display + body + mono (SKILL.md),
      `latin` subset minimum. Each additional weight is a download — audit
      weights, not just families. Variable fonts where the DNA's typefaces
      offer them.
- [ ] **JS < 200KB gzipped** for a marketing page. If you're shipping a
      framework runtime for a static page, justify it in writing.
- [ ] **Animations on transform/opacity only** (ANTI-SLOP #12). No
      width/height/top/left animations — they thrash layout and drop frames
      on mid-range phones.
- [ ] **Images: modern formats, sized right.** AVIF/WebP with fallbacks;
      `srcset` for 1x/2x; never serve a 2400px image into a 400px slot.
- [ ] **`prefers-reduced-motion` honored** — non-essential animation fully
      disabled, not just slowed (SKILL.md motion rules).

Run Lighthouse once. You're not chasing 100s — you're checking that nothing
is red. A 92 with zero reds ships; a 99 with a red accessibility flag
doesn't.

## 3. Accessibility (non-negotiable)

- [ ] **Contrast:** body ≥ 7:1 target (4.5:1 minimum), muted ≥ 4.5:1
      (ANTI-SLOP #8). Check *every* text/background pair, including text on
      images and in footers.
- [ ] **Keyboard:** tab through the entire page. Every interactive element
      reachable, focus visible (designed per DNA — docs/designing-forms.md),
      focus order logical, no traps. Test the mobile menu and any modal
      with keyboard alone.
- [ ] **Screen reader pass:** one run with VoiceOver or NVDA. Headings in
      order (no skipped levels), images have alt text (decorative images
      `alt=""`), icon-only buttons have labels, form inputs have labels.
- [ ] **Touch:** 44px targets (above), plus 8px minimum gaps between
      adjacent tappables so fat fingers don't mis-tap.
- [ ] **Motion:** reduced-motion verified (above); no essential information
      conveyed by animation alone.
- [ ] **Zoom to 200%:** layout holds, no overlap, no clipped controls. This
      catches fixed-position sins fast.

## 4. SEO basics

Not growth-hacking — the minimum for the page to exist correctly on the web.

- [ ] **Title tag:** specific and human — "Cinder & Oak — Wood-fired
      restaurant, Portsmouth NH", not "Home" or "Welcome".
- [ ] **Meta description:** one sentence, ~155 characters, written by a
      human. It's ad copy for the search result.
- [ ] **One H1 per page**, matching the page's claim. H2s/H3s in order.
- [ ] **OG/Twitter cards:** `og:title`, `og:description`, `og:image`
      (1200×630, under 300KB). Test with a card validator — a broken social
      preview is a first impression you don't control otherwise.
- [ ] **Semantic HTML:** `header`/`main`/`footer`/`nav`, real `<button>`s and
      `<a>`s. Div-soup is invisible until it isn't (SEO, a11y, reader mode).
- [ ] **Sitemap + robots.txt** for multi-page sites. Single-page sites:
      at least confirm you're not accidentally `noindex`ed from staging.
- [ ] **Analytics-ready URLs:** campaign links use UTM params; the site
      itself uses clean slugs.

## 5. Legal (the boring section that prevents exciting problems)

- [ ] **Privacy policy** if you collect anything (analytics counts as
      collecting). Link it in the footer. It must describe what's actually
      collected — not a template that mentions data you don't touch.
- [ ] **Cookie consent** if you set non-essential cookies or run third-party
      trackers. Essential-only analytics (Plausible, Fathom) sidesteps most
      of this — a taste decision *and* a legal simplification.
- [ ] **Terms** for anything transactional (payments, accounts, bookings).
- [ ] **Imagery rights:** every photo licensed or owned, model releases
      where applicable. Picsum/placeholder check: `grep -r picsum` returns
      nothing (docs/imagery-art-direction.md).
- [ ] **Font licenses:** commercial use cleared for the DNA's typefaces.
      Google Fonts are fine; that "free" display font from a random site
      might not be.
- [ ] **Accessibility statement** (nice-to-have): one paragraph + contact
      email. Signals seriousness, costs nothing.

## 6. Analytics (minimal, honest)

- [ ] **One analytics tool**, privacy-respecting default (Plausible/Fathom).
      Not GA4 + Mixpanel + Hotjar + the Facebook pixel "just in case."
- [ ] **Conversion event defined:** the one action the page exists for
      (booking, signup, purchase) fires a named event. If you can't name
      the conversion, the brief was unclear — revisit AGENT.md pre-flight.
- [ ] **No vanity dashboards.** Pageviews and bounce rate don't make
      decisions. Track the funnel: visited → engaged → converted.
- [ ] **Error tracking** for anything with JS-driven flows (Sentry or
      equivalent, sampled). Forms that fail silently are revenue leaks.

## 7. Content final pass

- [ ] **Zero lorem ipsum**, including in meta descriptions, alt text, and
      OG tags (ANTI-SLOP #5). Search the built output, not just the source.
- [ ] **Copy read aloud once** (SKILL.md). Awkward phrasing survives silent
      reading; it dies out loud.
- [ ] **Buzzword purge:** "delve," "leverage," "cutting-edge," "seamless,"
      "elevate," "unlock," "supercharge" — find and replace with plain words
      (ANTI-SLOP #11).
- [ ] **Buttons say what happens** (SKILL.md). "Submit" appears nowhere.
- [ ] **Dates, prices, hours are current.** Stale specifics are worse than
      vague ones — "Open late" never expires, "Open until 11pm Fridays"
      does, so it must be right.
- [ ] **Contact paths work:** email links open correctly, phone numbers are
      tappable (`tel:`), the contact form actually delivers (send a test).

## 8. The ANTI-SLOP final pass

Run docs/ANTI-SLOP.md against the *shipped* page, not the mockup. Last
chance:

- [ ] **Zero 🔴 blockers.** Not "we'll fix the hero later." Zero.
- [ ] **Fewer than two 🟡 warnings.** Two or more = rethink the page
      (DECISION-MATRIX.md anti-patterns: a wrong DNA forces slop-shaped
      compromises — consider re-picking before patching).
- [ ] **Taste test, all true:**
  - [ ] One-sentence design read exists and the page matches it
  - [ ] Exactly one style DNA, all values resolve to its tokens
        (`grep` for stray hex — docs/design-tokens-explained.md)
  - [ ] The page has one deliberate distinctive choice
  - [ ] A stranger could describe the page's personality in 3 words
- [ ] **Screenshot the page.** Look at it tomorrow with fresh eyes before
      announcing. The 24-hour rule catches what checklists miss.

## 9. Launch day

The checklist is done. Launch day has its own small list:

- [ ] **Deploy to production, then verify the production URL** — not
      staging, not localhost. Staging lies about fonts, images, and
      environment variables.
- [ ] **Invalidate caches.** CDN, service worker, the OG image cache
      (social platforms cache cards aggressively — use their validators to
      force a re-scrape).
- [ ] **Click every conversion path as a stranger.** Book the table, submit
      the form, complete the purchase — in an incognito window, on your
      phone, on cellular data. The path the business depends on gets tested
      like the business depends on it.
- [ ] **Watch real-time analytics for 30 minutes.** Traffic + the conversion
      event firing. Silence is information — if the event never fires,
      something broke between staging and prod.
- [ ] **Have a rollback plan.** Know the exact command or button that
      restores the previous deploy, and confirm it works *before* you need
      it. "We'll figure it out if it breaks" is not a plan.

## 10. Post-launch week

- [ ] **Error tracking review** (day 2): any new exceptions? Forms failing
      silently? Fix the top one before doing anything else.
- [ ] **Performance re-check** (day 3): real-user LCP, not lab numbers. If
      the hero image is slow on real connections, resize or re-encode it.
- [ ] **Conversion sanity** (day 7): is the funnel behaving? Not
      optimization — just confirmation that the page does its one job.
- [ ] **Fresh-eyes review** (day 7): screenshot the live page, look at it
      like a stranger. Note three things you'd change. File them; don't
      act on launch-week adrenaline.
- [ ] **Document the DNA and dials** in the repo README for the next person.
      Future-you is the next person.

## The 10-minute pre-launch runbook

When the full list is done and you want one final sweep:

1. `grep -ri "lorem\|picsum\|TODO\|FIXME"` → empty.
2. `grep -rE "#[0-9a-fA-F]{3,8}"` outside the token config → empty.
3. Load at 390px → scroll → no fights.
4. Tab through → focus visible everywhere.
5. Run ANTI-SLOP.md → zero blockers.
6. Ship.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Print this,
laminate it, tape it to the wall next to AGENT.md.*
