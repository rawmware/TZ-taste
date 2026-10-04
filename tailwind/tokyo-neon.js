//tz-meta {"id":"tailwind-tokyo-neon","title":"Tokyo Neon Tailwind preset","category":"Tailwind","file":"tailwind/tokyo-neon.js","tags":["tailwind","tokyo-neon"],"description":"Tailwind theme preset for the Tokyo Neon style DNA.","dnas":["tokyo-neon"]}
/** TZ-taste DNA: Tokyo Neon — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#0a0a10",
      ink: "#f4f4f0",
      accent: "#ff2e88",
      muted: "#6b6b78",
      line: "#232330"
      },
      fontFamily: {
      display: ["Zen Dots"],
      body: ["Space Grotesk"],
      mono: ["Space Mono"]
      }
    }
  }
};
