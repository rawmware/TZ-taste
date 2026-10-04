/* <!--tz-meta {"id":"react-faq-accordion","title":"FAQ accordion (React)","category":"React","file":"react/FaqAccordion.tsx","tags":["react","faq"],"description":"Scandi-calm accordion: hairline dividers, serif numerals, a plus that folds into a cross. One open at a time.","dnas":["scandi-calm"]} --> */
// Usage: <FaqAccordion eyebrow="Questions" title="Asked often, answered plainly." items={[{q:"...", a:"..."}]} />
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  eyebrow: string;
  title: string;
  items: FaqItem[];
}

export default function FaqAccordion(props: FaqAccordionProps) {
  const { eyebrow, title, items } = props;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="tz-faq" aria-label="Frequently asked questions">
      <style>{`
        .tz-faq{background:#faf7f1;color:#2e2a25;font-family:'DM Sans',Arial,sans-serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px)}
        .tz-faq-inner{max-width:760px;margin:0 auto}
        .tz-faq-eyebrow{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.24em;
          text-transform:uppercase;color:#9a917f;margin:0 0 16px}
        .tz-faq h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;
          font-size:clamp(30px,4.5vw,52px);margin:0 0 48px;letter-spacing:-.01em}
        .tz-faq-item{border-top:1px solid #e4dccb}
        .tz-faq-item:last-child{border-bottom:1px solid #e4dccb}
        .tz-faq-q{width:100%;background:none;border:0;cursor:pointer;display:grid;
          grid-template-columns:64px 1fr 32px;gap:16px;align-items:center;text-align:left;
          padding:26px 0;font:inherit;color:inherit}
        .tz-faq-n{font-family:'DM Serif Display',Georgia,serif;font-size:20px;color:#a9805a}
        .tz-faq-qt{font-size:18px;font-weight:600;letter-spacing:-.01em}
        .tz-faq-x{position:relative;width:18px;height:18px;justify-self:end}
        .tz-faq-x::before,.tz-faq-x::after{content:"";position:absolute;background:#2e2a25;
          left:8px;top:0;width:2px;height:18px;transition:transform .3s cubic-bezier(.22,1,.36,1)}
        .tz-faq-x::after{transform:rotate(90deg)}
        .tz-faq-q[aria-expanded="true"] .tz-faq-x::before{transform:rotate(45deg)}
        .tz-faq-q[aria-expanded="true"] .tz-faq-x::after{transform:rotate(135deg)}
        .tz-faq-a{padding:0 0 30px 80px;font-size:16px;line-height:1.75;color:#2e2a25;
          max-width:58ch;animation:tz-faq-in .25s ease}
        @keyframes tz-faq-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
        @media (prefers-reduced-motion:reduce){.tz-faq-a{animation:none}.tz-faq-x::before,.tz-faq-x::after{transition:none}}
        @media (max-width:560px){.tz-faq-q{grid-template-columns:44px 1fr 28px}.tz-faq-a{padding-left:60px}}
      `}</style>
      <div className="tz-faq-inner">
        <p className="tz-faq-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className="tz-faq-item" key={item.q}>
              <button
                type="button"
                className="tz-faq-q"
                aria-expanded={isOpen}
                aria-controls={`tz-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="tz-faq-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="tz-faq-qt">{item.q}</span>
                <span className="tz-faq-x" aria-hidden="true" />
              </button>
              {isOpen && (
                <div className="tz-faq-a" id={`tz-faq-a-${i}`}>{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
