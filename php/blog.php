<?php //tz-meta {"id":"php-blog","title":"The Slow Inbox — weekly essays on lasting work","category":"PHP","file":"php/blog.php","tags":["php","blog","essays"],"description":"Essay blog in the editorial-serif DNA: marginalia side notes as the distinctive choice, drop caps, an honest weekly cadence and one subscribe CTA.","dnas":["editorial-serif"]} ?>
<?php
// blog.php — The Slow Inbox, weekly essays by Mara Ellison.
// Exactly one DNA (editorial-serif). Distinctive choice: marginalia —
// handwritten-style side notes in the margin of each essay excerpt.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'editorial-serif') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", Georgia, "Times New Roman", serif;
  --body: "{$body}", Georgia, "Times New Roman", serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 18px; line-height: 1.75; }
.tz-wrap { max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: baseline; padding: 24px 0; border-bottom: 1px solid var(--line); }
.tz-brand { font-family: var(--display); font-size: 22px; font-weight: 600; }
.tz-brand .tz-issue { font-family: var(--mono); font-size: 12px; color: var(--accent); margin-left: 12px; font-weight: 400; }
.tz-topbar nav a { color: var(--muted); text-decoration: none; font-size: 15px; margin-left: 22px; font-style: italic; }
.tz-topbar nav a:hover { color: var(--ink); }
.tz-hero { padding: clamp(72px, 10vw, 128px) 0 clamp(48px, 6vw, 80px); max-width: 34em; }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-size: clamp(40px, 5.6vw, 72px); line-height: 1.08; font-weight: 600; letter-spacing: -0.015em; }
.tz-lede { margin-top: 22px; color: var(--muted); font-size: 19px; max-width: 44ch; }
.tz-essays { border-top: 1px solid var(--line); margin-bottom: clamp(48px, 6vw, 80px); }
.tz-essay { display: grid; grid-template-columns: 1fr 240px; gap: clamp(24px, 5vw, 72px); padding: 48px 0; border-bottom: 1px solid var(--line); }
.tz-essay .tz-kicker { font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
.tz-essay h2 { font-family: var(--display); font-size: clamp(28px, 3.6vw, 44px); font-weight: 600; letter-spacing: -0.015em; line-height: 1.12; margin: 12px 0 16px; }
.tz-essay h2 a { color: inherit; text-decoration: none; }
.tz-essay h2 a:hover { color: var(--accent); }
.tz-essay p { color: var(--muted); max-width: 56ch; }
.tz-essay p::first-letter { font-family: var(--display); font-size: 3.2em; float: left; line-height: 0.85; padding-right: 10px; color: var(--ink); }
.tz-margin { border-left: 1px solid var(--line); padding-left: 22px; font-style: italic; font-size: 15px; color: var(--muted); align-self: start; }
.tz-margin .tz-who { display: block; margin-top: 10px; font-family: var(--mono); font-style: normal; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
.tz-sub { background: var(--surface); border: 1px solid var(--line); padding: clamp(40px, 6vw, 72px); display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(56px, 8vw, 100px); }
.tz-sub h2 { font-family: var(--display); font-size: clamp(28px, 3.8vw, 46px); font-weight: 600; letter-spacing: -0.015em; line-height: 1.12; }
.tz-sub p { margin-top: 14px; color: var(--muted); max-width: 44ch; }
.tz-btn { display: inline-block; background: var(--ink); color: var(--bg); text-decoration: none; font-size: 15px; font-weight: 600; padding: 16px 34px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { padding: 30px 0 56px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
@media (max-width: 760px) {
  .tz-essay { grid-template-columns: 1fr; }
  .tz-margin { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; padding-top: 16px; }
  .tz-sub { grid-template-columns: 1fr; }
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
<title>The Slow Inbox — weekly essays on work that lasts</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">The Slow Inbox<span class="tz-issue">No. 142</span></span>
    <nav><a href="#essays">Essays</a><a href="#about">About</a><a href="#archive">Archive</a></nav>
  </div>

  <header class="tz-hero">
    <p class="tz-eyebrow">Weekly essays &middot; Sundays, 7AM</p>
    <h1>One essay a week about work that lasts.</h1>
    <p class="tz-lede">No growth hacks, no morning routines. Just long
    sentences about building things slowly &mdash; furniture, software,
    gardens, sentences &mdash; written by Mara Ellison since 2023.</p>
  </header>

  <section class="tz-essays" id="essays" aria-label="recent essays">
    <article class="tz-essay">
      <div>
        <p class="tz-kicker">Oct 4, 2026 &middot; 9 min</p>
        <h2><a href="#essay">The chair outlasts the meeting</a></h2>
        <p>I spent Saturday repairing a ladder-back chair my grandfather made
        in 1968. The joints were loose, the finish was shot, and the repair
        took four hours I had planned to spend answering email. The chair will
        be sat in for another fifty years. The email would have been forgotten
        by Tuesday.</p>
      </div>
      <aside class="tz-margin">Mara&rsquo;s grandfather built 40 chairs and
      answered approximately zero emails.<span class="tz-who">Marginalia</span></aside>
    </article>
    <article class="tz-essay">
      <div>
        <p class="tz-kicker">Sep 27, 2026 &middot; 7 min</p>
        <h2><a href="#essay">Slow software is a choice</a></h2>
        <p>The programs I still use daily are all unfashionable: a text editor
        from 2009, a spreadsheet with no cloud, a camera with one lens. They
        are slow in the ways that matter &mdash; slow to change, slow to break,
        slow to ask for my attention.</p>
      </div>
      <aside class="tz-margin">The editor is BBEdit. The camera is a Pentax
      K1000. Neither has ever sent a notification.<span class="tz-who">Marginalia</span></aside>
    </article>
    <article class="tz-essay">
      <div>
        <p class="tz-kicker">Sep 20, 2026 &middot; 11 min</p>
        <h2><a href="#essay">In praise of the second draft</a></h2>
        <p>First drafts are performances; second drafts are repairs. I have
        started keeping the first draft of everything &mdash; essays, shelves,
        sourdough &mdash; pinned up for a week before touching it. The flaws
        announce themselves if you give them time.</p>
      </div>
      <aside class="tz-margin">This essay&rsquo;s first draft claimed sourdough
      was &ldquo;easy.&rdquo; It was not.<span class="tz-who">Marginalia</span></aside>
    </article>
  </section>

  <section class="tz-sub">
    <div>
      <h2>Sunday&rsquo;s essay, in your inbox.</h2>
      <p>Free every week, forever. Paid subscribers get the marginalia
      expanded &mdash; the outtakes, the sources, the things I cut.</p>
    </div>
    <div>
      <a class="tz-btn" href="#subscribe">Get Sunday&rsquo;s essay</a>
      <span class="tz-btn-note">4,100 readers &middot; unsubscribe anytime</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>THE SLOW INBOX &middot; BY MARA ELLISON</span>
    <span>WRITTEN SLOWLY IN PORTLAND, MAINE</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
