//tz-meta {"id":"tailwind-ticket-stub","title":"Ticket Stub Tailwind preset","category":"Tailwind","file":"tailwind/ticket-stub.js","tags":["tailwind","ticket-stub"],"description":"Tailwind theme preset for the Ticket Stub style DNA.","dnas":["ticket-stub"]}
/** TZ-taste DNA: Ticket Stub — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f1ece1",
    "tz-ink": "#241f18",
    "tz-accent": "#b23a2e",
    "tz-muted": "#8a7d66",
    "tz-line": "#241f182b",
    "tz-surface": "#e3d9c4"
   },
   "fontFamily": {
    "display": ["Oswald"],
    "body": ["Public Sans"],
    "mono": ["DM Mono"]
   }
  }
 },
 "plugins": []
};
