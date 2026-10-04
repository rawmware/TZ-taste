"""<!--tz-meta {"id":"py-portfolio-page","title":"Mori Aiko — work-first portfolio","category":"Python","file":"python/portfolio_page.py","tags":["python","portfolio","work-first"],"description":"Work-first portfolio in the ma-japanese DNA: exhibition index, vast emptiness, a red hanko seal as the only loud object.","dnas":["ma-japanese"]} -->
Renders a complete work-first portfolio page to stdout.

Usage:
    python3 python/portfolio_page.py > portfolio.html

Exactly one DNA (ma-japanese). Distinctive choice: the page is an exhibition
index — three works, numbered like gallery plates, with a CSS hanko seal as
the only saturated object on the page. Bio is four lines at the bottom, where
it belongs. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("ma-japanese")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line}; --surface: {surface};
  --display: "{display}", "Hiragino Mincho ProN", serif;
  --body: "{body}", "Hiragino Kaku Gothic ProN", sans-serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--body);
       font-size: 16px; line-height: 1.8; }}
.tz-wrap {{ max-width: 980px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 56px); }}
.tz-head {{ display: flex; justify-content: space-between; align-items: flex-start;
            padding: clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 72px); }}
.tz-name {{ font-family: var(--display); font-size: clamp(30px, 4.5vw, 52px);
            font-weight: 500; letter-spacing: 0.02em; line-height: 1.25; }}
.tz-name small {{ display: block; font-family: var(--mono); font-size: 11px;
                 letter-spacing: 0.28em; color: var(--muted); margin-top: 10px; }}
.tz-hanko {{ width: 64px; height: 64px; background: var(--accent); color: #fff;
             display: flex; align-items: center; justify-content: center;
             font-family: var(--display); font-size: 26px; flex: none;
             border-radius: 3px; }}
.tz-works {{ list-style: none; }}
.tz-work {{ display: grid; grid-template-columns: 120px 1fr;
            gap: clamp(16px, 4vw, 48px); padding: clamp(48px, 7vw, 88px) 0;
            border-top: 1px solid var(--line); }}
.tz-work:last-child {{ border-bottom: 1px solid var(--line); }}
.tz-no {{ font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em;
          color: var(--muted); padding-top: 8px; }}
.tz-work h2 {{ font-family: var(--display); font-size: clamp(26px, 3.6vw, 44px);
               font-weight: 500; line-height: 1.3; margin-bottom: 14px; }}
.tz-work .tz-tag {{ font-family: var(--mono); font-size: 11px;
                    letter-spacing: 0.2em; color: var(--accent); margin-bottom: 18px; }}
.tz-work p {{ color: var(--muted); max-width: 56ch; }}
.tz-work p + p {{ margin-top: 12px; }}
.tz-about {{ padding: clamp(64px, 10vw, 130px) 0 clamp(48px, 6vw, 72px);
             max-width: 52ch; }}
.tz-about h2 {{ font-family: var(--mono); font-size: 11px; letter-spacing: 0.28em;
                color: var(--muted); margin-bottom: 20px; font-weight: 400; }}
.tz-about p {{ margin-bottom: 14px; }}
.tz-foot {{ border-top: 1px solid var(--line); padding: 24px 0 64px;
            display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;
            font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em;
            color: var(--muted); }}
.tz-foot a {{ color: var(--ink); text-decoration: none;
              border-bottom: 1px solid var(--accent); }}
@media (max-width: 640px) {{
  .tz-work {{ grid-template-columns: 1fr; gap: 8px; }}
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
<title>Mori Aiko — objects &amp; interfaces</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@400;500&family=Space+Mono:wght@400&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <header class="tz-head">
    <div class="tz-name">Mori Aiko<small>OBJECTS &amp; INTERFACES &mdash; KYOTO</small></div>
    <div class="tz-hanko" aria-label="artist seal">&#26862;</div>
  </header>

  <ol class="tz-works">
    <li class="tz-work">
      <span class="tz-no">No. 01</span>
      <div>
        <div class="tz-tag">TEA HOUSE RESERVATION SYSTEM &mdash; 2025</div>
        <h2>A booking page that behaves like the room it books.</h2>
        <p>Urasenke tea house Kashiwaya needed online reservations without losing
        the slowness of the ceremony. One page, four time slots a day, and a
        confirmation letter set in type as quiet as the tatami room itself.
        Phone calls dropped by half; no-shows nearly disappeared.</p>
      </div>
    </li>
    <li class="tz-work">
      <span class="tz-no">No. 02</span>
      <div>
        <div class="tz-tag">CERAMICS CATALOG &mdash; 2024</div>
        <h2>Four hundred bowls, each given one full screen.</h2>
        <p>For potter Tanabe Sh\u014dnsuke's studio catalog. Every piece photographed
        once, described in forty words or fewer, priced without apology. The
        site loads in under a second on a train between Osaka and Kyoto — the
        only metric the studio asked for.</p>
      </div>
    </li>
    <li class="tz-work">
      <span class="tz-no">No. 03</span>
      <div>
        <div class="tz-tag">PRINT WORKSHOP IDENTITY &mdash; 2023</div>
        <h2>Ink, paper, and a price list you can read.</h2>
        <p>Identity and ordering sheets for a letterpress workshop in Arashiyama.
        The order form is a single sheet of rules and boxes, like the old
        job tickets. Reorders doubled in the first year — the owner credits
        the form, not the logo.</p>
      </div>
    </li>
  </ol>

  <section class="tz-about">
    <h2>ABOUT</h2>
    <p>I design websites and printed matter for small craft businesses. Fifteen
    years, one principle: leave out everything the work does not need.</p>
    <p>Currently accepting two projects for spring 2027.</p>
  </section>

  <footer class="tz-foot">
    <span><a href="mailto:hello@mori-aiko.example">hello@mori-aiko.example</a></span>
    <span>KYOTO &mdash; WORKING WORLDWIDE</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
