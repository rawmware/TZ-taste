//tz-meta {"id":"go-saas","title":"Scaffold — daily site logs (blueprint-tech)","category":"Go","file":"go/saas.go","tags":["go","saas","landing-page"],"description":"Landing page for Scaffold, a fictional daily-log app for construction superintendents, in the blueprint-tech DNA. go run go/saas.go > out.html","dnas":["blueprint-tech"]}
package main

// Design read: technical B2B SaaS that reads like a drawing set — blueprint
// ground, spec-sheet rows, one accent used like a highlighter.
// DNA: blueprint-tech (bg #17407f, ink #f2f6fc, accent #ffcf3f). Runner-up
// arctic-field loses: too clinical; the brief needs jobsite grit, not lab calm.
// One distinctive choice: features filed as a drawing sheet index (S-101…)
// with hairline leaders — the product reads as construction documentation.
// Dials: VARIANCE 5 / MOTION 2 / DENSITY 6.

import "fmt"

const (
	bg     = "#17407f"
	ink    = "#f2f6fc"
	accent = "#ffcf3f"
	muted  = "#8fb3e8"
	line   = "#ffffff40"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scaffold — Daily site logs for superintendents</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Space Grotesk',sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1120px;margin:0 auto;padding:0 32px}
  .mono{font-family:'IBM Plex Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:center;padding:24px 0;border-bottom:1px solid ` + line + `}
  .wordmark{font-weight:700;font-size:22px;letter-spacing:-0.02em}
  .wordmark span{color:` + accent + `}
  nav{display:flex;gap:28px;align-items:center;font-family:'IBM Plex Mono',monospace;font-size:13px}
  nav a{text-decoration:none;color:` + muted + `}
  nav a:hover{color:` + ink + `}
  .btn{display:inline-block;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:500;font-size:15px}
  .btn.solid{background:` + accent + `;color:` + bg + `}
  .btn.ghost{border:1px solid ` + line + `;color:` + ink + `}
  .btn:hover{transform:translateY(-2px)}
  .hero{display:grid;grid-template-columns:7fr 5fr;gap:72px;padding:104px 0 88px;align-items:center}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.16em;color:` + accent + `;margin-bottom:24px}
  h1{font-size:clamp(42px,5.6vw,76px);line-height:1.04;letter-spacing:-0.03em;font-weight:700;margin-bottom:24px}
  .lede{font-size:19px;color:` + muted + `;max-width:32em;margin-bottom:36px}
  .lede strong{color:` + ink + `;font-weight:500}
  .cta-row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
  .logcard{border:1px solid ` + line + `;border-radius:8px;background:` + bg + `;padding:0;overflow:hidden;box-shadow:12px 12px 0 ` + line + `}
  .logcard .lc-head{background:` + accent + `;color:` + bg + `;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.1em;padding:12px 20px;display:flex;justify-content:space-between}
  .logcard .lc-body{padding:24px 24px 28px;font-family:'IBM Plex Mono',monospace;font-size:13.5px;line-height:2}
  .logcard .lc-body .k{color:` + muted + `}
  .logcard .lc-body .hl{color:` + accent + `}
  section{padding:88px 0;border-top:1px solid ` + line + `}
  h2{font-size:clamp(30px,3.6vw,46px);letter-spacing:-0.025em;line-height:1.08;font-weight:700;margin-bottom:14px}
  .sec-sub{color:` + muted + `;max-width:36em;margin-bottom:52px}
  .sheet{border-top:1px solid ` + line + `}
  .row{display:grid;grid-template-columns:110px 220px 1fr;gap:24px;padding:26px 0;border-bottom:1px solid ` + line + `;align-items:baseline}
  .row .no{font-family:'IBM Plex Mono',monospace;color:` + accent + `;font-size:14px}
  .row .t{font-weight:700;font-size:20px;letter-spacing:-0.01em}
  .row .d{color:` + muted + `;max-width:38em}
  blockquote{font-size:clamp(24px,3vw,36px);line-height:1.3;letter-spacing:-0.02em;font-weight:500;max-width:22em}
  blockquote footer{font-family:'IBM Plex Mono',monospace;font-size:13px;color:` + muted + `;margin-top:20px}
  .price-panel{border:1px solid ` + accent + `;border-radius:8px;padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
  .price-panel .p{font-size:clamp(48px,6vw,84px);font-weight:700;letter-spacing:-0.04em;color:` + accent + `}
  .price-panel .p small{font-size:18px;font-weight:400;letter-spacing:0;color:` + muted + `}
  .price-panel p{color:` + muted + `}
  .price-panel p strong{color:` + ink + `;font-weight:500}
  footer.bot{padding:48px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:` + muted + `}
  @media (max-width:860px){
    .hero{grid-template-columns:1fr;gap:56px;padding:72px 0 64px}
    .row{grid-template-columns:1fr;gap:8px}
    .price-panel{grid-template-columns:1fr;padding:32px}
    section{padding:64px 0}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">SCAFFOLD<span>.</span></div>
    <nav><a href="#index">Sheet index</a><a href="#pricing">Pricing</a><a class="btn solid" href="#pricing">Start a 30-day trial</a></nav>
  </header>

  <div class="hero">
    <div>
      <p class="eyebrow">DAILY SITE LOGS FOR SUPERINTENDENTS</p>
      <h1>The jobsite, written down before lunch.</h1>
      <p class="lede">Scaffold turns a foreman's phone into the project's memory: <strong>photos, crew counts, delays, and weather</strong> — one log a day, readable by anyone in the office, subpoena-proof at closeout.</p>
      <div class="cta-row">
        <a class="btn solid" href="#pricing">Start a 30-day trial</a>
        <a class="btn ghost" href="#index">See a sample log</a>
      </div>
    </div>
    <aside class="logcard" aria-label="Sample daily log">
      <div class="lc-head"><span>LOG — 2026-10-02</span><span>JOB 24-118</span></div>
      <div class="lc-body">
        <div><span class="k">WEATHER&nbsp;&nbsp;</span>54°F, overcast, wind 12mph</div>
        <div><span class="k">CREW&nbsp;&nbsp;&nbsp;&nbsp;</span>14 on site (8 carpentry, 6 electrical)</div>
        <div><span class="k">PHOTOS&nbsp;&nbsp;&nbsp;</span>22 pinned to Level 2 plan</div>
        <div><span class="hl">DELAY&nbsp;&nbsp;&nbsp;&nbsp;</span>Steel delivery slipped to Tue — GC notified 09:41</div>
        <div><span class="k">SIGNED&nbsp;&nbsp;&nbsp;</span>D. Whitaker, 16:52</div>
      </div>
    </aside>
  </div>

  <section id="index">
    <h2>Everything, filed like a drawing set.</h2>
    <p class="sec-sub">No feeds, no threads, no "quick syncs." Every feature is a sheet in the project's record — numbered, dated, findable in ten seconds, two years later.</p>
    <div class="sheet">
      <div class="row"><div class="no">S-101</div><div class="t">Daily log</div><div class="d">Crew, hours, and what actually happened — one page per day, signed by the super before they leave site.</div></div>
      <div class="row"><div class="no">S-102</div><div class="t">Photo pins</div><div class="d">Every photo pinned to a plan location with a timestamp. Progress photos become evidence, not camera rolls.</div></div>
      <div class="row"><div class="no">S-103</div><div class="t">Delay ledger</div><div class="d">Weather, late subs, missing material — logged when it happens, not reconstructed at closeout. Claims write themselves.</div></div>
      <div class="row"><div class="no">S-104</div><div class="t">Weather stamp</div><div class="d">Site conditions pulled automatically every morning. Nobody argues with the sky when it's in the record.</div></div>
    </div>
  </section>

  <section>
    <blockquote>
      "Our closeout package used to take three weeks of archaeology. Now it's a search box."
      <footer>— DANA WHITAKER, SUPERINTENDENT, WHITAKER &amp; SONS (12 PROJECTS ON SCAFFOLD)</footer>
    </blockquote>
  </section>

  <section id="pricing">
    <div class="price-panel">
      <div class="p">$19<small> / project / month</small></div>
      <p><strong>One price.</strong> Unlimited people, unlimited photos, every sheet included. Run three jobs and that's $57 a month to never reconstruct a Tuesday again. Cancel when the punch list is done.</p>
    </div>
  </section>

  <footer class="bot">
    <div>SCAFFOLD — daily logs for people who build things.</div>
    <div>Demo page. Scaffold is a fictional company, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
