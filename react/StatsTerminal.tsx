/* <!--tz-meta {"id":"react-stats-terminal","title":"Terminal stats readout (React)","category":"React","file":"react/StatsTerminal.tsx","tags":["react","stats"],"description":"Stats rendered as a phosphor-terminal session: command line, dotted leaders, meter bars, scanlines, blinking block cursor.","dnas":["retro-terminal"]} --> */
// Usage: <StatsTerminal command="./report --year 2026" stats={[{label:"Uptime", value:"99.98%", pct:99.98},{label:"Median deploy", value:"41s", pct:62}]} prompt="ops@" />

interface Stat {
  label: string;
  value: string;
  pct?: number;
}

interface StatsTerminalProps {
  command: string;
  stats: Stat[];
  prompt?: string;
}

export default function StatsTerminal(props: StatsTerminalProps) {
  const { command, stats, prompt = "ops@" } = props;
  return (
    <section className="tz-term" aria-label="Statistics">
      <style>{`
        .tz-term{background:#0b0f0a;color:#33ff66;font-family:'IBM Plex Mono',monospace;
          padding:clamp(56px,7vw,110px) clamp(20px,5vw,80px)}
        .tz-term-win{max-width:860px;margin:0 auto;background:#0e140d;
          border:1px solid #33ff6633;position:relative;overflow:hidden}
        .tz-term-win::after{content:"";position:absolute;inset:0;pointer-events:none;
          background:repeating-linear-gradient(to bottom,transparent 0 3px,#00000055 3px 4px)}
        .tz-term-bar{display:flex;gap:8px;align-items:center;padding:12px 16px;
          border-bottom:1px solid #33ff6633}
        .tz-term-dot{width:11px;height:11px;border-radius:50%;border:1px solid #33ff66}
        .tz-term-dot:first-child{background:#33ff66}
        .tz-term-title{margin-left:12px;font-size:12px;color:#1f6b3a;letter-spacing:.1em}
        .tz-term-body{padding:28px clamp(18px,4vw,40px) 36px;font-size:14px;line-height:2}
        .tz-term-cmd{margin:0 0 18px;color:#33ff66}
        .tz-term-cmd .p{color:#ffb000}
        .tz-term-row{display:grid;grid-template-columns:180px 1fr auto;gap:16px;align-items:center;
          margin:0;padding:6px 0}
        .tz-term-label{color:#1f6b3a;text-transform:uppercase;font-size:12px;letter-spacing:.1em}
        .tz-term-meter{height:8px;background:#33ff6614;position:relative}
        .tz-term-fill{position:absolute;inset:0;background:#33ff66;transform-origin:left}
        .tz-term-val{color:#ffb000;min-width:76px;text-align:right}
        .tz-term-cursor{display:inline-block;width:10px;height:18px;background:#33ff66;
          vertical-align:-3px;animation:tz-term-blink 1.1s steps(1) infinite;margin-left:6px}
        @keyframes tz-term-blink{50%{opacity:0}}
        @media (prefers-reduced-motion:reduce){.tz-term-cursor{animation:none}}
        @media (max-width:560px){.tz-term-row{grid-template-columns:1fr auto}.tz-term-meter{display:none}}
      `}</style>
      <div className="tz-term-win">
        <div className="tz-term-bar" aria-hidden="true">
          <span className="tz-term-dot" /><span className="tz-term-dot" /><span className="tz-term-dot" />
          <span className="tz-term-title">stats — 80×24</span>
        </div>
        <div className="tz-term-body">
          <p className="tz-term-cmd"><span className="p">{prompt}$</span> {command}</p>
          {stats.map((s) => (
            <div className="tz-term-row" key={s.label}>
              <span className="tz-term-label">{s.label}</span>
              <span className="tz-term-meter" aria-hidden="true">
                <span className="tz-term-fill" style={{ transform: `scaleX(${(s.pct ?? 50) / 100})` }} />
              </span>
              <span className="tz-term-val">{s.value}</span>
            </div>
          ))}
          <p className="tz-term-cmd" style={{ marginTop: 18 }}>
            <span className="p">{prompt}$</span>
            <span className="tz-term-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}
