/* <!--tz-meta {"id":"react-logo-marquee","title":"Logo ticker marquee (React)","category":"React","file":"react/LogoMarquee.tsx","tags":["react","marquee","logos"],"description":"Industrial-brutalist ticker: numbered condensed Anton wordmarks scrolling under a hazard stripe, orange diamonds, factory spec plate below.","dnas":["industrial-brutalist"]} --> */
// Usage: <LogoMarquee label="Trusted on the factory floor" names={["Harborline","Kestrel & Co.","Ferrostat","Northpier","Vantablock","Osmo"]} plate={[["Run","N°04"],["Belt speed","60 ft/min"],["Shift","Est. 2026"]]} />

interface LogoMarqueeProps {
  label: string;
  names: string[];
  plate: [string, string][];
}

export default function LogoMarquee(props: LogoMarqueeProps) {
  const { label, names, plate } = props;
  const loop = [...names, ...names];
  return (
    <section className="tz-marq" aria-label="Client logos">
      <style>{`
        .tz-marq{background:#d8d8d4;color:#141412;font-family:'Space Grotesk',Arial,sans-serif;
          padding:0 0 56px}
        .tz-marq-hazard{height:14px;
          background:repeating-linear-gradient(45deg,#ff4d00 0 18px,#141412 18px 36px)}
        .tz-marq-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.3em;
          text-transform:uppercase;color:#5c5c58;padding:26px clamp(20px,5vw,80px) 20px;
          display:flex;align-items:center;gap:16px;margin:0}
        .tz-marq-label::after{content:"";flex:1;height:2px;background:#141412}
        .tz-marq-band{background:#141412;color:#d8d8d4;overflow:hidden;
          border-top:3px solid #141412;border-bottom:3px solid #141412}
        .tz-marq-track{display:flex;align-items:center;width:max-content;
          animation:tz-marq-roll 26s linear infinite;padding:20px 0}
        .tz-marq-cell{display:flex;align-items:center;flex:none}
        .tz-marq-idx{font-family:'JetBrains Mono',monospace;font-size:11px;color:#ff4d00;
          padding-left:34px;letter-spacing:.1em}
        .tz-marq-name{font-family:'Anton',Arial,sans-serif;font-size:clamp(26px,3.4vw,44px);
          text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;padding:0 26px 0 12px}
        .tz-marq-sep{width:12px;height:12px;background:#ff4d00;transform:rotate(45deg);flex:none}
        @keyframes tz-marq-roll{to{transform:translateX(-50%)}}
        .tz-marq-band:hover .tz-marq-track{animation-play-state:paused}
        .tz-marq-plate{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          border-top:3px solid #141412;margin-top:0}
        .tz-marq-plate div{padding:16px clamp(20px,5vw,80px);border-right:3px solid #141412}
        .tz-marq-plate div:last-child{border-right:0}
        .tz-marq-plate dt{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.28em;
          text-transform:uppercase;color:#5c5c58;margin:0 0 6px}
        .tz-marq-plate dd{margin:0;font-family:'Anton',Arial,sans-serif;font-size:22px;
          text-transform:uppercase;letter-spacing:.03em}
        @media (prefers-reduced-motion:reduce){.tz-marq-track{animation:none}}
      `}</style>
      <div className="tz-marq-hazard" aria-hidden="true" />
      <p className="tz-marq-label">{label}</p>
      <div className="tz-marq-band">
        <div className="tz-marq-track">
          {loop.map((n, i) => (
            <span className="tz-marq-cell" key={`${n}-${i}`}>
              <span className="tz-marq-idx">{String((i % names.length) + 1).padStart(2, "0")}</span>
              <span className="tz-marq-name">{n}</span>
              <span className="tz-marq-sep" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
      <dl className="tz-marq-plate">
        {plate.map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
    </section>
  );
}
