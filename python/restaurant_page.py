"""<!--tz-meta {"id":"py-restaurant-page","title":"Bar Ombra — aperitivo bar page","category":"Python","file":"python/restaurant_page.py","tags":["python","restaurant","menu"],"description":"Restaurant page in the aperitivo-italian DNA: chalkboard menu in two asymmetric columns, golden-hour hours note, Campari red on cream.","dnas":["aperitivo-italian"]} -->
Renders a complete restaurant page to stdout.

Usage:
    python3 python/restaurant_page.py > bar-ombra.html

Exactly one DNA (aperitivo-italian). Distinctive choice: the menu is a
chalkboard — two uneven columns, dishes with prices set like a hand-written
board, and the hours written as a note from the owner, not a table. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("aperitivo-italian")
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
       font-size: 16px; line-height: 1.65; }}
.tz-wrap {{ max-width: 1100px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }}
.tz-head {{ padding: clamp(48px, 8vw, 96px) 0 16px; text-align: left; }}
.tz-head .tz-over {{ font-family: var(--mono); font-size: 12px;
                     letter-spacing: 0.26em; color: var(--accent); }}
.tz-head h1 {{ font-family: var(--display); font-size: clamp(56px, 11vw, 150px);
               line-height: 0.95; margin: 12px 0 8px; font-weight: 400; }}
.tz-head .tz-street {{ font-family: var(--mono); font-size: 12px;
                       letter-spacing: 0.2em; color: var(--muted); }}
.tz-rule {{ border: none; border-top: 3px double var(--accent); margin: 32px 0 0; }}
.tz-intro {{ display: grid; grid-template-columns: 1.5fr 1fr;
             gap: clamp(28px, 5vw, 72px); padding: clamp(40px, 6vw, 72px) 0; }}
.tz-intro h2 {{ font-family: var(--display); font-size: clamp(26px, 3.4vw, 40px);
                font-weight: 400; line-height: 1.15; margin-bottom: 18px; }}
.tz-intro p {{ color: var(--muted); max-width: 52ch; margin-bottom: 14px; }}
.tz-hours {{ border: 1px solid var(--line); padding: 28px; align-self: start;
             background: var(--bg); }}
.tz-hours h3 {{ font-family: var(--mono); font-size: 11px; letter-spacing: 0.24em;
                color: var(--accent); margin-bottom: 14px; font-weight: 400; }}
.tz-hours p {{ font-size: 15px; margin-bottom: 8px; }}
.tz-hours .tz-note {{ font-style: italic; color: var(--muted); font-size: 14px;
                      margin-top: 12px; }}
.tz-menu {{ padding-bottom: clamp(48px, 7vw, 88px); }}
.tz-menu > h2 {{ font-family: var(--mono); font-size: 12px; letter-spacing: 0.26em;
                 color: var(--muted); margin-bottom: 24px; font-weight: 400; }}
.tz-cols {{ display: grid; grid-template-columns: 1.25fr 1fr;
            gap: clamp(32px, 6vw, 96px); }}
.tz-col h3 {{ font-family: var(--display); font-size: 30px; font-weight: 400;
              color: var(--accent); margin-bottom: 6px; }}
.tz-col .tz-sub {{ font-family: var(--mono); font-size: 11px;
                   letter-spacing: 0.18em; color: var(--muted); margin-bottom: 20px; }}
.tz-dish {{ display: flex; justify-content: space-between; align-items: baseline;
            gap: 16px; padding: 13px 0; border-bottom: 1px dotted var(--line); }}
.tz-dish .tz-name {{ font-weight: 500; }}
.tz-dish .tz-name small {{ display: block; font-weight: 400; color: var(--muted);
                           font-size: 13.5px; }}
.tz-dish .tz-price {{ font-family: var(--mono); font-size: 14px; flex: none; }}
.tz-foot {{ border-top: 3px double var(--accent); padding: 24px 0 56px;
            display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;
            font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em;
            color: var(--muted); }}
@media (max-width: 760px) {{
  .tz-intro, .tz-cols {{ grid-template-columns: 1fr; }}
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
<title>Bar Ombra — cicchetti &amp; spritz, Providence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=Space+Mono:wght@400&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <header class="tz-head">
    <div class="tz-over">APERITIVO &middot; CICCHETTI &middot; DAL 2019</div>
    <h1>Bar Ombra</h1>
    <div class="tz-street">214 ATWELLS AVE &mdash; FEDERAL HILL, PROVIDENCE RI</div>
  </header>
  <hr class="tz-rule">

  <div class="tz-intro">
    <div>
      <h2>Golden hour, every night from five to seven.</h2>
      <p>Ombra means shadow — the small glass of wine Venetians drink in the
      shade of the bell tower. We built the whole bar around that hour: spritzes
      for nine dollars, small plates meant to be eaten standing up, and a room
      that gets louder in the right way as the light goes.</p>
      <p>No reservations for the bar. The twelve stools are first come, first
      poured. Dinner tables in back if you want to stay past the second round.</p>
    </div>
    <aside class="tz-hours" aria-label="hours">
      <h3>HOURS, FROM ELENA</h3>
      <p>Tue&ndash;Thu &mdash; 5pm to 11pm</p>
      <p>Fri&ndash;Sat &mdash; 5pm to 1am</p>
      <p>Sun &mdash; 4pm to 10pm</p>
      <p>Mon &mdash; closed, we rest</p>
      <p class="tz-note">&ldquo;Kitchen closes 30 minutes before we do.
      The spritz menu never closes early.&rdquo;</p>
    </aside>
  </div>

  <section class="tz-menu" aria-label="menu">
    <h2>TONIGHT&rsquo;S BOARD</h2>
    <div class="tz-cols">
      <div class="tz-col">
        <h3>Spritz</h3>
        <div class="tz-sub">ALL NINE DOLLARS, 5&ndash;7PM</div>
        <div class="tz-dish"><span class="tz-name">Classico<small>bitter aperitivo, prosecco, soda, olive</small></span><span class="tz-price">9</span></div>
        <div class="tz-dish"><span class="tz-name">Hugo<small>elderflower, prosecco, mint, soda</small></span><span class="tz-price">9</span></div>
        <div class="tz-dish"><span class="tz-name">Sbagliato<small>bitter aperitivo, sweet vermouth, prosecco — no soda</small></span><span class="tz-price">9</span></div>
        <div class="tz-dish"><span class="tz-name">Ombra Rossa<small>blood orange, bitter aperitivo, prosecco</small></span><span class="tz-price">10</span></div>
      </div>
      <div class="tz-col">
        <h3>Cicchetti</h3>
        <div class="tz-sub">SMALL PLATES, UNTIL THEY RUN OUT</div>
        <div class="tz-dish"><span class="tz-name">Baccal&agrave; mantecato<small>whipped salt cod, grilled polenta</small></span><span class="tz-price">8</span></div>
        <div class="tz-dish"><span class="tz-name">Sarde in saor<small>sweet-sour sardines, pine nuts, raisins</small></span><span class="tz-price">7</span></div>
        <div class="tz-dish"><span class="tz-name">Mozzarella in carrozza<small>fried, with anchovy mayo</small></span><span class="tz-price">9</span></div>
        <div class="tz-dish"><span class="tz-name">Fritto misto<small>the fryer&rsquo;s daily decision</small></span><span class="tz-price">12</span></div>
      </div>
    </div>
  </section>

  <footer class="tz-foot">
    <span>(401) 555-0148 &mdash; CIAO@BAROMBRA.EXAMPLE</span>
    <span>WALK-INS WELCOME</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
