/* <!--tz-meta {"id":"react-bento-features","title":"Bento features (React)","category":"React","file":"react/BentoFeatures.tsx","tags":["react","bento","features"],"description":"Asymmetric Memphis bento: hard shadows, squiggles, a rotated sticker card. Deliberately never three equal cards.","dnas":["memphis-milano"]} --> */
// Usage: <BentoFeatures eyebrow="What it does" title="Four tricks, zero filler." features={[{tag:"01", title:"...", body:"...", size:"large"}]} />

interface BentoFeature {
  tag: string;
  title: string;
  body: string;
  size: "large" | "wide" | "tall" | "small";
}

interface BentoFeaturesProps {
  eyebrow: string;
  title: string;
  features: BentoFeature[];
}

const sizeClass: Record<BentoFeature["size"], string> = {
  large: "tz-bento-large",
  wide: "tz-bento-wide",
  tall: "tz-bento-tall",
  small: "tz-bento-small",
};

export default function BentoFeatures(props: BentoFeaturesProps) {
  const { eyebrow, title, features } = props;
  return (
    <section className="tz-bento" aria-label="Features">
      <style>{`
        .tz-bento{background:#f7efe3;color:#1c1a22;font-family:'Space Grotesk',Arial,sans-serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px);position:relative;overflow:hidden}
        .tz-bento-inner{max-width:1100px;margin:0 auto;position:relative}
        .tz-bento-eyebrow{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.26em;
          text-transform:uppercase;color:#7a7488;margin:0 0 14px}
        .tz-bento h2{font-family:'Shrikhand',cursive;font-weight:400;
          font-size:clamp(34px,5vw,62px);margin:0 0 12px;letter-spacing:.01em}
        .tz-bento-squig{display:block;margin:0 0 48px}
        .tz-bento-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:150px;
          gap:22px}
        .tz-bento-card{border:3px solid #1c1a22;padding:24px;position:relative;
          box-shadow:7px 7px 0 #1c1a22;transition:transform .25s cubic-bezier(.22,1,.36,1)}
        .tz-bento-card:hover{transform:translate(-3px,-3px)}
        .tz-bento-large{grid-column:span 2;grid-row:span 2;background:#ff4d8d;color:#f7efe3}
        .tz-bento-wide{grid-column:span 2;background:#ffffff}
        .tz-bento-tall{grid-row:span 2;background:#ffd319}
        .tz-bento-small{background:#ffffff}
        .tz-bento-tag{display:inline-block;font-family:'Space Mono',monospace;font-size:11px;
          letter-spacing:.2em;border:2px solid currentColor;padding:5px 10px;margin-bottom:16px}
        .tz-bento-card h3{font-family:'Shrikhand',cursive;font-weight:400;font-size:24px;
          margin:0 0 12px;line-height:1.2}
        .tz-bento-card p{font-size:15px;line-height:1.6;margin:0;max-width:34ch}
        .tz-bento-sticker{position:absolute;top:-18px;right:-14px;background:#1c1a22;color:#f7efe3;
          font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.18em;
          text-transform:uppercase;padding:8px 12px;transform:rotate(6deg)}
        .tz-bento-dots{position:absolute;bottom:18px;right:22px;display:flex;gap:7px}
        .tz-bento-dots i{width:10px;height:10px;border-radius:50%;border:2px solid #1c1a22}
        @media (prefers-reduced-motion:reduce){.tz-bento-card{transition:none}}
        @media (max-width:820px){
          .tz-bento-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:auto}
          .tz-bento-large,.tz-bento-wide{grid-column:span 2}.tz-bento-tall{grid-row:span 1}
        }
      `}</style>
      <div className="tz-bento-inner">
        <p className="tz-bento-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <svg className="tz-bento-squig" width="180" height="20" viewBox="0 0 180 20" aria-hidden="true">
          <path d="M2 12 Q 16 2, 30 12 T 58 12 T 86 12 T 114 12 T 142 12 T 170 12"
            fill="none" stroke="#ff4d8d" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <div className="tz-bento-grid">
          {features.map((f, i) => (
            <article className={`tz-bento-card ${sizeClass[f.size]}`} key={f.tag}>
              {i === 0 && <span className="tz-bento-sticker">Staff pick</span>}
              <span className="tz-bento-tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              {f.size === "large" && (
                <span className="tz-bento-dots" aria-hidden="true"><i /><i /><i /></span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
