/* <!--tz-meta {"id":"react-testimonial-wall","title":"Testimonial wall (React)","category":"React","file":"react/TestimonialWall.tsx","tags":["react","testimonials"],"description":"Offset masonry wall of quotes in Parisian chic: serif pull quotes, atelier numerals, no two cards alike.","dnas":["parisian-chic"]} --> */
// Usage: <TestimonialWall eyebrow="Word of mouth" title="Worn in, not worn out." closing="Collected at the counter, autumn 2026." quotes={[{numeral:"N°1", quote:"...", name:"Camille R.", role:"Bride, June 2026"}]} />

interface Quote {
  numeral: string;
  quote: string;
  name: string;
  role: string;
}

interface TestimonialWallProps {
  eyebrow: string;
  title: string;
  closing: string;
  quotes: Quote[];
}

export default function TestimonialWall(props: TestimonialWallProps) {
  const { eyebrow, title, closing, quotes } = props;
  return (
    <section className="tz-wall" aria-label="Testimonials">
      <style>{`
        .tz-wall{background:#faf7f2;color:#141210;font-family:'Jost',Arial,sans-serif;
          padding:clamp(72px,9vw,140px) clamp(20px,5vw,80px)}
        .tz-wall-inner{max-width:1180px;margin:0 auto}
        .tz-wall-eyebrow{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.26em;
          text-transform:uppercase;color:#8a8178;margin:0 0 16px}
        .tz-wall h2{font-family:'Playfair Display',Georgia,serif;font-weight:400;
          font-size:clamp(34px,5vw,64px);letter-spacing:-.01em;margin:0 0 14px}
        .tz-wall-rule{width:64px;height:2px;background:#141210;margin:0 0 56px}
        .tz-wall-masonry{columns:3 280px;column-gap:40px}
        .tz-wall-card{break-inside:avoid;margin:0 0 40px;border-top:1px solid #e4ddd2;
          padding-top:22px;transition:opacity .25s ease}
        .tz-wall-card:hover{opacity:.78}
        @media (prefers-reduced-motion:reduce){.tz-wall-card{transition:none}}
        .tz-wall-card:nth-child(3n+2){margin-top:48px}
        .tz-wall-num{font-family:'Playfair Display',Georgia,serif;font-style:italic;
          font-size:15px;color:#8a8178;margin:0 0 14px}
        .tz-wall-card blockquote{font-family:'Playfair Display',Georgia,serif;
          font-size:clamp(19px,1.8vw,23px);line-height:1.5;margin:0 0 20px;font-weight:400}
        .tz-wall-card:nth-child(4n+1) blockquote{font-size:clamp(24px,2.4vw,30px);font-style:italic}
        .tz-wall-card:first-child blockquote::first-letter{font-size:2.4em;float:left;
          line-height:.9;padding-right:10px;color:#141210}
        .tz-wall-who{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#141210}
        .tz-wall-role{font-size:13px;color:#8a8178;margin-top:4px}
        .tz-wall-closing{margin:56px 0 0;padding-top:24px;border-top:1px solid #e4ddd2;
          font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.22em;
          text-transform:uppercase;color:#8a8178}
        @media (max-width:640px){.tz-wall-card:nth-child(3n+2){margin-top:0}}
      `}</style>
      <div className="tz-wall-inner">
        <p className="tz-wall-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="tz-wall-rule" aria-hidden="true" />
        <div className="tz-wall-masonry">
          {quotes.map((q) => (
            <figure className="tz-wall-card" key={q.numeral}>
              <p className="tz-wall-num">{q.numeral}</p>
              <blockquote>“{q.quote}”</blockquote>
              <figcaption>
                <div className="tz-wall-who">{q.name}</div>
                <div className="tz-wall-role">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="tz-wall-closing">{closing}</p>
      </div>
    </section>
  );
}
