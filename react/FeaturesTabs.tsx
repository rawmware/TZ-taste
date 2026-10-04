/* <!--tz-meta {"id":"react-features-tabs","title":"Tabbed features (React)","category":"React","file":"react/FeaturesTabs.tsx","tags":["react","features","tabs"],"description":"Blueprint-styled tabs where every feature reads like a labeled schematic figure with spec tables and corner registration marks.","dnas":["blueprint-tech"]} --> */
// Usage: <FeaturesTabs title="The instrument, annotated." features={[{id:"scan", fig:"FIG. 1", label:"Surface scan", title:"...", body:"...", specs:[["Range","0–400m"],["Rate","12 Hz"]]}]} />
import { useState } from "react";

interface FeatureTab {
  id: string;
  fig: string;
  label: string;
  title: string;
  body: string;
  specs: [string, string][];
}

interface FeaturesTabsProps {
  title: string;
  features: FeatureTab[];
  defaultIndex?: number;
}

export default function FeaturesTabs(props: FeaturesTabsProps) {
  const { title, features, defaultIndex = 0 } = props;
  const [active, setActive] = useState(defaultIndex);
  const current = features[active] || features[0];

  return (
    <section className="tz-feats" aria-label="Features">
      <style>{`
        .tz-feats{background:#17407f;color:#f2f6fc;font-family:'IBM Plex Mono',monospace;
          padding:clamp(64px,8vw,120px) clamp(20px,5vw,80px);position:relative;
          background-image:
            repeating-linear-gradient(to right,#ffffff10 0 1px,transparent 1px 48px),
            repeating-linear-gradient(to bottom,#ffffff10 0 1px,transparent 1px 48px)}
        .tz-feats-inner{max-width:1080px;margin:0 auto;position:relative}
        .tz-feats h2{font-family:'Space Grotesk',Arial,sans-serif;font-size:clamp(28px,4vw,46px);
          font-weight:700;letter-spacing:-.02em;margin:0 0 12px}
        .tz-feats-sub{color:#8fb3e8;font-size:14px;margin:0 0 40px;max-width:52ch;line-height:1.7}
        .tz-feats-tabs{display:flex;gap:0;border:1px solid #ffffff40;margin-bottom:0;flex-wrap:wrap}
        .tz-feats-tab{background:transparent;border:0;border-right:1px solid #ffffff40;
          color:#8fb3e8;font:inherit;font-size:13px;letter-spacing:.1em;text-transform:uppercase;
          padding:18px 26px;cursor:pointer;transition:color .2s ease,background .2s ease}
        .tz-feats-tab:last-child{border-right:0}
        .tz-feats-tab:hover{color:#f2f6fc}
        .tz-feats-tab[aria-selected="true"]{background:#ffcf3f;color:#17407f;font-weight:700}
        .tz-feats-panel{border:1px solid #ffffff40;border-top:0;padding:clamp(28px,4vw,52px);
          display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,64px);position:relative;
          animation:tz-feats-in .25s ease}
        @keyframes tz-feats-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
        .tz-feats-fig{font-size:11px;letter-spacing:.24em;color:#ffcf3f;margin:0 0 16px}
        .tz-feats-panel h3{font-family:'Space Grotesk',Arial,sans-serif;font-size:clamp(22px,2.6vw,32px);
          margin:0 0 18px;letter-spacing:-.01em}
        .tz-feats-panel p{font-size:14px;line-height:1.8;color:#f2f6fc;margin:0}
        .tz-feats-specs{width:100%;border-collapse:collapse;font-size:13px}
        .tz-feats-specs td{border-bottom:1px dashed #ffffff40;padding:12px 4px;vertical-align:top}
        .tz-feats-specs td:first-child{color:#8fb3e8;letter-spacing:.08em;text-transform:uppercase;
          font-size:11px;width:42%}
        .tz-feats-specs td:last-child{text-align:right;color:#ffcf3f}
        .tz-feats-corner{position:absolute;width:14px;height:14px;pointer-events:none}
        .tz-feats-corner::before,.tz-feats-corner::after{content:"";position:absolute;background:#f2f6fc}
        .tz-feats-corner::before{width:14px;height:2px}
        .tz-feats-corner::after{width:2px;height:14px}
        .tz-c-tl{top:-1px;left:-1px}.tz-c-tr{top:-1px;right:-1px;transform:scaleX(-1)}
        .tz-c-bl{bottom:-1px;left:-1px;transform:scaleY(-1)}.tz-c-br{bottom:-1px;right:-1px;transform:scale(-1)}
        @media (prefers-reduced-motion:reduce){.tz-feats-panel{animation:none}}
        @media (max-width:760px){.tz-feats-panel{grid-template-columns:1fr}}
      `}</style>
      <div className="tz-feats-inner">
        <h2>{title}</h2>
        <p className="tz-feats-sub">Each function below is drawn to the same drawing standard as the hardware it runs on. Dimensions verified at manufacture.</p>
        <div className="tz-feats-tabs" role="tablist" aria-label="Features">
          {features.map((f, i) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              className="tz-feats-tab"
              onClick={() => setActive(i)}
            >
              {f.fig} — {f.label}
            </button>
          ))}
        </div>
        {current && (
          <div className="tz-feats-panel" role="tabpanel">
            <span className="tz-feats-corner tz-c-tl" aria-hidden="true" />
            <span className="tz-feats-corner tz-c-tr" aria-hidden="true" />
            <span className="tz-feats-corner tz-c-bl" aria-hidden="true" />
            <span className="tz-feats-corner tz-c-br" aria-hidden="true" />
            <div>
              <p className="tz-feats-fig">{current.fig}</p>
              <h3>{current.title}</h3>
              <p>{current.body}</p>
            </div>
            <table className="tz-feats-specs">
              <tbody>
                {current.specs.map(([k, v]) => (
                  <tr key={k}><td>{k}</td><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
