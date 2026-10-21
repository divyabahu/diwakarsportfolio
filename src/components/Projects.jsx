import { projects } from '../data.js'

const look = {
  'Internal SaaS Product': { icon: 'fas fa-gauge-high', g: 'var(--g-teal)' },
  'Cloud Migration': { icon: 'fas fa-server', g: 'var(--g-copper)' },
  'Cost Optimization': { icon: 'fas fa-coins', g: 'var(--g-slate)' },
  'Business Continuity': { icon: 'fas fa-shield-halved', g: 'var(--g-blue)' },
  'Modernization': { icon: 'fas fa-cubes', g: 'var(--g-red)' },
}
const fallback = ['var(--g-teal)', 'var(--g-copper)', 'var(--g-slate)', 'var(--g-blue)', 'var(--g-red)']

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">My work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Initiatives I've led end to end, spanning governance, migration, cost, resilience and modernization.</p>
        </div>

        <div className="pj__grid">
          {projects.map((p, i) => {
            const l = look[p.tag] || { icon: 'fas fa-diagram-project', g: fallback[i % fallback.length] }
            return (
              <article key={p.name} className="pj__card card reveal">
                <div className="pj__banner" style={{ background: l.g }}>
                  <span className="pj__tag">{p.tag}</span>
                  <i className={`${l.icon} pj__icon`} />
                </div>
                <div className="pj__body">
                  <h3 className="pj__name">{p.name}</h3>
                  <p className="pj__desc">{p.description}</p>
                  <div className="pill-row pj__stack">
                    {p.stack.map(s => <span key={s} className="pill">{s}</span>)}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        .pj__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .pj__card { overflow: hidden; display: flex; flex-direction: column; }
        .pj__banner {
          position: relative; height: 128px; color: #fff;
          display: flex; align-items: flex-end; justify-content: space-between; padding: 18px 20px;
          overflow: hidden;
        }
        .pj__banner::after {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px);
          background-size: 14px 14px; opacity: .55; pointer-events: none;
        }
        .pj__tag { position: relative; z-index: 1; font-size: 11.5px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; padding: 5px 11px; border-radius: 999px; background: rgba(255,255,255,0.2); }
        .pj__icon { position: relative; z-index: 1; font-size: 46px; opacity: .9; }
        .pj__body { padding: 22px 22px 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .pj__name { font-size: 18px; font-weight: 700; color: var(--primary); }
        .pj__desc { font-size: 14px; color: var(--muted); line-height: 1.7; flex: 1; }

        @media (max-width: 1020px) { .pj__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .pj__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
