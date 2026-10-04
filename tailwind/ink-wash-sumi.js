//tz-meta {"id":"tailwind-ink-wash-sumi","title":"Ink-Wash Sumi Tailwind preset","category":"Tailwind","file":"tailwind/ink-wash-sumi.js","tags":["tailwind","ink-wash-sumi"],"description":"Tailwind theme preset for the Ink-Wash Sumi style DNA.","dnas":["ink-wash-sumi"]}
/** TZ-taste DNA: Ink-Wash Sumi — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f5f1e8",
      ink: "#1a1a1a",
      accent: "#a33b32",
      muted: "#8a8478",
      line: "#d8d0bd"
      },
      fontFamily: {
      display: ["Zen Old Mincho"],
      body: ["Zen Kaku Gothic New"],
      mono: ["Space Mono"]
      }
    }
  }
};
