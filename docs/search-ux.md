<!--tz-meta {"id":"search-ux","title":"Search UX","file":"docs/search-ux.md","description":"Zero-results design, autocomplete behavior, typo tolerance, result honesty, and the mobile search pattern."} -->
# Search UX

Search is a promise: "type what you want, we'll find it." Every part of
the search UI either keeps that promise or breaks it. The most common
break is the dead end — a zero-results page that shrugs, which is the
product admitting it has nothing and offering no way forward.

## The zero-results page (design it first)

Design the empty result set before the full one. It's the state users
remember, and it has a job: recover the search. A good zero-results page
has exactly three things:

1. **What you searched, quoted.** `"bluetoth speaker"` — so the user sees
   their own typo instead of wondering what happened.
2. **One concrete next step.** Not "try different keywords" — a real
   action: "Browse all speakers," "Search for 'bluetooth' instead" (with
   the corrected query as a link), or "Get notified when it's back."
3. **Partial matches, labeled honestly.** "No exact matches. Closest we
   have:" — then show them. Never silently show unrelated results as if
   they matched.

What it never has: a joke illustration carrying the whole page, a search
box that just repeats the failed query with no help, or (worst) an empty
page that looks broken.

## Autocomplete behavior

| Rule | Why |
|---|---|
| Show suggestions after 2 characters | 1 character is noise; 3 is late |
| Debounce 150–250ms | Faster feels twitchy; slower feels dead |
| Max 6–8 suggestions | More is a dropdown, not a hint |
| Keyboard: ↓ selects, Enter searches, Esc dismisses | Non-negotiable |
| Highlight the matched substring in each suggestion | Proves the suggestion is relevant |
| Recent searches section (3–5), clearable | Users repeat searches constantly |
| Never submit on suggestion hover | Hover is browsing; click/Enter is intent |

## Typo tolerance, stated honestly

Modern search handles typos — the UX question is what you *show*:

- **Silent correction for obvious typos** ("bluetoth" → "bluetooth"):
  show "Showing results for **bluetooth**" with a "Search instead for
  bluetoth" link. The user should always know what actually ran.
- **Never silently correct to something unrelated.** If confidence is low,
  ask: "Did you mean ___?" — a correction you announce beats a guess you
  hide.
- **Stemming and synonyms need a label too.** "Also searching for:
  couch, settee" — one small line that explains why the results look
  broader than the query.

## Result honesty

- **Rank, don't filter silently.** If results are sorted by "relevance,"
  say what relevance means in one line, or offer the sort control.
  Sponsored results get a visible label — always, no exceptions.
- **Show the count.** "142 results" sets expectations; hiding the count
  suggests you're hiding the ranking too.
- **Scannable rows.** Title, one-line description, and the one metadata
  field that matters for the domain (price, date, author). Everything else
  is detail-page content.
- **Highlight matches in snippets.** Same rule as autocomplete — the user
  should see *why* each result matched without reading the whole row.

## Mobile: the search sheet

On mobile, search deserves a dedicated surface, not a cramped navbar box:
full-width input at top, large touch targets (48px rows), recent searches
visible before typing, filters as a single "Filter" button that opens a
sheet (docs/filtering-facets.md). The keyboard opens automatically on
entry — making the user tap the field *after* tapping search is two taps
for one intent.

## The search audit (run before ship)

- [ ] Zero-results page designed: quoted query + one real next step + honest partial matches
- [ ] Autocomplete: 2-char trigger, 150–250ms debounce, ≤8 suggestions, substring highlighted
- [ ] Full keyboard flow: ↓/Enter/Esc, no hover-submit
- [ ] Corrections announced ("Showing results for ___"), low-confidence asks first
- [ ] Sponsored results labeled; sort control present or relevance defined
- [ ] Result count shown; match highlighted in snippets
- [ ] Mobile: dedicated surface, 48px rows, keyboard auto-opens
- [ ] Recent searches: 3–5, clearable, privacy-respecting

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/filtering-facets.md, docs/empty-states.md, docs/navigation-patterns.md.*
