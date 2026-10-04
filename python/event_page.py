"""<!--tz-meta {"id":"py-event-page","title":"STATIC BLOOM — warehouse night flyer","category":"Python","file":"python/event_page.py","tags":["python","event","music","flyer"],"description":"Music event page in the acid-rave DNA: black room, acid lime, Anton at maximum volume, a lime ticker and a raw lineup table.","dnas":["acid-rave"]} -->
Renders a complete music-event page to stdout.

Usage:
    python3 python/event_page.py > static-bloom.html

Exactly one DNA (acid-rave). Distinctive choice: the page is a flyer, not a
landing page — one enormous headline, a scrolling lime ticker, and the lineup
as a bare table with set times. Solid black background, acid-lime rules; no
gradients anywhere. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("acid-rave")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line}; --surface: {surface};
  --display: "{display}", Impact, sans-serif;
  --body: "{body}", Arial, sans-serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--body);
       font-size: 16px; line-height: 1.5; overflow-x: hidden; }}
.tz-wrap {{ max-width: 1200px; margin: 0 auto; padding: 0 clamp(16px, 3vw, 40px); }}
.tz-kicker {{ display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;
              padding: 18px 0; font-family: var(--mono); font-size: 12px;
              letter-spacing: 0.18em; color: var(--muted);
              border-bottom: 2px solid var(--accent); }}
.tz-hero {{ padding: clamp(56px, 9vw, 120px) 0 24px; }}
.tz-hero h1 {{ font-family: var(--display); font-size: clamp(64px, 15vw, 220px);
               line-height: 0.88; letter-spacing: 0.005em; text-transform: uppercase; }}
.tz-hero h1 .tz-lime {{ color: var(--accent); }}
.tz-sub {{ display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
           margin-top: 28px; font-family: var(--mono); font-size: 13px;
           letter-spacing: 0.1em; }}
.tz-sub strong {{ color: var(--accent); font-weight: 400; }}
.tz-ticker {{ border-top: 2px solid var(--accent); border-bottom: 2px solid var(--accent);
              margin: 40px 0 0; overflow: hidden; white-space: nowrap;
              padding: 10px 0; }}
.tz-ticker span {{ display: inline-block; font-family: var(--display);
                   font-size: 28px; text-transform: uppercase; letter-spacing: 0.04em;
                   padding-right: 48px; animation: tz-scroll 18s linear infinite; }}
.tz-ticker span b {{ color: var(--accent); font-weight: 400; }}
@keyframes tz-scroll {{ from {{ transform: translateX(0); }} to {{ transform: translateX(-50%); }} }}
.tz-lineup {{ margin: clamp(48px, 7vw, 88px) 0; }}
.tz-lineup h2 {{ font-family: var(--mono); font-size: 12px; letter-spacing: 0.24em;
                 color: var(--muted); margin-bottom: 8px; font-weight: 400; }}
.tz-row {{ display: grid; grid-template-columns: 110px 1fr auto; gap: 20px;
           align-items: baseline; padding: 18px 0; border-bottom: 1px solid var(--line); }}
.tz-row:first-of-type {{ border-top: 1px solid var(--line); }}
.tz-time {{ font-family: var(--mono); font-size: 13px; color: var(--accent); }}
.tz-name {{ font-family: var(--display); font-size: clamp(26px, 4.5vw, 52px);
            text-transform: uppercase; line-height: 1; }}
.tz-style {{ font-family: var(--mono); font-size: 12px; color: var(--muted);
             text-align: right; }}
.tz-split {{ display: grid; grid-template-columns: 1.2fr 1fr;
             gap: clamp(28px, 5vw, 72px); margin-bottom: clamp(48px, 7vw, 88px); }}
.tz-info h2 {{ font-family: var(--mono); font-size: 12px; letter-spacing: 0.24em;
               color: var(--muted); margin-bottom: 16px; font-weight: 400; }}
.tz-info p {{ color: var(--muted); max-width: 48ch; margin-bottom: 14px; }}
.tz-info p b {{ color: var(--ink); font-weight: 500; }}
.tz-ticket {{ background: var(--accent); color: #0a0a0a; padding: clamp(28px, 4vw, 44px); }}
.tz-ticket h2 {{ font-family: var(--display); font-size: clamp(32px, 5vw, 60px);
                 text-transform: uppercase; line-height: 0.95; margin-bottom: 14px; }}
.tz-ticket p {{ font-family: var(--mono); font-size: 13px; margin-bottom: 22px; }}
.tz-ticket a {{ display: inline-block; background: #0a0a0a; color: var(--accent);
                font-family: var(--mono); font-size: 14px; letter-spacing: 0.12em;
                text-decoration: none; padding: 16px 32px; }}
.tz-foot {{ border-top: 1px solid var(--line); margin-top: 24px;
            padding: 22px 0 56px; display: flex; justify-content: space-between;
            flex-wrap: wrap; gap: 10px; font-family: var(--mono); font-size: 11px;
            letter-spacing: 0.16em; color: var(--muted); }}
@media (max-width: 720px) {{
  .tz-row {{ grid-template-columns: 1fr; gap: 4px; }}
  .tz-style {{ text-align: left; }}
  .tz-split {{ grid-template-columns: 1fr; }}
}}
@media (prefers-reduced-motion: reduce) {{
  * {{ animation: none !important; transition: none !important; }}
}}
""".format(bg=T["bg"], ink=T["ink"], accent=T["accent"], muted=T["muted"],
           line=T["line"], surface=T["surface"], display=F["display"],
           body=F["body"], mono=F["mono"])

HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>STATIC BLOOM — Nov 14, Providence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500&family=Space+Mono:wght@400&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-kicker">
    <span>BLOOM COLLECTIVE PRESENTS</span>
    <span>ONE NIGHT ONLY</span>
    <span>21+ / ID REQUIRED</span>
  </div>

  <header class="tz-hero">
    <h1>Static<br><span class="tz-lime">Bloom</span></h1>
    <div class="tz-sub">
      <span><strong>SAT NOV 14</strong> &mdash; 10PM TO 4AM</span>
      <span>THE ARMORY ANNEX, PROVIDENCE RI</span>
      <span><strong>$25</strong> ADV / $35 DOOR</span>
    </div>
  </header>

  <div class="tz-ticker" aria-hidden="true">
    <span>SIX SELECTORS <b>&#9679;</b> ONE ROOM <b>&#9679;</b> NO PHONES ON THE FLOOR <b>&#9679;</b> FUNCTION-ONE SOUND <b>&#9679;</b>&nbsp;</span><span>SIX SELECTORS <b>&#9679;</b> ONE ROOM <b>&#9679;</b> NO PHONES ON THE FLOOR <b>&#9679;</b> FUNCTION-ONE SOUND <b>&#9679;</b>&nbsp;</span>
  </div>

  <section class="tz-lineup" aria-label="lineup">
    <h2>LINEUP &mdash; SET TIMES</h2>
    <div class="tz-row"><span class="tz-time">22:00</span><span class="tz-name">Vessel</span><span class="tz-style">dub techno</span></div>
    <div class="tz-row"><span class="tz-time">23:15</span><span class="tz-name">Rosa Mota</span><span class="tz-style">leftfield bass</span></div>
    <div class="tz-row"><span class="tz-time">00:30</span><span class="tz-name">Kessler</span><span class="tz-style">hard groove</span></div>
    <div class="tz-row"><span class="tz-time">01:45</span><span class="tz-name">Anemone b2b Fern</span><span class="tz-style">breaks / electro</span></div>
    <div class="tz-row"><span class="tz-time">03:00</span><span class="tz-name">Dome City</span><span class="tz-style">closing ambient</span></div>
  </section>

  <div class="tz-split">
    <section class="tz-info">
      <h2>THE ROOM</h2>
      <p>A decommissioned drill hall with a 40-foot ceiling and exactly one
      lighting rig: <b>twelve lime parcans and a strobe</b>. No LED walls, no
      visuals, no branding on the walls. The sound is a tuned Function-One
      rig run by people who have done this room nine times before.</p>
      <p>Coats checked free. Water free all night. Phones stay in pockets on
      the dancefloor — stickers at the door, no arguments.</p>
    </section>
    <aside class="tz-ticket">
      <h2>Tickets</h2>
      <p>400 CAPACITY. LAST YEAR SOLD OUT IN 6 DAYS. NO TICKETS AT THE DOOR AFTER 1AM.</p>
      <a href="#tickets">BUY $25 ADVANCE</a>
    </aside>
  </div>

  <footer class="tz-foot">
    <span>BLOOM COLLECTIVE &mdash; PVD</span>
    <span>POSTER: SET IN ANTON &amp; SPACE GROTESK</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
