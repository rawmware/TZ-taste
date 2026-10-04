//tz-meta {"id":"go-portfolio","title":"Mara Ellison — letterpress portfolio (risograph-grain)","category":"Go","file":"go/portfolio.go","tags":["go","portfolio"],"description":"Portfolio page for Mara Ellison, a fictional letterpress printer and illustrator, in the risograph-grain DNA. go run go/portfolio.go > out.html","dnas":["risograph-grain"]}
package main

// Design read: a printmaker's portfolio that looks printed — kraft grain,
// misregistered display type, work filed like editions, not cards.
// DNA: risograph-grain (bg #f5eedd, ink #26413c, accent #117d78). Runner-up
// alpine-ledger loses: its typewriter voice is a logbook, not a studio.
// One distinctive choice: display headings printed twice — a 3px accent
// offset behind the ink, like a misregistered riso pass.
// Dials: VARIANCE 7 / MOTION 2 / DENSITY 3.

import "fmt"

const (
	bg     = "#f5eedd"
	ink    = "#26413c"
	accent = "#117d78"
	muted  = "#8d8a76"
	line   = "#d8cfae"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mara Ellison — Letterpress printer &amp; illustrator</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Space Grotesk',sans-serif;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased}
  body::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.5;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")}
  a{color:inherit}
  .wrap{max-width:1080px;margin:0 auto;padding:0 32px;position:relative}
  .mono{font-family:'Space Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:26px 0;border-bottom:2px solid ` + ink + `}
  .wordmark{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:0.14em}
  nav{font-family:'Space Mono',monospace;font-size:13px;display:flex;gap:26px}
  nav a{text-decoration:none;color:` + muted + `}
  nav a:hover{color:` + ink + `}
  .hero{padding:110px 0 80px}
  .eyebrow{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;color:` + muted + `;margin-bottom:28px}
  h1{font-family:'Archivo Black',sans-serif;font-size:clamp(56px,10vw,132px);line-height:0.95;letter-spacing:-0.01em;color:` + ink + `;
     text-shadow:4px 4px 0 ` + accent + `;margin-bottom:32px}
  .sub{font-size:21px;max-width:30em}
  .sub strong{color:` + accent + `}
  .rule{border:none;border-top:2px solid ` + ink + `;margin:0}
  section.work{padding:72px 0}
  h2{font-family:'Archivo Black',sans-serif;font-size:clamp(30px,4.5vw,54px);color:` + ink + `;
     text-shadow:3px 3px 0 ` + accent + `;margin-bottom:12px}
  .sec-note{font-family:'Space Mono',monospace;font-size:13px;color:` + muted + `;margin-bottom:56px}
  .piece{display:grid;grid-template-columns:80px 1fr;gap:24px;padding:36px 0;border-top:1px solid ` + line + `}
  .piece:last-child{border-bottom:1px solid ` + line + `}
  .piece .no{font-family:'Space Mono',monospace;font-size:14px;color:` + accent + `;padding-top:8px}
  .piece .t{font-family:'Archivo Black',sans-serif;font-size:clamp(24px,3.4vw,40px);line-height:1.05;margin-bottom:10px}
  .piece .meta{font-family:'Space Mono',monospace;font-size:13px;color:` + muted + `;margin-bottom:12px}
  .piece .d{max-width:36em;color:` + ink + `}
  .piece.offset .inner{margin-left:clamp(0px,8vw,120px)}
  .piece .inner{max-width:760px}
  section.about{padding:72px 0 88px;display:grid;grid-template-columns:5fr 7fr;gap:64px}
  section.about p{margin-bottom:1.4em;max-width:34em}
  section.about p:first-child{font-size:20px}
  .stamp{display:inline-block;border:3px solid ` + accent + `;color:` + accent + `;font-family:'Space Mono',monospace;
    font-size:13px;letter-spacing:0.18em;padding:10px 18px;transform:rotate(-4deg);margin-top:8px}
  footer.bot{border-top:2px solid ` + ink + `;padding:40px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'Space Mono',monospace;font-size:13px}
  footer.bot .big{font-family:'Archivo Black',sans-serif;font-size:22px}
  footer.bot a{text-decoration:none;border-bottom:2px solid ` + accent + `}
  @media (max-width:760px){
    section.about{grid-template-columns:1fr;gap:32px}
    .hero{padding:72px 0 56px}
  }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">M.E. — PRESS Nº 3</div>
    <nav><a href="#work">Work</a><a href="#about">About</a><a href="mailto:hello@maraellison.press">Contact</a></nav>
  </header>

  <div class="hero">
    <p class="eyebrow">PORTFOLIO — PROVIDENCE, RHODE ISLAND</p>
    <h1>MARA<br>ELLISON</h1>
    <p class="sub">Letterpress printer &amp; illustrator. <strong>Ink under the fingernails since 2014.</strong> Posters, packaging, and wedding suites — every edition pulled by hand on a 1912 Chandler &amp; Price.</p>
  </div>

  <hr class="rule">

  <section class="work" id="work">
    <h2>Selected work</h2>
    <p class="sec-note">FOUR EDITIONS, 2024–2026. EVERYTHING BELOW WAS PRINTED, NOT RENDERED.</p>
    <div class="piece"><div class="no">01</div><div class="inner">
      <div class="t">Harbor Ferry posters</div>
      <div class="meta">3-COLOR RISOGRAPH · EDITION OF 200 · 2026</div>
      <p class="d">A summer series for the Providence–Newport ferry: gulls, timetables, and one very patient captain. Wheat-pasted along the waterfront, then stolen within a week — the highest compliment.</p>
    </div></div>
    <div class="piece offset"><div class="no">02</div><div class="inner">
      <div class="t">Seed packets for City Farm</div>
      <div class="meta">LETTERPRESS ON KRAFT · EDITION OF 5,000 · 2025</div>
      <p class="d">Twelve vegetable varieties, twelve illustrations, one very tired press. The packets are plantable — the paper is seeded, so the packaging becomes the garden.</p>
    </div></div>
    <div class="piece"><div class="no">03</div><div class="inner">
      <div class="t">The Okafor wedding suite</div>
      <div class="meta">DUPLEXED COTTON · GOLD + FOREST · EDITION OF 140 · 2025</div>
      <p class="d">Invitations, menus, and place cards for a three-day celebration. The couple's dog made the envelope liner. Nobody objected.</p>
    </div></div>
    <div class="piece offset"><div class="no">04</div><div class="inner">
      <div class="t">AS220 40th anniversary gig posters</div>
      <div class="meta">SCREENPRINT · 6 ARTISTS, 6 NIGHTS · 2024</div>
      <p class="d">One poster per anniversary show, each by a different local artist, all printed in the AS220 print shop. Mine was the loud one — obviously.</p>
    </div></div>
  </section>

  <hr class="rule">

  <section class="about" id="about">
    <div>
      <h2>About</h2>
      <span class="stamp">STILL PRINTING</span>
    </div>
    <div>
      <p>I run a two-press studio out of a former bait shop on Allens Avenue. Everything is editioned, numbered, and slightly imperfect — that's the point. Machines chase perfection; I chase the version with character.</p>
      <p>Commissions open twice a year, in March and September. Posters, packaging, stationery, and the occasional album cover. If your timeline is "next week," I am not your printer — good ink takes time.</p>
      <p class="mono" style="font-size:13px;color:` + muted + `">SET IN ARCHIVO BLACK &amp; SPACE GROTESK.<br>PRINTED ON THE WEB, EDITION UNLIMITED.</p>
    </div>
  </section>

  <footer class="bot">
    <div class="big"><a href="mailto:hello@maraellison.press">hello@maraellison.press</a></div>
    <div>COMMISSIONS OPEN MARCH &amp; SEPTEMBER<br><br>Demo page. Mara Ellison is a fictional client, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
