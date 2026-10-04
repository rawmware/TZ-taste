/* <!--tz-meta {"id":"react-cta-deploy","title":"Deploy CTA (React)","category":"React","file":"react/CtaDeploy.tsx","tags":["react","cta"],"description":"Laboratory-clean call to action: a typed deploy command with calibration meta, spec table and a single measured button.","dnas":["laboratory-clean"]} --> */
// Usage: <CtaDeploy specimen="Specimen 042 — Launch checklist" title="Ship it before lunch." command="$ deploy --now --region iad" buttonLabel="Run deploy" buttonHref="#deploy" meta={[["Tolerance","±0 errors"],["Calibration","2026-10-03"],["Operator","You"]]} />
import { useEffect, useState } from "react";

interface CtaDeployProps {
  specimen: string;
  title: string;
  command: string;
  buttonLabel: string;
  buttonHref: string;
  meta: [string, string][];
}

export default function CtaDeploy(props: CtaDeployProps) {
  const { specimen, title, command, buttonLabel, buttonHref, meta } = props;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(command);
      return;
    }
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(command.slice(0, i));
      if (i >= command.length) window.clearInterval(id);
    }, 55);
    return () => window.clearInterval(id);
  }, [command]);

  return (
    <section className="tz-deploy" aria-label="Deploy">
      <style>{`
        .tz-deploy{background:#fbfcfd;color:#0f1720;font-family:'IBM Plex Sans',Arial,sans-serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px)}
        .tz-deploy-inner{max-width:920px;margin:0 auto}
        .tz-deploy-spec{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.22em;
          text-transform:uppercase;color:#6b7684;margin:0 0 18px}
        .tz-deploy h2{font-size:clamp(32px,5vw,60px);letter-spacing:-.03em;font-weight:600;
          margin:0 0 36px;max-width:14ch}
        .tz-deploy-term{background:#0f1720;color:#fbfcfd;border:1px solid #dfe4ea;
          padding:26px clamp(20px,4vw,36px);font-family:'IBM Plex Mono',monospace;
          font-size:clamp(16px,2.4vw,22px);margin:0 0 8px;min-height:96px}
        .tz-deploy-cursor{display:inline-block;width:11px;height:20px;background:#0a7d8c;
          vertical-align:-3px;animation:tz-deploy-blink 1s steps(1) infinite;margin-left:4px}
        @keyframes tz-deploy-blink{50%{opacity:0}}
        .tz-deploy-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
          border:1px solid #dfe4ea;border-top:0;margin:0 0 36px}
        .tz-deploy-meta div{padding:14px 18px;border-right:1px solid #dfe4ea;font-size:13px}
        .tz-deploy-meta div:last-child{border-right:0}
        .tz-deploy-meta dt{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.18em;
          text-transform:uppercase;color:#6b7684;margin:0 0 6px}
        .tz-deploy-meta dd{margin:0;font-weight:600}
        .tz-deploy-btn{display:inline-block;background:#0a7d8c;color:#fbfcfd;text-decoration:none;
          font-weight:600;font-size:15px;letter-spacing:.04em;padding:18px 44px;
          transition:transform .25s cubic-bezier(.22,1,.36,1),opacity .2s ease}
        .tz-deploy-btn:hover{transform:translateY(-2px);opacity:.92}
        @media (prefers-reduced-motion:reduce){.tz-deploy-cursor{animation:none}}
      `}</style>
      <div className="tz-deploy-inner">
        <p className="tz-deploy-spec">{specimen}</p>
        <h2>{title}</h2>
        <p className="tz-deploy-term" aria-label={`Command: ${command}`}>
          {typed}<span className="tz-deploy-cursor" aria-hidden="true" />
        </p>
        <dl className="tz-deploy-meta">
          {meta.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <a className="tz-deploy-btn" href={buttonHref}>{buttonLabel}</a>
      </div>
    </section>
  );
}
