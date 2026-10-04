<!--tz-meta {"id":"threejs-hero","title":"Three.js hero section","file":"prompts/threejs-hero.md","description":"Interactive WebGL hero: one scene, one interaction, real fallback, perf budget enforced."} -->
# Prompt: Three.js hero section

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an interactive Three.js/WebGL hero section for [SITE NAME].

- **What the site is:** [one sentence]
- **The scene concept:** [what the 3D scene depicts and what the user does to it]
- **Audience:** [who lands here, on what hardware — be honest about GPUs]
- **Feeling:** [3 adjectives — e.g. "weightless, precise, alive"]
- **Structure:** full-bleed canvas layer → overlaid headline + one CTA →
  scroll cue → the rest of the page below (built simply, the hero is the star)
- **Constraints:** [stack, e.g. "React Three Fiber + Tailwind"]; renders clean
  at 1440/768/390; respects prefers-reduced-motion (kills the scene);
  WCAG AA contrast on overlaid text; works on a mid-range phone without
  melting it.

WebGL hero rules:

- The scene serves the design read, not the other way around. "Floating
  abstract shapes" is not a concept — tie every element to what the site is
  about (a particle field of [THEIR DATA], a wireframe of [THEIR OBJECT]).
- One interaction, done well: pointer parallax, scroll-driven camera, or
  click-to-transform. Not all three. The motion must explain or delight —
  never just move.
- Perf budget stated up front: target 60fps on desktop, 30fps minimum on
  mobile, geometry/texture counts named. If it can't hit the budget, simplify
  the scene — never ship a janky hero.
- Reduced-motion and no-WebGL both get a designed fallback: a static frame of
  the scene (or a composed CSS/SVG version), not a blank black box and not
  an error.
- Text over the canvas stays legible: a real scrim strategy from the DNA
  (solid panel, blur, or gradient from the bg token — never a random dark
  overlay on a stock photo).
- Loading state is designed: a branded loader or a fade from the fallback
  frame. The canvas never pops in unannounced.

Do NOT build: a purple/blue gradient as the "scene"; Inter as the body font;
autoplay camera chaos with no user control; three equal feature cards below
the hero; emoji as icons. If the output resembles a template, redesign it
before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, the scene concept in one
line, and the hero's one distinctive choice.
