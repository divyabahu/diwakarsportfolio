import { skillGroups } from '../data.js'

// Icon and header colour for each skill group (falls back by position).
const look = {
  'Cloud Platforms': { icon: 'fas fa-cloud', g: 'var(--g-teal)', sub: 'Where everything runs' },
  'AWS Services': { icon: 'fab fa-aws', g: 'var(--g-aws)', sub: 'Day-to-day AWS toolkit' },
  'Azure Services': { icon: 'fab fa-microsoft', g: 'var(--g-blue)', sub: 'Day-to-day Azure toolkit' },
  'Cloud Migration & Virtualization': { icon: 'fas fa-right-left', g: 'var(--g-copper)', sub: 'On-premises to cloud' },
  'DevOps & Automation': { icon: 'fas fa-infinity', g: 'var(--g-slate)', sub: 'Build, ship, automate' },
  'Product Development': { icon: 'fas fa-code', g: 'var(--g-red)', sub: 'SaaS product stack' },
  'Programming & Systems': { icon: 'fas fa-terminal', g: 'var(--g-stone)', sub: 'Languages and operating systems' },
}
const fallback = ['var(--g-teal)', 'var(--g-blue)', 'var(--g-copper)', 'var(--g-slate)', 'var(--g-red)', 'var(--g-stone)']

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">What I know</span>
          <h2 className="section-title">My Skills</h2>
          <p className="section-sub">The toolchain I reach for, grouped by platform and by job.</p>
        </div>

        <div className="sk__grid">
          {skillGroups.map((group, i) => {
            const l = look[group.title] || { icon: 'fas fa-gear', g: fallback[i % fallback.length], sub: '' }
            return (
              <div key={group.title} className="sk__card card reveal">
                <div className="sk__head" style={{ background: l.g }}>
                  <span className="icon-circle icon-circle--glass"><i className={l.icon} /></span>
                  <div>
                    <h3 className="sk__title">{group.title}</h3>
                    {l.sub && <p className="sk__sub">{l.sub}</p>}
                  </div>
                </div>
                <div className="sk__body pill-row">
                  {group.items.map(item => <span key={item} className="pill">{item}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .sk__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .sk__card { overflow: hidden; display: flex; flex-direction: column; }
        .sk__head { display: flex; align-items: center; gap: 14px; padding: 22px 20px; color: #fff; min-height: 92px; }
        .sk__title { font-size: 17px; font-weight: 700; }
        .sk__sub { font-size: 12.5px; opacity: .85; margin-top: 3px; }
        .sk__body { padding: 20px; align-content: flex-start; }

        @media (max-width: 980px) { .sk__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .sk__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
