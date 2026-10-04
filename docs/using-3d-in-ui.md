<!--tz-meta {"id":"using-3d-in-ui","title":"Using 3D in UI","file":"docs/using-3d-in-ui.md","description":"When 3D helps vs hurts, Three.js performance budgets, fallbacks, and tasteful integration patterns."} -->
# Using 3D in UI

3D on the web is a superpower with a slop problem. A spinning abstract
blob behind a centered hero is the 2025 equivalent of the purple
gradient — technically impressive, instantly recognizable as
defaulted. This guide is the line between a 3D moment that elevates a
page and one that embarrasses it. (The repo's `three-d/` directory holds
reference scenes; the AEGIS demo pattern — Three.js ops constellation —
is the caliber to aim for.)

## When 3D helps

3D earns its place when it does something flat design can't:

1. **Product visualization.** A configurator, a physical product you can
   orbit, a space you can enter. If the thing is 3D in real life, 3D on
   the page is honest.
2. **Spatial data.** Network graphs, constellations, maps, molecular or
   architectural models. Data with real spatial relationships deserves
   real space.
3. **The signature hero moment.** One page, one scene, one idea — the
   DNA's concept rendered in depth. `y2k-chrome`'s liquid-metal hero is
   the canonical example: the DNA *is* dimensional, so flat would be
   the compromise.
4. **Material storytelling.** Showing craft — brushed metal, glass,
   fabric — where the material is the product (watches, furniture,
   fashion).

## When 3D hurts

1. **Content pages.** Docs, blogs, marketing copy, dashboards, forms.
   Nobody ever wished a pricing table was rotatable. 3D behind content
   competes with reading — the page's actual job.
2. **As decoration for a weak layout.** If the page needs a 3D blob to
   look interesting, the layout failed. Fix the composition first; 3D
   is not spackle.
3. **On the critical path.** If the 3D scene blocks content, delays
   interactivity, or is the first thing that must load — it's hurting.
   Content first, scene second, always.
4. **When it's generic.** Abstract floating shapes, particle fields,
   wireframe terrains with no connection to the product. Ask: "could
   this exact scene sit behind any company's hero?" If yes, it's
   decoration — cut it or make it specific.
5. **Low-end devices and emerging markets.** If your audience is on
   3-year-old Androids, a 60fps desktop scene is a slideshow for them.
   Know the audience before committing.

The test: **remove the 3D. Is the page still good?** If yes, the 3D is
a bonus — keep it. If no, the 3D was load-bearing decoration — fix the
page, then decide if 3D still belongs.

## The one-scene rule

One 3D scene per page. Not a hero scene plus a product viewer plus a
background canvas — one. Multiple WebGL contexts multiply GPU cost and
halve the impact of each. The scene gets:

- A **poster frame**: the first frame (or a designed static image)
  renders immediately, scene hydrates after. No blank canvas, ever.
- A **loading state with progress**: "Loading 3D scene…" plus a real
  percentage if assets are heavy. Silent black rectangles read as
  broken.
- A **kill switch**: `prefers-reduced-motion` → static poster frame.
  WebGL unavailable → static poster frame. Both are common; both must
  look intentional, not like an error.

## Performance budgets

Three.js scenes that feel premium obey budgets. Numbers:

| Budget | Target | Why |
|---|---|---|
| Draw calls | under 100 (under 50 ideal) | Each call is CPU overhead; mobile GPUs choke past ~150 |
| Triangles | under 500k desktop, under 150k mobile | Fill-rate and vertex cost scale with pixels × geometry |
| Textures | under 25MB total, compressed (KTX2/Basis) | Uncompressed 4K textures are 64MB each — instant death on mobile |
| JS bundle (three) | tree-shaken imports, not the whole lib | `three` full is ~600KB min; import from `three/src` or use addons selectively |
| Frame time | 16.6ms sustained (60fps), 33ms minimum (30fps floor) | Below 30fps, motion reads as broken, not cinematic |
| Load | scene interactive under 3s on 4G | Past 3s, most users never see it |

**Techniques that pay for themselves:**

- **Instancing** (`InstancedMesh`) for repeated geometry — one draw
  call for thousands of objects. Particle fields, grids, forests.
- **LOD** (level of detail) — swap geometry by camera distance.
- **Baked lighting** over real-time shadows where possible. One
  directional shadow map at 1020–2048px; everything else baked into
  textures or faked with gradients.
- **`powerPreference: "high-performance"`** on desktop, and cap
  `pixelRatio` at 2 (1.5 on mobile). Retina at 3x pixel ratio quadruples
  fill cost for invisible gains.
- **Pause offscreen.** `IntersectionObserver` → stop the render loop
  when the canvas leaves the viewport. A hidden scene burning GPU is
  pure waste.
- **DRACO-compressed** glTF for geometry, **KTX2/Basis** for textures.
  A 20MB model becomes 2MB. Non-negotiable for production.

**Profiling:** Chrome devtools → Performance → look for long frames;
`renderer.info` for draw calls and triangles. Test on a real mid-range
phone, not just your dev machine. Your M-series laptop is not your
user's phone.

## Tasteful integration patterns

How the scene sits in the page matters more than the scene itself:

1. **Behind content, dimmed.** The scene is atmosphere; the headline is
   the message. Dim the scene 30–50% (overlay in the DNA's bg color),
   keep text at full contrast. Text fighting a bright scene fails both
   design and accessibility.
2. **Scroll-tied camera.** The camera moves *with* scroll (scrubbed,
   not autoplayed) — the user drives. One axis of motion, subtle range.
   This is choreography (see motion guide), not a screensaver.
3. **Contained, not full-bleed.** A 3D product viewer inside a
   well-designed card beats a full-viewport scene with floating text.
   Containment signals intention.
4. **Material honesty.** Materials should match the DNA: brushed dark
   metal for `dark-luxe`, phosphor-wireframe for `retro-terminal`,
   clay/sticker plastic for `neo-brutalist-pop`, chrome liquid for
   `y2k-chrome`. A generic gray PBR material on every DNA is the 3D
   version of Inter everywhere.
5. **Lighting as brand.** One key light + one rim/accent light in the
   DNA's accent color. Restrained palettes in lighting, same as in CSS.
6. **The scene answers the headline.** Hero says "See your infrastructure
   as a constellation" → the scene is literally that constellation.
   Scene and copy in conversation, not scene as wallpaper.

## Anti-patterns

- **Autoplay orbit with no control.** A scene the user can't stop,
  pause, or influence is a screensaver. Add orbit controls or
  scroll-scrub — or make it static.
- **3D text as the headline.** HTML text is selectable, accessible,
  SEO-visible, and crisply rendered. 3D text is none of those. The
  headline is always HTML.
- **Particle system with no meaning.** 5,000 floating dots that
  represent nothing. If particles encode data (each dot = a server,
  sized by load), they're visualization. Otherwise they're glitter.
- **Loading the scene before content.** The 3D bundle must never block
  First Contentful Paint. `defer`, dynamic `import()`, hydrate after
  idle.
- **Full-screen canvas trapping scroll.** Canvas regions must not
  hijack wheel/touch scroll. `touch-action` and pointer-event
  discipline — the page scrolls, the scene responds.
- **Bloom on everything.** UnrealBloom is the purple gradient of 3D —
  one accent glow is a choice; whole-scene bloom is Vaseline on the
  lens. Use sparingly or not at all.

## Fallback ladder

Every 3D integration ships all four rungs:

1. **Full scene** — WebGL available, motion allowed, device capable.
2. **Static frame** — `prefers-reduced-motion`, or user toggled motion
   off. A beautiful still from the scene, full-bleed in the same
   container. Designed, not a screenshot accident.
3. **Poster / CSS fallback** — WebGL unavailable (old browsers, blocked
   GPU, data-saver mode). A 2D composition in the DNA's tokens that
   carries the same idea. `background-grain.html` / `background-aurora.
   html` in `patterns/` are the lightweight stand-ins.
4. **Nothing** — if the scene fails to load entirely, the layout holds:
   headline, copy, CTA all present and well-composed. The page must
   pass the "remove the 3D" test at runtime, not just in theory.

Detect capability honestly: try creating the context, check
`WEBGL_debug_renderer_info` for software rendering (SwiftShader =
treat as incapable), respect `navigator.connection.saveData`.

## Per-DNA 3D notes

- **y2k-chrome** (motion 8): the native 3D DNA. Liquid metal, iridescent
  materials, floating forms. Go biggest here — but still one scene.
- **acid-rave** (motion 7): hard-edged geometry, flat-shaded, strobe-
  free. Wireframe overlays, brutal camera cuts. No soft bloom.
- **dark-luxe** (motion 4): slow orbital product shots, studio lighting,
  dark reflective surfaces. The watch-ad register.
- **retro-terminal** (motion 3): wireframe, point clouds, ASCII-adjacent
  aesthetics. Green-phosphor data landscapes. Charm over realism.
- **neo-brutalist-pop** (motion 6): clay renders, sticker physics,
  toon shading. Playful depth — think vinyl toy, not PBR showroom.
- **industrial-brutalist** (motion 3): CAD-like, orthographic cameras,
  technical drawing come to life. Precision, not atmosphere.
- **soft-minimal / glass-calm**: probably don't. These DNAs are flat by
  philosophy; 3D here needs an exceptional reason. A soft product render
  in a contained card is the ceiling.
- **editorial-serif / docs-solar / ma-japanese / swiss-rational**: don't.
  3D contradicts these DNAs' concepts. If the brief demands 3D, the
  brief wants a different DNA.

## Self-review checklist

- [ ] The scene passes the removal test: page is good without it
- [ ] One scene per page; poster frame renders immediately
- [ ] Budgets met: <100 draw calls, <500k tris desktop, textures
      compressed, three tree-shaken, 60fps sustained
- [ ] Render loop pauses offscreen; pixelRatio capped; shadows budgeted
- [ ] Reduced motion → static frame; no WebGL → designed 2D fallback;
      load failure → layout holds
- [ ] Scene never blocks content; hydrates after idle via dynamic import
- [ ] Materials and lighting match the DNA; bloom rationed or absent
- [ ] Headline is HTML, not 3D text; particles encode data or are cut
- [ ] Tested on a real mid-range phone, not just the dev machine

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). 3D is a spice,
not a meal — one scene, on purpose, or none at all.*
