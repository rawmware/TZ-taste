//tz-meta {"id":"rust-blog","title":"The Misprint — print-culture zine blog","category":"Rust","file":"rust/blog.rs","tags":["rust","blog","zine","publishing"],"description":"Risograph-grain blog for fictional print zine The Misprint: misregistered headline, issue-numbered article list, newsletter CTA, colophon footer.","dnas":["risograph-grain"]}
//! Askama-style: struct BlogPage { issue: u8 } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: a print zine's blog that looks like the thing it writes about —
//!    audience: small-press nerds and design students; feeling: ink under fingernails; goal: read an essay, join the list.
//! DNA: risograph-grain (runner-up pop-art-halftone loses: shouts where misregistration whispers).
//! Distinctive choice: the headline is deliberately misregistered — teal offset against ink, like a slipped plate.
//! Dials: VARIANCE 7 / MOTION 3 / DENSITY 4.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Misprint — Notes on ink, paper, and beautiful mistakes</title>
<style>
:root{
  --bg:#f5eedd;
  --ink:#26413c;
  --accent:#117d78;
  --muted:#8d8a76;
  --line:#d8cfae;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Space Grotesk","Avenir Next","Segoe UI",sans-serif;
  font-size:17px;line-height:1.65;
  -webkit-font-smoothing:antialiased;
  background-image:radial-gradient(var(--line) 1px, transparent 1px);
  background-size:22px 22px;
}
.display{font-family:"Archivo Black","Arial Black","Helvetica Neue",sans-serif;font-weight:400}
.mono{font-family:"Space Mono","Courier New",monospace}
.wrap{max-width:1020px;margin:0 auto;padding:0 26px}
/* nav */
.nav{border-bottom:2px solid var(--ink)}
.nav-in{display:flex;justify-content:space-between;align-items:center;padding:18px 26px;max-width:1020px;margin:0 auto}
.brand{font-family:"Archivo Black","Arial Black",sans-serif;font-size:20px;color:var(--ink);text-decoration:none;letter-spacing:.02em}
.brand .mp{color:var(--accent)}
.nav-links{display:flex;gap:24px}
.nav-links a{color:var(--ink);text-decoration:none;font-size:15px;font-weight:700}
.nav-links a:hover{color:var(--accent)}
.issue-chip{font-family:"Space Mono","Courier New",monospace;font-size:12px;background:var(--ink);color:var(--bg);padding:7px 12px;border-radius:4px;letter-spacing:.08em}
/* hero */
.hero{padding:96px 0 64px;border-bottom:2px solid var(--ink)}
.misreg{font-family:"Archivo Black","Arial Black",sans-serif;font-size:clamp(52px,9vw,110px);line-height:.98;letter-spacing:-0.01em;color:var(--ink);text-shadow:5px 5px 0 var(--accent);margin-bottom:26px}
.hero p.dek{font-size:20px;max-width:32em;margin-bottom:14px}
.hero p.dek strong{color:var(--accent)}
.hero .mono{font-size:13px;color:var(--muted);letter-spacing:.06em}
/* articles */
section.block{padding:72px 0}
.sec-label{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:36px}
.art{border-top:2px solid var(--ink);padding:34px 0;display:grid;grid-template-columns:110px 1fr auto;gap:28px;align-items:start}
.art:last-of-type{border-bottom:2px solid var(--ink)}
.art .no{font-family:"Archivo Black","Arial Black",sans-serif;font-size:44px;color:transparent;-webkit-text-stroke:1.5px var(--accent);line-height:1}
.art h2{font-family:"Archivo Black","Arial Black",sans-serif;font-weight:400;font-size:clamp(22px,3vw,32px);line-height:1.15;letter-spacing:-0.005em;margin-bottom:10px}
.art h2 a{color:var(--ink);text-decoration:none}
.art h2 a:hover{color:var(--accent);text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:6px}
.art .dek{color:var(--muted);max-width:36em;margin-bottom:12px}
.art .meta{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.08em;color:var(--muted)}
.art .meta b{color:var(--accent)}
.art .arrow{font-family:"Archivo Black","Arial Black",sans-serif;font-size:30px;color:var(--accent);text-decoration:none;line-height:1}
.art .arrow:hover{transform:translateX(6px)}
.art{display:grid}
.art .arrow{transition:transform .18s ease;display:inline-block}
/* pull quote essay feature */
.essay{background:var(--ink);color:var(--bg);border-radius:12px;padding:64px;margin:72px 0 0;display:grid;grid-template-columns:1fr 1.4fr;gap:48px;align-items:center}
.essay .k{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;color:var(--accent);margin-bottom:16px;text-transform:uppercase}
.essay blockquote{font-family:"Archivo Black","Arial Black",sans-serif;font-size:clamp(24px,3.4vw,38px);line-height:1.25}
.essay blockquote em{font-style:normal;color:var(--accent)}
.essay p{opacity:.8;margin-top:18px;max-width:34em}
.essay .btn{display:inline-block;margin-top:26px;background:var(--accent);color:var(--bg);font-weight:700;text-decoration:none;padding:14px 26px;border-radius:6px}
/* newsletter */
.news{border:2px solid var(--ink);border-radius:12px;padding:56px;display:grid;grid-template-columns:1.2fr .8fr;gap:40px;align-items:center;margin-top:72px;background:rgba(255,255,255,.35)}
.news h2{font-family:"Archivo Black","Arial Black",sans-serif;font-weight:400;font-size:clamp(26px,3.6vw,40px);line-height:1.1;margin-bottom:12px}
.news p{color:var(--muted);max-width:30em}
.news form{display:flex;gap:10px;margin-top:4px}
.news input{flex:1;font-family:"Space Mono","Courier New",monospace;font-size:14px;padding:14px 16px;border:2px solid var(--ink);border-radius:6px;background:var(--bg);color:var(--ink);min-width:0}
.news button{font-family:"Space Mono","Courier New",monospace;font-weight:700;font-size:14px;background:var(--ink);color:var(--bg);border:none;border-radius:6px;padding:14px 22px;cursor:pointer;white-space:nowrap}
.news button:hover{background:var(--accent)}
.news .fine{font-family:"Space Mono","Courier New",monospace;font-size:11px;color:var(--muted);margin-top:12px}
/* footer */
footer.site{border-top:2px solid var(--ink);margin-top:72px;padding:44px 0 52px}
.foot{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:32px;margin-bottom:36px}
.foot h4{font-family:"Space Mono","Courier New",monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
.foot p,.foot a{font-size:15px;color:var(--ink)}
.foot a{display:block;text-decoration:none;padding:3px 0}
.foot a:hover{color:var(--accent)}
.colophon{border-top:1px solid var(--line);padding-top:24px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:"Space Mono","Courier New",monospace;font-size:12px;color:var(--muted)}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
@media (max-width:860px){
  .art{grid-template-columns:70px 1fr}
  .art .arrow{display:none}
  .art .no{font-size:32px}
  .essay{grid-template-columns:1fr;padding:44px 28px}
  .news{grid-template-columns:1fr;padding:40px 28px}
  .foot{grid-template-columns:1fr}
}
@media (max-width:640px){
  .hero{padding:68px 0 52px}
  section.block{padding:56px 0}
  .nav-links{display:none}
  .news form{flex-direction:column}
  .misreg{text-shadow:3px 3px 0 var(--accent)}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="brand" href="#">THE <span class="mp">MISPRINT</span></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#essays">Essays</a><a href="#newsletter">Newsletter</a><a href="#">Shop zines</a>
    </nav>
    <span class="issue-chip">ISSUE NO. 42</span>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap">
      <h1 class="misreg">BEAUTIFUL<br>MISTAKES</h1>
      <p class="dek"><strong>The Misprint</strong> is a monthly zine about ink, paper, and the accidents that make print worth touching — written by people who still argue about grain direction.</p>
      <p class="mono">PRINTED IN PROVIDENCE, RI &middot; 1,200 COPIES &middot; NEVER PERFECT ON PURPOSE</p>
    </div>
  </section>

  <section class="block" id="essays">
    <div class="wrap">
      <p class="sec-label">Latest essays</p>

      <article class="art">
        <span class="no" aria-hidden="true">42</span>
        <div>
          <h2><a href="#">The 3% misregistration we kept on purpose</a></h2>
          <p class="dek">Our teal plate slipped mid-run and 400 copies came out ghosted. Readers wrote in asking for more. A defense of the almost-right.</p>
          <p class="meta"><b>ESSAY</b> &middot; OCT 1, 2026 &middot; 8 MIN READ</p>
        </div>
        <a class="arrow" href="#" aria-label="Read essay">&rarr;</a>
      </article>

      <article class="art">
        <span class="no" aria-hidden="true">41</span>
        <div>
          <h2><a href="#">Why our zine smells like soy ink</a></h2>
          <p class="dek">We switched inks in March and the whole studio noticed before the first proof dried. What soy ink actually changes, and what it doesn&rsquo;t.</p>
          <p class="meta"><b>PROCESS</b> &middot; SEP 3, 2026 &middot; 5 MIN READ</p>
        </div>
        <a class="arrow" href="#" aria-label="Read essay">&rarr;</a>
      </article>

      <article class="art">
        <span class="no" aria-hidden="true">40</span>
        <div>
          <h2><a href="#">A field guide to paper that fights back</a></h2>
          <p class="dek">Cotton rag, kraft, and one French stock that jammed every printer we own. Tested across three risographs and a very patient Heidelberg.</p>
          <p class="meta"><b>GUIDE</b> &middot; AUG 6, 2026 &middot; 12 MIN READ</p>
        </div>
        <a class="arrow" href="#" aria-label="Read essay">&rarr;</a>
      </article>

      <article class="art">
        <span class="no" aria-hidden="true">39</span>
        <div>
          <h2><a href="#">We bound 200 copies wrong and sold them anyway</a></h2>
          <p class="dek">Saddle-stitch, meet human error. How a misbound run became the &ldquo;collector&rsquo;s edition&rdquo; nobody asked for and everybody bought.</p>
          <p class="meta"><b>CONFESSION</b> &middot; JUL 2, 2026 &middot; 6 MIN READ</p>
        </div>
        <a class="arrow" href="#" aria-label="Read essay">&rarr;</a>
      </article>

      <div class="essay">
        <div>
          <p class="k">From the current issue</p>
          <blockquote>&ldquo;A perfect print is a rumor. <em>The good ones breathe.</em>&rdquo;</blockquote>
        </div>
        <div>
          <p>Issue No. 42 is about registration — the plates that slip, the colors that land half a millimeter off, and why the machine&rsquo;s mistakes are the only signature it has. 32 pages, two inks, one very tired risograph.</p>
          <a class="btn" href="#">Read the issue preview</a>
        </div>
      </div>

      <div class="news" id="newsletter">
        <div>
          <h2>Get the Misprint monthly.</h2>
          <p>One essay, one process note, and one thing we messed up — in your inbox the first Tuesday of every month. Plus first dibs when a print run is small.</p>
        </div>
        <div>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" required>
            <button type="submit">Subscribe</button>
          </form>
          <p class="fine">4,318 SUBSCRIBERS &middot; UNSUBSCRIBE ANYTIME &middot; WE&rsquo;LL NEVER SELL YOUR ADDRESS (WE BARELY SELL OUR ZINES)</p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap">
    <div class="foot">
      <div>
        <h4>The Misprint</h4>
        <p>A monthly zine about print culture, made on a risograph that predates the staff. Providence, Rhode Island.</p>
      </div>
      <div>
        <h4>Read</h4>
        <a href="#essays">Essays</a><a href="#">Issue archive</a><a href="#">Contributors</a>
      </div>
      <div>
        <h4>Elsewhere</h4>
        <a href="#">Shop zines</a><a href="#">Wholesale</a><a href="#">hello@themisprint.press</a>
      </div>
    </div>
    <div class="colophon">
      <span>&copy; 2026 THE MISPRINT &middot; PRINTED, NOT RENDERED</span>
      <span class="mono">SET IN ARCHIVO BLACK &amp; SPACE GROTESK &middot; 2 INKS, 0 APOLOGIES</span>
    </div>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
