//tz-meta {"id":"tailwind-editorial-serif","title":"Editorial Serif Tailwind preset","category":"Tailwind","file":"tailwind/editorial-serif.js","tags":["tailwind","editorial-serif"],"description":"Tailwind theme preset for the Editorial Serif style DNA.","dnas":["editorial-serif"]}
/** TZ-taste DNA: Editorial Serif — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f5f1e8",
      ink: "#1c1a15",
      accent: "#b5461f",
      muted: "#6f6a5e",
      line: "#1c1a1526",
      surface: "#efe9da"
      },
      fontFamily: {
      display: ["Fraunces"],
      body: ["Newsreader"],
      mono: ["Space Mono"]
      }
    }
  }
};
