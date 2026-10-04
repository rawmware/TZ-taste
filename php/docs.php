<?php //tz-meta {"id":"php-docs","title":"Ferrite — documentation for a fictional CLI","category":"PHP","file":"php/docs.php","tags":["php","docs","documentation","cli"],"description":"Documentation page for a fictional static-site CLI in the docs-solar DNA: sticky section index, mono install block, numbered recipes instead of feature cards.","dnas":["docs-solar"]} ?>
<?php
// docs.php — documentation for "ferrite", a fictional static-site CLI.
// Exactly one DNA (docs-solar). Distinctive choice: the page reads like a
// well-kept man page — a sticky section index on the left, numbered recipes,
// and one terminal block that does the whole install.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'docs-solar') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --serif: "{$display}", "Source Serif Pro", Georgia, serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--serif); font-size: 17px; line-height: 1.7; }
.tz-wrap { max-width: 1120px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: baseline; padding: 22px 0; border-bottom: 1px solid var(--line); }
.tz-brand { font-weight: 700; font-size: 19px; }
.tz-brand .tz-ver { font-family: var(--mono); font-size: 12px; color: var(--accent); margin-left: 10px; font-weight: 400; }
.tz-topbar nav a { color: var(--muted); text-decoration: none; font-size: 15px; margin-left: 22px; }
.tz-topbar nav a:hover { color: var(--ink); }
.tz-cols { display: grid; grid-template-columns: 220px 1fr; gap: clamp(32px, 6vw, 88px); padding: clamp(56px, 8vw, 96px) 0; align-items: start; }
.tz-index { position: sticky; top: 24px; font-family: var(--mono); font-size: 13px; line-height: 2.2; }
.tz-index a { display: block; color: var(--muted); text-decoration: none; }
.tz-index a:hover { color: var(--accent); }
.tz-index .tz-hd { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink); margin-bottom: 8px; }
.tz-hero h1 { font-size: clamp(36px, 4.6vw, 58px); line-height: 1.12; font-weight: 600; letter-spacing: -0.01em; max-width: 18ch; }
.tz-hero h1 em { font-style: italic; color: var(--accent); }
.tz-lede { margin: 20px 0 28px; color: var(--muted); max-width: 52ch; }
.tz-term { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 22px 26px; font-family: var(--mono); font-size: 14px; line-height: 1.9; margin-bottom: 16px; }
.tz-term .tz-prompt { color: var(--accent); }
.tz-term .tz-out { color: var(--muted); }
.tz-btn { display: inline-block; background: var(--ink); color: var(--bg); text-decoration: none; font-size: 15px; font-weight: 600; padding: 14px 30px; border-radius: 6px; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-recipe { border-top: 1px solid var(--line); padding: 40px 0; }
.tz-recipe .tz-num { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.14em; text-transform: uppercase; }
.tz-recipe h2 { font-size: clamp(24px, 3vw, 34px); font-weight: 600; letter-spacing: -0.01em; margin: 10px 0 12px; }
.tz-recipe p { color: var(--muted); max-width: 60ch; margin-bottom: 14px; }
.tz-recipe code { font-family: var(--mono); font-size: 0.88em; background: var(--surface); border: 1px solid var(--line); border-radius: 4px; padding: 2px 8px; color: var(--ink); }
.tz-foot { padding: 36px 0 60px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; color: var(--muted); font-size: 14px; font-family: var(--mono); }
@media (max-width: 820px) {
  .tz-cols { grid-template-columns: 1fr; }
  .tz-index { position: static; border-bottom: 1px solid var(--line); padding-bottom: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
CSS;

$html = <<<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ferrite docs — the static-site CLI you learn in one lunch break</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">ferrite<span class="tz-ver">v2.4.1</span></span>
    <nav><a href="#recipes">Recipes</a><a href="#cli">CLI reference</a><a href="#faq">FAQ</a></nav>
  </div>

  <div class="tz-cols">
    <aside class="tz-index" aria-label="on this page">
      <p class="tz-hd">On this page</p>
      <a href="#install">01 &mdash; Install</a>
      <a href="#first-site">02 &mdash; First site</a>
      <a href="#drafts">03 &mdash; Drafts &amp; preview</a>
      <a href="#deploy">04 &mdash; Deploy</a>
    </aside>

    <main>
      <header class="tz-hero">
        <h1>Learn ferrite in <em>one lunch break.</em></h1>
        <p class="tz-lede">Ferrite turns a folder of Markdown into a fast
        static site. No config file to worship, no plugin ecosystem to tame.
        Four commands cover everything on this page.</p>
        <div class="tz-term" id="install" role="img" aria-label="install commands">
          <div><span class="tz-prompt">\$</span> curl -sL ferrite.dev/get | sh</div>
          <div class="tz-out">ferrite 2.4.1 installed in 4s</div>
          <div><span class="tz-prompt">\$</span> ferrite new notes &amp;&amp; cd notes</div>
          <div class="tz-out">scaffolded: 3 files, 0 config</div>
        </div>
        <a class="tz-btn" href="#first-site">Install ferrite in 30 seconds</a>
        <span class="tz-btn-note">macOS, Linux, Windows &mdash; one binary, no runtime</span>
      </header>

      <section class="tz-recipe" id="first-site">
        <p class="tz-num">Recipe 02 &mdash; First site</p>
        <h2>Write Markdown, get a website.</h2>
        <p>Drop <code>.md</code> files in <code>pages/</code>. Ferrite reads
        the first heading as the title, the file name as the URL, and builds
        the whole thing in under a second. Run <code>ferrite serve</code> and
        every save refreshes the browser before you look up.</p>
      </section>

      <section class="tz-recipe" id="drafts">
        <p class="tz-num">Recipe 03 &mdash; Drafts &amp; preview</p>
        <h2>Drafts stay private until you say so.</h2>
        <p>Files starting with an underscore are drafts: visible in
        <code>ferrite serve</code>, skipped by <code>ferrite build</code>.
        Rename the file when it is ready &mdash; there is no publish button,
        no draft state to sync, nothing to forget.</p>
      </section>

      <section class="tz-recipe" id="deploy">
        <p class="tz-num">Recipe 04 &mdash; Deploy</p>
        <h2>One folder out, anywhere in.</h2>
        <p><code>ferrite build</code> writes plain HTML, CSS, and images to
        <code>dist/</code>. Upload that folder to any static host and walk
        away. Rollbacks are just the previous folder.</p>
      </section>
    </main>
  </div>

  <footer class="tz-foot">
    <span>ferrite docs &middot; updated Oct 2026</span>
    <span>MIT licensed &middot; issues welcome</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
