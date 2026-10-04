"""<!--tz-meta {"id":"py-tz-build","title":"tz_build — stdlib static site builder","category":"Python","file":"python/tz_build.py","tags":["python","ssg","static-site","cli"],"description":"Tiny stdlib-only static site builder. Pick a TZ-taste DNA, get a complete standalone HTML page with real tokens.","dnas":["editorial-serif"]} -->
tz_build — a tiny static-site builder using only the Python standard library.

Usage:
    python3 python/tz_build.py --dna editorial-serif --title "Acme" --out page.html
    python3 python/tz_build.py --help

Reads styles/index.json, resolves the chosen DNA's real tokens and font names,
and writes one complete standalone HTML page: a hairline meta row, a
claim-making hero, an asymmetric features section, and a footer. No
dependencies, no templates, no placeholders.
"""
import argparse
import json
from pathlib import Path

INDEX = Path(__file__).resolve().parent.parent / "styles" / "index.json"


def load_dna(dna_id):
    """Return the DNA dict for dna_id from styles/index.json, or exit."""
    try:
        data = json.loads(INDEX.read_text(encoding="utf-8"))
    except FileNotFoundError:
        raise SystemExit(f"tz_build: cannot find {INDEX}")
    for dna in data["dnas"]:
        if dna["id"] == dna_id:
            return dna
    known = ", ".join(d["id"] for d in data["dnas"][:8]) + ", ..."
    raise SystemExit(f"tz_build: unknown dna '{dna_id}'. Try one of: {known}")


def font_link(fonts):
    """Build a Google Fonts stylesheet link from the DNA's font names."""
    fams = []
    for key in ("display", "body", "mono"):
        name = fonts.get(key)
        if name and name not in [f.split(":")[0].replace("+", " ") for f in fams]:
            fams.append("family=" + name.replace(" ", "+") + ":wght@400;500;700")
    return "https://fonts.googleapis.com/css2?" + "&".join(fams) + "&display=swap"


def build_page(dna, title):
    """Render the full standalone HTML page for the given DNA and title."""
    t = dna["tokens"]
    f = dna["fonts"]
    css = f"""
    :root {{
      --bg: {t['bg']}; --ink: {t['ink']}; --accent: {t['accent']};
      --muted: {t['muted']}; --line: {t['line']};
      --surface: {t.get('surface', t['bg'])};
      --display: "{f['display']}", Georgia, serif;
      --body: "{f['body']}", Georgia, serif;
      --mono: "{f['mono']}", ui-monospace, monospace;
    }}
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    html {{ -webkit-text-size-adjust: 100%; }}
    body {{
      background: var(--bg); color: var(--ink);
      font-family: var(--body); font-size: 17px; line-height: 1.65;
    }}
    .tz-wrap {{ max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }}
    .tz-meta {{
      display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
      border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
      padding: 12px 0; margin: 32px 0 0;
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--muted);
    }}
    .tz-hero {{ padding: clamp(64px, 10vw, 140px) 0 clamp(48px, 6vw, 88px); }}
    .tz-hero h1 {{
      font-family: var(--display); font-weight: 700;
      font-size: clamp(44px, 7.5vw, 104px); line-height: 1.02;
      letter-spacing: -0.015em; max-width: 14ch;
    }}
    .tz-hero h1 em {{ font-style: italic; color: var(--accent); }}
    .tz-hero .tz-lede {{
      margin-top: 28px; max-width: 52ch; font-size: 19px; color: var(--muted);
    }}
    .tz-cta {{
      display: inline-block; margin-top: 32px; padding: 14px 28px;
      background: var(--ink); color: var(--bg); text-decoration: none;
      font-family: var(--mono); font-size: 13px; letter-spacing: 0.1em;
      text-transform: uppercase;
    }}
    .tz-feats {{
      display: grid; grid-template-columns: 1.35fr 1fr; gap: clamp(24px, 4vw, 64px);
      border-top: 1px solid var(--line); padding: 56px 0;
    }}
    .tz-feats h2 {{
      font-family: var(--display); font-size: clamp(28px, 3.4vw, 44px);
      line-height: 1.1; margin-bottom: 16px;
    }}
    .tz-feats p {{ color: var(--muted); max-width: 46ch; }}
    .tz-feat-list {{ list-style: none; display: flex; flex-direction: column; }}
    .tz-feat-list li {{
      padding: 20px 0; border-bottom: 1px solid var(--line);
    }}
    .tz-feat-list li:first-child {{ border-top: 1px solid var(--line); }}
    .tz-feat-list strong {{
      display: block; font-family: var(--mono); font-size: 12px;
      letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);
      margin-bottom: 6px;
    }}
    .tz-foot {{
      border-top: 1px solid var(--line); margin-top: 24px; padding: 28px 0 48px;
      display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
      font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--muted);
    }}
    @media (max-width: 720px) {{
      .tz-feats {{ grid-template-columns: 1fr; }}
    }}
    @media (prefers-reduced-motion: reduce) {{
      * {{ animation: none !important; transition: none !important; }}
    }}
    """
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — built with tz_build</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{font_link(f)}" rel="stylesheet">
<style>{css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-meta" aria-label="site meta">
    <span>{title}</span>
    <span>Field notes, no. 04</span>
    <span>Set in {f['display']} &amp; {f['body']}</span>
  </div>

  <header class="tz-hero">
    <h1>The dispatch board that <em>never lies</em> to your crew.</h1>
    <p class="tz-lede">{title} builds scheduling software for small repair shops —
    one shared board where every job, every tech, and every delay is visible to
    everyone. No group texts, no whiteboard photos, no "I thought Mike had it."</p>
    <a class="tz-cta" href="#features">See how it works</a>
  </header>

  <section class="tz-feats" id="features">
    <div>
      <h2>One board. The whole day, at a glance.</h2>
      <p>Most shop software was designed for franchises with a front desk. {title}
      was designed for a shop with three vans and a dog asleep by the compressor.
      The board shows today's jobs in the order they actually happen, flags the
      ones running late in plain red, and keeps a paper-trail log your accountant
      will thank you for.</p>
    </div>
    <ul class="tz-feat-list">
      <li><strong>Texts, not logins</strong>Customers get a text when the tech is
      close. Nobody installs an app, nobody forgets a password.</li>
      <li><strong>Late jobs shout</strong>Anything 20 minutes past its window moves
      to the top of the board and turns red. Silence is not an option.</li>
      <li><strong>Paid on the spot</strong>Card on file, invoice in one tap, receipt
      before the van door closes.</li>
    </ul>
  </section>

  <footer class="tz-foot">
    <span>{title} &mdash; Providence, RI</span>
    <span>Built with tz_build &middot; {dna['id']}</span>
  </footer>
</div>
</body>
</html>
"""


def main():
    ap = argparse.ArgumentParser(
        prog="tz_build",
        description="Tiny stdlib static-site builder. Picks a TZ-taste DNA and "
                    "emits one complete standalone HTML page.",
    )
    ap.add_argument("--dna", default="editorial-serif",
                    help="DNA id from styles/index.json (default: editorial-serif)")
    ap.add_argument("--title", default="Acme",
                    help="Site/product title used in the copy (default: Acme)")
    ap.add_argument("--out", default="page.html",
                    help="Output file path (default: page.html)")
    args = ap.parse_args()
    dna = load_dna(args.dna)
    html = build_page(dna, args.title)
    Path(args.out).write_text(html, encoding="utf-8")
    print(f"tz_build: wrote {args.out} ({len(html)} bytes, dna={dna['id']})")


if __name__ == "__main__":
    main()
