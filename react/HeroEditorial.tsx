/* <!--tz-meta {"id":"react-hero-editorial","title":"Editorial hero (React)","category":"React","file":"react/HeroEditorial.tsx","tags":["react","hero","editorial"],"description":"Mono eyebrow, oversized Fraunces headline, hairline meta row, arch graphic and a rotated margin label. Translated from the editorial hero pattern.","dnas":["editorial-serif"]} --> */
// Usage: <HeroEditorial eyebrow="A design study · N°01" headlineStart="Considered work," headlineEm="delivered" headlineEnd="quietly." meta={["Est. 2026","Portsmouth, NH","Available worldwide"]} ctaLabel="See the work" ctaHref="#work" marginLabel="Field notes — Vol. 4" />

interface HeroEditorialProps {
  eyebrow: string;
  headlineStart: string;
  headlineEm: string;
  headlineEnd: string;
  meta: string[];
  ctaLabel: string;
  ctaHref: string;
  marginLabel: string;
}

export default function HeroEditorial(props: HeroEditorialProps) {
  const { eyebrow, headlineStart, headlineEm, headlineEnd, meta, ctaLabel, ctaHref, marginLabel } = props;
  return (
    <section className="tz-edhero" aria-label="Intro">
      <style>{`
        .tz-edhero{background:#f5f1e8;color:#1c1a15;position:relative;overflow:hidden;
          padding:clamp(64px,9vw,128px) clamp(24px,6vw,96px);
          font-family:'Newsreader',Georgia,serif}
        .tz-edhero-margin{position:absolute;left:18px;top:50%;transform:translateY(-50%) rotate(180deg);
          writing-mode:vertical-rl;font-family:'Space Mono',monospace;font-size:10px;
          letter-spacing:.28em;text-transform:uppercase;color:#6f6a5e;white-space:nowrap}
        .tz-edhero-grid{display:grid;grid-template-columns:1.4fr .8fr;gap:clamp(32px,5vw,80px);
          max-width:1240px;margin:0 auto;align-items:end}
        .tz-edhero-eyebrow{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;
          text-transform:uppercase;color:#6f6a5e;margin:0 0 26px}
        .tz-edhero h1{font-family:'Fraunces',Georgia,serif;font-weight:400;
          font-size:clamp(46px,7.5vw,104px);line-height:1.02;letter-spacing:-.03em;
          margin:0 0 34px;max-width:13ch}
        .tz-edhero h1 em{font-style:italic;color:#b5461f}
        .tz-edhero-meta{display:flex;gap:26px;flex-wrap:wrap;border-top:1px solid #1c1a1526;
          border-bottom:1px solid #1c1a1526;padding:13px 0;margin:0 0 38px;
          font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.14em;
          text-transform:uppercase;color:#6f6a5e}
        .tz-edhero-link{color:#1c1a15;text-decoration:none;border-bottom:2px solid #b5461f;
          padding-bottom:4px;font-size:20px}
        .tz-edhero-link span{display:inline-block;transition:transform .3s cubic-bezier(.22,1,.36,1)}
        .tz-edhero-link:hover span{transform:translateX(6px)}
        @media (prefers-reduced-motion:reduce){.tz-edhero-link span{transition:none}}
        .tz-edhero-fig{margin:0}
        .tz-edhero-arch{width:100%;max-width:300px;aspect-ratio:3/4;border-radius:999px 999px 0 0;
          background:linear-gradient(160deg,#c96f3f,#7a2f14)}
        .tz-edhero-cap{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.12em;
          text-transform:uppercase;color:#6f6a5e;margin:16px 0 0}
        @media (max-width:760px){
          .tz-edhero-grid{grid-template-columns:1fr}
          .tz-edhero-margin{display:none}
          .tz-edhero-arch{max-width:220px}
        }
      `}</style>
      <p className="tz-edhero-margin" aria-hidden="true">{marginLabel}</p>
      <div className="tz-edhero-grid">
        <div>
          <p className="tz-edhero-eyebrow">{eyebrow}</p>
          <h1>{headlineStart} <em>{headlineEm}</em> {headlineEnd}</h1>
          <div className="tz-edhero-meta">
            {meta.map((m) => <span key={m}>{m}</span>)}
          </div>
          <a className="tz-edhero-link" href={ctaHref}>{ctaLabel} <span>→</span></a>
        </div>
        <figure className="tz-edhero-fig">
          <div className="tz-edhero-arch" aria-hidden="true" />
          <figcaption className="tz-edhero-cap">Fig. 01 — The quiet arch</figcaption>
        </figure>
      </div>
    </section>
  );
}
