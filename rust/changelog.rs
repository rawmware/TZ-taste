//tz-meta {"id":"rust-changelog","title":"Lattice — changelog as terminal session","category":"Rust","file":"rust/changelog.rs","tags":["rust","changelog","dev-tools","terminal"],"description":"Retro-terminal changelog for fictional deploy tool Lattice: the whole page is a terminal session with amber version tags, ASCII rules, scanlines, blinking cursor.","dnas":["retro-terminal"]}
//! Askama-style: struct ChangelogPage { tool: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: a changelog developers will actually read —
//!    audience: Lattice users deciding whether to upgrade; feeling: the machine is the message; goal: scan what changed, grab the migration guide.
//! DNA: retro-terminal (runner-up industrial-brutalist loses: loud where a changelog should hum).
//! Distinctive choice: the entire page is one terminal session — prompt, command, output, blinking cursor.
//! Dials: VARIANCE 6 / MOTION 3 / DENSITY 8.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>lattice changelog — every change, in the order we shipped it</title>
<style>
:root{
  --bg:#0b0f0a;
  --ink:#33ff66;
  --accent:#ffb000;
  --muted:#1f6b3a;
  --line:#33ff6633;
  --surface:#0e140d;
  color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"IBM Plex Mono","Courier New",monospace;
  font-size:15px;line-height:1.7;
  -webkit-font-smoothing:antialiased;
  min-height:100vh;
}
/* scanlines + vignette, decorative only */
.scan{position:fixed;inset:0;pointer-events:none;z-index:50;
  background:repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,.22) 2px 4px);}
.term{max-width:880px;margin:0 auto;padding:32px 24px 80px;position:relative}
/* window chrome */
.chrome{display:flex;align-items:center;gap:8px;padding:14px 18px;background:var(--surface);border:1px solid var(--line);border-bottom:none;border-radius:10px 10px 0 0}
.chrome i{width:12px;height:12px;border-radius:50%;background:var(--muted);display:block}
.chrome i:first-child{background:var(--accent)}
.chrome span{margin-left:8px;font-size:12px;color:var(--muted);letter-spacing:.08em}
.screen{background:var(--surface);border:1px solid var(--line);border-radius:0 0 10px 10px;padding:36px 32px;box-shadow:0 0 80px rgba(51,255,102,.06)}
.cmd{margin-bottom:8px}
.cmd .p{color:var(--accent);font-weight:700}
.cmd .c{color:var(--ink)}
.out{color:var(--ink);opacity:.92}
.dim{color:var(--muted)}
.rule{border:none;border-top:1px dashed var(--line);margin:28px 0}
.ver{display:inline-block;color:var(--bg);background:var(--accent);font-weight:700;padding:2px 10px;border-radius:4px;font-size:13px;letter-spacing:.06em;margin-right:12px}
.ver.old{background:var(--muted);color:var(--bg)}
.date{color:var(--muted);font-size:13px}
.entry{margin:26px 0 8px}
.entry h2{font-size:17px;margin-bottom:12px;font-weight:700}
.tag{display:inline-block;border:1px solid var(--line);border-radius:4px;font-size:11px;letter-spacing:.1em;padding:2px 8px;margin-right:8px;color:var(--accent);text-transform:uppercase}
.tag.fix{color:var(--ink)}
ul.changes{list-style:none;margin:6px 0 6px 4px}
ul.changes li{padding:5px 0 5px 28px;position:relative}
ul.changes li::before{content:"+";position:absolute;left:8px;color:var(--accent);font-weight:700}
ul.changes li.fx::before{content:"~";color:var(--ink)}
ul.changes li.br::before{content:"!";color:var(--accent)}
ul.changes code{background:var(--bg);border:1px solid var(--line);border-radius:4px;padding:0 6px;font-size:13px}
.note{border:1px solid var(--accent);border-radius:6px;padding:14px 18px;margin:18px 0;font-size:14px}
.note b{color:var(--accent)}
.cursor{display:inline-block;width:10px;height:18px;background:var(--ink);vertical-align:-3px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.links{margin-top:36px}
.links a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--accent);text-underline-offset:4px;margin-right:26px}
.links a:hover{color:var(--accent)}
.foot{margin-top:48px;font-size:12px;color:var(--muted);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
  .cursor{opacity:1}
  .scan{display:none}
}
@media (max-width:640px){
  body{font-size:13.5px}
  .screen{padding:24px 18px}
  .term{padding:20px 12px 64px}
  ul.changes li{padding-left:22px}
}
</style>
</head>
<body>
<div class="scan" aria-hidden="true"></div>
<div class="term">
  <div class="chrome" aria-hidden="true"><i></i><i></i><i></i><span>lattice — changelog — 80&times;24</span></div>
  <div class="screen">
    <p class="cmd"><span class="p">$</span> <span class="c">lattice changelog --since v3.1</span></p>
    <p class="out">Every change, in the order we shipped it. Newest first.<br><span class="dim">tip: lattice changelog --json | jq for the machine-readable feed</span></p>

    <hr class="rule">

    <div class="entry">
      <h2><span class="ver">v3.4.0</span> <span class="date">2026-10-01 &middot; 14 commits</span></h2>
      <ul class="changes">
        <li><span class="tag">new</span>Preview URLs now survive branch renames — the slug follows the branch, not the name you gave it on Tuesday</li>
        <li><span class="tag">new</span><code>lattice diff --against prod</code> shows what this deploy actually changes, in plain English</li>
        <li class="fx"><span class="tag fix">fix</span>Rollback no longer drops env vars set after the deploy (sorry about Thursday)</li>
        <li class="fx"><span class="tag fix">fix</span>Build cache hit rate back to 91% after the registry hiccup in 3.3.x</li>
        <li class="br"><span class="tag">breaking</span><code>--force</code> now requires typing the environment name. Yes, really. <a href="#migrate" style="color:var(--accent)">migration guide &rarr;</a></li>
      </ul>
      <div class="note"><b>HEADS UP:</b> v3.4 changes the preview URL scheme. Old <code>*.lattice-preview.io</code> links redirect for 90 days, then retire. Update bookmarks and CI badges.</div>
    </div>

    <hr class="rule">

    <div class="entry">
      <h2><span class="ver old">v3.3.2</span> <span class="date">2026-09-18 &middot; 6 commits</span></h2>
      <ul class="changes">
        <li class="fx"><span class="tag fix">fix</span>Deploys to <code>eu-west</code> no longer hang when the region is at capacity — they fail fast with a useful error instead</li>
        <li class="fx"><span class="tag fix">fix</span><code>lattice logs --tail</code> stops repeating the last line on reconnect</li>
        <li><span class="tag">new</span>Deploy notifications for Slack now include the diff summary, not just &ldquo;it worked&rdquo;</li>
      </ul>
    </div>

    <hr class="rule">

    <div class="entry">
      <h2><span class="ver old">v3.3.0</span> <span class="date">2026-09-02 &middot; 22 commits</span></h2>
      <ul class="changes">
        <li><span class="tag">new</span>Environments: <code>staging</code> and <code>prod</code> are now separate configs instead of flags you had to remember</li>
        <li><span class="tag">new</span>Build minutes are metered per project, and the dashboard finally shows the math</li>
        <li class="fx"><span class="tag fix">fix</span>Windows paths with spaces no longer break the uploader (took us embarrassingly long)</li>
      </ul>
    </div>

    <hr class="rule">

    <div class="entry">
      <h2><span class="ver old">v3.2.1</span> <span class="date">2026-08-14 &middot; 4 commits</span></h2>
      <ul class="changes">
        <li class="fx"><span class="tag fix">fix</span>Security: rotated the default deploy token scheme; old tokens expire Nov 1 — <code>lattice auth refresh</code> takes ten seconds</li>
      </ul>
    </div>

    <hr class="rule">

    <p class="cmd"><span class="p">$</span> <span class="c">lattice changelog --subscribe</span> <span class="cursor" aria-hidden="true"></span></p>
    <p class="out">Get every release as it ships: <span class="dim">RSS</span> <a href="#" style="color:var(--ink)">/changelog.xml</a> &middot; <span class="dim">email</span> <a href="#" style="color:var(--ink)">releases@lattice.dev</a> &middot; <span class="dim">slack</span> <a href="#" style="color:var(--ink)">/lattice subscribe</a></p>

    <nav class="links" aria-label="Changelog links">
      <a href="#">Migration guides</a><a href="#">Full git history</a><a href="#">Roadmap</a><a href="#">Report a regression</a>
    </nav>

    <div class="foot">
      <span>LATTICE DEPLOY SYSTEMS &middot; &copy; 2026</span>
      <span>SESSION 80x24 &middot; UTF-8 &middot; NO TRACKING IN THIS TERMINAL</span>
    </div>
  </div>
</div>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
