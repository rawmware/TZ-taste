//tz-meta {"id":"rust-event","title":"Static Bloom — warehouse night event page","category":"Rust","file":"rust/event.rs","tags":["rust","event","music","nightlife"],"description":"Acid-rave event page for fictional all-night STATIC BLOOM: giant Anton hero, lineup marquee, two-room set-time grid, ticket rows.","dnas":["acid-rave"]}
//! Askama-style: struct EventPage { date: &'static str, venue: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: flyer-as-website for an all-night warehouse session —
//!    audience: Providence heads who plan around lineups; feeling: loud, alert, 2 a.m.; goal: buy the $40 ticket.
//! DNA: acid-rave (runner-up tokyo-neon loses: pink-on-black where this night is acid-lime-on-black).
//! Distinctive choice: set times as a brutal two-room grid with oversized Anton numerals you can read mid-dancefloor.
//! Dials: VARIANCE 9 / MOTION 7 / DENSITY 5.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>STATIC BLOOM — Sat Oct 17, Providence RI</title>
<style>
:root{
  --bg:#0a0a0a;
  --ink:#f2f2f2;
  --accent:#c6ff00;
  --muted:#7a7a7a;
  --line:#f2f2f21f;
  --surface:#131313;
  color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Space Grotesk","Avenir Next","Segoe UI",sans-serif;
  font-size:17px;line-height:1.6;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
.display{font-family:"Anton","Arial Narrow","Impact",sans-serif;font-weight:400}
.mono{font-family:"Space Mono","Courier New",monospace}
.wrap{max-width:1140px;margin:0 auto;padding:0 24px}
/* nav */
.nav{border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--bg);z-index:20}
.nav-in{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;max-width:1140px;margin:0 auto}
.brand{font-family:"Anton","Arial Narrow",sans-serif;font-size:20px;letter-spacing:.06em;color:var(--ink);text-decoration:none}
.brand b{color:var(--accent);font-weight:400}
.nav-in .mono{font-size:12px;color:var(--muted);letter-spacing:.14em}
/* hero */
.hero{padding:88px 0 40px;position:relative}
.hero .mono.date{color:var(--accent);font-size:14px;letter-spacing:.22em;margin-bottom:18px}
h1{font-family:"Anton","Arial Narrow",sans-serif;font-size:clamp(72px,15vw,190px);line-height:.92;letter-spacing:.005em;text-transform:uppercase}
h1 .out{color:transparent;-webkit-text-stroke:2px var(--accent)}
.hero-sub{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:36px;align-items:start}
.hero-sub p.lede{font-size:20px;max-width:30em}
.hero-sub p.lede strong{color:var(--accent)}
.hero-facts{font-family:"Space Mono","Courier New",monospace;font-size:13px;line-height:2;color:var(--muted);border-left:2px solid var(--accent);padding-left:20px}
.hero-facts b{color:var(--ink)}
/* marquee */
.marquee{border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:56px 0 0;overflow:hidden;white-space:nowrap;padding:16px 0}
.marquee p{display:inline-block;font-family:"Anton","Arial Narrow",sans-serif;font-size:30px;letter-spacing:.08em;text-transform:uppercase;animation:slide 22s linear infinite}
.marquee p span{color:var(--accent);padding:0 18px}
@keyframes slide{to{transform:translateX(-50%)}}
/* lineup */
section.block{padding:72px 0}
.sec-tag{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.22em;color:var(--accent);margin-bottom:10px;text-transform:uppercase}
h2.sec{font-family:"Anton","Arial Narrow",sans-serif;font-size:clamp(38px,6vw,64px);text-transform:uppercase;letter-spacing:.02em;margin-bottom:36px}
/* schedule grid */
.sched{border:1px solid var(--line)}
.sched-head{display:grid;grid-template-columns:120px 1fr 1fr;background:var(--surface);border-bottom:1px solid var(--line)}
.sched-head div{padding:14px 20px;font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;color:var(--accent)}
.sched-row{display:grid;grid-template-columns:120px 1fr 1fr;border-bottom:1px solid var(--line)}
.sched-row:last-child{border-bottom:none}
.sched-row .time{font-family:"Anton","Arial Narrow",sans-serif;font-size:34px;padding:18px 20px;border-right:1px solid var(--line);color:var(--muted);line-height:1}
.sched-row .slot{padding:18px 20px;border-right:1px solid var(--line)}
.sched-row .slot:last-child{border-right:none}
.sched-row .slot b{display:block;font-size:17px;letter-spacing:.02em}
.sched-row .slot span{font-family:"Space Mono","Courier New",monospace;font-size:12px;color:var(--muted)}
.sched-row .slot.hot b{color:var(--accent)}
.sched-row .slot.hot{box-shadow:inset 0 0 0 1px var(--accent)}
/* tickets as rows, not cards */
.tix{border:1px solid var(--line)}
.tix-row{display:grid;grid-template-columns:1fr auto auto;gap:24px;align-items:center;padding:24px;border-bottom:1px solid var(--line)}
.tix-row:last-child{border-bottom:none}
.tix-row h3{font-family:"Anton","Arial Narrow",sans-serif;font-size:26px;letter-spacing:.03em;text-transform:uppercase}
.tix-row h3 small{display:block;font-family:"Space Mono","Courier New",monospace;font-size:12px;color:var(--muted);letter-spacing:.1em;margin-top:6px}
.tix-row .price{font-family:"Anton","Arial Narrow",sans-serif;font-size:40px;color:var(--accent)}
.tix-row.sold{opacity:.45}
.tix-row.sold .price{color:var(--muted);text-decoration:line-through}
.btn{display:inline-block;font-family:"Space Mono","Courier New",monospace;font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;background:var(--accent);color:var(--bg);padding:15px 28px;border-radius:4px;transition:transform .15s ease}
.btn:hover{transform:translateY(-2px) skewX(-4deg)}
.btn.ghost{background:transparent;color:var(--muted);border:1px solid var(--muted);cursor:not-allowed}
/* info */
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line)}
.info-grid div{padding:28px;border-right:1px solid var(--line)}
.info-grid div:last-child{border-right:none}
.info-grid h3{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;color:var(--accent);margin-bottom:12px;text-transform:uppercase}
.info-grid p{font-size:16px}
/* final */
.final{padding:88px 0;text-align:left;border-top:1px solid var(--line)}
.final h2{font-family:"Anton","Arial Narrow",sans-serif;font-size:clamp(48px,9vw,110px);line-height:.95;text-transform:uppercase;margin-bottom:28px}
.final h2 span{color:var(--accent)}
footer.site{border-top:1px solid var(--line);padding:36px 0 44px}
.foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-family:"Space Mono","Courier New",monospace;font-size:12px;color:var(--muted);letter-spacing:.1em}
.foot a{color:var(--ink);text-decoration:none}
.foot a:hover{color:var(--accent)}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
@media (max-width:860px){
  .hero-sub{grid-template-columns:1fr}
  .sched-head{display:none}
  .sched-row{grid-template-columns:1fr}
  .sched-row .time{border-right:none;border-bottom:1px solid var(--line);font-size:28px}
  .sched-row .slot{border-right:none;border-bottom:1px dashed var(--line)}
  .info-grid{grid-template-columns:1fr}
  .info-grid div{border-right:none;border-bottom:1px solid var(--line)}
  .tix-row{grid-template-columns:1fr auto}
  .tix-row .btn{grid-column:1/-1;justify-self:start}
}
@media (max-width:640px){
  .hero{padding:64px 0 32px}
  section.block{padding:56px 0}
  .nav-in .mono{display:none}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="brand" href="#">STATIC<b>BLOOM</b></a>
    <p class="mono">SAT OCT 17 &middot; PROVIDENCE RI &middot; 10PM&ndash;10AM</p>
    <a class="btn" href="#tickets" style="padding:11px 20px">Tickets</a>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap">
      <p class="mono date">ONE NIGHT &middot; TWO ROOMS &middot; SIX SELECTORS</p>
      <h1>STATIC<br><span class="out">BLOOM</span></h1>
      <div class="hero-sub">
        <p class="lede"><strong>Twelve hours. Two rooms. No headliner worship.</strong> An all-night session in a Providence warehouse — six DJs playing long, one room of light built for it, and a soundsystem tuned by people who argue about kick drums.</p>
        <div class="hero-facts">
          <b>SAT OCT 17, 2026</b> &middot; 10PM &ndash; 10AM<br>
          THE FOUNDRY, 437 ALLENS AVE, PROVIDENCE<br>
          21+ &middot; CASH BAR &middot; COAT CHECK $5<br>
          <b style="color:var(--accent)">NO PHOTOS ON THE DANCEFLOOR</b>
        </div>
      </div>
    </div>
    <div class="marquee" aria-label="Lineup">
      <p>DJ MARROW <span>&#9679;</span> SELVA <span>&#9679;</span> KESSLER <span>&#9679;</span> ANEMONE B2B FERAL <span>&#9679;</span> LOWTIDE <span>&#9679;</span> CLOSING: MARROW (ALL NIGHT LONG) <span>&#9679;</span>&nbsp;DJ MARROW <span>&#9679;</span> SELVA <span>&#9679;</span> KESSLER <span>&#9679;</span> ANEMONE B2B FERAL <span>&#9679;</span> LOWTIDE <span>&#9679;</span> CLOSING: MARROW (ALL NIGHT LONG) <span>&#9679;</span>&nbsp;</p>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <p class="sec-tag">Set times</p>
      <h2 class="sec">Two rooms, no clashes that matter</h2>
      <div class="sched" role="table" aria-label="Set times">
        <div class="sched-head"><div>TIME</div><div>ROOM A — CONCRETE</div><div>ROOM B — GLASSHOUSE</div></div>
        <div class="sched-row"><div class="time">10P</div><div class="slot"><b>Lowtide</b><span>warm-up &middot; dubby, patient</span></div><div class="slot"><b>Doors + ambient</b><span>tea, couches, decompress</span></div></div>
        <div class="sched-row"><div class="time">12A</div><div class="slot"><b>Selva</b><span>percussion-forward, 132 bpm</span></div><div class="slot"><b>Anemone b2b Feral</b><span>weird leftfield, expect arguing</span></div></div>
        <div class="sched-row"><div class="time">2A</div><div class="slot hot"><b>Kessler</b><span>peak time &middot; the reason you came</span></div><div class="slot"><b>Anemone b2b Feral</b><span>cont. — deeper now</span></div></div>
        <div class="sched-row"><div class="time">4A</div><div class="slot"><b>DJ Marrow</b><span>takes over, doesn&rsquo;t give it back</span></div><div class="slot"><b>Glasshouse winds down</b><span>last 45, lights half up</span></div></div>
        <div class="sched-row"><div class="time">6A</div><div class="slot hot"><b>Marrow (all night long)</b><span>sunrise set &middot; concrete room only</span></div><div class="slot"><b>Closed</b><span>go watch the skyline</span></div></div>
      </div>
    </div>
  </section>

  <section class="block" id="tickets" style="padding-top:0">
    <div class="wrap">
      <p class="sec-tag">Tickets</p>
      <h2 class="sec">Pay for the night you&rsquo;ll actually stay for</h2>
      <div class="tix">
        <div class="tix-row sold">
          <h3>Early bird<small>SOLD OUT IN 41 MINUTES &middot; OCT 1</small></h3>
          <span class="price">$25</span>
          <span class="btn ghost" aria-disabled="true">Gone</span>
        </div>
        <div class="tix-row">
          <h3>General admission<small>ENTRY ALL NIGHT &middot; BOTH ROOMS</small></h3>
          <span class="price">$40</span>
          <a class="btn" href="#">Get the $40 ticket</a>
        </div>
        <div class="tix-row">
          <h3>After 4AM<small>SUNRISE SET ONLY &middot; CONCRETE ROOM</small></h3>
          <span class="price">$20</span>
          <a class="btn" href="#">Get the $20 ticket</a>
        </div>
      </div>
      <p class="mono" style="margin-top:18px;font-size:13px;color:var(--muted)">NO TICKETS AT THE DOOR &middot; NAME ON LIST, ID CHECKED &middot; RESALE AT FACE VALUE ONLY VIA OUR EXCHANGE</p>
    </div>
  </section>

  <section class="block" style="padding-top:0">
    <div class="wrap">
      <p class="sec-tag">Know before you go</p>
      <h2 class="sec">House rules</h2>
      <div class="info-grid">
        <div><h3>Sound</h3><p>Four-point system in Concrete, tuned to 98 dB at the booth. Earplugs free at the bar — take them, the 6 a.m. set is worth hearing at 60.</p></div>
        <div><h3>Getting there</h3><p>RIPTA 1 &amp; 33 stop two blocks away. Rideshare pickup is on Allens Ave, not the side street — the neighbors have asked, twice.</p></div>
        <div><h3>The vibe</h3><p>No photos on the dancefloor, no guestlist flexing, no bad attitudes. Security is there to keep the room kind, not to perform.</p></div>
      </div>
    </div>
  </section>

  <section class="final">
    <div class="wrap">
      <h2>SEE YOU AT <span>10PM.</span><br>DON&rsquo;T BE LATE<br>FOR KESSLER.</h2>
      <a class="btn" href="#tickets">Get the $40 ticket</a>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap foot">
    <span>STATIC BLOOM &middot; RUN BY DANCERS, NOT PROMOTERS</span>
    <span><a href="#">EXCHANGE</a> &nbsp;&middot;&nbsp; <a href="#">ACCESS INFO</a> &nbsp;&middot;&nbsp; <a href="#">CONTACT</a></span>
    <span>&copy; 2026 STATIC BLOOM COLLECTIVE</span>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
