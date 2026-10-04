<!--tz-meta {"id":"data-viz-taste","title":"Data Viz Taste","file":"docs/data-viz-taste.md","description":"Chart selection, honest axes, colorblind-safe palettes, annotation, and when a table beats a chart."} -->
# Data Viz Taste

A chart is an argument. Every choice — type, scale, color, annotation —
either supports the argument or undermines it. Most bad charts aren't
wrong; they're *evasive*: truncated axes, rainbow series, 3D effects that
hide the numbers. Taste in data viz is mostly honesty with good typography.

## Chart selection: the short table

| You want to show | Use | Never use |
|---|---|---|
| Change over time | Line (≤4 series) | 3D anything, dual axes with different units unlabeled |
| Parts of a whole | Stacked bar (≤5 parts) or table | Pie with >5 slices, donut with labels outside |
| Comparison across categories | Horizontal bar, sorted | Radial/bar-race for static comparison |
| Distribution | Histogram or box plot | Pie (it can't show distribution) |
| Correlation | Scatter, with trend line | Bubble with 3+ encoded dimensions |
| Single KPI | Big number + sparkline + delta | Gauge (dials waste space and lie about scale) |

The tiebreaker: **if the reader needs exact values, it's a table.**
Charts show shape; tables show numbers. A chart with data labels on every
point is a table apologizing for being a chart.

## Axis honesty

1. **Bar charts start at zero.** Always. A truncated bar axis turns a 4%
   difference into a visual landslide. (Line charts may truncate — but the
   break must be visible, not hidden.)
2. **One axis, one unit.** Dual axes are how you make two unrelated lines
   look correlated. If you must, label both axes in full and explain why
   they're paired.
3. **Time axes are continuous.** Missing months don't get skipped — they
   get shown as gaps. Skipping them fabricates a trend.
4. **Label directly.** Legends force eye-tennis between key and chart.
   Put series names at the end of their lines. Legends survive only past
   ~6 series, and at that point you probably need small multiples.

## Color: one hue does the work

- **Sequential data** (low→high): one hue, varying lightness. Two hues
  imply two categories that don't exist.
- **Categorical data** (≤6 categories): distinct hues, colorblind-safe.
  The safe pairs that survive deuteranopia: blue/orange, blue/red,
  purple/green is *not* safe. Test with a simulator, not your eyes.
- **Diverging data** (good↔bad around a midpoint): two hues meeting at a
  neutral midpoint — and the midpoint must be a real zero/average, not an
  aesthetic choice.
- **The highlight rule:** gray everything, color the one series that
  matters. If everything is colored, nothing is emphasized.
- **Never encode value in rainbow.** Spectral palettes imply order that
  isn't there and fail every colorblindness type simultaneously.

## Annotation is the design

An unannotated chart makes the reader do the analysis. Add:

- **The takeaway as a title.** "Churn fell 40% after onboarding v2" —
  not "Churn by month." The title states the argument; the chart is the
  evidence.
- **Event markers.** The vertical line labeled "pricing change" explains
  the inflection better than any trend line.
- **Direct labels on the interesting points.** Max, min, latest value.
  Not every point — the three that matter.
- **Source line.** Small, muted, always present: "Source: billing DB,
  updated Oct 4." A chart without a source is a rumor.

## Small multiples > one crowded chart

Twelve lines on one chart is spaghetti. Twelve small charts in a grid,
same scale, same axes, is a comparison the eye can actually make. Rules:
identical scales (or say so loudly if not), shared axis labels on the
outer edges only, and sort the grid by the metric that matters.

## The data-viz audit (run before ship)

- [ ] Chart type matches the table above; tables used where exact values matter
- [ ] Bars start at zero; time axes continuous; dual axes labeled or removed
- [ ] Series labeled directly (legend only past ~6 series)
- [ ] Color: one hue sequential / ≤6 colorblind-safe categorical / honest diverging midpoint
- [ ] Highlight rule applied: gray the context, color the point
- [ ] Title states the takeaway, not the topic
- [ ] Event markers + max/min/latest labeled; source line present
- [ ] Small multiples share scales; crowded charts split, not decorated
- [ ] No 3D, no gauges, no rainbow encoding, no truncated-y bars

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/typography-guide.md, docs/color-theory-crash.md, docs/spacing-rhythm.md.*
