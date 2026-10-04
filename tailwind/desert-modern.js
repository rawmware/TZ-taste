//tz-meta {"id":"tailwind-desert-modern","title":"Desert Modern Tailwind preset","category":"Tailwind","file":"tailwind/desert-modern.js","tags":["tailwind","desert-modern"],"description":"Tailwind theme preset for the Desert Modern style DNA.","dnas":["desert-modern"]}
/** TZ-taste DNA: Desert Modern — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f4ecdc",
      ink: "#33291f",
      accent: "#7fb3c4",
      muted: "#a89a80",
      line: "#dccfb2"
      },
      fontFamily: {
      display: ["DM Serif Display"],
      body: ["DM Sans"],
      mono: ["Space Mono"]
      }
    }
  }
};
