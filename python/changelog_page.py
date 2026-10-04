"""<!--tz-meta {"id":"py-changelog-page","title":"Northbeam Maps — expedition changelog","category":"Python","file":"python/changelog_page.py","tags":["python","changelog","release-notes"],"description":"Changelog page in the alpine-ledger DNA: each release a stamped logbook entry with rotated rubber-stamp tags on kraft paper.","dnas":["alpine-ledger"]} -->
Renders a complete changelog / release-notes page to stdout.

Usage:
    python3 python/changelog_page.py > changelog.html

Exactly one DNA (alpine-ledger). Distinctive choice: every release is a
logbook entry — date in mono, version in the typewriter display face, and a
rotated rubber-stamp tag (SHIPPED / FIXED / NOTE) stamped in the accent red.
Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("alpine-ledger")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line};
  --display: "{display}", "Courier New", monospace;
  --body: "{body}", Arial, sans-serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--body);
       font-size: 16px; line-height: 1.65; }}
.tz-wrap {{ max-width: 880px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }}
.tz-head {{ padding: clamp(56px, 9vw, 104px) 0 8px; }}
.tz-head .tz-over {{ font-family: var(--mono); font-size: 11px;
                     letter-spacing: 0.28em; color: var(--muted); }}
.tz-head h1 {{ font-family: var(--display); font-size: clamp(40px, 6.5vw, 76px);
               font-weight: 400; margin: 14px 0 12px; }}
.tz-head p {{ color: var(--muted); max-width: 54ch; }}
.tz-entry {{ display: grid; grid-template-columns: 150px 1fr;
             gap: clamp(16px, 4vw, 40px); padding: 40px 0;
             border-top: 2px solid var(--ink); position: relative; }}
.tz-ledger {{ padding-top: clamp(40px, 6vw, 64px); }}
.tz-date {{ font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em;
            color: var(--muted); padding-top: 8px; }}
.tz-date b {{ display: block; color: var(--ink); font-size: 15px;
              letter-spacing: 0.02em; }}
.tz-ver {{ font-family: var(--display); font-size: 30px; margin-bottom: 6px; }}
.tz-stamp {{ display: inline-block; font-family: var(--mono); font-size: 11px;
             letter-spacing: 0.22em; color: var(--accent);
             border: 2px solid var(--accent); border-radius: 3px;
             padding: 5px 12px 4px; transform: rotate(-3deg);
             margin: 10px 0 18px; text-transform: uppercase; }}
.tz-entry ul {{ list-style: none; }}
.tz-entry li {{ padding: 9px 0 9px 26px; position: relative;
                border-bottom: 1px dotted var(--line); max-width: 60ch; }}
.tz-entry li::before {{ content: "\\2014"; position: absolute; left: 0;
                        color: var(--accent); }}
.tz-entry li:last-child {{ border-bottom: none; }}
.tz-entry li b {{ font-weight: 600; }}
.tz-note-band {{ border: 1px dashed var(--muted); padding: 22px 26px;
                 margin: 8px 0 64px; color: var(--muted); font-size: 15px; }}
.tz-note-band b {{ color: var(--ink); }}
.tz-foot {{ border-top: 2px solid var(--ink); padding: 22px 0 56px;
            display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;
            font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em;
            color: var(--muted); }}
@media (max-width: 640px) {{
  .tz-entry {{ grid-template-columns: 1fr; gap: 6px; }}
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
<title>Northbeam Maps — changelog</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Karla:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <header class="tz-head">
    <div class="tz-over">NORTHBEAM MAPS &middot; EXPEDITION LOG</div>
    <h1>Changelog</h1>
    <p>Everything we have shipped, fixed, and learned since the first beta —
    recorded like a trip log, because that is what building software feels
    like. Newest entries first.</p>
  </header>

  <div class="tz-ledger">
    <article class="tz-entry">
      <div class="tz-date"><b>v4.2.0</b>2026-09-28</div>
      <div>
        <div class="tz-ver">Offline trail packs</div>
        <span class="tz-stamp">Shipped</span>
        <ul>
          <li><b>Download whole regions</b> for offline use — maps, elevation, and water sources in one pack, about 40 MB per 100 square miles.</li>
          <li><b>Battery saver mode</b> cuts GPS polling on straight trail sections; testers report 30% longer days on a single charge.</li>
          <li>Fixed the compass calibration prompt appearing on every launch on Pixel devices.</li>
        </ul>
      </div>
    </article>

    <article class="tz-entry">
      <div class="tz-date"><b>v4.1.3</b>2026-08-17</div>
      <div>
        <div class="tz-ver">The rain fix</div>
        <span class="tz-stamp">Fixed</span>
        <ul>
          <li><b>Wet-screen touches</b> no longer pan the map while you are trying to read it — the fix we should have shipped in June.</li>
          <li>Corrected 212 trail junctions in the White Mountains dataset after hiker reports.</li>
        </ul>
      </div>
    </article>

    <article class="tz-entry">
      <div class="tz-date"><b>v4.1.0</b>2026-07-02</div>
      <div>
        <div class="tz-ver">Group trips</div>
        <span class="tz-stamp">Shipped</span>
        <ul>
          <li><b>Share a live trip</b> with up to 12 people; everyone sees the same route, pace, and who stopped for the view.</li>
          <li>Trip leaders can drop pins the whole group receives, even on spotty signal — they queue and sync later.</li>
          <li>Fixed elevation profiles rendering flat on routes imported from GPX files.</li>
        </ul>
      </div>
    </article>

    <article class="tz-entry">
      <div class="tz-date"><b>v4.0.0</b>2026-04-20</div>
      <div>
        <div class="tz-ver">A new base map</div>
        <span class="tz-stamp">Note</span>
        <ul>
          <li><b>Rebuilt the base map from scratch</b> — new cartography, readable at arm's length in direct sun, which is the only test that matters.</li>
          <li>Old saved routes migrate automatically; nothing of yours was lost in the move.</li>
        </ul>
      </div>
    </article>
  </div>

  <div class="tz-note-band">
    <b>A note on versions:</b> we ship every two weeks and number honestly.
    If a release broke something you depend on, write to
    fieldnotes@northbeam.example — a human reads every message.
  </div>

  <footer class="tz-foot">
    <span>NORTHBEAM MAPS &middot; BURLINGTON VT</span>
    <span>ENTRY NOS. 142&ndash;145</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
