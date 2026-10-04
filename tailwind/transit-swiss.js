//tz-meta {"id":"tailwind-transit-swiss","title":"Transit Swiss Tailwind preset","category":"Tailwind","file":"tailwind/transit-swiss.js","tags":["tailwind","transit-swiss"],"description":"Tailwind theme preset for the Transit Swiss style DNA.","dnas":["transit-swiss"]}
/** TZ-taste DNA: Transit Swiss — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#ffffff",
      ink: "#111417",
      accent: "#d0342c",
      muted: "#5c6670",
      line: "#dfe3e6"
      },
      fontFamily: {
      display: ["Archivo"],
      body: ["DM Sans"],
      mono: ["IBM Plex Mono"]
      }
    }
  }
};
