/* <!--tz-meta {"id":"react-how-it-works","title":"How it works (React)","category":"React","file":"react/HowItWorks.tsx","tags":["react","steps"],"description":"Museum-placard steps: sticky roman numerals beside catalog-numbered placards with hairline rules.","dnas":["museum-placard"]} --> */
// Usage: <HowItWorks eyebrow="Procedure" title="From crate to wall in three moves." closing="End of procedure — the wall is yours." steps={[{numeral:"I", catalog:"CAT. 001", title:"...", body:"..."}]} />

interface Step {
  numeral: string;
  catalog: string;
  title: string;
  body: string;
}

interface HowItWorksProps {
  eyebrow: string;
  title: string;
  closing: string;
  steps: Step[];
}

export default function HowItWorks(props: HowItWorksProps) {
  const { eyebrow, title, closing, steps } = props;
  return (
    <section className="tz-hiw" aria-label="How it works">
      <style>{`
        .tz-hiw{background:#f7f4ed;color:#1c1a16;font-family:'EB Garamond',Georgia,serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px)}
        .tz-hiw-inner{max-width:1020px;margin:0 auto}
        .tz-hiw-eyebrow{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.26em;
          text-transform:uppercase;color:#7a746a;margin:0 0 16px}
        .tz-hiw h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;
          font-size:clamp(34px,5vw,60px);margin:0 0 64px;max-width:16ch;line-height:1.1}
        .tz-hiw-step{display:grid;grid-template-columns:200px 1fr;gap:clamp(24px,5vw,72px);
          padding:44px 0;border-top:1px solid #d8d3c6;min-height:280px}
        .tz-hiw-step:last-child{border-bottom:1px solid #d8d3c6}
        .tz-hiw-num{position:sticky;top:32px;align-self:start;font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(72px,9vw,128px);line-height:1;color:#8c2b1f;font-weight:400;margin:0;
          transition:transform .35s cubic-bezier(.22,1,.36,1)}
        .tz-hiw-step:hover .tz-hiw-num{transform:translateX(10px)}
        @media (prefers-reduced-motion:reduce){.tz-hiw-num{transition:none}}
        .tz-hiw-cat{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.24em;
          text-transform:uppercase;color:#7a746a;margin:8px 0 20px}
        .tz-hiw-card h3{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;
          font-size:clamp(24px,3vw,34px);margin:0 0 16px;letter-spacing:-.01em}
        .tz-hiw-card p{font-size:19px;line-height:1.7;margin:0;max-width:52ch;color:#1c1a16}
        .tz-hiw-card p + p{margin-top:14px}
        .tz-hiw-closing{margin:48px 0 0;font-family:'Space Mono',monospace;font-size:11px;
          letter-spacing:.26em;text-transform:uppercase;color:#7a746a}
        @media (max-width:680px){
          .tz-hiw-step{grid-template-columns:1fr;min-height:0}
          .tz-hiw-num{position:static;font-size:64px}
        }
      `}</style>
      <div className="tz-hiw-inner">
        <p className="tz-hiw-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {steps.map((s) => (
          <div className="tz-hiw-step" key={s.catalog}>
            <p className="tz-hiw-num" aria-hidden="true">{s.numeral}</p>
            <div className="tz-hiw-card">
              <p className="tz-hiw-cat">{s.catalog}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
        <p className="tz-hiw-closing">{closing}</p>
      </div>
    </section>
  );
}
