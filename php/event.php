<?php //tz-meta {"id":"php-event","title":"Static Bloom — warehouse night event page","category":"PHP","file":"php/event.php","tags":["php","event","music"],"description":"Warehouse rave night in the acid-rave DNA: black room, acid-lime type at maximum volume, a scrolling marquee as the distinctive choice, strict no-phones policy.","dnas":["acid-rave"]} ?>
<?php
// event.php — STATIC BLOOM, a warehouse night.
// Exactly one DNA (acid-rave). Distinctive choice: a full-bleed marquee
// ticker plus Anton at maximum volume; the lineup is deliberately withheld.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'acid-rave') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Arial Black", Impact, sans-serif;
  --body: "{$body}", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.55; }
.tz-ticker { overflow: hidden; border-bottom: 1px solid var(--line); background: var(--accent); color: var(--bg); }
.tz-ticker-track { display: flex; gap: 0; width: max-content; animation: tz-scroll 22s linear infinite; }
.tz-ticker span { font-family: var(--display); font-size: 20px; letter-spacing: 0.06em; padding: 10px 26px; white-space: nowrap; }
@keyframes tz-scroll { to { transform: translateX(-50%); } }
.tz-wrap { max-width: 1100px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding: 26px 0; font-family: var(--mono); font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.tz-meta .tz-lime { color: var(--accent); }
.tz-hero { padding: clamp(48px, 7vw, 96px) 0 clamp(40px, 5vw, 64px); }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(64px, 13vw, 180px); line-height: 0.92; letter-spacing: 0.01em; text-transform: uppercase; }
.tz-hero h1 .tz-stroke { color: transparent; -webkit-text-stroke: 2px var(--accent); }
.tz-claim { margin-top: 28px; font-size: clamp(18px, 2.4vw, 26px); max-width: 34ch; font-weight: 500; }
.tz-claim .tz-lime { color: var(--accent); }
.tz-rules { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); margin: clamp(40px, 6vw, 72px) 0; }
.tz-rule-cell { background: var(--bg); padding: clamp(24px, 3.5vw, 44px); }
.tz-rule-cell .tz-num { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.16em; }
.tz-rule-cell h2 { font-family: var(--display); font-size: clamp(22px, 3vw, 34px); font-weight: 400; text-transform: uppercase; margin: 12px 0 10px; }
.tz-rule-cell p { color: var(--muted); max-width: 44ch; }
.tz-cta { border: 1px solid var(--accent); padding: clamp(40px, 6vw, 72px); margin-bottom: clamp(56px, 8vw, 100px); display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; }
.tz-cta h2 { font-family: var(--display); font-weight: 400; font-size: clamp(30px, 4.6vw, 58px); line-height: 1; text-transform: uppercase; }
.tz-cta h2 .tz-lime { color: var(--accent); }
.tz-btn { display: inline-block; background: var(--accent); color: var(--bg); text-decoration: none; font-family: var(--display); font-size: 18px; letter-spacing: 0.04em; text-transform: uppercase; padding: 18px 36px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { padding: 30px 0 56px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.08em; }
@media (max-width: 720px) {
  .tz-rules { grid-template-columns: 1fr; }
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
<title>Static Bloom — Nov 14, warehouse location TBA</title>
<style>
{$css}
</style>
</head>
<body>
  <div class="tz-ticker" aria-hidden="true">
    <div class="tz-ticker-track">
      <span>STATIC BLOOM &middot; NOV 14 &middot; 10PM&ndash;4AM &middot; WAREHOUSE TBA &middot; NO PHONES &middot; STATIC BLOOM &middot; NOV 14 &middot; 10PM&ndash;4AM &middot; WAREHOUSE TBA &middot; NO PHONES &middot;&nbsp;</span>
      <span>STATIC BLOOM &middot; NOV 14 &middot; 10PM&ndash;4AM &middot; WAREHOUSE TBA &middot; NO PHONES &middot; STATIC BLOOM &middot; NOV 14 &middot; 10PM&ndash;4AM &middot; WAREHOUSE TBA &middot; NO PHONES &middot;&nbsp;</span>
    </div>
  </div>

<div class="tz-wrap">
  <div class="tz-meta">
    <span>One night &middot; one room</span>
    <span class="tz-lime">18+ &middot; ID required</span>
    <span>Capacity 400</span>
  </div>

  <header class="tz-hero">
    <h1>Static<br><span class="tz-stroke">Bloom</span></h1>
    <p class="tz-claim">Six hours. One room. <span class="tz-lime">Phones stay in
    your pocket</span> &mdash; taped at the door, returned at 4AM.</p>
  </header>

  <section class="tz-rules" aria-label="the rules">
    <div class="tz-rule-cell">
      <p class="tz-num">RULE 01</p>
      <h2>No lineup posted</h2>
      <p>Five DJs, two live sets, zero names in advance. The flyer is the
      promise; the room is the proof. Trust the booker or stay home.</p>
    </div>
    <div class="tz-rule-cell">
      <p class="tz-num">RULE 02</p>
      <h2>No phones on the floor</h2>
      <p>Cameras get a sticker at the door. Dance like nobody is filming,
      because nobody is. The aftermovie is shot by one photographer we trust.</p>
    </div>
    <div class="tz-rule-cell">
      <p class="tz-num">RULE 03</p>
      <h2>Coats checked free</h2>
      <p>One less thing to babysit. Medics and water stations on both floors,
      all night, no questions asked at either.</p>
    </div>
    <div class="tz-rule-cell">
      <p class="tz-num">RULE 04</p>
      <h2>Leave no trace</h2>
      <p>The warehouse goes back to a warehouse at 6AM. Help us sweep and your
      next ticket is half price. This is how we keep the room.</p>
    </div>
  </section>

  <section class="tz-cta">
    <h2>Tickets drop <span class="tz-lime">Oct 20.</span> The text list hears first.</h2>
    <div>
      <a class="tz-btn" href="#textlist">Get the secret lineup by text</a>
      <span class="tz-btn-note">One text on drop day &middot; never again</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>STATIC BLOOM &middot; NOV 14</span>
    <span>\$25 EARLY &middot; \$35 DOOR &middot; CASH &amp; CARD</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
