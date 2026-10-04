//tz-meta {"id":"tailwind-retro-terminal","title":"Retro Terminal Tailwind preset","category":"Tailwind","file":"tailwind/retro-terminal.js","tags":["tailwind","retro-terminal"],"description":"Tailwind theme preset for the Retro Terminal style DNA.","dnas":["retro-terminal"]}
/** TZ-taste DNA: Retro Terminal — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#0b0f0a",
      ink: "#33ff66",
      accent: "#ffb000",
      muted: "#1f6b3a",
      line: "#33ff6633",
      surface: "#0e140d"
      },
      fontFamily: {
      display: ["IBM Plex Mono"],
      body: ["IBM Plex Mono"],
      mono: ["IBM Plex Mono"]
      }
    }
  }
};
