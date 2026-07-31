import { profile, metrics, services } from '../data.js'
import ArchitectureMap from './ArchitectureMap.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">status: available for new engagements</div>
          <h1 className="hero__title">
            I build cloud platforms that stay <span className="hero__accent">up</span>,
            <br /> stay <span className="hero__accent">governed</span>, and stay
            <br /> <span className="hero__accent">under budget.</span>
          </h1>
          <p className="hero__sub">{profile.summary}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary mono">contact.init()</a>
            <a href="#experience" className="btn btn--ghost mono">view --experience</a>
          </div>

          <div className="hero__metrics">
            {metrics.map(m => (
              <div key={m.label} className="hero__metric">
                <div className="hero__metric-value mono">{m.value}<span>{m.unit}</span></div>
                <div className="hero__metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__console panel">
          <div className="hero__console-bar">
            <span className="dot dot--red" /><span className="dot dot--amber" /><span className="dot dot--green" />
            <span className="mono hero__console-title">infra-status.sh</span>
          </div>
          <div className="hero__console-body">
            {services.map(s => (
              <div key={s.id} className="hero__service">
                <div className="hero__service-top">
                  <span className={`hero__service-pulse hero__service-pulse--${s.accent}`} />
                  <span className="hero__service-name">{s.name}</span>
                  <span className="tag hero__service-status mono">{s.status}</span>
                </div>
                <div className="hero__service-detail mono">{s.detail}</div>
              </div>
            ))}
          </div>
          <ArchitectureMap />
        </div>
      </div>

      <style>{`
        .hero { padding-top: 72px; }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: start;
        }
        .hero__title {
          font-size: clamp(32px, 4.4vw, 52px);
          font-weight: 600;
          line-height: 1.12;
          margin-top: 18px;
        }
        .hero__accent {
          background: linear-gradient(90deg, var(--aws), var(--azure));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero__sub { display: block; margin-top: 22px; color: var(--text-dim); font-size: 16px; line-height: 1.65; max-width: 540px; }
        .hero__cta { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
        .btn { font-size: 13px; padding: 12px 18px; border-radius: 7px; display: inline-block; transition: all .15s ease; }
        .btn--primary { background: var(--text); color: var(--bg); font-weight: 600; }
        .btn--primary:hover { background: var(--azure); color: #04101c; }
        .btn--ghost { border: 1px solid var(--border); color: var(--text-dim); }
        .btn--ghost:hover { border-color: var(--text-faint); color: var(--text); }

        .hero__metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 48px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .hero__metric-value { font-size: 22px; font-weight: 600; color: var(--text); }
        .hero__metric-value span { font-size: 12px; color: var(--text-faint); margin-left: 3px; }
        .hero__metric-label { font-size: 11.5px; color: var(--text-faint); margin-top: 4px; }

        .hero__console { overflow: hidden; }
        .hero__console-bar {
          display: flex; align-items: center; gap: 7px;
          padding: 12px 16px; border-bottom: 1px solid var(--border);
          background: var(--panel-2);
        }
        .dot { width: 9px; height: 9px; border-radius: 50%; opacity: .6; }
        .dot--red { background: var(--red); }
        .dot--amber { background: var(--aws); }
        .dot--green { background: var(--green); }
        .hero__console-title { margin-left: 8px; font-size: 12px; color: var(--text-faint); }

        .hero__console-body { padding: 18px 16px; display: flex; flex-direction: column; gap: 14px; }
        .hero__service { padding: 10px 12px; border: 1px solid var(--border); border-radius: 8px; background: rgba(255,255,255,0.015); }
        .hero__service-top { display: flex; align-items: center; gap: 8px; }
        .hero__service-name { font-size: 13.5px; font-weight: 500; flex: 1; }
        .hero__service-status { color: var(--green); border-color: rgba(63,185,80,0.35); }
        .hero__service-detail { font-size: 11px; color: var(--text-faint); margin-top: 6px; padding-left: 16px; }

        .hero__service-pulse { width: 7px; height: 7px; border-radius: 50%; position: relative; }
        .hero__service-pulse::after {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          animation: pulse 2s ease-out infinite;
        }
        .hero__service-pulse--aws { background: var(--aws); }
        .hero__service-pulse--aws::after { box-shadow: 0 0 0 0 var(--aws); }
        .hero__service-pulse--azure { background: var(--azure); }
        .hero__service-pulse--azure::after { box-shadow: 0 0 0 0 var(--azure); }
        .hero__service-pulse--green { background: var(--green); }
        .hero__service-pulse--green::after { box-shadow: 0 0 0 0 var(--green); }
        .hero__service-pulse--violet { background: var(--violet); }
        .hero__service-pulse--violet::after { box-shadow: 0 0 0 0 var(--violet); }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.25); }
          100% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }

        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; }
          .hero__metrics { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
