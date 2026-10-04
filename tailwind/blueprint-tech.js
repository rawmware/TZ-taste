//tz-meta {"id":"tailwind-blueprint-tech","title":"Blueprint Tech Tailwind preset","category":"Tailwind","file":"tailwind/blueprint-tech.js","tags":["tailwind","blueprint-tech"],"description":"Tailwind theme preset for the Blueprint Tech style DNA.","dnas":["blueprint-tech"]}
/** TZ-taste DNA: Blueprint Tech — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#17407f",
      ink: "#f2f6fc",
      accent: "#ffcf3f",
      muted: "#8fb3e8",
      line: "#ffffff40"
      },
      fontFamily: {
      display: ["Space Grotesk"],
      body: ["IBM Plex Mono"],
      mono: ["IBM Plex Mono"]
      }
    }
  }
};
