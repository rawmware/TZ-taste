//tz-meta {"id":"go-hero","title":"Granite & Grit — guided hikes hero (alpine-ledger)","category":"Go","file":"go/hero.go","tags":["go","hero","outdoors"],"description":"Hero page for Granite & Grit, a fictional White Mountain guiding outfit, as a stamped logbook entry in the alpine-ledger DNA. go run go/hero.go > out.html","dnas":["alpine-ledger"]}
package main

// Design read: a guide service whose homepage is a filed logbook entry —
// kraft paper, typewriter voice, a rubber stamp that says this trip is real.
// DNA: alpine-ledger (bg #f0e6d2, ink #2b2118, accent #b33a2b). Runner-up
// arctic-field loses: too instrument-cold; the brief needs woodsmoke, not lab coats.
// One distinctive choice: the hero is a stamped ledger entry — rotated red
// rubber stamp "ENTRY Nº 042 · FILED", dashed rope divider, entry fields.
// Dials: VARIANCE 5 / MOTION 1 / DENSITY 3.

import "fmt"

const (
	bg     = "#f0e6d2"
	ink    = "#2b2118"
	accent = "#b33a2b"
	muted  = "#7a6c58"
	line   = "#c9b98f"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Granite &amp; Grit — Guided White Mountain day hikes</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Karla:wght@400;500;700&family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Karla',sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1000px;margin:0 auto;padding:0 32px}
  .type{font-family:'Special Elite','Courier New',monospace}
  .mono{font-family:'IBM Plex Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:26px 0;border-bottom:2px solid ` + ink + `}
  .wordmark{font-family:'Special Elite','Courier New',monospace;font-size:22px}
  .wordmark span{color:` + accent + `}
  nav{font-family:'IBM Plex Mono',monospace;font-size:13px;display:flex;gap:26px}
  nav a{text-decoration:none;color:` + muted + `}
  nav a:hover{color:` + ink + `}
  .entry{border:2px solid ` + ink + `;margin:72px 0 0;padding:clamp(32px,6vw,72px);position:relative;background:` + bg + `;
    box-shadow:10px 10px 0 ` + line + `}
  .entry-head{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:36px}
  .entry-no{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.18em;color:` + muted + `}
  .entry-no strong{color:` + ink + `}
  h1{font-family:'Special Elite','Courier New',monospace;font-weight:400;font-size:clamp(40px,6.6vw,84px);line-height:1.04;margin-bottom:28px;max-width:14em}
  h1 .red{color:` + accent + `}
  .lede{font-size:19px;max-width:34em;margin-bottom:40px}
  .fields{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:2px solid ` + ink + `;margin-bottom:40px}
  .field{padding:20px 24px 20px 0;border-bottom:1px dashed ` + line + `}
  .field:nth-child(odd){border-right:1px dashed ` + line + `;padding-right:24px}
  .field:nth-child(even){padding-left:24px}
  .field .k{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.16em;color:` + muted + `;margin-bottom:6px}
  .field .v{font-family:'Special Elite','Courier New',monospace;font-size:20px}
  .stamp{position:absolute;top:36px;right:40px;border:4px double ` + accent + `;color:` + accent + `;
    font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:14px;letter-spacing:0.2em;
    padding:14px 22px;transform:rotate(9deg);text-align:center;line-height:1.9;background:` + bg + `}
  .rope{border:none;border-top:3px dashed ` + muted + `;margin:40px 0}
  .cta-row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
  .btn{display:inline-block;padding:15px 32px;text-decoration:none;font-weight:700;font-size:16px;border:2px solid ` + ink + `;border-radius:2px}
  .btn.solid{background:` + accent + `;border-color:` + accent + `;color:` + bg + `}
  .btn:hover{transform:translateY(-2px)}
  .fine{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:` + muted + `;margin-top:20px}
  .ledger{margin:72px 0 88px}
  .ledger h2{font-family:'Special Elite','Courier New',monospace;font-weight:400;font-size:32px;margin-bottom:8px}
  .ledger .sub{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.14em;color:` + muted + `;margin-bottom:28px}
  .lrow{display:grid;grid-template-columns:150px 1fr auto;gap:24px;align-items:baseline;padding:20px 0;border-bottom:1px dashed ` + line + `}
  .lrow:first-of-type{border-top:2px solid ` + ink + `}
  .lrow .d{font-family:'IBM Plex Mono',monospace;font-size:14px}
  .lrow .r{font-family:'Special Elite','Courier New',monospace;font-size:20px}
  .lrow .s{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:` + accent + `;letter-spacing:0.06em}
  .lrow .s.full{color:` + muted + `}
  footer.bot{border-top:2px solid ` + ink + `;padding:36px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:` + muted + `}
  @media (max-width:700px){
    .fields{grid-template-columns:1fr}
    .field:nth-child(odd){border-right:none;padding-right:0}
    .field:nth-child(even){padding-left:0}
    .stamp{position:static;display:inline-block;transform:rotate(-4deg);margin-bottom:28px}
    .lrow{grid-template-columns:1fr;gap:6px}
    .entry{margin-top:48px}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">GRANITE <span>&amp;</span> GRIT</div>
    <nav><a href="#entry">The entry</a><a href="#season">Season ledger</a><a href="mailto:hello@graniteandgrit.example">Book</a></nav>
  </header>

  <div class="entry" id="entry">
    <div class="stamp">ENTRY Nº 042<br>— FILED —</div>
    <div class="entry-head">
      <div class="entry-no">WHITE MOUNTAIN GUIDING LOG · <strong>SEASON 2026</strong></div>
      <div class="entry-no">KEPT BY R. CALLOWAY, GUIDE Nº 7</div>
    </div>
    <h1>Walk up something <span class="red">worth remembering.</span></h1>
    <p class="lede">Granite &amp; Grit runs guided day hikes in the White Mountains — small groups, honest pacing, and a guide who'd rather turn you around at the right time than summit at the wrong one.</p>
    <div class="fields">
      <div class="field"><div class="k">PARTY SIZE</div><div class="v">1 – 6 hikers</div></div>
      <div class="field"><div class="k">SIGNATURE ROUTE</div><div class="v">Mt. Pierce via Crawford Path</div></div>
      <div class="field"><div class="k">WE GO IN</div><div class="v">Everything but lightning</div></div>
      <div class="field"><div class="k">INCLUDED</div><div class="v">Spikes, poles &amp; bad jokes</div></div>
    </div>
    <hr class="rope">
    <div class="cta-row">
      <a class="btn solid" href="mailto:hello@graniteandgrit.example">Book a guide</a>
      <a class="btn" href="#season">See the season ledger</a>
    </div>
    <p class="fine">$180 / PERSON · GROUPS OF 4+ DROP TO $140 · KIDS UNDER 12 HALF · CANCELLATIONS FREE UNTIL THE TRAILHEAD</p>
  </div>

  <div class="ledger" id="season">
    <h2>Season ledger</h2>
    <p class="sub">OPEN DATES, UPDATED SUNDAYS. FIRST COME, FIRST BOOTED.</p>
    <div class="lrow"><div class="d">OCT 10</div><div class="r">Mt. Pierce via Crawford Path — foliage peak</div><div class="s">3 SPOTS LEFT</div></div>
    <div class="lrow"><div class="d">OCT 17</div><div class="r">Welch-Dickey loop — the classic</div><div class="s full">FULL — WAITLIST OPEN</div></div>
    <div class="lrow"><div class="d">OCT 24</div><div class="r">Mt. Major at sunrise — headlamps provided</div><div class="s">5 SPOTS LEFT</div></div>
    <div class="lrow"><div class="d">NOV 07</div><div class="r">First snow hike — spikes required, provided</div><div class="s">6 SPOTS LEFT</div></div>
  </div>

  <footer class="bot">
    <div>GRANITE &amp; GRIT · NORTH CONWAY NH · HELLO@GRANITEANDGRIT.EXAMPLE</div>
    <div>Demo page. Granite &amp; Grit is a fictional outfit, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
