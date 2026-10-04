"""<!--tz-meta {"id":"py-saas-page","title":"Stillwater — calm analytics landing page","category":"Python","file":"python/saas_page.py","tags":["python","landing-page","saas"],"description":"Complete calm analytics landing page in the soft-minimal DNA: one giant honest number, hairline rows, no dashboard noise.","dnas":["soft-minimal"]} -->
Renders a complete calm analytics landing page to stdout.

Usage:
    python3 python/saas_page.py > stillwater.html

Exactly one DNA (soft-minimal). Distinctive choice: the hero is a single
giant number — the one metric that matters this week — with a quiet inline
SVG sparkline instead of a dashboard grid. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("soft-minimal")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line}; --surface: {surface};
  --sans: "{sans}", -apple-system, sans-serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--sans);
       font-size: 16px; line-height: 1.6; }}
.tz-wrap {{ max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }}
.tz-nav {{ display: flex; justify-content: space-between; align-items: center;
           padding: 22px 0; border-bottom: 1px solid var(--line); }}
.tz-nav .tz-brand {{ font-weight: 600; letter-spacing: -0.01em; }}
.tz-nav a {{ color: var(--muted); text-decoration: none; font-size: 14px;
            margin-left: 24px; }}
.tz-nav a:hover {{ color: var(--ink); }}
.tz-hero {{ display: grid; grid-template-columns: 1fr 1.4fr;
            gap: clamp(32px, 6vw, 96px); align-items: center;
            padding: clamp(72px, 11vw, 150px) 0 clamp(48px, 6vw, 80px); }}
.tz-hero h1 {{ font-size: clamp(36px, 5vw, 64px); line-height: 1.06;
               letter-spacing: -0.03em; font-weight: 600; }}
.tz-hero h1 span {{ color: var(--accent); }}
.tz-lede {{ margin-top: 20px; color: var(--muted); max-width: 44ch; }}
.tz-number {{ background: var(--surface); border: 1px solid var(--line);
              border-radius: 14px; padding: clamp(28px, 4vw, 48px); }}
.tz-number .tz-big {{ font-size: clamp(72px, 10vw, 128px); font-weight: 600;
                      letter-spacing: -0.04em; line-height: 1; }}
.tz-number .tz-cap {{ font-family: var(--mono); font-size: 12px;
                      letter-spacing: 0.1em; text-transform: uppercase;
                      color: var(--muted); margin: 14px 0 18px; }}
.tz-number svg {{ display: block; width: 100%; height: 72px; }}
.tz-rows {{ border-top: 1px solid var(--line); }}
.tz-price {{ display: grid; grid-template-columns: 1.6fr 1fr;
             gap: clamp(24px, 5vw, 64px); align-items: center;
             background: var(--surface); border: 1px solid var(--line);
             border-radius: 14px; padding: clamp(28px, 4vw, 48px);
             margin-bottom: clamp(40px, 6vw, 72px); }}
.tz-price h2 {{ font-size: clamp(24px, 3vw, 36px); font-weight: 600;
                letter-spacing: -0.02em; margin-bottom: 12px; }}
.tz-price p {{ color: var(--muted); max-width: 48ch; }}
.tz-btn {{ display: inline-block; background: var(--ink); color: var(--bg);
           text-decoration: none; font-size: 14px; font-weight: 500;
           padding: 14px 28px; border-radius: 8px; justify-self: start; }}
.tz-row {{ display: grid; grid-template-columns: 96px 1fr 2fr; gap: 24px;
           padding: 28px 0; border-bottom: 1px solid var(--line); align-items: baseline; }}
.tz-row .tz-idx {{ font-family: var(--mono); font-size: 12px; color: var(--accent); }}
.tz-row h3 {{ font-size: 19px; font-weight: 600; letter-spacing: -0.01em; }}
.tz-row p {{ color: var(--muted); max-width: 60ch; }}
.tz-foot {{ padding: 40px 0 64px; display: flex; justify-content: space-between;
            flex-wrap: wrap; gap: 12px; color: var(--muted); font-size: 13px; }}
@media (max-width: 760px) {{
  .tz-hero {{ grid-template-columns: 1fr; }}
  .tz-row {{ grid-template-columns: 1fr; gap: 8px; }}
}}
@media (prefers-reduced-motion: reduce) {{
  * {{ animation: none !important; transition: none !important; }}
}}
""".format(bg=T["bg"], ink=T["ink"], accent=T["accent"], muted=T["muted"],
           line=T["line"], surface=T["surface"], sans=F["body"], mono=F["mono"])

HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Stillwater — analytics for calm teams</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <nav class="tz-nav">
    <span class="tz-brand">Stillwater</span>
    <span><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#login">Sign in</a></span>
  </nav>

  <header class="tz-hero">
    <div>
      <h1>Your business, <span>one number</span> at a time.</h1>
      <p class="tz-lede">Stillwater is analytics for teams that are tired of
      dashboards. Every Monday it picks the single metric that moved most and
      explains it in plain sentences. Everything else waits quietly until you ask.</p>
    </div>
    <div class="tz-number" aria-label="this week's number">
      <div class="tz-big">38%</div>
      <div class="tz-cap">Repeat orders, week of Sep 28 &mdash; up from 31%</div>
      <svg viewBox="0 0 400 72" role="img" aria-label="rising trend line">
        <polyline points="0,60 50,56 100,58 150,48 200,50 250,38 300,40 350,24 400,18"
          fill="none" stroke="{accent}" stroke-width="2.5"/>
        <circle cx="400" cy="18" r="4" fill="{accent}"/>
      </svg>
    </div>
  </header>

  <section class="tz-rows" id="how">
    <div class="tz-row">
      <span class="tz-idx">01</span>
      <h3>It reads your data like a person</h3>
      <p>Stillwater connects to Stripe, Shopify, or a plain CSV. Each week it
      writes a short note: what changed, by how much, and the two or three
      orders that explain it. No charts you need a meeting to decode.</p>
    </div>
    <div class="tz-row">
      <span class="tz-idx">02</span>
      <h3>Quiet by default, loud when it counts</h3>
      <p>No daily digest, no red badges, no streaks. If nothing important moved,
      Monday's note says so in one line and gets out of your way. Alerts only
      fire when a metric moves more than it has in ninety days.</p>
    </div>
    <div class="tz-row">
      <span class="tz-idx">03</span>
      <h3>Your numbers stay yours</h3>
      <p>Data is encrypted in transit and at rest, stored in your region, and
      never sold or used to train anything. Export everything or delete
      everything whenever you like — both take about ten seconds.</p>
    </div>
  </section>

  <section class="tz-price" id="pricing" aria-label="pricing">
    <div>
      <h2>One plan. Nineteen dollars.</h2>
      <p>Every workspace gets the Monday note, unlimited data sources, and the
      full archive. No tiers, no per-seat math, no "contact sales" — if you
      outgrow it, we will tell you before your card does.</p>
    </div>
    <a class="tz-btn" href="#trial">Start the 30-day trial</a>
  </section>

  <footer class="tz-foot">
    <span>Stillwater &mdash; made slowly in Portland, Maine</span>
    <span>$19/mo flat &middot; 30-day trial, no card</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS, accent=T["accent"])

print(HTML)
