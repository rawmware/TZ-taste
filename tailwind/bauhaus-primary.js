//tz-meta {"id":"tailwind-bauhaus-primary","title":"Bauhaus Primary Tailwind preset","category":"Tailwind","file":"tailwind/bauhaus-primary.js","tags":["tailwind","bauhaus-primary"],"description":"Tailwind theme preset for the Bauhaus Primary style DNA.","dnas":["bauhaus-primary"]}
/** TZ-taste DNA: Bauhaus Primary — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f4f1ea",
      ink: "#1a1a1a",
      accent: "#d8342c",
      muted: "#6e6a60",
      line: "#1a1a1a"
      },
      fontFamily: {
      display: ["Archivo Black"],
      body: ["Archivo"],
      mono: ["Space Mono"]
      }
    }
  }
};
