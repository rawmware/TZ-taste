//tz-meta {"id":"rust-docs","title":"Ferrous — backup CLI documentation","category":"Rust","file":"rust/docs.rs","tags":["rust","docs","documentation","cli"],"description":"Docs-solar documentation page for Ferrous, a plain-file backup CLI: sidebar nav, margin numerals, command bar, code blocks, callouts, config table.","dnas":["docs-solar"]}
//! Askama-style: struct DocsPage { version: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: warm, readable docs for a Rust backup CLI —
//!    audience: developers evaluating backup tools; feeling: calm competence; goal: run the first backup.
//! DNA: docs-solar (runner-up laboratory-clean loses: sterile where docs should feel written by a human).
//! Distinctive choice: oversized amber section numerals sitting in the left margin like chapter numbers.
//! Dials: VARIANCE 3 / MOTION 2 / DENSITY 6.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ferrous 2.4 — Backups you can read with cat</title>
<style>
:root{
  --bg:#fdf6e3;
  --ink:#3d3a2e;
  --accent:#cb4b16;
  --muted:#8a8672;
  --line:#3d3a2e1f;
  --surface:#f7eeda;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Source Serif 4",Georgia,"Times New Roman",serif;
  font-size:18px;line-height:1.7;
  -webkit-font-smoothing:antialiased;
}
.mono,code,pre{font-family:"IBM Plex Mono","SFMono-Regular",Consolas,monospace}
.wrap{max-width:1180px;margin:0 auto;padding:0 28px}
/* top nav */
.topnav{border-bottom:1px solid var(--line);background:var(--bg);position:sticky;top:0;z-index:20}
.topnav-in{display:flex;align-items:center;gap:32px;max-width:1180px;margin:0 auto;padding:14px 28px}
.brand{font-weight:700;font-size:20px;text-decoration:none;color:var(--ink);letter-spacing:-0.01em}
.brand .v{font-family:"IBM Plex Mono",monospace;font-size:12px;color:var(--accent);border:1px solid var(--accent);border-radius:5px;padding:2px 7px;margin-left:8px;vertical-align:2px;font-weight:400}
.topnav nav{display:flex;gap:24px;margin-left:auto}
.topnav nav a{color:var(--ink);text-decoration:none;font-size:16px;opacity:.8}
.topnav nav a:hover{color:var(--accent);opacity:1}
/* hero */
.hero{padding:88px 0 64px;border-bottom:1px solid var(--line)}
.hero .wrap{max-width:1180px}
.eyebrow{font-family:"IBM Plex Mono",monospace;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:20px}
h1{font-size:clamp(38px,5vw,60px);line-height:1.06;letter-spacing:-0.025em;font-weight:600;margin-bottom:20px;max-width:16em}
h1 em{font-style:italic;color:var(--accent)}
.lede{font-size:20px;max-width:36em;margin-bottom:36px}
.lede strong{font-weight:700}
.cmdbar{background:var(--ink);color:var(--bg);border-radius:10px;padding:20px 24px;display:flex;align-items:center;gap:16px;max-width:640px;box-shadow:0 16px 32px -16px rgba(61,58,46,.4)}
.cmdbar .prompt{color:var(--accent);font-weight:700;user-select:none}
.cmdbar code{font-size:17px;flex:1;overflow-x:auto;white-space:nowrap}
.cmdbar .copy{font-family:"IBM Plex Mono",monospace;font-size:12px;border:1px solid var(--bg);border-radius:6px;padding:6px 12px;color:var(--bg);background:transparent;cursor:pointer;opacity:.75;white-space:nowrap}
.cmdbar .copy:hover{opacity:1}
.cmd-note{font-size:14px;color:var(--muted);margin-top:12px;max-width:640px}
/* layout */
.docs{display:grid;grid-template-columns:250px 1fr;gap:72px;max-width:1180px;margin:0 auto;padding:64px 28px 96px}
/* sidebar */
.side{position:sticky;top:76px;align-self:start;border-right:1px solid var(--line);padding-right:32px}
.side h3{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin:0 0 12px;font-weight:700}
.side ul{list-style:none;margin-bottom:28px}
.side li{margin:2px 0}
.side a{display:block;color:var(--ink);text-decoration:none;font-size:16px;padding:6px 10px;border-radius:6px;opacity:.85}
.side a:hover{background:var(--surface);opacity:1}
.side a.active{background:var(--surface);color:var(--accent);font-weight:700;opacity:1}
/* article */
article{min-width:0}
.sec{position:relative;margin-bottom:64px;padding-left:88px}
.sec-num{position:absolute;left:0;top:-14px;font-size:64px;font-weight:700;color:var(--accent);opacity:.28;line-height:1;letter-spacing:-0.04em;user-select:none}
.sec h2{font-size:30px;letter-spacing:-0.02em;margin-bottom:14px;font-weight:600}
.sec p{margin-bottom:16px;max-width:38em}
.sec p code{background:var(--surface);border:1px solid var(--line);border-radius:5px;padding:1px 7px;font-size:.86em;color:var(--accent)}
pre{background:var(--ink);color:var(--bg);border-radius:10px;padding:22px 24px;font-size:15px;line-height:1.65;overflow-x:auto;margin:20px 0 24px;max-width:42em}
pre .c{color:var(--muted)}
pre .a{color:var(--accent)}
.callout{background:var(--surface);border-left:4px solid var(--accent);border-radius:0 10px 10px 0;padding:18px 22px;margin:24px 0;max-width:42em}
.callout strong{display:block;font-family:"IBM Plex Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:6px}
.callout p{margin:0;font-size:16px}
table{width:100%;border-collapse:collapse;margin:20px 0 24px;font-size:16px;max-width:44em}
th{font-family:"IBM Plex Mono",monospace;font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-align:left;color:var(--muted);padding:10px 12px;border-bottom:2px solid var(--ink)}
td{padding:12px;border-bottom:1px solid var(--line);vertical-align:top}
td:first-child{font-family:"IBM Plex Mono",monospace;font-size:14px;color:var(--accent);white-space:nowrap}
.steps{list-style:none;counter-reset:s;max-width:40em}
.steps li{counter-increment:s;position:relative;padding:14px 0 14px 56px;border-bottom:1px solid var(--line)}
.steps li::before{content:counter(s);position:absolute;left:0;top:14px;width:36px;height:36px;border-radius:50%;background:var(--surface);border:1px solid var(--accent);color:var(--accent);font-family:"IBM Plex Mono",monospace;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}
.steps li p{margin:0}
/* footer */
footer.site{border-top:1px solid var(--line);padding:48px 0 56px}
.foot{display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;max-width:1180px;margin:0 auto;padding:0 28px}
.foot nav{display:flex;gap:24px;flex-wrap:wrap}
.foot a{color:var(--ink);text-decoration:none;font-size:15px;opacity:.8}
.foot a:hover{color:var(--accent);opacity:1}
.foot .mono{font-size:13px;color:var(--muted)}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
@media (max-width:900px){
  .docs{grid-template-columns:1fr;gap:0;padding-top:48px}
  .side{position:static;border-right:none;border-bottom:1px solid var(--line);padding:0 0 24px;margin-bottom:48px;display:flex;gap:32px;flex-wrap:wrap}
  .side div{min-width:180px}
  .sec{padding-left:0}
  .sec-num{position:static;display:block;font-size:44px;margin-bottom:4px}
}
@media (max-width:640px){
  .hero{padding:64px 0 48px}
  .topnav nav{display:none}
  .cmdbar{flex-wrap:wrap}
  pre{font-size:13px}
}
</style>
</head>
<body>
<header class="topnav">
  <div class="topnav-in">
    <a class="brand" href="#">ferrous<span class="v">2.4</span></a>
    <nav aria-label="Docs sections">
      <a href="#quickstart">Quick start</a><a href="#commands">Commands</a><a href="#config">Config</a><a href="#restore">Restore</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap">
      <p class="eyebrow">ferrous 2.4 — the plain-file backup tool</p>
      <h1>Backups you can <em>read with cat.</em></h1>
      <p class="lede">Ferrous copies your files into a dated, checksummed directory tree — <strong>no blobs, no database, no proprietary format.</strong> If Ferrous vanished tomorrow, your backups would still just be files.</p>
      <div class="cmdbar">
        <span class="prompt" aria-hidden="true">$</span>
        <code>cargo install ferrous</code>
        <button class="copy" type="button">copy</button>
      </div>
      <p class="cmd-note">Rust 1.74+, macOS / Linux / Windows. The binary is 4.1 MB and has never phoned home.</p>
    </div>
  </section>

  <div class="docs">
    <aside class="side" aria-label="Table of contents">
      <div>
        <h3>Start here</h3>
        <ul>
          <li><a class="active" href="#quickstart">Quick start</a></li>
          <li><a href="#commands">Commands</a></li>
          <li><a href="#config">Configuration</a></li>
        </ul>
      </div>
      <div>
        <h3>Guides</h3>
        <ul>
          <li><a href="#restore">Restoring files</a></li>
          <li><a href="#">Scheduling</a></li>
          <li><a href="#">Migrating from rsync</a></li>
        </ul>
      </div>
    </aside>

    <article>
      <section class="sec" id="quickstart">
        <span class="sec-num" aria-hidden="true">01</span>
        <h2>Quick start</h2>
        <p>Three commands and your first backup exists. Ferrous stores snapshots under <code>~/.ferrous/snapshots</code> unless you tell it otherwise.</p>
        <ol class="steps">
          <li><p>Initialize a vault in any directory: <code>ferrous init ~/Documents</code> writes a <code>.ferrous.toml</code> and nothing else.</p></li>
          <li><p>Take a snapshot: <code>ferrous snap -m "before the refactor"</code>. Unchanged files are hard-linked, so the second snapshot costs almost nothing.</p></li>
          <li><p>List what you have: <code>ferrous log</code> prints every snapshot with its checksum and size.</p></li>
        </ol>
<pre><span class="c"># your first backup, end to end</span>
$ ferrous init ~/Documents
<span class="a">vault created</span>  .ferrous.toml (12 lines, human-readable)
$ ferrous snap -m "before the refactor"
<span class="a">snapshot 2026-10-03T09-14</span>  4,812 files · 2.1 GB · 31 new
$ ls ~/.ferrous/snapshots/2026-10-03T09-14/
<span class="a">Documents/  MANIFEST.json  CHECKSUMS.sha256</span></pre>
        <div class="callout">
          <strong>Design note</strong>
          <p>Ferrous never deletes anything on its own — not even with <code>--prune</code> in the same command as <code>snap</code>. Pruning is a separate, deliberate command, because the author has been burned before.</p>
        </div>
      </section>

      <section class="sec" id="commands">
        <span class="sec-num" aria-hidden="true">02</span>
        <h2>Commands</h2>
        <p>The whole CLI fits on one screen. If a command needs a manual, we consider that a bug — <a href="#" style="color:var(--accent)">file it</a>.</p>
<pre>$ ferrous --help
<span class="a">init</span>      create a vault in a directory
<span class="a">snap</span>      take a snapshot (-m for a message)
<span class="a">log</span>       list snapshots, newest first
<span class="a">diff</span>      show what changed since a snapshot
<span class="a">restore</span>   copy files back out of a snapshot
<span class="a">prune</span>     delete snapshots (asks twice)
<span class="a">verify</span>    re-checksum everything, report drift</pre>
      </section>

      <section class="sec" id="config">
        <span class="sec-num" aria-hidden="true">03</span>
        <h2>Configuration</h2>
        <p>One TOML file per vault. Every key has a default; most people set two.</p>
        <table>
          <thead><tr><th>Key</th><th>Default</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td>exclude</td><td>[]</td><td>Glob patterns to skip — <code>node_modules</code>, <code>*.tmp</code>, that 40 GB video folder</td></tr>
            <tr><td>compress</td><td>false</td><td>zstd per-file compression; slower snapshots, smaller vault</td></tr>
            <tr><td>keep_daily</td><td>14</td><td>How many daily snapshots <code>prune</code> retains</td></tr>
            <tr><td>verify_on_snap</td><td>true</td><td>Re-read every file after writing and compare checksums</td></tr>
          </tbody>
        </table>
      </section>

      <section class="sec" id="restore">
        <span class="sec-num" aria-hidden="true">04</span>
        <h2>Restoring files</h2>
        <p>Restores copy files <em>out</em> of the vault — your live directory is never touched until you say so. The common case is one line:</p>
<pre>$ ferrous restore 2026-10-03T09-14 --only "thesis/**"
<span class="a">restored</span>  212 files to ./ferrous-restore-2026-10-03/</pre>
        <p>Or skip Ferrous entirely: open the snapshot directory and copy files with your file manager. That&rsquo;s the whole point — the backup is just files, so recovery never depends on the tool that made it.</p>
      </section>
    </article>
  </div>
</main>

<footer class="site">
  <div class="foot">
    <nav aria-label="Footer">
      <a href="#">GitHub</a><a href="#">Changelog</a><a href="#">Security policy</a><a href="#">Report a bug</a>
    </nav>
    <p class="mono">MIT LICENSED &middot; 4.1 MB BINARY &middot; ZERO TELEMETRY, EVER</p>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
