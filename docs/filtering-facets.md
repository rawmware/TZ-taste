<!--tz-meta {"id":"filtering-facets","title":"Filtering & Facets","file":"docs/filtering-facets.md","description":"Facet design done right: AND vs OR clarity, count rules, clear-all placement, mobile sheets, and live result counts."} -->
# Filtering & Facets

Filters are how users say "not that." Facets are filters with counts —
"Color: Red (42)" — and the counts are the whole point: they let users
predict the result *before* committing. A filter panel without counts is a
slot machine. A filter panel with lying counts is worse.

## Filters vs facets vs sort vs search

Use the right tool. They're not interchangeable:

| Tool | Answers | Example |
|---|---|---|
| Search | "I know what I want" | `"denim jacket"` |
| Facets | "Show me the shape of what's here" | Color (42), Size (18) |
| Filters | "Remove what I don't want" | In stock only, under $50 |
| Sort | "Order what I already see" | Price low→high, newest |

Rule: **facets narrow, sort orders.** If your "sort" changes *which*
items appear, it's a filter wearing a costume. If your filter only reorders,
same problem in reverse.

## The AND/OR contract

The single most confusing thing in filter UX is Boolean logic the user
can't see. State it visually:

- **Within one facet: OR.** Selecting Red *and* Blue shows red-or-blue
  items. This matches every major store; don't innovate here.
- **Across facets: AND.** Color=Red *and* Size=M shows red mediums. The
  intersection.
- **Show it, don't document it.** Selected chips grouped by facet
  ("Color: Red, Blue ×" / "Size: M ×") make the logic visible. A paragraph
  explaining Boolean algebra means the UI failed.

## Count rules

1. **Counts are live and honest.** "Red (42)" then selecting Size=M must
   update Color counts to reflect the intersection — or gray out the
   options that would empty the result. Stale counts are lying counts.
2. **Zero-count options: show, disabled.** Removing them hides the shape
   of the catalog; showing them enabled leads to dead ends. Disabled +
   "(0)" teaches the inventory honestly.
3. **Result count updates before the user commits.** "Show 142 results"
   as a sticky button on the filter panel (mobile) or a live count in the
   panel header (desktop). Nobody should apply filters blind.

## Panel anatomy

- **Order facets by decision order,** not alphabetically: the facet users
  pick first goes first. Category → price → the domain's killer facet
  (size for apparel, date for events).
- **5–7 facets visible; the rest behind "More filters."** Twelve open
  accordions is a wall. The long tail still exists — it's just one click
  deeper.
- **Clear-all placement:** top-right of the panel, text button
  ("Clear all (3)"), always visible when ≥1 filter is active. Plus per-facet
  clear on hover. "Clear all" buried at the bottom is a retention trick,
  not a design.
- **Selected state must survive.** Filters persist across pagination,
  survive a back-button trip, and encode in the URL (shareable, bookmarkable).
  Losing filters on page 2 is a rage-quit machine.

## Mobile: the filter sheet

Bottom sheet, not a new page — the user needs to feel the results waiting
underneath. Anatomy: header with count + Clear all, scrollable facet list,
sticky footer with "Show 142 results" as the only primary button. Applying
is explicit (tap the button), not live — live-applying on mobile burns
through data and patience. One exception: single-select chips (sort, "in
stock") can apply instantly.

## The filtering audit (run before ship)

- [ ] Facets show live counts; zero-count options shown disabled, not hidden
- [ ] Within-facet OR / across-facet AND visible via grouped chips
- [ ] "Show N results" updates before commit (sticky on mobile)
- [ ] Clear-all visible top-right with active count; per-facet clear exists
- [ ] Facet order follows decision order; 5–7 visible, rest behind "More"
- [ ] Filters persist across pagination, back-button, and URL
- [ ] Mobile: bottom sheet, explicit apply, sticky result-count button
- [ ] Empty intersection impossible to reach blind (counts warned first)

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/search-ux.md, docs/empty-states.md, docs/navigation-patterns.md.*
