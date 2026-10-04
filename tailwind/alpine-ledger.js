//tz-meta {"id":"tailwind-alpine-ledger","title":"Alpine Ledger Tailwind preset","category":"Tailwind","file":"tailwind/alpine-ledger.js","tags":["tailwind","alpine-ledger"],"description":"Tailwind theme preset for the Alpine Ledger style DNA.","dnas":["alpine-ledger"]}
/** TZ-taste DNA: Alpine Ledger — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
  theme: {
    extend: {
      colors: {
      bg: "#f0e6d2",
      ink: "#2b2118",
      accent: "#b33a2b",
      muted: "#7a6c58",
      line: "#c9b98f"
      },
      fontFamily: {
      display: ["Special Elite"],
      body: ["Karla"],
      mono: ["IBM Plex Mono"]
      }
    }
  }
};
