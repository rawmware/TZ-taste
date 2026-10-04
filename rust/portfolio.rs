//tz-meta {"id":"rust-portfolio","title":"June Calloway — editorial illustrator portfolio","category":"Rust","file":"rust/portfolio.rs","tags":["rust","portfolio","illustration"],"description":"Editorial-serif portfolio for fictional illustrator June Calloway: offset hero, project index as a book's table of contents with dotted leaders, services ledger, colophon footer.","dnas":["editorial-serif"]}
//! Askama-style: struct PortfolioPage { name: &'static str, email: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: literary-magazine portfolio for an editorial illustrator —
//!    audience: art directors at print magazines; feeling: ink-and-paper confidence; goal: commission a piece.
//! DNA: editorial-serif (runner-up museum-placard loses: too hushed for someone selling argumentative drawings).
//! Distinctive choice: the project index is set like a book's table of contents — dotted leaders, issue numbers.
//! Dials: VARIANCE 6 / MOTION 3 / DENSITY 2.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>June Calloway — Editorial Illustrator</title>
<style>
:root{
  --bg:#f5f1e8;
  --ink:#1c1a15;
  --accent:#b5461f;
  --muted:#6f6a5e;
  --line:#1c1a1526;
  --surface:#efe9da;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Newsreader",Georgia,"Times New Roman",serif;
  font-size:18px;line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
.display{font-family:"Fraunces",Georgia,"Times New Roman",serif}
.mono{font-family:"Space Mono","Courier New",monospace}
.wrap{max-width:1080px;margin:0 auto;padding:0 28px}
/* nav */
.nav{border-bottom:1px solid var(--line)}
.nav-in{display:flex;justify-content:space-between;align-items:baseline;padding:22px 28px;max-width:1080px;margin:0 auto}
.wordmark{font-family:"Fraunces",Georgia,serif;font-weight:600;font-size:22px;letter-spacing:-0.02em;text-decoration:none;color:var(--ink)}
.wordmark i{font-style:italic;color:var(--accent)}
.nav-links{display:flex;gap:30px}
.nav-links a{font-size:16px;color:var(--ink);text-decoration:none;border-bottom:1px solid transparent}
.nav-links a:hover{border-color:var(--accent);color:var(--accent)}
/* hero */
.hero{padding:104px 0 72px}
.hero-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:72px;align-items:end}
.kicker{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:26px}
h1{font-family:"Fraunces",Georgia,serif;font-weight:560;font-size:clamp(46px,6.4vw,84px);line-height:1.02;letter-spacing:-0.03em;margin-bottom:28px}
h1 em{font-style:italic;color:var(--accent)}
.hero-side{border-left:1px solid var(--line);padding-left:28px}
.hero-side p{font-size:16px;color:var(--muted);margin-bottom:18px}
.hero-side .avail{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--ink)}
.hero-side .avail b{color:var(--accent)}
.rule{border:none;border-top:1px solid var(--ink);margin:0}
/* index / contents */
section.block{padding:72px 0}
.sec-label{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.sec-title{font-family:"Fraunces",Georgia,serif;font-size:clamp(30px,3.6vw,44px);letter-spacing:-0.025em;margin-bottom:40px;font-weight:560}
.contents{list-style:none}
.contents li{display:flex;align-items:baseline;gap:14px;padding:20px 0;border-bottom:1px solid var(--line)}
.contents li:first-child{border-top:1px solid var(--ink)}
.c-no{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--accent);min-width:44px}
.c-title{font-family:"Fraunces",Georgia,serif;font-size:clamp(20px,2.6vw,28px);letter-spacing:-0.015em;line-height:1.25}
.c-title small{display:block;font-family:"Newsreader",Georgia,serif;font-size:15px;color:var(--muted);letter-spacing:0;margin-top:4px}
.c-dots{flex:1;border-bottom:2px dotted var(--muted);transform:translateY(-6px);opacity:.55;min-width:24px}
.c-year{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--muted);white-space:nowrap}
.contents a{color:inherit;text-decoration:none;display:flex;align-items:baseline;gap:14px;width:100%}
.contents a:hover .c-title{color:var(--accent)}
/* featured */
.featured{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.feat-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:center}
.feat-art{aspect-ratio:4/5;background:var(--ink);border-radius:4px;position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:28px}
.feat-art p{font-family:"Fraunces",Georgia,serif;font-style:italic;font-size:clamp(24px,3vw,34px);line-height:1.2;color:var(--bg);letter-spacing:-0.01em}
.feat-art .fig{position:absolute;top:20px;left:28px;font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.14em;color:var(--bg);opacity:.65}
.feat-copy h3{font-family:"Fraunces",Georgia,serif;font-size:30px;letter-spacing:-0.02em;margin-bottom:6px;font-weight:560}
.feat-copy .pub{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--accent);margin-bottom:20px;letter-spacing:.06em}
.feat-copy p{color:var(--muted);margin-bottom:16px;max-width:34em}
/* services */
.svc{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border-top:1px solid var(--ink)}
.svc div{padding:28px 28px 28px 0;border-right:1px solid var(--line)}
.svc div:last-child{border-right:none;padding-right:0}
.svc h3{font-family:"Fraunces",Georgia,serif;font-size:21px;margin-bottom:8px;font-weight:560}
.svc p{font-size:16px;color:var(--muted)}
.svc .price{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--ink);display:block;margin-top:12px}
/* about */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.about-grid p{margin-bottom:18px;max-width:32em}
.about-grid p:first-child::first-letter{font-family:"Fraunces",Georgia,serif;font-size:3.4em;float:left;line-height:.85;padding-right:10px;color:var(--accent);font-weight:600}
.facts{list-style:none;border-top:1px solid var(--ink)}
.facts li{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid var(--line);font-size:16px}
.facts li span:first-child{color:var(--muted)}
.facts li span:last-child{text-align:right}
/* contact */
.contact{background:var(--ink);color:var(--bg);border-radius:6px;padding:72px 64px;display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center}
.contact h2{font-family:"Fraunces",Georgia,serif;font-size:clamp(30px,4vw,48px);letter-spacing:-0.025em;line-height:1.08;font-weight:560;margin-bottom:16px}
.contact h2 em{font-style:italic;color:var(--accent)}
.contact p{opacity:.72;max-width:30em;margin-bottom:28px}
.btn{display:inline-block;background:var(--bg);color:var(--ink);font-family:"Newsreader",Georgia,serif;font-weight:600;font-size:17px;text-decoration:none;border-radius:8px;padding:14px 28px;transition:transform .18s ease}
.btn:hover{transform:translateY(-2px)}
.contact aside{font-family:"Space Mono","Courier New",monospace;font-size:13px;line-height:2;opacity:.85}
.contact aside a{color:var(--bg)}
/* colophon */
footer.site{padding:48px 0 56px}
.colophon{display:grid;grid-template-columns:1fr 1fr;gap:32px;border-top:1px solid var(--ink);padding-top:28px;font-size:14px;color:var(--muted)}
.colophon .mono{font-size:12px}
/* motion */
@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.rise{animation:rise .7s cubic-bezier(0.22,1,0.36,1) both}
.rise.d1{animation-delay:.1s}.rise.d2{animation-delay:.2s}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
@media (max-width:860px){
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-side{border-left:none;padding-left:0;border-top:1px solid var(--line);padding-top:24px}
  .feat-grid{grid-template-columns:1fr}
  .feat-art{aspect-ratio:16/10}
  .svc{grid-template-columns:1fr}
  .svc div{border-right:none;border-bottom:1px solid var(--line);padding:24px 0}
  .about-grid{grid-template-columns:1fr}
  .contact{grid-template-columns:1fr;padding:48px 28px}
  .colophon{grid-template-columns:1fr}
  .c-dots{display:none}
}
@media (max-width:640px){
  .hero{padding:72px 0 56px}
  section.block{padding:56px 0}
  .nav-links{gap:18px}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="wordmark" href="#">June <i>Calloway</i></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#index">Index</a><a href="#about">About</a><a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="kicker rise">Editorial illustrator — Providence, RI</p>
        <h1 class="rise d1">Drawings that <em>argue back.</em></h1>
        <p class="rise d2" style="max-width:32em;color:var(--muted)">June Calloway draws for magazines that still print on paper: covers, features, and the occasional full-page opinion piece with teeth. Ink first, pixels only when the deadline demands it.</p>
      </div>
      <aside class="hero-side rise d2">
        <p>Twelve years drawing for print. Zero stock illustrations. Every commission starts as pencil on newsprint.</p>
        <p class="avail">Booking: <b>2 slots left</b> for winter issues<br>Replies within 48 hours, sketches within a week.</p>
      </aside>
    </div>
  </section>

  <hr class="rule">

  <section class="block" id="index">
    <div class="wrap">
      <p class="sec-label">Selected work, 2019 – 2026</p>
      <h2 class="sec-title display">Contents</h2>
      <ol class="contents">
        <li><a href="#contact"><span class="c-no">01</span><span class="c-title">The Landlord&rsquo;s Ledger<small>Cover, Halcyon Magazine — a tenement drawn as an account book</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2026</span></a></li>
        <li><a href="#contact"><span class="c-no">02</span><span class="c-title">What the River Kept<small>Feature spread, Field &amp; Furrow Quarterly — six panels, one flood</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2025</span></a></li>
        <li><a href="#contact"><span class="c-no">03</span><span class="c-title">The Quiet Fire of Small Kitchens<small>Cover, Paper Boat — woodcut-style, printed in two inks</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2025</span></a></li>
        <li><a href="#contact"><span class="c-no">04</span><span class="c-title">An Atlas of Closed Theaters<small>Endpapers, Northlight Books — 43 marquees from memory</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2024</span></a></li>
        <li><a href="#contact"><span class="c-no">05</span><span class="c-title">The Night Shift<small>Opinion page, The Ledger Review — nurses, drawn at 3 a.m.</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2023</span></a></li>
        <li><a href="#contact"><span class="c-no">06</span><span class="c-title">Seed Catalog for a Drowned Town<small>Portfolio, Halcyon Magazine — what gets saved first</small></span><span class="c-dots" aria-hidden="true"></span><span class="c-year">2022</span></a></li>
      </ol>
    </div>
  </section>

  <section class="block featured">
    <div class="wrap feat-grid">
      <div class="feat-art" role="img" aria-label="Illustration placeholder: cover art for The Landlord's Ledger">
        <span class="fig">FIG. 01 — COVER STUDY</span>
        <p>&ldquo;A tenement drawn as an account book — every window a line item.&rdquo;</p>
      </div>
      <div class="feat-copy">
        <h3>The Landlord&rsquo;s Ledger</h3>
        <p class="pub">HALCYON MAGAZINE &middot; MARCH 2026 &middot; COVER</p>
        <p>The brief was one line: <i>make rent feel like arithmetic.</i> June drew the building as a ledger — forty windows, forty line items, one red figure at the bottom that wouldn&rsquo;t balance.</p>
        <p>It became the magazine&rsquo;s best-selling issue in four years. The original sold at auction; the prints fund a tenant-rights clinic in Providence.</p>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <p class="sec-label">Commissions</p>
      <h2 class="sec-title display">What you can ask for</h2>
      <div class="svc">
        <div>
          <h3>Editorial</h3>
          <p>Features, opinion pages, spot illustrations. Sketches in a week, finals in two.</p>
          <span class="price">from $900 / piece</span>
        </div>
        <div>
          <h3>Covers</h3>
          <p>One image that has to sell the whole issue. Two rounds of sketches included.</p>
          <span class="price">from $2,400 / cover</span>
        </div>
        <div>
          <h3>Murals &amp; walls</h3>
          <p>Bookshops, bars, and one very patient bakery. Drawn on site, sealed for weather.</p>
          <span class="price">quoted per wall</span>
        </div>
      </div>
    </div>
  </section>

  <section class="block" id="about" style="padding-top:0">
    <div class="wrap">
      <p class="sec-label">About</p>
      <h2 class="sec-title display">Ink, paper, stubbornness</h2>
      <div class="about-grid">
        <div>
          <p>June Calloway learned to draw in the margins of library books and never really stopped. After a printmaking degree and five years as a newspaper staff artist, she went independent in 2019 and has drawn for print ever since — covers, features, and the occasional courtroom sketch when the subject matter deserves it.</p>
          <p>She works in dip pen and brush on newsprint, scans at stupidly high resolution, and colors only when the story asks for it. She does not do &ldquo;friendly corporate blob people,&rdquo; and she will tell you so kindly, once.</p>
        </div>
        <ul class="facts">
          <li><span>Based</span><span>Providence, Rhode Island</span></li>
          <li><span>Tools</span><span>Dip pen, brush, newsprint</span></li>
          <li><span>Turnaround</span><span>Sketches in 7 days</span></li>
          <li><span>Rights</span><span>First print + digital, negotiable</span></li>
          <li><span>Won&rsquo;t draw</span><span>AI-generated briefs, crypto</span></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="block" id="contact" style="padding-top:0">
    <div class="wrap">
      <div class="contact">
        <div>
          <h2>Ask about the <em>winter issue.</em></h2>
          <p>Two commission slots left for winter. Send the story, the deadline, and the dimensions — you&rsquo;ll get sketches within a week and an honest no if it&rsquo;s not a fit.</p>
          <a class="btn" href="mailto:june@junecalloway.com">Email june@junecalloway.com</a>
        </div>
        <aside>
          STUDIO HOURS<br>TUE–FRI, 9–5 EASTERN<br><br>PREFERRED BRIEFS<br>ONE PARAGRAPH + DEADLINE<br><br>ELSEWHERE<br><a href="#">ARE.NA</a> &middot; <a href="#">PRINT ARCHIVE</a>
        </aside>
      </div>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap">
    <div class="colophon">
      <p>Set in Fraunces &amp; Newsreader. Drawn with a dip pen. This site is the portfolio; the work lives on paper.</p>
      <p class="mono">&copy; 2026 JUNE CALLOWAY &middot; PROVIDENCE, RI &middot; NO AI-GENERATED IMAGERY WAS HARMED (OR USED)</p>
    </div>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
