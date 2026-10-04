"""<!--tz-meta {"id":"py-nonprofit-page","title":"The Glasshouse Project — nonprofit page","category":"Python","file":"python/nonprofit_page.py","tags":["python","nonprofit","community"],"description":"Nonprofit page in the botanical-lab DNA: each program presented as a pressed specimen plate with a Latin label, greenhouse calm.","dnas":["botanical-lab"]} -->
Renders a complete nonprofit page to stdout.

Usage:
    python3 python/nonprofit_page.py > glasshouse.html

Exactly one DNA (botanical-lab). Distinctive choice: the three programs are
pressed specimen plates — numbered, Latin-labeled, described like field
notes — because the org turns vacant lots into gardens. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("botanical-lab")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line};
  --display: "{display}", Georgia, serif;
  --body: "{body}", Arial, sans-serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--body);
       font-size: 16px; line-height: 1.7; }}
.tz-wrap {{ max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }}
.tz-head {{ padding: clamp(56px, 9vw, 110px) 0 12px; }}
.tz-head .tz-over {{ font-family: var(--mono); font-size: 11px;
                     letter-spacing: 0.28em; color: var(--accent); }}
.tz-head h1 {{ font-family: var(--display); font-size: clamp(44px, 7vw, 96px);
               font-weight: 400; line-height: 1.04; margin: 16px 0 20px;
               max-width: 16ch; }}
.tz-head h1 em {{ font-style: italic; }}
.tz-lede {{ max-width: 58ch; color: var(--muted); font-size: 18px; }}
.tz-rule {{ border: none; border-top: 1px solid var(--line); margin: 40px 0 0; }}
.tz-plates {{ padding: clamp(48px, 7vw, 88px) 0; }}
.tz-plates > h2 {{ font-family: var(--mono); font-size: 11px;
                   letter-spacing: 0.28em; color: var(--muted);
                   margin-bottom: 8px; font-weight: 400; }}
.tz-plate {{ display: grid; grid-template-columns: 88px 1fr 1.6fr;
             gap: clamp(20px, 4vw, 56px); padding: 44px 0;
             border-bottom: 1px solid var(--line); align-items: start; }}
.tz-plate:first-of-type {{ border-top: 1px solid var(--line); margin-top: 24px; }}
.tz-plate .tz-no {{ font-family: var(--mono); font-size: 12px; color: var(--accent);
                    letter-spacing: 0.14em; padding-top: 6px; }}
.tz-plate h3 {{ font-family: var(--display); font-size: clamp(26px, 3.4vw, 42px);
                font-weight: 400; line-height: 1.15; }}
.tz-plate h3 i {{ display: block; font-size: 0.55em; color: var(--muted);
                  margin-top: 8px; }}
.tz-plate p {{ color: var(--muted); max-width: 54ch; margin-bottom: 12px; }}
.tz-plate .tz-stat {{ font-family: var(--mono); font-size: 12px;
                      letter-spacing: 0.1em; color: var(--ink); }}
.tz-cta-band {{ display: grid; grid-template-columns: 1.4fr 1fr;
                gap: clamp(24px, 5vw, 64px); align-items: center;
                border: 1px solid var(--line); padding: clamp(32px, 5vw, 56px);
                margin-bottom: clamp(48px, 7vw, 88px); }}
.tz-cta-band h2 {{ font-family: var(--display); font-size: clamp(28px, 4vw, 48px);
                   font-weight: 400; line-height: 1.12; margin-bottom: 14px; }}
.tz-cta-band p {{ color: var(--muted); max-width: 46ch; }}
.tz-btn {{ display: inline-block; background: var(--accent); color: #fff;
           text-decoration: none; font-family: var(--mono); font-size: 13px;
           letter-spacing: 0.12em; padding: 16px 32px; justify-self: start; }}
.tz-foot {{ border-top: 1px solid var(--line); padding: 24px 0 56px;
            display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;
            font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em;
            color: var(--muted); }}
@media (max-width: 760px) {{
  .tz-plate {{ grid-template-columns: 1fr; gap: 10px; }}
  .tz-cta-band {{ grid-template-columns: 1fr; }}
}}
@media (prefers-reduced-motion: reduce) {{
  * {{ animation: none !important; transition: none !important; }}
}}
""".format(bg=T["bg"], ink=T["ink"], accent=T["accent"], muted=T["muted"],
           line=T["line"], display=F["display"], body=F["body"], mono=F["mono"])

HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Glasshouse Project — vacant lots, grown back</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Karla:wght@400;500&family=Space+Mono:wght@400&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <header class="tz-head">
    <div class="tz-over">A NEIGHBORHOOD NONPROFIT &middot; EST. 2018</div>
    <h1>Vacant lots, <em>grown back</em> into gardens.</h1>
    <p class="tz-lede">The Glasshouse Project takes empty, city-owned lots in
    Providence and turns them into community gardens — designed with the block,
    built by the block, and harvested by whoever shows up with a basket. Free
    forever, no membership, no gates.</p>
  </header>
  <hr class="tz-rule">

  <section class="tz-plates" aria-label="programs">
    <h2>FIELD PLATES &mdash; OUR PROGRAMS</h2>

    <article class="tz-plate">
      <span class="tz-no">PL. 01</span>
      <h3>Lot Adoption<i>Hortus communis</i></h3>
      <div>
        <p>We lease vacant lots from the city for a dollar a year, clear them
        with neighborhood crews, and build raised beds from reclaimed lumber.
        Each garden elects two stewards who hold the keys to the tool shed and
        the watering schedule.</p>
        <p class="tz-stat">14 LOTS ADOPTED &middot; 6,200 SQ FT UNDER CULTIVATION</p>
      </div>
    </article>

    <article class="tz-plate">
      <span class="tz-no">PL. 02</span>
      <h3>Youth Growers<i>Discentes hortulani</i></h3>
      <div>
        <p>A paid summer apprenticeship for teenagers: soil science in the
        morning, business math in the afternoon, and a farm stand on Saturdays
        where they keep every dollar they earn. Alumni run three of our gardens
        now.</p>
        <p class="tz-stat">38 APPRENTICES &middot; $41K EARNED AT FARM STANDS SINCE 2021</p>
      </div>
    </article>

    <article class="tz-plate">
      <span class="tz-no">PL. 03</span>
      <h3>Seed Library<i>Bibliotheca seminum</i></h3>
      <div>
        <p>A free library of open-pollinated seeds at every garden gate, plus
        monthly workshops on saving your own. Take what you will plant; bring
        back what you grew. The 2026 catalog lists 212 varieties, most of them
        saved within five miles of where they are planted.</p>
        <p class="tz-stat">9,400 PACKETS SHARED LAST SEASON</p>
      </div>
    </article>
  </section>

  <section class="tz-cta-band">
    <div>
      <h2>A garden needs hands more than it needs money. It needs a little of both.</h2>
      <p>Volunteer Saturdays run April through October, 9am to noon, gloves
      provided. Donations buy lumber, soil, and stipends for the Youth Growers —
      every dollar is listed in our public ledger each quarter.</p>
    </div>
    <a class="tz-btn" href="#give">DONATE OR VOLUNTEER</a>
  </section>

  <footer class="tz-foot">
    <span>THE GLASSHOUSE PROJECT &middot; 501(C)(3)</span>
    <span>PROVIDENCE, RHODE ISLAND</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
