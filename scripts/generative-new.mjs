#!/usr/bin/env node
// Scaffold a generative-art page (seeded canvas sketch).
// Usage: node scripts/generative-new.mjs --id my-sketch --title "My Sketch" --kind flow
// Refuses to overwrite an existing file (exit 1).

import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `generative-new — scaffold a generative art page for TZ-taste

usage: node scripts/generative-new.mjs --id <slug> --title "Title" --kind <kind>

  --id       kebab-case id, e.g. flow-field-01 (file: generative/<id>.html)
  --title    human-readable title (default: id with words capitalized)
  --kind     flow | geo | organic | typo (default: flow)
  --help     print this help

Creates generative/<id>.html: tz-meta first line (category "Generative"),
one <style> block with tz-gen-* classes, a header, a 3-button control bar
(New seed / Pause / Clear), a full-viewport canvas, and a vanilla-JS
skeleton with a mulberry32 seeded RNG, a resize handler, and
prefers-reduced-motion support (renders a single static frame).
Refuses if the file already exists.`;

const KINDS = ["flow", "geo", "organic", "typo"];

function parseArgs(argv) {
  const flags = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a.startsWith("--")) {
      const eq = a.indexOf("=");
      if (eq > -1) { flags[a.slice(2, eq)] = a.slice(eq + 1); }
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) { flags[a.slice(2)] = argv[++i]; }
      else { flags[a.slice(2)] = true; }
    } else pos.push(a);
  }
  return { flags, pos };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const titleCase = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const { flags } = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const id = flags.id;
if (!id) { console.error("error: missing --id\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`error: invalid id "${id}" — use kebab-case, e.g. flow-field-01`);
  process.exit(2);
}
const kind = String(flags.kind || "flow").toLowerCase();
if (!KINDS.includes(kind)) {
  console.error(`error: invalid --kind "${kind}" — pick one of: ${KINDS.join(", ")}`);
  process.exit(2);
}
const title = flags.title || titleCase(id);

const rel = `generative/${id}.html`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const meta = JSON.stringify({
  id: `gen-${id}`,
  title,
  category: "Generative",
  file: rel,
  tags: ["generative", kind],
  description: `Seeded ${kind} canvas sketch. New seed / Pause / Clear controls.`,
  dnas: [],
});

// --- per-kind draw bodies (plain JS, no ${} interpolation) ------------------
const kindDraws = {
  flow: `
      // Flow field: hundreds of particles ride a pseudo-Perlin vector field.
      var particles = [];
      for (var i = 0; i < 700; i++) {
        particles.push({ x: rng() * w, y: rng() * h, px: 0, py: 0, s: 0.5 + rng() * 1.5 });
      }
      function fieldAngle(x, y) {
        return (Math.sin(x * 0.004 + seed * 0.13) + Math.cos(y * 0.006 - seed * 0.07)) * Math.PI;
      }
      function step() {
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.px = p.x; p.py = p.y;
          var a = fieldAngle(p.x, p.y);
          p.x += Math.cos(a) * p.s; p.y += Math.sin(a) * p.s;
          if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) { p.x = rng() * w; p.y = rng() * h; p.px = p.x; p.py = p.y; }
        }
      }
      stepFrame = function (alpha) {
        ctx.strokeStyle = "rgba(90, 91, 214, " + alpha + ")";
        ctx.beginPath();
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        step();
      };`,
  geo: `
      // Geo: recursive rotated-square lattice, seeded rotation + palette index.
      var palette = ["#111111", "#5b5bd6", "#e8501e", "#0a7a4e", "#c6a400"];
      var cells = 10 + Math.floor(rng() * 6);
      var hue = palette[Math.floor(rng() * palette.length)];
      stepFrame = function (alpha) {
        ctx.clearRect(0, 0, w, h);
        var cw = w / cells, ch = h / cells;
        var t = (performance.now() / 4000 + seed) % (Math.PI * 2);
        for (var i = 0; i < cells; i++) {
          for (var j = 0; j < cells; j++) {
            ctx.save();
            ctx.translate(i * cw + cw / 2, j * ch + ch / 2);
            ctx.rotate(Math.sin(t + i * 0.6 + j * 0.8) * 0.8);
            ctx.strokeStyle = hue; ctx.globalAlpha = 0.35 + 0.65 * ((i + j) % 3) / 2;
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-cw * 0.36, -ch * 0.36, cw * 0.72, ch * 0.72);
            ctx.restore();
          }
        }
        ctx.globalAlpha = 1;
      };`,
  organic: `
      // Organic: drifting blobby orbits — seeded radii, speeds, and phases.
      var blobs = [];
      for (var i = 0; i < 14; i++) {
        blobs.push({
          r: 40 + rng() * 130,
          orbit: 60 + rng() * 220,
          speed: 0.2 + rng() * 0.6,
          phase: rng() * Math.PI * 2,
          hue: 210 + Math.floor(rng() * 90)
        });
      }
      stepFrame = function () {
        ctx.clearRect(0, 0, w, h);
        var t = performance.now() / 1000;
        for (var i = 0; i < blobs.length; i++) {
          var b = blobs[i];
          var x = w / 2 + Math.cos(t * b.speed + b.phase) * b.orbit;
          var y = h / 2 + Math.sin(t * b.speed * 0.8 + b.phase * 1.3) * b.orbit * 0.7;
          var g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
          g.addColorStop(0, "hsla(" + b.hue + ", 70%, 55%, 0.5)");
          g.addColorStop(1, "hsla(" + b.hue + ", 70%, 55%, 0)");
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(x, y, b.r, 0, Math.PI * 2); ctx.fill();
        }
      };`,
  typo: `
      // Typo: seeded glyph scatter — characters rain and settle into a grid.
      var glyphs = "ABCDEFGHKMNRSTXYZ#&@%*+~";
      var cols = Math.max(8, Math.floor(w / 46));
      var rows = Math.max(6, Math.floor(h / 60));
      var letters = [];
      for (var i = 0; i < cols * rows; i++) {
        letters.push({
          ch: glyphs[Math.floor(rng() * glyphs.length)],
          target: 0.3 + rng() * 0.7,
          speed: 0.02 + rng() * 0.05,
          size: 18 + rng() * 34,
          delay: rng() * 60
        });
      }
      var frame = 0;
      stepFrame = function () {
        ctx.clearRect(0, 0, w, h);
        frame++;
        var cw = w / cols, ch = h / rows;
        for (var i = 0; i < letters.length; i++) {
          var L = letters[i];
          var p = Math.min(1, Math.max(0, (frame - L.delay) * L.speed));
          ctx.globalAlpha = p * L.target;
          ctx.fillStyle = "#111111";
          ctx.font = L.size + "px Georgia, serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          var x = (i % cols) * cw + cw / 2;
          var y = Math.floor(i / cols) * ch + ch / 2 + (1 - p) * 30;
          ctx.fillText(L.ch, x, y);
        }
        ctx.globalAlpha = 1;
      };`,
};

const html = `<!--tz-meta ${meta} -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — TZ-taste Generative</title>
<style>
.tz-gen-wrap {
  --bg: #fafafa;
  --ink: #111111;
  --muted: #6b6b6b;
  --accent: #5b5bd6;
  background: var(--bg);
  color: var(--ink);
  font-family: system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.tz-gen-head { padding: 28px clamp(20px, 5vw, 64px) 12px; }
.tz-gen-head .tz-gen-eyebrow {
  font: 11px/1 ui-monospace, Menlo, monospace;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 10px;
}
.tz-gen-head h1 { font-size: clamp(28px, 4vw, 52px); letter-spacing: -0.02em; margin: 0; }
.tz-gen-head p { color: var(--muted); max-width: 62ch; line-height: 1.65; margin: 12px 0 0; }
.tz-gen-controls {
  display: flex; gap: 12px; flex-wrap: wrap;
  padding: 16px clamp(20px, 5vw, 64px) 20px;
}
.tz-gen-controls button {
  font: 600 14px/1 system-ui, sans-serif;
  padding: 12px 24px;
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  border-radius: 999px;
}
.tz-gen-controls button:hover { background: var(--ink); color: var(--bg); }
.tz-gen-stage { position: relative; flex: 1; min-height: 60vh; margin: 0 clamp(20px, 5vw, 64px) 32px; border: 1px solid #11111122; }
.tz-gen-stage canvas { display: block; width: 100%; height: 100%; }
.tz-gen-seed {
  position: absolute; right: 12px; bottom: 10px;
  font: 11px/1 ui-monospace, Menlo, monospace;
  color: var(--muted); letter-spacing: 0.08em;
}
@media (prefers-reduced-motion: reduce) {
  .tz-gen-controls button:hover { background: transparent; color: var(--ink); }
}
</style>
</head>
<body class="tz-gen-wrap">
<header class="tz-gen-head">
  <p class="tz-gen-eyebrow">Generative · ${esc(kind)}</p>
  <h1>${esc(title)}</h1>
  <p>A seeded canvas sketch — every seed is reproducible. Hit “New seed” to
  re-roll the composition; the same seed always draws the same frame.</p>
</header>
<div class="tz-gen-controls">
  <button id="tz-gen-seed" type="button">New seed</button>
  <button id="tz-gen-pause" type="button" aria-pressed="false">Pause</button>
  <button id="tz-gen-clear" type="button">Clear</button>
</div>
<div class="tz-gen-stage">
  <canvas id="tz-gen-canvas" aria-label="${esc(title)} generative artwork"></canvas>
  <span class="tz-gen-seed" id="tz-gen-seedlabel"></span>
</div>
<script>
(function () {
  "use strict";

  // mulberry32 — small seeded PRNG. Same seed => same sketch.
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var canvas = document.getElementById("tz-gen-canvas");
  var stage = canvas.parentElement;
  var ctx = canvas.getContext("2d");
  var seed = (Math.random() * 1e9) | 0;
  var rng = mulberry32(seed);
  var stepFrame = null; // set by build(); kind-specific draw step
  var paused = false;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var w = 0, h = 0;

  function resize() {
    var r = stage.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(320, Math.floor(r.width));
    h = Math.max(320, Math.floor(r.height));
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build(); // rebuild the composition for the new size
  }

  function build() {
    rng = mulberry32(seed);
    ctx.clearRect(0, 0, w, h);
    document.getElementById("tz-gen-seedlabel").textContent = "seed " + seed;
${kindDraws[kind]}
  }

  function newSeed() {
    seed = (Math.random() * 1e9) | 0;
    build();
  }

  function tick() {
    if (!paused && stepFrame) stepFrame(0.55);
    if (!reduced) requestAnimationFrame(tick);
  }

  document.getElementById("tz-gen-seed").addEventListener("click", newSeed);
  document.getElementById("tz-gen-pause").addEventListener("click", function (e) {
    paused = !paused;
    e.currentTarget.textContent = paused ? "Resume" : "Pause";
    e.currentTarget.setAttribute("aria-pressed", String(paused));
  });
  document.getElementById("tz-gen-clear").addEventListener("click", function () {
    ctx.clearRect(0, 0, w, h);
  });

  window.addEventListener("resize", resize);
  resize();
  if (reduced) {
    // Reduced motion: render one static frame, no loop.
    if (stepFrame) stepFrame(0.8);
  } else {
    requestAnimationFrame(tick);
  }
})();
</script>
</body>
</html>
`;

writeFileSync(full, html, "utf8");
console.log(`created ${rel} (kind: ${kind})`);
console.log(`next: open it in a browser, tweak the draw code, then add "gen-${id}" to generative/index.json`);
