/* <!--tz-meta {"id":"react-hero-vaporwave","title":"Vaporwave hero (React)","category":"React","file":"react/HeroVaporwave.tsx","tags":["react","hero","vaporwave"],"description":"Amber-to-rose slitted sunset disc over a perspective grid floor, chrome Unbounded headline, on-air mono row. Translated from the vaporwave hero pattern.","dnas":["y2k-chrome"]} --> */
// Usage: <HeroVaporwave onAir="On air · Fridays 11 PM" headlineA="Afterglow" headlineB="FM 88.9" tagline="..." ctaLabel="Tune in live" ctaHref="#listen" ident={[["Frequency","88.9 FM"],["Since","1986"],["Tower","Parking garage B"]]} />

interface HeroVaporwaveProps {
  onAir: string;
  headlineA: string;
  headlineB: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  ident: [string, string][];
}

export default function HeroVaporwave(props: HeroVaporwaveProps) {
  const { onAir, headlineA, headlineB, tagline, ctaLabel, ctaHref, ident } = props;
  return (
    <section className="tz-vw" aria-label="Broadcast">
      <style>{`
        .tz-vw{background:#0d0d12;color:#f4f4f8;position:relative;overflow:hidden;
          padding:clamp(90px,12vw,170px) clamp(24px,7vw,100px) clamp(150px,20vw,260px);
          font-family:'Space Grotesk',Arial,sans-serif}
        .tz-vw-sun{position:absolute;top:6%;left:50%;transform:translateX(-50%);
          width:min(430px,78vw);aspect-ratio:1;border-radius:50%;pointer-events:none;
          background:linear-gradient(to bottom,#ffd319 0%,#ff9a3c 34%,#ff5e62 62%,#e5386a 100%);
          -webkit-mask-image:repeating-linear-gradient(to bottom,#000 0 16px,transparent 16px 24px);
          mask-image:repeating-linear-gradient(to bottom,#000 0 16px,transparent 16px 24px);
          opacity:.92}
        .tz-vw-floor{position:absolute;left:-20%;right:-20%;bottom:-6%;height:46%;pointer-events:none;
          background:
            repeating-linear-gradient(to right,#ff6b8a55 0 2px,transparent 2px 72px),
            repeating-linear-gradient(to bottom,#ff6b8a55 0 2px,transparent 2px 44px);
          transform:perspective(420px) rotateX(62deg);transform-origin:bottom;
          -webkit-mask-image:linear-gradient(to top,#000 30%,transparent 95%);
          mask-image:linear-gradient(to top,#000 30%,transparent 95%)}
        .tz-vw-onair{position:relative;font-family:'Space Mono',monospace;font-size:12px;
          letter-spacing:.26em;text-transform:uppercase;margin:0 0 26px;color:#ffd319}
        .tz-vw-dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:#ff3b5c;
          margin-right:12px;animation:tz-vw-pulse 1.6s ease-in-out infinite}
        @keyframes tz-vw-pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 #ff3b5c88}
          50%{opacity:.55;box-shadow:0 0 0 7px transparent}}
        .tz-vw-h{position:relative;font-family:'Unbounded',Arial,sans-serif;font-weight:800;
          line-height:.94;letter-spacing:-.02em;font-size:clamp(64px,13vw,190px);margin:0 0 30px;
          background:linear-gradient(180deg,#ffffff 0%,#cfd4dc 34%,#6b7280 49%,#f2f4f8 52%,#98a0ad 78%,#e6e9ef 100%);
          -webkit-background-clip:text;background-clip:text;color:transparent;
          filter:drop-shadow(0 6px 24px #ff5e6244)}
        .tz-vw-sub{position:relative;font-size:clamp(15px,1.6vw,18px);line-height:1.65;
          max-width:40ch;margin:0 0 40px;color:#f4f4f8cc}
        .tz-vw-cta{position:relative;display:inline-block;text-decoration:none;color:#0d0d12;
          background:#ffd319;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          font-size:14px;padding:18px 40px;
          transition:transform .25s cubic-bezier(.22,1,.36,1)}
        .tz-vw-cta:hover{transform:translateY(-3px) skewX(-6deg)}
        .tz-vw-ident{position:relative;display:flex;gap:34px;flex-wrap:wrap;margin:64px 0 0;
          padding-top:20px;border-top:1px solid #ffffff26;max-width:640px}
        .tz-vw-ident div{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;
          text-transform:uppercase;color:#6e6e80}
        .tz-vw-ident strong{display:block;color:#ffd319;font-weight:400;margin-top:6px;font-size:13px}
        @media (prefers-reduced-motion:reduce){.tz-vw-dot{animation:none}}
        @media (max-width:520px){.tz-vw-h{font-size:clamp(56px,20vw,104px)}}
      `}</style>
      <div className="tz-vw-sun" aria-hidden="true" />
      <div className="tz-vw-floor" aria-hidden="true" />
      <p className="tz-vw-onair"><span className="tz-vw-dot" aria-hidden="true" />{onAir}</p>
      <h1 className="tz-vw-h">{headlineA}<br />{headlineB}</h1>
      <p className="tz-vw-sub">{tagline}</p>
      <a className="tz-vw-cta" href={ctaHref}>{ctaLabel}</a>
      <div className="tz-vw-ident">
        {ident.map(([k, v]) => (
          <div key={k}>{k}<strong>{v}</strong></div>
        ))}
      </div>
    </section>
  );
}
