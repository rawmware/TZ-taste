//tz-meta {"id":"tailwind-y2k-chrome","title":"Y2K Chrome Tailwind preset","category":"Tailwind","file":"tailwind/y2k-chrome.js","tags":["tailwind","y2k-chrome"],"description":"Tailwind theme preset for the Y2K Chrome style DNA.","dnas":["y2k-chrome"]}
/** TZ-taste DNA: Y2K Chrome — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#0d0d12",
      ink: "#f4f4f8",
      accent: "#b8c5ff",
      muted: "#6e6e80",
      line: "#ffffff26",
      surface: "#15151d"
      },
      fontFamily: {
      display: ["Unbounded"],
      body: ["Space Grotesk"],
      mono: ["Space Mono"]
      }
    }
  }
};
