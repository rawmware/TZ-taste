//tz-meta {"id":"tailwind-drive-in-theater","title":"Drive-In Theater Tailwind preset","category":"Tailwind","file":"tailwind/drive-in-theater.js","tags":["tailwind","drive-in-theater"],"description":"Tailwind theme preset for the Drive-In Theater style DNA.","dnas":["drive-in-theater"]}
/** TZ-taste DNA: Drive-In Theater — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#151423",
    "tz-ink": "#f4efe4",
    "tz-accent": "#f2a93b",
    "tz-muted": "#8f8ba0",
    "tz-line": "#f4efe41f",
    "tz-surface": "#211f33"
   },
   "fontFamily": {
    "display": ["Limelight"],
    "body": ["Figtree"],
    "mono": ["IBM Plex Mono"]
   }
  }
 },
 "plugins": []
};
