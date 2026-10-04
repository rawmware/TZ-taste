//tz-meta {"id":"tailwind-docs-solar","title":"Docs Solar Tailwind preset","category":"Tailwind","file":"tailwind/docs-solar.js","tags":["tailwind","docs-solar"],"description":"Tailwind theme preset for the Docs Solar style DNA.","dnas":["docs-solar"]}
/** TZ-taste DNA: Docs Solar — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#fdf6e3",
      ink: "#3d3a2e",
      accent: "#cb4b16",
      muted: "#8a8672",
      line: "#3d3a2e1f",
      surface: "#f7eeda"
      },
      fontFamily: {
      display: ["Source Serif 4"],
      body: ["Source Serif 4"],
      mono: ["IBM Plex Mono"]
      }
    }
  }
};
