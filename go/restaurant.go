//tz-meta {"id":"go-restaurant","title":"Bar Amaro — natural wine bar (aperitivo-italian)","category":"Go","file":"go/restaurant.go","tags":["go","restaurant","menu"],"description":"One-page site for Bar Amaro, a fictional natural wine bar in Providence, in the aperitivo-italian DNA. go run go/restaurant.go > out.html","dnas":["aperitivo-italian"]}
package main

// Design read: golden hour at a Milan bar that happens to be in Providence —
// Campari red, cream paper, slab type you can taste.
// DNA: aperitivo-italian (bg #f7efdc, ink #2b1f14, accent #c93a2e). Runner-up
// surf-shack loses: too beachy; the brief needs bitter aperitivo, not surf wax.
// One distinctive choice: the whole menu is one continuous bar ticket —
// perforated dashed edges, dotted price leaders, a rotated TONIGHT stamp.
// Dials: VARIANCE 6 / MOTION 2 / DENSITY 4.

import "fmt"

const (
	bg     = "#f7efdc"
	ink    = "#2b1f14"
	accent = "#c93a2e"
	muted  = "#a08872"
	line   = "#e3d3b8"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bar Amaro — Natural wine &amp; small plates, Providence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'DM Sans',sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1060px;margin:0 auto;padding:0 32px}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:26px 0;border-bottom:3px double ` + ink + `}
  .wordmark{font-family:'Alfa Slab One',serif;font-size:22px}
  .wordmark span{color:` + accent + `}
  .topinfo{font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `}
  .hero{padding:96px 0 72px;position:relative}
  .eyebrow{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.18em;color:` + accent + `;margin-bottom:24px}
  h1{font-family:'Alfa Slab One',serif;font-size:clamp(64px,11vw,148px);line-height:0.95;letter-spacing:0.005em;margin-bottom:28px}
  h1 .amaro{color:` + accent + `}
  .lede{font-size:20px;max-width:32em}
  .lede strong{font-weight:700}
  .stamp{position:absolute;top:80px;right:4%;border:4px solid ` + accent + `;color:` + accent + `;
    font-family:'Space Mono',monospace;font-weight:700;font-size:15px;letter-spacing:0.2em;
    padding:12px 20px;transform:rotate(7deg);background:` + bg + `}
  .facts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:36px 0;border-top:3px double ` + ink + `;border-bottom:3px double ` + ink + `}
  .facts h4{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.16em;color:` + muted + `;margin-bottom:8px;font-weight:700}
  .facts p{font-size:16px}
  .ticket-wrap{padding:88px 0}
  .ticket{background:` + bg + `;border-top:2px dashed ` + muted + `;border-bottom:2px dashed ` + muted + `;
    padding:56px clamp(24px,6vw,72px);position:relative}
  .ticket::before,.ticket::after{content:"";position:absolute;top:-13px;width:24px;height:24px;border-radius:50%;background:` + bg + `;border:2px dashed ` + muted + `}
  .ticket::before{left:-14px}
  .ticket::after{right:-14px}
  .ticket h2{font-family:'Alfa Slab One',serif;font-size:clamp(34px,5vw,58px);text-align:center;margin-bottom:6px}
  .ticket .tk-sub{text-align:center;font-family:'Space Mono',monospace;font-size:12.5px;letter-spacing:0.14em;color:` + muted + `;margin-bottom:48px}
  .tk-sec{font-family:'Space Mono',monospace;font-weight:700;font-size:13px;letter-spacing:0.22em;color:` + accent + `;
    margin:44px 0 8px;padding-bottom:10px;border-bottom:1px solid ` + line + `}
  .tk-sec:first-of-type{margin-top:0}
  .tk-item{display:flex;align-items:baseline;gap:12px;padding:13px 0}
  .tk-item .nm{font-weight:700;font-size:18px}
  .tk-item .ds{font-size:14.5px;color:` + muted + `}
  .tk-item .dots{flex:1;border-bottom:2px dotted ` + line + `;transform:translateY(-5px)}
  .tk-item .pr{font-family:'Space Mono',monospace;font-weight:700;font-size:16px;white-space:nowrap}
  .tk-foot{text-align:center;font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `;margin-top:44px;letter-spacing:0.06em}
  .rules{margin:0 0 88px;border:3px solid ` + accent + `;padding:40px clamp(24px,5vw,56px);transform:rotate(-0.6deg)}
  .rules h3{font-family:'Alfa Slab One',serif;font-size:28px;margin-bottom:18px;color:` + accent + `}
  .rules ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:12px 32px;font-size:16px}
  .rules li::before{content:"— ";color:` + accent + `;font-weight:700}
  footer.bot{border-top:3px double ` + ink + `;padding:40px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
  footer.bot .big{font-family:'Alfa Slab One',serif;font-size:26px}
  footer.bot .small{font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `;line-height:1.9}
  @media (max-width:760px){
    .facts{grid-template-columns:1fr;gap:20px}
    .rules ul{grid-template-columns:1fr}
    .stamp{position:static;display:inline-block;transform:rotate(-3deg);margin-bottom:32px}
    .hero{padding:64px 0 56px}
  }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">BAR <span>AMARO</span></div>
    <div class="topinfo">14 SPRUCE ST · PROVIDENCE RI · TUE–SUN 5–11</div>
  </header>

  <div class="hero">
    <p class="eyebrow">NATURAL WINE · SMALL PLATES · BITTER THINGS</p>
    <h1>BAR<br><span class="amaro">AMARO</span></h1>
    <p class="lede">Natural wine, bitter things, good company. A twelve-seat bar in Providence pouring <strong>low-intervention wines</strong> and plates built for sharing — no reservations, no fuss, no wine-speak.</p>
    <div class="stamp">TONIGHT 5–11</div>
  </div>

  <div class="facts">
    <div><h4>FIND US</h4><p>14 Spruce Street<br>Providence, RI 02903<br>Two doors down from the bakery — follow the smell of garlic.</p></div>
    <div><h4>HOURS</h4><p>Tuesday – Sunday<br>5pm – 11pm<br>Kitchen closes at 10. Bar doesn't.</p></div>
    <div><h4>GOOD TO KNOW</h4><p>(401) 555-0184<br>Walk-ins only<br>Dogs welcome on the patio.</p></div>
  </div>

  <div class="ticket-wrap">
    <div class="ticket">
      <h2>The Ticket</h2>
      <p class="tk-sub">TONIGHT'S POURS &amp; PLATES — CHANGES WHEN THE CELLAR SAYS SO</p>

      <div class="tk-sec">POURS</div>
      <div class="tk-item"><div><div class="nm">Etna Rosso '22</div><div class="ds">Sicily — ash, cherry, smoke</div></div><div class="dots"></div><div class="pr">14</div></div>
      <div class="tk-item"><div><div class="nm">Skin-contact Malvasia</div><div class="ds">Emilia-Romagna — orange, tea, salt</div></div><div class="dots"></div><div class="pr">13</div></div>
      <div class="tk-item"><div><div class="nm">Pét-nat of the moment</div><div class="ds">Ask what's open — it changes weekly</div></div><div class="dots"></div><div class="pr">12</div></div>
      <div class="tk-item"><div><div class="nm">Amaro flight</div><div class="ds">Three bitter pours, your education begins</div></div><div class="dots"></div><div class="pr">16</div></div>

      <div class="tk-sec">PLATES</div>
      <div class="tk-item"><div><div class="nm">Whipped ricotta, hot honey</div><div class="ds">Grilled bread, thyme</div></div><div class="dots"></div><div class="pr">11</div></div>
      <div class="tk-item"><div><div class="nm">Crispy artichokes</div><div class="ds">Lemon aioli, pecorino</div></div><div class="dots"></div><div class="pr">13</div></div>
      <div class="tk-item"><div><div class="nm">Nduja arancini</div><div class="ds">Calabrian sausage, saffron rice</div></div><div class="dots"></div><div class="pr">12</div></div>
      <div class="tk-item"><div><div class="nm">The whole board</div><div class="ds">Cheese, salumi, olives, bread — feeds the table</div></div><div class="dots"></div><div class="pr">28</div></div>

      <p class="tk-foot">20% SERVICE ADDED · CASH &amp; CARD · MENU PRINTED DAILY, ARGUE WITH THE CHALKBOARD NOT US</p>
    </div>
  </div>

  <div class="rules">
    <h3>House rules</h3>
    <ul>
      <li>No substitutions after 9pm — the kitchen has spoken.</li>
      <li>If you don't know, ask. Snobbery is the only thing we don't pour.</li>
      <li>Phones down at the bar. Talk to your neighbor instead.</li>
      <li>Last pour at 10:40. We mean it (usually).</li>
    </ul>
  </div>

  <footer class="bot">
    <div class="big">BAR AMARO</div>
    <div class="small">14 SPRUCE ST, PROVIDENCE RI · (401) 555-0184<br>TUE–SUN 5–11 · @baramaro.pvd<br><br>Demo page. Bar Amaro is a fictional bar, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
