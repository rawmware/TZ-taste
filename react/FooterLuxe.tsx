/* <!--tz-meta {"id":"react-footer-luxe","title":"Luxe footer (React)","category":"React","file":"react/FooterLuxe.tsx","tags":["react","footer"],"description":"Near-black footer with champagne numerals marking each quiet serif link row. Translated from the luxe footer pattern.","dnas":["dark-luxe"]} --> */
// Usage: <FooterLuxe wordmark="Vesper" rows={[{numeral:"01", label:"The collection", href:"#"}]} legal="© 2026 Vesper Atelier · By appointment only" colophon="Set in Cormorant Garamond · Printed after dark" />

interface FooterRow {
  numeral: string;
  label: string;
  href: string;
}

interface FooterLuxeProps {
  wordmark: string;
  rows: FooterRow[];
  legal: string;
  colophon: string;
}

export default function FooterLuxe(props: FooterLuxeProps) {
  const { wordmark, rows, legal, colophon } = props;
  return (
    <footer className="tz-luxefoot">
      <style>{`
        .tz-luxefoot{background:#0e0d0b;color:#ece5d8;font-family:'Cormorant Garamond',Georgia,serif;
          padding:clamp(56px,8vw,110px) clamp(24px,6vw,96px) 30px}
        .tz-luxefoot-rows{border-top:1px solid #ece5d822;margin-bottom:56px;max-width:1240px;
          margin-left:auto;margin-right:auto}
        .tz-luxefoot-row{display:grid;grid-template-columns:80px 1fr 40px;align-items:baseline;
          gap:20px;padding:26px 0;border-bottom:1px solid #ece5d822;color:#ece5d8;
          text-decoration:none}
        .tz-luxefoot-n{font-family:'Space Mono',monospace;font-size:14px;color:#c9a96a;
          letter-spacing:.1em}
        .tz-luxefoot-t{font-size:clamp(26px,4.5vw,46px);letter-spacing:-.02em;font-weight:400;
          transition:transform .35s cubic-bezier(.22,1,.36,1)}
        .tz-luxefoot-a{color:#c9a96a;font-size:22px;text-align:right;opacity:0;
          transform:translateX(-12px);
          transition:opacity .3s ease,transform .35s cubic-bezier(.22,1,.36,1)}
        .tz-luxefoot-row:hover .tz-luxefoot-t{transform:translateX(12px)}
        .tz-luxefoot-row:hover .tz-luxefoot-a{opacity:1;transform:translateX(0)}
        .tz-luxefoot-base{display:flex;justify-content:space-between;align-items:baseline;
          gap:16px;flex-wrap:wrap;max-width:1240px;margin:0 auto;
          font-family:'Outfit',Arial,sans-serif;font-size:13px;color:#8a8177}
        .tz-luxefoot-word{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;
          font-size:20px;color:#ece5d8}
        .tz-luxefoot-colophon{width:100%;margin-top:22px;padding-top:18px;
          border-top:1px solid #ece5d822;font-family:'Space Mono',monospace;
          font-size:11px;letter-spacing:.18em;text-transform:uppercase}
        @media (max-width:520px){
          .tz-luxefoot-row{grid-template-columns:56px 1fr 32px;gap:12px}
        }
        @media (prefers-reduced-motion:reduce){
          .tz-luxefoot-t,.tz-luxefoot-a{transition:none}
        }
      `}</style>
      <nav className="tz-luxefoot-rows" aria-label="Footer">
        {rows.map((r) => (
          <a className="tz-luxefoot-row" href={r.href} key={r.numeral}>
            <span className="tz-luxefoot-n">{r.numeral}</span>
            <span className="tz-luxefoot-t">{r.label}</span>
            <span className="tz-luxefoot-a" aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
      <div className="tz-luxefoot-base">
        <span className="tz-luxefoot-word">{wordmark}</span>
        <span>{legal}</span>
        <span className="tz-luxefoot-colophon">{colophon}</span>
      </div>
    </footer>
  );
}
