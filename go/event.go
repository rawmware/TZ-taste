//tz-meta {"id":"go-event","title":"Static Bloom — warehouse techno night (acid-rave)","category":"Go","file":"go/event.go","tags":["go","event","music"],"description":"Event page for Static Bloom, a fictional warehouse techno night, in the acid-rave DNA. go run go/event.go > out.html","dnas":["acid-rave"]}
package main

// Design read: a flyer that got loose and became a page — black room, acid
// lime, Anton at maximum volume, lineup as a bill not a grid.
// DNA: acid-rave (bg #0a0a0a, ink #f2f2f2, accent #c6ff00). Runner-up
// tokyo-neon loses: its neon is signage; the brief needs sweat and concrete.
// One distinctive choice: the headliner name set 200px+ in Anton, rotated
// -4deg, overlapping the lineup bill like a pasted-up flyer.
// Dials: VARIANCE 9 / MOTION 3 / DENSITY 4.

import "fmt"

const (
	bg      = "#0a0a0a"
	ink     = "#f2f2f2"
	accent  = "#c6ff00"
	muted   = "#7a7a7a"
	line    = "#f2f2f21f"
	surface = "#131313"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>STATIC BLOOM — one night of warehouse techno, Providence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Space Grotesk',sans-serif;font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  a{color:inherit}
  .wrap{max-width:1100px;margin:0 auto;padding:0 32px}
  .mono{font-family:'Space Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:center;padding:22px 0;border-bottom:1px solid ` + line + `}
  .wordmark{font-family:'Anton',sans-serif;font-size:20px;letter-spacing:0.04em}
  .wordmark span{color:` + accent + `}
  .topinfo{font-family:'Space Mono',monospace;font-size:12px;color:` + muted + `;letter-spacing:0.1em}
  .hero{padding:88px 0 0;position:relative}
  .dateline{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:0.18em;color:` + accent + `;margin-bottom:8px}
  .giant{font-family:'Anton',sans-serif;font-size:clamp(88px,17vw,236px);line-height:0.88;letter-spacing:0.005em;
    transform:rotate(-4deg);transform-origin:left top;margin:24px 0 0 -8px;color:` + ink + `}
  .giant .acid{color:` + accent + `}
  .hero-sub{display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;margin:56px 0 0;padding:28px 0;border-top:1px solid ` + line + `;border-bottom:1px solid ` + line + `}
  .hero-sub p{font-size:18px;max-width:34em}
  .hero-sub .where{font-family:'Space Mono',monospace;font-size:13px;color:` + muted + `;line-height:2;text-align:right}
  section{padding:80px 0}
  h2{font-family:'Anton',sans-serif;font-size:clamp(40px,6vw,72px);letter-spacing:0.02em;margin-bottom:8px}
  h2 span{color:` + accent + `}
  .sec-sub{font-family:'Space Mono',monospace;font-size:13px;color:` + muted + `;letter-spacing:0.06em;margin-bottom:44px}
  .bill{border-top:2px solid ` + ink + `}
  .act{display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:baseline;padding:26px 0;border-bottom:1px solid ` + line + `}
  .act .time{font-family:'Space Mono',monospace;font-size:14px;color:` + muted + `}
  .act .who{font-family:'Anton',sans-serif;font-size:clamp(30px,4.6vw,58px);letter-spacing:0.02em;line-height:1}
  .act.headliner .who{color:` + accent + `}
  .act .tag{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.14em;color:` + muted + `;border:1px solid ` + line + `;padding:6px 12px;border-radius:3px;white-space:nowrap}
  .tiers{margin-top:8px}
  .tier{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;padding:30px 32px;border:1px solid ` + line + `;margin-bottom:16px;background:` + surface + `}
  .tier .tn{font-family:'Anton',sans-serif;font-size:30px;letter-spacing:0.02em}
  .tier .tn small{font-family:'Space Mono',monospace;font-size:12px;color:` + muted + `;letter-spacing:0.1em;display:block;margin-top:6px}
  .tier .tp{font-family:'Anton',sans-serif;font-size:44px;color:` + accent + `}
  .tier.wide{margin-left:clamp(0px,6vw,90px)}
  .tier .note{font-size:14px;color:` + muted + `;margin-top:6px}
  .btn{display:inline-block;background:` + accent + `;color:` + bg + `;font-weight:700;padding:16px 36px;border-radius:3px;text-decoration:none;font-size:17px;margin-top:32px}
  .btn:hover{transform:translateY(-2px)}
  .fine{font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `;line-height:2;margin-top:24px}
  footer.bot{border-top:1px solid ` + line + `;padding:40px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `}
  footer.bot .big{font-family:'Anton',sans-serif;font-size:22px;color:` + ink + `;letter-spacing:0.03em}
  @media (max-width:700px){
    .act{grid-template-columns:1fr;gap:8px}
    .act .tag{justify-self:start}
    .tier{grid-template-columns:1fr;padding:24px}
    .hero-sub .where{text-align:left}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">STATIC<span>BLOOM</span></div>
    <div class="topinfo">BASSLINE COLLECTIVE · EST. 2021</div>
  </header>

  <div class="hero">
    <p class="dateline">SAT OCT 24 · 10PM–4AM · THE IRONWORKS, PROVIDENCE RI</p>
    <div class="giant">STATIC<br><span class="acid">BLOOM</span></div>
    <div class="hero-sub">
      <p>One room, one rig, no headliner worship — four hours of warehouse techno at full volume. Function One sound, zero phones on the dancefloor, water free all night.</p>
      <div class="where">THE IRONWORKS<br>72 DORRANCE ST, PVD<br>18+ · ID REQUIRED<br>CASHLESS BAR</div>
    </div>
  </div>

  <section>
    <h2>THE <span>BILL</span></h2>
    <p class="sec-sub">FOUR SETS. NO FILLER. TIMES ARE REAL — DOORS SHUT AT 1AM.</p>
    <div class="bill">
      <div class="act"><div class="time">22:00</div><div class="who">NIGHT OWLS</div><div class="tag">WARM-UP · DUB TECHNO</div></div>
      <div class="act"><div class="time">23:30</div><div class="who">GLASS TEETH</div><div class="tag">LIVE HARDWARE SET</div></div>
      <div class="act"><div class="time">01:00</div><div class="who">VELVET CIRCUIT</div><div class="tag">B2B ALL NIGHT ENERGY</div></div>
      <div class="act headliner"><div class="time">02:30</div><div class="who">STATIC BLOOM</div><div class="tag">CLOSING · 90 MIN</div></div>
    </div>
  </section>

  <section style="padding-top:0">
    <h2>TICK<span>ETS</span></h2>
    <p class="sec-sub">TIERED, NOT DYNAMIC. THE PRICE IS THE PRICE.</p>
    <div class="tiers">
      <div class="tier"><div><div class="tn">EARLY STATIC<small>FIRST 100 · GONE WHEN THEY'RE GONE</small></div></div><div class="tp">$20</div></div>
      <div class="tier wide"><div><div class="tn">GENERAL<small>THE HONEST MIDDLE</small></div><div class="note">Includes a free locker token. Your jacket deserves better than the floor.</div></div><div class="tp">$30</div></div>
      <div class="tier"><div><div class="tn">DOOR<small>IF ANY ARE LEFT — NO PROMISES</small></div></div><div class="tp">$40</div></div>
    </div>
    <a class="btn" href="#tickets">Get tickets</a>
    <p class="fine">NO REFUNDS, TRANSFERS FINE. IF YOU FEEL UNWELL, FIND ANYONE IN A YELLOW VEST —<br>THE WELFARE TEAM IS SOBER, TRAINED, AND ON YOUR SIDE ALL NIGHT.</p>
  </section>

  <footer class="bot">
    <div class="big">STATIC BLOOM</div>
    <div>BASSLINE COLLECTIVE · BOOKING@BASSLINECOLLECTIVE.EXAMPLE<br><br>Demo page. Static Bloom is a fictional night, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
