//tz-meta {"id":"rust-restaurant","title":"Bar Vespero — aperitivo bar site","category":"Rust","file":"rust/restaurant.rs","tags":["rust","restaurant","bar"],"description":"Aperitivo-italian site for fictional Bar Vespero: offset golden-hour hero, drinks ledger menu with dotted leaders, back-room hire CTA, visit block.","dnas":["aperitivo-italian"]}
//! Askama-style: struct RestaurantPage { name: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: golden-hour site for a Milanese aperitivo bar —
//!    audience: locals deciding where Friday starts; feeling: warm, unhurried, a little bitter; goal: reserve a table.
//! DNA: aperitivo-italian (runner-up surf-shack loses: beachy where this needs Campari-red gravity).
//! Distinctive choice: the menu is a drinks ledger — dotted leaders, right-aligned prices, bartender's footnotes.
//! Dials: VARIANCE 6 / MOTION 4 / DENSITY 4.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bar Vespero — Aperitivo in Portland, Maine</title>
<style>
:root{
  --bg:#f7efdc;
  --ink:#2b1f14;
  --accent:#c93a2e;
  --muted:#a08872;
  --line:#e3d3b8;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"DM Sans","Avenir Next","Segoe UI",sans-serif;
  font-size:17px;line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
.display{font-family:"Alfa Slab One",Georgia,"Times New Roman",serif;font-weight:400}
.mono{font-family:"Space Mono","Courier New",monospace}
.wrap{max-width:1060px;margin:0 auto;padding:0 26px}
/* nav */
.nav{border-bottom:1px solid var(--line)}
.nav-in{display:flex;justify-content:space-between;align-items:center;padding:20px 26px;max-width:1060px;margin:0 auto}
.brand{font-family:"Alfa Slab One",Georgia,serif;font-size:22px;color:var(--ink);text-decoration:none}
.brand b{color:var(--accent);font-weight:400}
.nav-links{display:flex;gap:26px}
.nav-links a{color:var(--ink);text-decoration:none;font-size:15px;font-weight:500}
.nav-links a:hover{color:var(--accent)}
.hours-chip{font-family:"Space Mono","Courier New",monospace;font-size:12px;border:1px solid var(--ink);border-radius:6px;padding:7px 12px;letter-spacing:.06em}
/* hero */
.hero{padding:96px 0 64px;position:relative;overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:56px;align-items:end}
.kicker{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:22px}
h1{font-family:"Alfa Slab One",Georgia,serif;font-weight:400;font-size:clamp(44px,6.4vw,80px);line-height:1.04;letter-spacing:.005em;margin-bottom:24px}
h1 .bitter{color:var(--accent)}
.lede{font-size:19px;max-width:30em;margin-bottom:34px}
.btn-row{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;font-weight:700;font-size:16px;text-decoration:none;border-radius:8px;padding:14px 26px;transition:transform .18s ease}
.btn-solid{background:var(--accent);color:var(--bg)}
.btn-solid:hover{transform:translateY(-2px)}
.btn-line{border:1px solid var(--ink);color:var(--ink)}
.btn-line:hover{background:var(--ink);color:var(--bg)}
.hero-side{border:1px solid var(--line);border-radius:12px;padding:26px;background:rgba(255,255,255,.28)}
.hero-side h2{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.tonight{display:flex;justify-content:space-between;padding:9px 0;border-top:1px solid var(--line);font-size:15px}
.tonight:first-of-type{border-top:none}
.tonight .t{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--accent)}
.tag-rotate{position:absolute;top:44px;right:-38px;transform:rotate(35deg);background:var(--ink);color:var(--bg);font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.22em;padding:10px 56px;text-transform:uppercase}
/* strip */
.strip{background:var(--ink);color:var(--bg);padding:18px 0;overflow:hidden;white-space:nowrap}
.strip p{font-family:"Space Mono","Courier New",monospace;font-size:13px;letter-spacing:.3em;text-transform:uppercase;display:inline-block;animation:slide 30s linear infinite}
.strip b{color:var(--accent);font-weight:400}
@keyframes slide{to{transform:translateX(-50%)}}
/* menu */
section.block{padding:80px 0}
.sec-head{margin-bottom:44px}
.sec-head .kicker{margin-bottom:12px}
.sec-head h2{font-family:"Alfa Slab One",Georgia,serif;font-weight:400;font-size:clamp(30px,4vw,46px);margin-bottom:10px}
.sec-head p{color:var(--muted);max-width:34em}
.menu-cols{display:grid;grid-template-columns:1fr 1fr;gap:0 64px}
.menu-cat{margin-bottom:48px}
.menu-cat h3{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:6px;border-bottom:2px solid var(--ink);padding-bottom:10px}
.dish{display:flex;align-items:baseline;gap:12px;padding:13px 0;border-bottom:1px solid var(--line)}
.dish .nm{font-weight:700;font-size:17px}
.dish .nm small{display:block;font-weight:400;font-size:14px;color:var(--muted)}
.dish .dots{flex:1;border-bottom:2px dotted var(--muted);opacity:.5;transform:translateY(-4px);min-width:20px}
.dish .pr{font-family:"Space Mono","Courier New",monospace;font-size:15px;font-weight:700;white-space:nowrap}
.footnote{font-size:14px;color:var(--muted);margin-top:20px;font-style:italic;max-width:38em}
/* back room */
.backroom{background:var(--accent);color:var(--bg);border-radius:16px;padding:64px;display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center}
.backroom h2{font-family:"Alfa Slab One",Georgia,serif;font-weight:400;font-size:clamp(28px,3.8vw,44px);line-height:1.1;margin-bottom:14px}
.backroom p{opacity:.9;max-width:28em;margin-bottom:26px}
.backroom .btn-solid{background:var(--bg);color:var(--accent)}
.backroom ul{list-style:none;font-family:"Space Mono","Courier New",monospace;font-size:14px;line-height:2.1}
.backroom ul li{border-bottom:1px solid rgba(247,239,220,.3);padding:6px 0}
/* visit */
.visit-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.visit-grid h3{font-family:"Alfa Slab One",Georgia,serif;font-weight:400;font-size:24px;margin-bottom:14px}
.visit-grid p{margin-bottom:10px;max-width:26em}
.visit-grid .mono{font-size:14px;color:var(--muted)}
.big-addr{font-family:"Alfa Slab One",Georgia,serif;font-size:clamp(22px,3vw,32px);line-height:1.3;margin-bottom:8px}
/* footer */
footer.site{border-top:1px solid var(--line);margin-top:80px;padding:44px 0 52px}
.foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:baseline}
.foot .brand{font-size:20px}
.foot nav{display:flex;gap:22px}
.foot nav a{color:var(--ink);text-decoration:none;font-size:15px}
.foot nav a:hover{color:var(--accent)}
.foot .mono{font-size:12px;color:var(--muted);letter-spacing:.08em}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
  .strip p{padding-left:0;white-space:normal}
}
@media (max-width:860px){
  .hero-grid{grid-template-columns:1fr}
  .menu-cols{grid-template-columns:1fr}
  .backroom{grid-template-columns:1fr;padding:44px 28px}
  .visit-grid{grid-template-columns:1fr;gap:40px}
  .tag-rotate{display:none}
}
@media (max-width:640px){
  .hero{padding:68px 0 52px}
  section.block{padding:60px 0}
  .nav-links{display:none}
  .btn-row .btn{flex:1;text-align:center}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="brand" href="#">Bar <b>Vespero</b></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#menu">Menu</a><a href="#backroom">Back room</a><a href="#visit">Visit</a>
    </nav>
    <span class="hours-chip">OPEN TODAY 5PM – 1AM</span>
  </div>
</header>

<main>
  <section class="hero">
    <div class="tag-rotate" aria-hidden="true">Aperitivo 5–7 daily</div>
    <div class="wrap hero-grid">
      <div>
        <p class="kicker">A Milanese aperitivo bar — Portland, Maine</p>
        <h1>The bitter hour,<br><span class="bitter">done properly.</span></h1>
        <p class="lede">Bar Vespero pours Campari classics the slow way — measured, stirred, never rushed — with small plates from the kitchen until late. The room glows at 6pm. You should be in it.</p>
        <div class="btn-row">
          <a class="btn btn-solid" href="#visit">Reserve a table for Friday</a>
          <a class="btn btn-line" href="#menu">Read the drinks ledger</a>
        </div>
      </div>
      <aside class="hero-side" aria-label="Tonight at Vespero">
        <h2>Tonight</h2>
        <div class="tonight"><span>Aperitivo hour</span><span class="t">5 – 7 PM</span></div>
        <div class="tonight"><span>Vinyl: Bossa nova, side A</span><span class="t">8 PM</span></div>
        <div class="tonight"><span>Late menu — fried olives return</span><span class="t">10 PM</span></div>
        <div class="tonight"><span>Last pour</span><span class="t">12:30 AM</span></div>
      </aside>
    </div>
  </section>

  <div class="strip" aria-hidden="true"><p>Negroni <b>&middot;</b> Americano <b>&middot;</b> Spritz <b>&middot;</b> Milano&ndash;Torino <b>&middot;</b> Garibaldi <b>&middot;</b> Cynar sour <b>&middot;</b>&nbsp;Negroni <b>&middot;</b> Americano <b>&middot;</b> Spritz <b>&middot;</b> Milano&ndash;Torino <b>&middot;</b> Garibaldi <b>&middot;</b> Cynar sour <b>&middot;</b>&nbsp;</p></div>

  <section class="block" id="menu">
    <div class="wrap">
      <div class="sec-head">
        <p class="kicker">The drinks ledger</p>
        <h2>Poured, not performed</h2>
        <p>Every classic is built to the old ratios. If you want it different, say so — the bartender would rather know than guess.</p>
      </div>
      <div class="menu-cols">
        <div class="menu-cat">
          <h3>Classics</h3>
          <div class="dish"><div class="nm">Negroni<small>gin, campari, cocchi torino — stirred 30 seconds</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$14</span></div>
          <div class="dish"><div class="nm">Americano<small>the low-proof original, soda over big ice</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$12</span></div>
          <div class="dish"><div class="nm">Milano&ndash;Torino<small>campari &amp; sweet vermouth, orange coin</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$12</span></div>
          <div class="dish"><div class="nm">Garibaldi<small>campari, fresh orange — fluffed, never flat</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$11</span></div>
          <div class="dish"><div class="nm">Cynar Sour<small>cynar, lemon, egg white if you ask nice</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$13</span></div>
        </div>
        <div class="menu-cat">
          <h3>Spritzes &amp; low</h3>
          <div class="dish"><div class="nm">Venetian Spritz<small>select aperitivo, prosecco, olive</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$11</span></div>
          <div class="dish"><div class="nm">Hugo<small>elderflower, mint, prosecco, soda</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$12</span></div>
          <div class="dish"><div class="nm">Campari &amp; soda<small>the 2:1 your grandfather ordered</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$9</span></div>
          <div class="dish"><div class="nm">Chinotto Fizz<small>zero proof — chinotto, lemon, rosemary</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$8</span></div>
        </div>
        <div class="menu-cat">
          <h3>Small plates</h3>
          <div class="dish"><div class="nm">Fried olives<small>stuffed with fennel sausage</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$9</span></div>
          <div class="dish"><div class="nm">Burrata &amp; bitter greens<small>grilled bread, anchovy butter</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$14</span></div>
          <div class="dish"><div class="nm">Tonnarelli cacio e pepe<small>after 9pm only, worth the wait</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$16</span></div>
        </div>
        <div class="menu-cat">
          <h3>After dinner</h3>
          <div class="dish"><div class="nm">Amaro flight<small>three pours, bartender&rsquo;s choice</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$16</span></div>
          <div class="dish"><div class="nm">Espresso corretto<small>grappa on the side, obviously</small></div><span class="dots" aria-hidden="true"></span><span class="pr">$7</span></div>
        </div>
      </div>
      <p class="footnote">* The tonnarelli sells out most Fridays by 10:30. This is not marketing; it is a small pan.</p>
    </div>
  </section>

  <section class="block" id="backroom" style="padding-top:0">
    <div class="wrap">
      <div class="backroom">
        <div>
          <h2>The back room holds fourteen.</h2>
          <p>Birthdays, book clubs, engagements you haven&rsquo;t announced yet. Private bartender, set menu or open tab, and the vinyl is yours after 10.</p>
          <a class="btn btn-solid" href="mailto:events@barvespero.com">Book the back room</a>
        </div>
        <ul>
          <li>SEATS 14 &middot; STANDING 22</li>
          <li>MINIMUM $600 FRI–SAT</li>
          <li>CAKE WELCOME, CONFETTI NOT</li>
          <li>BOOK 3 WEEKS OUT</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="block" id="visit" style="padding-top:0">
    <div class="wrap visit-grid">
      <div>
        <h3>Find us</h3>
        <p class="big-addr">214 Congress Street<br>Portland, Maine</p>
        <p class="mono">TUE–THU 5PM–12AM &middot; FRI–SAT 5PM–1AM &middot; SUN 4PM–10PM &middot; MON CLOSED (THE BAR RESTS)</p>
      </div>
      <div>
        <h3>Good to know</h3>
        <p>Walk-ins welcome at the bar; tables of 4+ should reserve. Dogs allowed on the patio, judged silently inside. The playlist is vinyl only — requests taken, not always granted.</p>
        <p><a href="tel:+12075550143" style="color:var(--accent);font-weight:700">(207) 555-0143</a> &middot; <a href="mailto:ciao@barvespero.com" style="color:var(--accent);font-weight:700">ciao@barvespero.com</a></p>
      </div>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap foot">
    <a class="brand" href="#">Bar <b>Vespero</b></a>
    <nav aria-label="Footer"><a href="#menu">Menu</a><a href="#backroom">Back room</a><a href="#visit">Visit</a></nav>
    <p class="mono">&copy; 2026 BAR VESPERO &middot; DRINK BITTER, TIP WELL</p>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
