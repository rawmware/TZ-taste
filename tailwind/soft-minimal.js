//tz-meta {"id":"tailwind-soft-minimal","title":"Soft Minimal Tailwind preset","category":"Tailwind","file":"tailwind/soft-minimal.js","tags":["tailwind","soft-minimal"],"description":"Tailwind theme preset for the Soft Minimal style DNA.","dnas":["soft-minimal"]}
/** TZ-taste DNA: Soft Minimal — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f7f7f5",
      ink: "#1a1a1a",
      accent: "#5b5bd6",
      muted: "#8a8a93",
      line: "#1a1a1414",
      surface: "#ffffff"
      },
      fontFamily: {
      display: ["Instrument Sans"],
      body: ["Instrument Sans"],
      mono: ["JetBrains Mono"]
      }
    }
  }
};
