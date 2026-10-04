/* <!--tz-meta {"id":"react-nav-mega-menu","title":"Mega menu nav (React)","category":"React","file":"react/NavMegaMenu.tsx","tags":["react","nav"],"description":"Swiss-rational top bar with numbered items and a full-width hover panel of link columns, red index markers throughout.","dnas":["swiss-rational"]} --> */
// Usage: <NavMegaMenu wordmark="Atelier Nord" items={[{label:"Work", href:"#work", panel:[{heading:"Index", links:[{label, href, desc}]}]}]} ctaLabel="Start a project" ctaHref="#contact" />
import { useState } from "react";

interface MegaLink {
  label: string;
  href: string;
  desc?: string;
}

interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

interface MegaItem {
  label: string;
  href: string;
  panel?: MegaColumn[];
}

interface NavMegaMenuProps {
  wordmark: string;
  items: MegaItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function NavMegaMenu(props: NavMegaMenuProps) {
  const { wordmark, items, ctaLabel, ctaHref } = props;
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? items[open] : null;

  return (
    <header className="tz-nav" onMouseLeave={() => setOpen(null)}>
      <style>{`
        .tz-nav{background:#fafafa;color:#111111;font-family:'Archivo',Arial,sans-serif;
          border-bottom:2px solid #111111;position:relative;z-index:50}
        .tz-nav-bar{display:flex;align-items:center;gap:8px;
          padding:0 clamp(16px,3vw,40px);height:68px}
        .tz-nav-word{font-weight:800;letter-spacing:-.02em;font-size:20px;margin-right:32px;
          text-decoration:none;color:#111111;white-space:nowrap}
        .tz-nav-word i{font-style:normal;color:#e30613}
        .tz-nav-item{position:relative}
        .tz-nav-btn{background:none;border:0;cursor:pointer;font:inherit;color:#111111;
          display:flex;align-items:baseline;gap:10px;padding:22px 14px;
          text-transform:uppercase;letter-spacing:.08em;font-size:13px;font-weight:600}
        .tz-nav-num{font-family:'Space Mono',monospace;font-size:10px;color:#e30613}
        .tz-nav-btn::after{content:"";position:absolute;left:14px;right:14px;bottom:14px;
          height:2px;background:#e30613;transform:scaleX(0);transform-origin:left;
          transition:transform .25s cubic-bezier(.22,1,.36,1)}
        .tz-nav-btn:hover::after,.tz-nav-btn[aria-expanded="true"]::after{transform:scaleX(1)}
        .tz-nav-cta{margin-left:auto;background:#111111;color:#fafafa;text-decoration:none;
          text-transform:uppercase;letter-spacing:.1em;font-size:12px;font-weight:700;
          padding:14px 22px;transition:opacity .2s ease}
        .tz-nav-cta:hover{opacity:.82}
        .tz-nav-panel{position:absolute;left:0;right:0;top:100%;background:#f0f0f0;
          border-bottom:2px solid #111111;padding:36px clamp(16px,3vw,40px) 44px;
          display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:36px;animation:tz-nav-in .22s ease}
        @keyframes tz-nav-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
        .tz-nav-col h3{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.2em;
          text-transform:uppercase;color:#6b6b6b;margin:0 0 18px;font-weight:400}
        .tz-nav-col ul{list-style:none;margin:0;padding:0}
        .tz-nav-col li{margin:0 0 14px}
        .tz-nav-link{color:#111111;text-decoration:none;display:flex;gap:12px;align-items:baseline}
        .tz-nav-link .n{font-family:'Space Mono',monospace;font-size:10px;color:#e30613}
        .tz-nav-link .t{font-size:16px;font-weight:600;transition:transform .2s ease}
        .tz-nav-link:hover .t{transform:translateX(5px)}
        .tz-nav-link .d{display:block;font-size:13px;color:#6b6b6b;font-weight:400;margin-top:2px}
        @media (prefers-reduced-motion:reduce){.tz-nav-panel{animation:none}}
        @media (max-width:760px){.tz-nav-item{display:none}.tz-nav-cta{margin-left:auto}}
      `}</style>
      <nav className="tz-nav-bar" aria-label="Primary">
        <a className="tz-nav-word" href="#top">{wordmark}<i>.</i></a>
        {items.map((item, i) => (
          <div className="tz-nav-item" key={item.label}>
            <button
              type="button"
              className="tz-nav-btn"
              aria-expanded={open === i}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="tz-nav-num">{pad(i)}</span>
              {item.label}
            </button>
          </div>
        ))}
        {ctaLabel && <a className="tz-nav-cta" href={ctaHref || "#"}>{ctaLabel}</a>}
      </nav>
      {active && active.panel && (
        <div className="tz-nav-panel">
          {active.panel.map((col) => (
            <div className="tz-nav-col" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map((l, li) => (
                  <li key={l.label}>
                    <a className="tz-nav-link" href={l.href}>
                      <span className="n">{pad(li)}</span>
                      <span className="t">{l.label}{l.desc && <span className="d">{l.desc}</span>}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
