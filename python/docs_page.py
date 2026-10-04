"""<!--tz-meta {"id":"py-docs-page","title":"Tendril docs — warm documentation landing","category":"Python","file":"python/docs_page.py","tags":["python","docs","open-source"],"description":"Documentation landing page in the docs-solar DNA: sticky index, warm prose, amber margin notes, quickstart for a fictional task queue.","dnas":["docs-solar"]} -->
Renders a complete documentation landing page to stdout.

Usage:
    python3 python/docs_page.py > tendril-docs.html

Exactly one DNA (docs-solar). Distinctive choice: the page reads like a warm
field guide — a sticky chapter index on the left, amber margin notes in the
gutter, and a quickstart you can copy in under a minute. Stdlib only.
"""
import json
from pathlib import Path


def load_dna(dna_id):
    p = Path(__file__).resolve().parent.parent / "styles" / "index.json"
    for d in json.loads(p.read_text(encoding="utf-8"))["dnas"]:
        if d["id"] == dna_id:
            return d
    raise SystemExit("unknown dna: " + dna_id)


D = load_dna("docs-solar")
T = D["tokens"]
F = D["fonts"]

CSS = """
:root {{
  --bg: {bg}; --ink: {ink}; --accent: {accent};
  --muted: {muted}; --line: {line}; --surface: {surface};
  --serif: "{serif}", Georgia, serif;
  --mono: "{mono}", ui-monospace, monospace;
}}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--ink); font-family: var(--serif);
       font-size: 17px; line-height: 1.7; }}
.tz-wrap {{ max-width: 1180px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }}
.tz-top {{ border-bottom: 1px solid var(--line); padding: 20px 0;
           display: flex; justify-content: space-between; align-items: baseline;
           font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; }}
.tz-top strong {{ font-size: 15px; letter-spacing: 0.02em; color: var(--accent); }}
.tz-top a {{ color: var(--muted); text-decoration: none; margin-left: 20px; }}
.tz-main {{ display: grid; grid-template-columns: 240px 1fr;
            gap: clamp(32px, 5vw, 72px); padding: clamp(40px, 6vw, 72px) 0; }}
.tz-index {{ position: sticky; top: 32px; align-self: start; }}
.tz-index h2 {{ font-family: var(--mono); font-size: 11px; letter-spacing: 0.22em;
                color: var(--muted); margin-bottom: 16px; font-weight: 400; }}
.tz-index ol {{ list-style: none; }}
.tz-index li {{ margin-bottom: 10px; }}
.tz-index a {{ color: var(--ink); text-decoration: none; font-size: 15px;
               border-bottom: 1px solid transparent; }}
.tz-index a:hover {{ border-bottom-color: var(--accent); }}
.tz-index .tz-n {{ color: var(--accent); font-family: var(--mono);
                   font-size: 12px; margin-right: 8px; }}
.tz-hero h1 {{ font-size: clamp(38px, 5.5vw, 68px); line-height: 1.08;
               font-weight: 600; letter-spacing: -0.01em; max-width: 16ch; }}
.tz-hero h1 em {{ font-style: italic; color: var(--accent); }}
.tz-lede {{ margin: 22px 0 40px; color: var(--muted); max-width: 58ch;
            font-size: 18px; }}
.tz-sec {{ margin-bottom: 48px; max-width: 62ch; }}
.tz-sec h2 {{ font-size: 26px; margin-bottom: 14px; font-weight: 600; }}
.tz-sec p {{ margin-bottom: 14px; }}
.tz-note {{ border-left: 3px solid var(--accent); background: var(--surface);
            padding: 14px 18px; margin: 20px 0; font-size: 15px; }}
.tz-note strong {{ font-family: var(--mono); font-size: 11px;
                   letter-spacing: 0.18em; color: var(--accent);
                   display: block; margin-bottom: 6px; }}
.tz-code {{ background: var(--ink); color: var(--bg); font-family: var(--mono);
            font-size: 13.5px; line-height: 1.65; padding: 20px 22px;
            border-radius: 6px; overflow-x: auto; margin: 20px 0; }}
.tz-code .tz-c {{ color: var(--muted); }}
.tz-code .tz-s {{ color: var(--accent); }}
.tz-foot {{ border-top: 1px solid var(--line); padding: 28px 0 56px;
            display: flex; justify-content: space-between; flex-wrap: wrap;
            gap: 10px; font-family: var(--mono); font-size: 11px;
            letter-spacing: 0.14em; color: var(--muted); }}
@media (max-width: 820px) {{
  .tz-main {{ grid-template-columns: 1fr; }}
  .tz-index {{ position: static; }}
  .tz-index ol {{ display: flex; flex-wrap: wrap; gap: 6px 20px; }}
}}
@media (prefers-reduced-motion: reduce) {{
  * {{ animation: none !important; transition: none !important; }}
}}
""".format(bg=T["bg"], ink=T["ink"], accent=T["accent"], muted=T["muted"],
           line=T["line"], surface=T["surface"], serif=F["body"], mono=F["mono"])

HTML = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tendril — documentation</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-top">
    <strong>tendril</strong>
    <span><a href="#start">Quickstart</a><a href="#guide">Guide</a><a href="#api">API</a><span>v2.4.1</span></span>
  </div>

  <div class="tz-main">
    <nav class="tz-index" aria-label="chapters">
      <h2>CONTENTS</h2>
      <ol>
        <li><a href="#start"><span class="tz-n">01</span>Quickstart</a></li>
        <li><a href="#queues"><span class="tz-n">02</span>Queues &amp; workers</a></li>
        <li><a href="#retries"><span class="tz-n">03</span>Retries, honestly</a></li>
        <li><a href="#api"><span class="tz-n">04</span>API reference</a></li>
      </ol>
    </nav>

    <div>
      <header class="tz-hero">
        <h1>A task queue so small you can <em>read the whole thing</em> before lunch.</h1>
        <p class="tz-lede">Tendril is a background-job queue for Python, in one
        file and about nine hundred lines. It uses the database you already
        have. This guide covers everything; most of it fits on this page.</p>
      </header>

      <section class="tz-sec" id="start">
        <h2>Quickstart</h2>
        <p>Install, point it at your database, and enqueue your first job. The
        whole ceremony takes about a minute:</p>
        <div class="tz-code"><pre><span class="tz-c"># install</span>
pip install tendril

<span class="tz-c"># queue.py</span>
from tendril import Queue

q = Queue(<span class="tz-s">"postgresql://localhost/myapp"</span>)

@q.job
def send_receipt(order_id):
    ...

q.enqueue(send_receipt, order_id=<span class="tz-s">1042</span>)</pre></div>
        <div class="tz-note"><strong>MARGIN NOTE</strong>Tendril never invents
        infrastructure. If you already run Postgres, you already run Tendril —
        jobs live in a table you can inspect with plain SQL.</div>
      </section>

      <section class="tz-sec" id="queues">
        <h2>Queues &amp; workers</h2>
        <p>A queue is a named lane; a worker is a process that pulls from lanes
        in priority order. Start one worker per lane in development, and as many
        as your database connections allow in production. Workers shut down
        gracefully: finish the current job, then exit.</p>
      </section>

      <section class="tz-sec" id="retries">
        <h2>Retries, honestly</h2>
        <p>Failed jobs retry with backoff — 1 minute, 5, 30, then once an hour,
        up to a day. After that the job moves to the dead-letter table with the
        full traceback attached, and Tendril pages whoever you named. No silent
        drops, ever; that is the entire philosophy in one sentence.</p>
      </section>

      <section class="tz-sec" id="api">
        <h2>API reference</h2>
        <p><b>Queue(dsn)</b> — connect. <b>q.job</b> — decorator that registers
        a function. <b>q.enqueue(fn, **kwargs)</b> — schedule now.
        <b>q.enqueue_at(fn, when, **kwargs)</b> — schedule later.
        <b>q.worker(lanes)</b> — run a worker. That is most of it; the rest is
        in the source, which reads like documentation already.</p>
      </section>
    </div>
  </div>

  <footer class="tz-foot">
    <span>TENDRIL &mdash; MIT LICENSED</span>
    <span>READ THE SOURCE, IT IS SHORT</span>
  </footer>
</div>
</body>
</html>
""".format(css=CSS)

print(HTML)
