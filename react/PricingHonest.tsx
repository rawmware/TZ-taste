/* <!--tz-meta {"id":"react-pricing-honest","title":"Honest pricing matrix (React)","category":"React","file":"react/PricingHonest.tsx","tags":["react","pricing"],"description":"Comparison matrix that lists what each plan leaves out, not just what it includes. Fine-print strip included.","dnas":["soft-minimal"]} --> */
// Usage: <PricingHonest eyebrow="Pricing" title="Pick the plan you will outgrow last." note="..." plans={[{name, price, period, blurb, highlight, features:[{label, included}]}]} />

interface PlanFeature {
  label: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  blurb: string;
  highlight?: boolean;
  features: PlanFeature[];
}

interface PricingHonestProps {
  eyebrow: string;
  title: string;
  note: string;
  plans: Plan[];
}

function TzCheck() {
  return (
    <svg viewBox="0 0 12 12" width="14" height="14" aria-hidden="true">
      <path d="M2 6.5 5 9.5 10 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingHonest(props: PricingHonestProps) {
  const { eyebrow, title, note, plans } = props;
  const rows = plans[0] ? plans[0].features.map((_, i) => i) : [];
  return (
    <section className="tz-pricing" aria-label="Pricing">
      <style>{`
        .tz-pricing{background:#f7f7f5;color:#1a1a1a;font-family:'Instrument Sans',Arial,sans-serif;
          padding:clamp(64px,8vw,120px) clamp(20px,5vw,80px)}
        .tz-pricing-inner{max-width:1080px;margin:0 auto}
        .tz-pricing-eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;
          text-transform:uppercase;color:#8a8a93;margin:0 0 14px}
        .tz-pricing h2{font-size:clamp(30px,4.5vw,52px);letter-spacing:-.03em;font-weight:600;
          margin:0 0 44px;max-width:16ch}
        .tz-pricing-table{width:100%;border-collapse:collapse;background:#ffffff;
          border:1px solid #1a1a1414}
        .tz-pricing-table th,.tz-pricing-table td{padding:16px 18px;text-align:left;
          border-bottom:1px solid #1a1a1414;font-size:15px;vertical-align:top}
        .tz-pricing-table thead th{border-bottom:2px solid #1a1a1a}
        .tz-pricing-plan{font-weight:600;font-size:17px;display:block}
        .tz-pricing-price{font-family:'JetBrains Mono',monospace;font-size:13px;color:#8a8a93;
          display:block;margin-top:6px}
        .tz-pricing-blurb{font-size:13px;color:#8a8a93;display:block;margin-top:8px;font-weight:400}
        .tz-pricing-feat{color:#1a1a1a}
        .tz-pricing-yes{color:#5b5bd6}
        .tz-pricing-no{color:#8a8a93}
        .tz-pricing-hi{background:#5b5bd6;box-shadow:inset 0 3px 0 #5b5bd6}
        .tz-pricing-table tbody tr{transition:background .2s ease}
        .tz-pricing-table tbody tr:hover{background:#5b5bd608}
        .tz-pricing-note{margin-top:22px;font-size:14px;line-height:1.6;color:#8a8a93;
          border-left:3px solid #5b5bd6;padding-left:16px;max-width:62ch}
        @media (prefers-reduced-motion:reduce){.tz-pricing-table tbody tr{transition:none}}
        .tz-pricing-note strong{color:#1a1a1a;font-weight:600}
        @media (max-width:700px){
          .tz-pricing-table thead th:first-child,.tz-pricing-table tbody td:first-child{display:none}
        }
      `}</style>
      <div className="tz-pricing-inner">
        <p className="tz-pricing-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <table className="tz-pricing-table">
          <thead>
            <tr>
              <th scope="col"><span className="tz-pricing-feat">What&apos;s on the table</span></th>
              {plans.map((p) => (
                <th scope="col" key={p.name} className={p.highlight ? "tz-pricing-hi" : undefined}>
                  <span className="tz-pricing-plan">{p.name}</span>
                  <span className="tz-pricing-price">{p.price} {p.period}</span>
                  <span className="tz-pricing-blurb">{p.blurb}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((i) => (
              <tr key={i}>
                <td className="tz-pricing-feat">{plans[0].features[i].label}</td>
                {plans.map((p) => (
                  <td key={p.name} aria-label={p.features[i].included ? "Included" : "Not included"}>
                    {p.features[i].included
                      ? <span className="tz-pricing-yes"><TzCheck /></span>
                      : <span className="tz-pricing-no">—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="tz-pricing-note"><strong>Fine print, up front:</strong> {note}</p>
      </div>
    </section>
  );
}
