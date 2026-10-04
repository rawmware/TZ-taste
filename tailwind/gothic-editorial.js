//tz-meta {"id":"tailwind-gothic-editorial","title":"Gothic Editorial Tailwind preset","category":"Tailwind","file":"tailwind/gothic-editorial.js","tags":["tailwind","gothic-editorial"],"description":"Tailwind theme preset for the Gothic Editorial style DNA.","dnas":["gothic-editorial"]}
/** TZ-taste DNA: Gothic Editorial — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#12100c",
      ink: "#e8dfc8",
      accent: "#a33b2e",
      muted: "#7d7261",
      line: "#2e2820"
      },
      fontFamily: {
      display: ["UnifrakturMaguntia"],
      body: ["Cormorant Garamond"],
      mono: ["Space Mono"]
      }
    }
  }
};
