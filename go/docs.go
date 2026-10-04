//tz-meta {"id":"go-docs","title":"Letterbox API docs (docs-solar)","category":"Go","file":"go/docs.go","tags":["go","docs","api"],"description":"Documentation page for Letterbox, a fictional transactional-email API, in the docs-solar DNA. go run go/docs.go > out.html","dnas":["docs-solar"]}
package main

// Design read: a well-kept manuscript — solarized cream, serif voice, code in
// a quiet inset, marginalia whispering the shortcuts in the margin.
// DNA: docs-solar (bg #fdf6e3, ink #3d3a2e, accent #cb4b16). Runner-up
// laboratory-clean loses: accurate but soulless; docs get read at midnight
// and should feel like lamplight.
// One distinctive choice: a marginalia column — hand-set italic serif notes
// in the margin ("you only need two calls"), collapsing below the text on mobile.
// Dials: VARIANCE 4 / MOTION 1 / DENSITY 7.

import "fmt"

const (
	bg      = "#fdf6e3"
	ink     = "#3d3a2e"
	accent  = "#cb4b16"
	muted   = "#8a8672"
	line    = "#3d3a2e1f"
	surface = "#f7eeda"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Letterbox — API documentation</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Source Serif 4',Georgia,serif;font-size:18px;line-height:1.7;-webkit-font-smoothing:antialiased}
  a{color:` + accent + `}
  .wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  .mono{font-family:'IBM Plex Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:24px 0;border-bottom:1px solid ` + line + `}
  .wordmark{font-weight:600;font-size:22px;letter-spacing:-0.01em}
  .wordmark span{color:` + accent + `}
  .topright{font-family:'IBM Plex Mono',monospace;font-size:13px;color:` + muted + `}
  .layout{display:grid;grid-template-columns:240px 1fr;gap:64px;padding:56px 0 88px;align-items:start}
  aside.nav{position:sticky;top:32px;font-size:15px}
  aside.nav h4{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.14em;color:` + muted + `;margin-bottom:14px;font-weight:500}
  aside.nav a{display:block;text-decoration:none;color:` + ink + `;padding:7px 0;border-bottom:1px solid ` + line + `}
  aside.nav a:hover{color:` + accent + `}
  aside.nav a.cur{color:` + accent + `}
  h1{font-size:clamp(38px,4.6vw,60px);line-height:1.08;letter-spacing:-0.02em;font-weight:600;margin-bottom:20px}
  .lede{font-size:20px;color:` + ink + `;max-width:34em;margin-bottom:56px}
  h2{font-size:30px;letter-spacing:-0.015em;font-weight:600;margin:64px 0 16px;padding-top:32px;border-top:1px solid ` + line + `}
  h2:first-of-type{margin-top:0;padding-top:0;border-top:none}
  p{margin-bottom:1.2em;max-width:38em}
  .with-margin{display:grid;grid-template-columns:1fr 220px;gap:32px;align-items:start}
  .margin-note{font-style:italic;font-size:15.5px;color:` + muted + `;border-left:2px solid ` + accent + `;padding:4px 0 4px 16px;margin-top:6px}
  .margin-note strong{color:` + accent + `;font-style:normal}
  pre{background:` + surface + `;border:1px solid ` + line + `;border-radius:6px;padding:22px 24px;font-family:'IBM Plex Mono',monospace;
    font-size:13.5px;line-height:1.75;overflow-x:auto;margin:20px 0 28px;max-width:44em}
  pre .c{color:` + muted + `}
  pre .k{color:` + accent + `}
  code.inline{font-family:'IBM Plex Mono',monospace;font-size:0.85em;background:` + surface + `;border:1px solid ` + line + `;border-radius:4px;padding:1px 7px}
  table{width:100%;border-collapse:collapse;margin:20px 0 28px;max-width:44em;font-size:16px}
  th{font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.1em;text-align:left;color:` + muted + `;font-weight:500;padding:0 16px 10px 0;border-bottom:1px solid ` + line + `}
  td{padding:12px 16px 12px 0;border-bottom:1px solid ` + line + `;vertical-align:top}
  td.code{font-family:'IBM Plex Mono',monospace;font-size:14px;color:` + accent + `;white-space:nowrap}
  .callout{border:1px solid ` + accent + `;border-radius:6px;padding:20px 24px;margin:24px 0 28px;max-width:44em;font-size:16.5px}
  .callout strong{color:` + accent + `}
  footer.bot{border-top:1px solid ` + line + `;padding:36px 0 60px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:` + muted + `;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
  @media (max-width:900px){
    .layout{grid-template-columns:1fr;gap:40px}
    aside.nav{position:static}
    .with-margin{grid-template-columns:1fr}
    .margin-note{border-left:none;border-top:2px solid ` + accent + `;padding:12px 0 0}
  }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">letterbox<span>.</span></div>
    <div class="topright">API REFERENCE · v3 · STATUS: ALL SYSTEMS SENDING</div>
  </header>

  <div class="layout">
    <aside class="nav">
      <h4>CONTENTS</h4>
      <a class="cur" href="#quickstart">Quickstart</a>
      <a href="#auth">Authentication</a>
      <a href="#send">Sending email</a>
      <a href="#webhooks">Webhooks</a>
      <a href="#errors">Errors</a>
    </aside>

    <main>
      <h1>The email API for messages that matter.</h1>
      <p class="lede">Letterbox sends the emails your app can't afford to get wrong: receipts, password resets, and the "your order shipped" kind. Two calls to send your first email; this page is the whole story.</p>

      <h2 id="quickstart">Quickstart</h2>
      <div class="with-margin">
        <div>
          <p>Grab an API key from the dashboard, then send your first message. Everything is HTTPS and JSON; every response includes a <code class="inline">message_id</code> you can trace forever.</p>
<pre><span class="c"># send your first email</span>
curl https://api.letterbox.example/v1/send \
  -u <span class="k">lb_live_9f2c…:</span> \
  -d <span class="k">from</span>=receipts@yourshop.example \
  -d <span class="k">to</span>=maya@example.com \
  -d <span class="k">subject</span>="Your order shipped" \
  -d <span class="k">text</span>="It's on the truck. See you Thursday."</pre>
          <p>You'll get back a <code class="inline">202 Accepted</code> with a <code class="inline">message_id</code>. Delivery events — sent, delivered, opened, bounced — arrive at your webhook (see below).</p>
        </div>
        <aside class="margin-note"><strong>You only need two calls</strong> to send your first email: one to create the key, one to send. The rest of this page is for later.</aside>
      </div>

      <h2 id="auth">Authentication</h2>
      <div class="with-margin">
        <div>
          <p>Use HTTP Basic auth with your API key as the username and an empty password. Keys start with <code class="inline">lb_live_</code> or <code class="inline">lb_test_</code>. Test keys never deliver — they return realistic responses so your test suite can assert against them.</p>
          <div class="callout"><strong>Keep keys server-side.</strong> A key in client JavaScript is a key on the internet. If one leaks, rotate it in the dashboard — old keys die instantly, in-flight sends included.</div>
        </div>
        <aside class="margin-note">Test mode is honest: it mimics bounces and spam complaints too, so your retry logic gets a real workout.</aside>
      </div>

      <h2 id="send">Sending email</h2>
      <div class="with-margin">
        <div>
          <p><code class="inline">POST /v1/send</code> takes <code class="inline">from</code>, <code class="inline">to</code>, <code class="inline">subject</code>, and either <code class="inline">text</code> or <code class="inline">html</code>. Add <code class="inline">tags</code> (like <code class="inline">receipt</code> or <code class="inline">onboarding-3</code>) and every later report slices by them.</p>
          <p>We hold your HTML to a strict sanitizer — no scripts, no external forms — because your sender reputation is our reputation. Attachments cap at 10&nbsp;MB; anything bigger gets a clear error, not a silent drop.</p>
        </div>
        <aside class="margin-note">Tags are the feature people thank us for a year later. Tag everything; future-you is doing analytics.</aside>
      </div>

      <h2 id="webhooks">Webhooks</h2>
      <div class="with-margin">
        <div>
          <p>Register a URL and we'll POST delivery events as they happen. Each payload is signed — verify the <code class="inline">X-Letterbox-Signature</code> header with your webhook secret before trusting it.</p>
          <table>
            <tr><th>Event</th><th>Meaning</th></tr>
            <tr><td class="code">message.sent</td><td>Accepted by the receiving server.</td></tr>
            <tr><td class="code">message.delivered</td><td>Landed in the mailbox. The one you actually care about.</td></tr>
            <tr><td class="code">message.bounced</td><td>Hard bounce — we suppress future sends to this address automatically.</td></tr>
            <tr><td class="code">message.complained</td><td>Marked as spam. We suppress the address and tell you which campaign did it.</td></tr>
          </table>
        </div>
        <aside class="margin-note">Answer webhooks with <strong>200 in under 5 seconds</strong>. Slow endpoints get retried, then paused — your queue will thank you.</aside>
      </div>

      <h2 id="errors">Errors</h2>
      <p>Errors are JSON with a human sentence first and a machine code second. If the sentence doesn't tell you what to do, that's our bug — write to support and we'll fix the message.</p>
      <table>
        <tr><th>Code</th><th>What it means</th></tr>
        <tr><td class="code">invalid_from</td><td>The sending domain isn't verified yet. Verify it in the dashboard.</td></tr>
        <tr><td class="code">rate_limited</td><td>You're sending faster than your plan allows. Back off; the limit resets in a minute.</td></tr>
        <tr><td class="code">suppressed_recipient</td><td>This address bounced or complained before. We refused to send — that's the feature working.</td></tr>
      </table>
    </main>
  </div>

  <footer class="bot">
    <div>LETTERBOX DOCS · SET IN SOURCE SERIF 4 &amp; IBM PLEX MONO</div>
    <div>Demo page. Letterbox is a fictional company, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
