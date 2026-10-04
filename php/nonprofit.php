<?php //tz-meta {"id":"php-nonprofit","title":"Granite Path Alliance — trail stewardship nonprofit","category":"PHP","file":"php/nonprofit.php","tags":["php","nonprofit","outdoors"],"description":"Trail nonprofit page in the alpine-ledger DNA: stamped logbook entries as the distinctive choice, kraft-paper warmth, one trail-day signup CTA.","dnas":["alpine-ledger"]} ?>
<?php
// nonprofit.php — Granite Path Alliance, trail stewardship nonprofit.
// Exactly one DNA (alpine-ledger). Distinctive choice: the impact section is
// a stamped logbook — dated entries with rubber-stamp marks — not stat cards.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'alpine-ledger') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Courier New", Courier, monospace;
  --body: "{$body}", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.65; }
.tz-wrap { max-width: 1000px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--line); }
.tz-brand { font-family: var(--display); font-size: 19px; }
.tz-topbar nav a { color: var(--muted); text-decoration: none; font-size: 14px; margin-left: 22px; }
.tz-topbar nav a:hover { color: var(--ink); }
.tz-hero { padding: clamp(72px, 10vw, 130px) 0 clamp(48px, 6vw, 80px); max-width: 40em; }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-size: clamp(38px, 5.4vw, 68px); line-height: 1.12; font-weight: 400; }
.tz-lede { margin-top: 22px; color: var(--muted); max-width: 50ch; }
.tz-log { border-top: 1px solid var(--line); margin-bottom: clamp(48px, 7vw, 88px); }
.tz-entry { display: grid; grid-template-columns: 150px 1fr auto; gap: clamp(16px, 3vw, 40px); padding: 30px 0; border-bottom: 1px solid var(--line); align-items: center; }
.tz-date { font-family: var(--mono); font-size: 13px; color: var(--muted); }
.tz-entry p { max-width: 56ch; }
.tz-entry p strong { font-family: var(--display); font-weight: 400; font-size: 19px; display: block; margin-bottom: 6px; }
.tz-stamp { font-family: var(--display); font-size: 13px; color: var(--accent); border: 2px solid var(--accent); padding: 8px 14px; transform: rotate(-5deg); white-space: nowrap; letter-spacing: 0.06em; }
.tz-cta { background: var(--surface); border: 1px solid var(--line); padding: clamp(40px, 6vw, 72px); display: grid; grid-template-columns: 1.5fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(56px, 8vw, 100px); }
.tz-cta h2 { font-family: var(--display); font-weight: 400; font-size: clamp(28px, 4vw, 46px); line-height: 1.15; }
.tz-cta p { margin-top: 14px; color: var(--muted); max-width: 44ch; }
.tz-btn { display: inline-block; background: var(--accent); color: #fff; text-decoration: none; font-weight: 700; font-size: 15px; padding: 16px 34px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { padding: 32px 0 56px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
@media (max-width: 720px) {
  .tz-entry { grid-template-columns: 1fr; }
  .tz-stamp { justify-self: start; }
  .tz-cta { grid-template-columns: 1fr; }
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
<title>Granite Path Alliance — volunteer trail stewardship</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">Granite Path Alliance</span>
    <nav><a href="#log">Field log</a><a href="#join">Volunteer</a><a href="#give">Donate</a></nav>
  </div>

  <header class="tz-hero">
    <p class="tz-eyebrow">Volunteer trail stewardship &middot; since 1987</p>
    <h1>1,204 miles of trail, kept open by people you know.</h1>
    <p class="tz-lede">We are the crew with the pulaskis. Every bridge, water
    bar, and blazed mile in the county inventory is maintained by volunteers
    &mdash; neighbors, not contractors. The logbook below is this season.</p>
  </header>

  <section class="tz-log" id="log" aria-label="season field log">
    <div class="tz-entry">
      <span class="tz-date">SEP 27, 2026</span>
      <p><strong>Beaver Brook, mile 6 &mdash; bridge deck rebuilt</strong>
      Fourteen volunteers, one Saturday. The old decking went to the burn
      pile; the new stringers will outlast all of us.</p>
      <span class="tz-stamp">LOGGED</span>
    </div>
    <div class="tz-entry">
      <span class="tz-date">SEP 13, 2026</span>
      <p><strong>North Ridge loop &mdash; 40 water bars cleared</strong>
      After the August storms, the drainage was doing the trail&rsquo;s job
      for it. Cleared, re-armed, and walked twice to be sure.</p>
      <span class="tz-stamp">LOGGED</span>
    </div>
    <div class="tz-entry">
      <span class="tz-date">AUG 30, 2026</span>
      <p><strong>Pond Trail &mdash; boardwalk section re-leveled</strong>
      The frost heave had turned it into a xylophone. Eleven of us, one
      come-along, and a cooler of sandwiches from Marty&rsquo;s.</p>
      <span class="tz-stamp">LOGGED</span>
    </div>
  </section>

  <section class="tz-cta" id="join">
    <div>
      <h2>The October trail day needs twelve hands.</h2>
      <p>No experience, no gear, no dues. We bring the tools and the coffee;
      you bring boots and a morning. Most people come back.</p>
    </div>
    <div>
      <a class="tz-btn" href="#signup">Join a trail day in October</a>
      <span class="tz-btn-note">Sat Oct 17 &middot; 8AM &middot; meet at the kiosk</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>GPA &middot; PO BOX 214 &middot; 501(c)(3)</span>
    <span>92&cent; OF EVERY DOLLAR BUYS LUMBER</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
