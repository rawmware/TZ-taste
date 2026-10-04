//tz-meta {"id":"tailwind-typewriter-repair","title":"Typewriter Repair Tailwind preset","category":"Tailwind","file":"tailwind/typewriter-repair.js","tags":["tailwind","typewriter-repair"],"description":"Tailwind theme preset for the Typewriter Repair style DNA.","dnas":["typewriter-repair"]}
/** TZ-taste DNA: Typewriter Repair — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#ece7d8",
    "tz-ink": "#26221c",
    "tz-accent": "#8f3b2a",
    "tz-muted": "#857a64",
    "tz-line": "#26221c2b",
    "tz-surface": "#dbd0b4"
   },
   "fontFamily": {
    "display": ["Special Elite"],
    "body": ["Courier Prime"],
    "mono": ["IBM Plex Mono"]
   }
  }
 },
 "plugins": []
};
