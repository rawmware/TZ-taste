//tz-meta {"id":"go-changelog","title":"Northlight firmware changelog (retro-terminal)","category":"Go","file":"go/changelog.go","tags":["go","changelog","firmware"],"description":"Changelog for Northlight, a fictional mesh-network weather station, rendered as one terminal session in the retro-terminal DNA. go run go/changelog.go > out.html","dnas":["retro-terminal"]}
package main

// Design read: a changelog that never leaves the terminal — the whole page is
// one `northlight log` session, amber version stamps, phosphor-green truth.
// DNA: retro-terminal (bg #0b0f0a, ink #33ff66, accent #ffb000). Runner-up
// blueprint-tech loses: also technical, but the brief is firmware — it should
// feel like the device itself talking.
// One distinctive choice: the entire page is a single scrollable terminal
// session — prompts, output, and a blinking block cursor at the end.
// Dials: VARIANCE 3 / MOTION 2 / DENSITY 7.

import "fmt"

const (
	bg      = "#0b0f0a"
	ink     = "#33ff66"
	accent  = "#ffb000"
	muted   = "#1f6b3a"
	line    = "#33ff6633"
	surface = "#0e140d"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>northlight — firmware changelog</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'IBM Plex Mono',monospace;font-size:15px;line-height:1.7;-webkit-font-smoothing:antialiased}
  body::after{content:"";position:fixed;inset:0;pointer-events:none;
    background:repeating-linear-gradient(0deg,transparent 0 3px,rgba(0,0,0,0.22) 3px 4px)}
  a{color:` + accent + `}
  .term{max-width:860px;margin:0 auto;padding:48px 32px 96px;position:relative;z-index:1}
  .prompt{color:` + accent + `}
  .dim{color:` + muted + `}
  .ver{color:` + accent + `;font-weight:700}
  .fileline{border-bottom:1px solid ` + line + `;padding-bottom:24px;margin-bottom:32px}
  h1{font-size:15px;font-weight:500;margin-bottom:6px}
  .lede{color:` + ink + `;margin-bottom:8px;max-width:62em}
  .lede .dim{color:` + muted + `}
  .release{margin:40px 0;padding:28px;background:` + surface + `;border:1px solid ` + line + `;border-left:3px solid ` + accent + `}
  .release.latest{border-left-color:` + ink + `}
  .release .rh{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px}
  .release ul{list-style:none}
  .release li{margin-bottom:10px;padding-left:24px;position:relative;max-width:64em}
  .release li::before{content:"+";position:absolute;left:4px;color:` + accent + `}
  .release li.fix::before{content:"*";color:` + ink + `}
  .release li .scope{color:` + muted + `}
  .cmd{margin-top:48px}
  .cursor{display:inline-block;width:11px;height:20px;background:` + ink + `;vertical-align:-4px;animation:blink 1.1s steps(1) infinite}
  @keyframes blink{50%{opacity:0}}
  footer{margin-top:64px;padding-top:24px;border-top:1px solid ` + line + `;color:` + muted + `;font-size:13px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
  ::selection{background:` + accent + `;color:` + bg + `}
  @media (prefers-reduced-motion:reduce){.cursor{animation:none}}
</style>
</head>
<body>
<div class="term">
  <div class="fileline">
    <div><span class="prompt">field-ops@northlight</span><span class="dim">:~$</span> northlight log --since v2.3 --limit 3</div>
  </div>

  <h1>NORTHLIGHT FIRMWARE — CHANGELOG</h1>
  <p class="lede">Northlight is a solar mesh weather station for trailheads and farms: temperature, wind, and barometric pressure, relayed peer-to-peer with no cell signal required. <span class="dim">This is everything its firmware learned lately. Flash over USB-C or let the mesh pull it overnight.</span></p>

  <div class="release latest">
    <div class="rh"><span class="ver">v2.4.0</span><span class="dim">2026-09-28 · STABLE · 41,208 units in field</span></div>
    <ul>
      <li><span class="scope">[mesh]</span> Relay hops increased from 4 to 8 — a station at the far end of the valley now reaches the gateway without a repeater.</li>
      <li><span class="scope">[power]</span> Deep-sleep draw cut to 0.4 mA. December in the Whites is survivable again.</li>
      <li><span class="scope">[sensors]</span> Wind gust sampling moved to 1 Hz during gusts over 25 mph; steady wind still reports every 60 s to save the battery.</li>
      <li class="fix"><span class="scope">[fix]</span> Barometer drift after firmware updates — the sensor now recalibrates against the 24 h rolling mean instead of trusting its first reading.</li>
    </ul>
  </div>

  <div class="release">
    <div class="rh"><span class="ver">v2.3.2</span><span class="dim">2026-08-11 · STABLE</span></div>
    <ul>
      <li class="fix"><span class="scope">[fix]</span> Stations with older LoRa radios dropped off the mesh after 72 h uptime. Heartbeat interval now adapts to radio generation.</li>
      <li><span class="scope">[ui]</span> The e-ink status screen shows signal hops as arrows instead of a number. Farmers asked; farmers received.</li>
    </ul>
  </div>

  <div class="release">
    <div class="rh"><span class="ver">v2.3.0</span><span class="dim">2026-06-30 · STABLE</span></div>
    <ul>
      <li><span class="scope">[radio]</span> Long-range mode: 915 MHz profile tuned for tree cover, roughly 2× the practical range in forest.</li>
      <li><span class="scope">[api]</span> Local JSON endpoint on the station's own Wi-Fi — <span class="dim">GET /v1/now</span> returns the current reading without the cloud.</li>
      <li class="fix"><span class="scope">[fix]</span> Solar charge controller reported 100% at dusk. It was lying. It reports honestly now.</li>
    </ul>
  </div>

  <div class="cmd">
    <div><span class="prompt">field-ops@northlight</span><span class="dim">:~$</span> <span class="cursor"></span></div>
  </div>

  <footer>
    <div>NORTHLIGHT SYSTEMS · FIRMWARE FEED · UPDATED 2026-10-01</div>
    <div>Demo page. Northlight is a fictional company, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
