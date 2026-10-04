//tz-meta {"id":"tailwind-seed-packet","title":"Seed Packet Tailwind preset","category":"Tailwind","file":"tailwind/seed-packet.js","tags":["tailwind","seed-packet"],"description":"Tailwind theme preset for the Seed Packet style DNA.","dnas":["seed-packet"]}
/** TZ-taste DNA: Seed Packet — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#efe6d0",
    "tz-ink": "#2b2419",
    "tz-accent": "#3f7043",
    "tz-muted": "#7a6c52",
    "tz-line": "#2b24191f",
    "tz-surface": "#e3d4b4"
   },
   "fontFamily": {
    "display": ["Fraunces"],
    "body": ["Spectral"],
    "mono": ["Courier Prime"]
   }
  }
 },
 "plugins": []
};
