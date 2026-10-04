//tz-meta {"id":"go-nonprofit","title":"Salt Meadow Conservancy (botanical-lab)","category":"Go","file":"go/nonprofit.go","tags":["go","nonprofit","environment"],"description":"Site for Salt Meadow Conservancy, a fictional coastal-habitat nonprofit, in the botanical-lab DNA. go run go/nonprofit.go > out.html","dnas":["botanical-lab"]}
package main

// Design read: a field botanist's site — pressed-specimen calm, serif voice,
// accession numbers instead of feature cards, green used like chlorophyll.
// DNA: botanical-lab (bg #f4f6ec, ink #1b3a2b, accent #3e7d4e). Runner-up
// cottage-warm loses: cozy but domestic; the brief needs salt air, not kitchens.
// One distinctive choice: programs filed as herbarium specimens — SPEC. numbers,
// Latin names, pressed-plant rules — instead of cards.
// Dials: VARIANCE 5 / MOTION 1 / DENSITY 4.

import "fmt"

const (
	bg     = "#f4f6ec"
	ink    = "#1b3a2b"
	accent = "#3e7d4e"
	muted  = "#6f867a"
	line   = "#cdd8bd"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Salt Meadow Conservancy — We put salt marsh back together</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Karla:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Karla',sans-serif;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1080px;margin:0 auto;padding:0 32px}
  .mono{font-family:'Space Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:26px 0;border-bottom:1px solid ` + line + `}
  .wordmark{font-family:'DM Serif Display',serif;font-size:24px}
  .wordmark em{font-style:normal;color:` + accent + `}
  nav{font-family:'Space Mono',monospace;font-size:13px;display:flex;gap:26px}
  nav a{text-decoration:none;color:` + muted + `}
  nav a:hover{color:` + ink + `}
  .hero{padding:104px 0 72px;display:grid;grid-template-columns:7fr 5fr;gap:64px;align-items:end}
  .eyebrow{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;color:` + accent + `;margin-bottom:24px}
  h1{font-family:'DM Serif Display',serif;font-weight:400;font-size:clamp(46px,6.4vw,88px);line-height:1.02;letter-spacing:-0.01em;margin-bottom:24px}
  h1 em{font-style:italic;color:` + accent + `}
  .lede{font-size:19px;max-width:32em}
  .stat{border-left:2px solid ` + accent + `;padding-left:24px}
  .stat .n{font-family:'DM Serif Display',serif;font-size:56px;line-height:1;color:` + accent + `}
  .stat .l{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.1em;color:` + muted + `;margin-top:8px}
  .btn{display:inline-block;background:` + accent + `;color:` + bg + `;padding:14px 30px;border-radius:4px;text-decoration:none;font-weight:700;margin-top:32px}
  .btn:hover{transform:translateY(-2px)}
  section{padding:80px 0;border-top:1px solid ` + line + `}
  h2{font-family:'DM Serif Display',serif;font-weight:400;font-size:clamp(32px,4vw,52px);margin-bottom:12px}
  .sec-sub{color:` + muted + `;max-width:36em;margin-bottom:56px}
  .specimen{border:1px solid ` + line + `;background:` + bg + `;padding:40px clamp(24px,4vw,48px);margin-bottom:28px;display:grid;grid-template-columns:200px 1fr;gap:32px;position:relative}
  .specimen .acc{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.12em;color:` + accent + `}
  .specimen .latin{font-family:'DM Serif Display',serif;font-style:italic;font-size:20px;color:` + muted + `;margin-top:6px}
  .specimen h3{font-family:'DM Serif Display',serif;font-weight:400;font-size:30px;margin-bottom:12px}
  .specimen p{max-width:36em;color:` + ink + `}
  .specimen .tag{position:absolute;top:24px;right:28px;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.14em;color:` + muted + `;border:1px solid ` + line + `;padding:6px 12px;border-radius:3px}
  .specimen.off{margin-left:clamp(0px,7vw,110px)}
  .cta-band{background:` + accent + `;color:` + bg + `;border-radius:8px;padding:56px clamp(28px,5vw,64px);display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;margin:80px 0}
  .cta-band h3{font-family:'DM Serif Display',serif;font-weight:400;font-size:clamp(28px,3.6vw,44px);margin-bottom:12px}
  .cta-band p{opacity:0.9;max-width:30em}
  .cta-band .btn{background:` + bg + `;color:` + accent + `;margin-top:0;white-space:nowrap}
  footer.bot{padding:48px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `}
  footer.bot .big{font-family:'DM Serif Display',serif;font-size:24px;color:` + ink + `}
  @media (max-width:820px){
    .hero{grid-template-columns:1fr;gap:40px;padding:72px 0 56px}
    .specimen{grid-template-columns:1fr}
    .specimen .tag{position:static;justify-self:start;margin-bottom:16px}
    .cta-band{grid-template-columns:1fr}
    section{padding:60px 0}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">Salt Meadow <em>Conservancy</em></div>
    <nav><a href="#work">Field work</a><a href="#walks">Marsh walks</a><a href="#join">Volunteer</a></nav>
  </header>

  <div class="hero">
    <div>
      <p class="eyebrow">COASTAL HABITAT RESTORATION · NH SEACOAST</p>
      <h1>We put <em>salt marsh</em> back together.</h1>
      <p class="lede">Salt Meadow Conservancy replants native grasses, reopens tidal flow, and teaches neighbors to read a marsh — one creek, one culvert, one Saturday at a time.</p>
      <a class="btn" href="#join">Join a marsh walk</a>
    </div>
    <div class="stat">
      <div class="n">47</div>
      <div class="l">ACRES OF MARSH<br>REPLANTED SINCE 2019</div>
    </div>
  </div>

  <section id="work">
    <h2>Field work, filed like specimens.</h2>
    <p class="sec-sub">Every program is a living collection. Here's what's growing.</p>

    <div class="specimen">
      <div><div class="acc">SPEC. 014</div><div class="latin">Spartina alterniflora</div></div>
      <div><h3>Marsh replanting crews</h3>
      <p>Volunteers plant 10,000 smooth cordgrass plugs a season along degraded creek banks. Cordgrass is the marsh's rebar — roots hold the peat, stems slow the tide, and the whole system stands up straighter. No experience needed; we teach the planting knot in five minutes.</p></div>
      <div class="tag">APR – JUN</div>
    </div>

    <div class="specimen off">
      <div><div class="acc">SPEC. 022</div><div class="latin">Fluxus tidalis</div></div>
      <div><h3>Tidal flow restoration</h3>
      <p>Undersized culverts starve marshes of the tide. We survey them, permit the replacements, and swap concrete straws for open channels — then watch the marsh breathe again within a single season. Three crossings fixed; eleven on the list.</p></div>
      <div class="tag">YEAR-ROUND</div>
    </div>

    <div class="specimen" id="walks">
      <div><div class="acc">SPEC. 031</div><div class="latin">Homo sapiens curiosus</div></div>
      <div><h3>Free monthly marsh walks</h3>
      <p>First Saturday, 9am, rain or shine. A naturalist, a pair of loaner binoculars, and ninety minutes learning to tell a snowy egret from a great egret (it's the feet — yellow versus black). Kids welcome; dogs on leash.</p></div>
      <div class="tag">FREE · MONTHLY</div>
    </div>
  </section>

  <div class="cta-band" id="join">
    <div>
      <h3>Muddy boots welcome.</h3>
      <p>Two hours a month is a real contribution — plant, haul, or just show up and learn. We'll put gloves on your hands and cordgrass in them.</p>
    </div>
    <a class="btn" href="mailto:volunteer@saltmeadow.example">Volunteer</a>
  </div>

  <footer class="bot">
    <div class="big">Salt Meadow Conservancy</div>
    <div>PO BOX 412, RYE NH · VOLUNTEER@SALTMEADOW.EXAMPLE<br><br>Demo page. Salt Meadow Conservancy is a fictional nonprofit, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
