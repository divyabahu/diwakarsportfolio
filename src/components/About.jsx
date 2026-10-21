import { profile, metrics, services } from '../data.js'
import ArchitectureMap from './ArchitectureMap.jsx'

const metricIcons = ['fa-briefcase', 'fa-sitemap', 'fa-coins', 'fa-right-left']

const facts = [
  { icon: 'fa-location-dot', label: 'Based in', value: profile.location },
  { icon: 'fa-building', label: 'Current role', value: 'Cloud Consultant, Infosprint Technologies' },
  { icon: 'fa-graduation-cap', label: 'Studying', value: 'M.Tech, Cloud Computing — BITS Pilani' },
  { icon: 'fa-award', label: 'Certified', value: 'AWS Solutions Architect — Professional' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">Cloud engineer, migration lead and cost custodian across AWS and Azure.</p>
        </div>

        <div className="about__stats">
          {metrics.map((m, i) => (
            <div key={m.label} className="about__stat card reveal">
              <span className="icon-circle"><i className={`fas ${metricIcons[i % metricIcons.length]}`} /></span>
              <div>
                <div className="about__stat-value">{m.value}</div>
                <div className="about__stat-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>
              I work at the intersection of two clouds. Most days that means reading a client's AWS bill
              like a diagnostic report, tightening an Azure network policy, moving on-premises VMware and
              Hyper-V servers into the cloud, or turning a failed audit into a remediation plan someone can
              actually execute.
            </p>
            <p>
              I care less about which provider "wins" and more about whether the infrastructure is
              resilient, explainable, and priced sensibly.
            </p>

            <ul className="about__facts">
              {facts.map(f => (
                <li key={f.label}>
                  <i className={`fas ${f.icon}`} />
                  <div>
                    <span>{f.label}</span>
                    <strong>{f.value}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__console reveal">
            <div className="about__console-bar">
              <span className="dot dot--red" /><span className="dot dot--amber" /><span className="dot dot--green" />
              <span className="mono about__console-title">infra-status.sh</span>
            </div>
            <div className="about__services">
              {services.map(s => (
                <div key={s.id} className="about__service">
                  <span className={`about__pulse about__pulse--${s.accent}`} />
                  <div className="about__service-body">
                    <div className="about__service-top">
                      <span className="about__service-name">{s.name}</span>
                      <span className="about__service-status mono">{s.status}</span>
                    </div>
                    <div className="about__service-detail mono">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <ArchitectureMap />
          </div>
        </div>
      </div>

      <style>{`
        .about__stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 56px; }
        .about__stat { padding: 20px; display: flex; align-items: center; gap: 14px; }
        .about__stat-value { font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--text); line-height: 1.1; }
        .about__stat-label { font-size: 12.5px; color: var(--muted); margin-top: 4px; line-height: 1.35; }

        .about__grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 48px; align-items: start; }
        .about__text p { color: var(--muted); font-size: 15.5px; line-height: 1.8; }
        .about__text p + p { margin-top: 14px; }
        .about__facts { list-style: none; padding: 0; margin: 28px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .about__facts li {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 14px 16px; border-radius: 12px; background: var(--bg); border: 1px solid var(--border);
        }
        .about__facts i { color: var(--primary); margin-top: 3px; width: 16px; text-align: center; }
        .about__facts span { display: block; font-size: 11.5px; color: var(--faint); text-transform: uppercase; letter-spacing: .06em; }
        .about__facts strong { display: block; font-size: 14px; font-weight: 600; color: var(--text); margin-top: 2px; }

        /* Dark "terminal" card that hosts the live network diagram */
        .about__console {
          --text: #eef3f8; --text-dim: #b4c1d8; --text-faint: #8393b0;
          --panel: #18233f; --panel-2: #1d2a4a; --border: #2b3a60;
          background: linear-gradient(160deg, #13343b, #16202f 60%, #1c2633);
          border-radius: var(--radius); overflow: hidden;
          box-shadow: 0 24px 50px -28px rgba(19,52,59,0.7);
          color: var(--text);
        }
        .about__console-bar { display: flex; align-items: center; gap: 7px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.18); }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot--red { background: #ff5f57; }
        .dot--amber { background: #febc2e; }
        .dot--green { background: #28c840; }
        .about__console-title { margin-left: 8px; font-size: 12px; color: #8393b0; }

        .about__services { padding: 16px 16px 6px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .about__service { display: flex; gap: 10px; padding: 10px 12px; border-radius: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
        .about__service-body { flex: 1; min-width: 0; }
        .about__service-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .about__service-name { font-size: 13px; font-weight: 600; }
        .about__service-status { font-size: 9.5px; color: #3ee0a1; border: 1px solid rgba(62,224,161,0.35); border-radius: 4px; padding: 1px 6px; }
        .about__service-detail { font-size: 10px; color: #8393b0; margin-top: 4px; line-height: 1.5; }
        .about__pulse { width: 8px; height: 8px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; box-shadow: 0 0 0 0 currentColor; animation: about-pulse 2s ease-out infinite; }
        .about__pulse--aws { background: #ff9900; color: rgba(255,153,0,0.5); }
        .about__pulse--azure { background: #3aa0ff; color: rgba(58,160,255,0.5); }
        .about__pulse--green { background: #3ee0a1; color: rgba(62,224,161,0.5); }
        .about__pulse--violet { background: #bb8eff; color: rgba(187,142,255,0.5); }
        @keyframes about-pulse { to { box-shadow: 0 0 0 7px transparent; } }
        .about__console .arch { padding: 10px 16px 18px; }

        @media (max-width: 1020px) {
          .about__stats { grid-template-columns: repeat(2, 1fr); }
          .about__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .about__stats, .about__facts, .about__services { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
