#!/usr/bin/env node
// Scaffold a Three.js scene page.
// Usage: node scripts/scene-new.mjs --id <slug> --title "Title"
// Refuses to overwrite an existing file (exit 1).

import { writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const USAGE = `scene-new — scaffold a Three.js scene for TZ-taste

usage: node scripts/scene-new.mjs --id <slug> --title "Title"

  --id       kebab-case id, e.g. copper-orbit (file: three-d/<id>.html)
  --title    human-readable title, e.g. "Copper Orbit"
  --help     print this help

Creates three-d/<id>.html: tz-meta first line (category "3D"), an importmap
pinned to three@0.160.0, a simple original animated starter scene (a rotating
torus knot under warm key light), a resize handler, prefers-reduced-motion
support (renders one static frame), a caption overlay div, and a WebGL-failure
message. Refuses if the file already exists.`;

function parseArgs(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { flags.help = true; continue; }
    if (a.startsWith("--")) {
      const eq = a.indexOf("=");
      if (eq > -1) { flags[a.slice(2, eq)] = a.slice(eq + 1); }
      else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) { flags[a.slice(2)] = argv[++i]; }
      else { flags[a.slice(2)] = true; }
    }
  }
  return flags;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const titleCase = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const flags = parseArgs(process.argv.slice(2));
if (flags.help) { console.log(USAGE); process.exit(0); }

const id = flags.id;
if (!id) { console.error("error: missing --id\n\n" + USAGE); process.exit(2); }
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
  console.error(`error: invalid id "${id}" — use kebab-case, e.g. copper-orbit`);
  process.exit(2);
}
const title = flags.title || titleCase(id);

const rel = `three-d/${id}.html`;
const full = join(root, rel);
if (existsSync(full)) {
  console.error(`error: ${rel} already exists — refusing to overwrite (exit 1)`);
  process.exit(1);
}

const meta = JSON.stringify({
  id,
  title,
  category: "3D",
  file: rel,
  tags: ["threejs"],
  description: "Starter scene: a rotating torus knot under warm key light on a dark studio backdrop.",
  dnas: [],
});

const html = `<!--tz-meta ${meta} -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — TZ-taste 3D</title>
<style>
  html, body {
    margin: 0; height: 100%; overflow: hidden;
    background: radial-gradient(120% 90% at 50% 30%, #1b1e26 0%, #0d0f14 70%, #08090c 100%);
  }
  canvas { display: block; }
  .caption {
    position: fixed; left: 18px; bottom: 16px; color: #9aa3b2; pointer-events: none;
    font: 12px/1.6 system-ui, -apple-system, sans-serif; letter-spacing: .14em;
    text-transform: uppercase; opacity: .9;
  }
  .caption small { display: block; letter-spacing: .05em; text-transform: none; opacity: .6; }
  .fallback {
    position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
    color: #9aa3b2; font: 14px/1.6 system-ui, sans-serif; padding: 2rem; text-align: center;
  }
</style>
<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}</script>
</head>
<body>
<div class="caption">${esc(title)}<small>seeded starter scene · replace with your own geometry</small></div>
<div class="fallback" id="fallback" hidden>WebGL is unavailable in this browser, so this scene cannot render.</div>
<script type="module">
import * as THREE from 'three';

var fallback = document.getElementById('fallback');
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// WebGL-failure guard: show the message, never a blank page.
var renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  if (!renderer.getContext()) throw new Error('no context');
} catch (err) {
  fallback.hidden = false;
  throw err;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x0d0f14, 16, 40);

var camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4.5, 2.2, 8);

// Warm key + cool fill + rim: simple three-point studio setup.
var key = new THREE.DirectionalLight(0xffd9a0, 2.2);
key.position.set(5, 6, 4);
scene.add(key);
var fill = new THREE.DirectionalLight(0x7fa8ff, 0.7);
fill.position.set(-6, 1, 3);
scene.add(fill);
scene.add(new THREE.AmbientLight(0x404860, 0.6));
var rim = new THREE.DirectionalLight(0xffffff, 1.1);
rim.position.set(-2, 4, -6);
scene.add(rim);

// Starter geometry: a torus knot in a warm metallic material.
// TODO: replace with your own composition.
var knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1.4, 0.42, 220, 36),
  new THREE.MeshStandardMaterial({ color: 0xc97b2d, metalness: 0.85, roughness: 0.32 })
);
scene.add(knot);

var ring = new THREE.Mesh(
  new THREE.TorusGeometry(3.1, 0.02, 12, 180),
  new THREE.MeshBasicMaterial({ color: 0x5b6b80, transparent: true, opacity: 0.35 })
);
ring.rotation.x = Math.PI / 2.4;
scene.add(ring);

// Floor disc to ground the composition.
var floor = new THREE.Mesh(
  new THREE.CircleGeometry(9, 64),
  new THREE.MeshStandardMaterial({ color: 0x101218, roughness: 0.95, metalness: 0 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2.4;
scene.add(floor);

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', resize);

var start = performance.now();
function renderFrame() {
  var t = (performance.now() - start) / 1000;
  knot.rotation.y = t * 0.35;
  knot.rotation.x = Math.sin(t * 0.2) * 0.25;
  ring.rotation.z = t * 0.06;
  renderer.render(scene, camera);
}

if (reduced) {
  // Reduced motion: one static frame, no loop.
  renderFrame();
} else {
  renderer.setAnimationLoop(renderFrame);
}
</script>
</body>
</html>
`;

writeFileSync(full, html, "utf8");
console.log(`created ${rel}`);
console.log(`next: swap in your own geometry, then add "${id}" to three-d/index.json`);
