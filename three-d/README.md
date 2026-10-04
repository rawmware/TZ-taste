<!--tz-meta {"id":"three-d-readme","title":"3D Scene Collection","file":"three-d/README.md","description":"Index and engine notes for the 30 standalone Three.js ambient scenes."} -->
# three-d/ — ambient 3D scenes

30 standalone, full-page Three.js environments. Use as hero backgrounds,
fullscreen art, or section backdrops. Every file:

- is **100% original code** — geometry and shaders written from scratch for
  this repo (no shadertoy/three.js-example repackaging),
- loads Three.js from CDN via importmap (pinned `three@0.160.0`),
- handles resize, honors `prefers-reduced-motion` (single static frame), shows
  a graceful message if WebGL is unavailable,
- carries a `tz-meta` JSON header on line 1 (id, title, tags, description,
  matching style DNAs).

Browse them via `scripts/gallery-index.mjs`, or open any file directly.

## Scene principles (learned studying engine docs & community work)

These transfer to any engine:

- **Instance anything you repeat.** Instanced meshes cut CPU cost 10–100x;
  engines differ most on per-object draws.
- **Fog is composition.** Match particle/shader fog to scene fog or elements
  float disconnected from the world.
- **Custom per-particle behavior** (direction at emission, noise-influenced
  drift, texture-based fake depth-of-field) beats more particles.
- **Cinematic finish stack:** bloom for glow, filmic/ACES-style tone mapping,
  subtle grain, restrained chromatic aberration.
- **Choreograph the camera.** Slow drift or orbit sells a scene more than any
  single effect; keep motion eased and loopable.
- **Past ~8 lights, rethink.** Use emissive materials + a few key lights
  instead of many real lights.
- **Test Safari early.** It rejects oversized shaders and caps at 60fps.

## Alternative engines

Prefer a different engine? The principles above transfer directly.
[Babylon.js](https://www.babylonjs.com) (Apache-2.0, free and open source) is
the closest full-featured alternative, with built-in GPU particle systems,
PBR materials, and a post-processing pipeline — and its
[Playground](https://doc.babylonjs.com/playground) is worth studying for
lighting and particle ideas. Community norm, everywhere: learn from others'
scenes, don't repackage their code.
