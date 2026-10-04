//tz-meta {"id":"tailwind-concrete-poem","title":"Concrete Poem Tailwind preset","category":"Tailwind","file":"tailwind/concrete-poem.js","tags":["tailwind","concrete-poem"],"description":"Tailwind theme preset for the Concrete Poem style DNA.","dnas":["concrete-poem"]}
/** TZ-taste DNA: Concrete Poem — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f7f3ea",
      ink: "#1c1a16",
      accent: "#8c1f28",
      muted: "#8a8072",
      line: "#ddd4c2"
      },
      fontFamily: {
      display: ["Major Mono Display"],
      body: ["Space Mono"],
      mono: ["Space Mono"]
      }
    }
  }
};
