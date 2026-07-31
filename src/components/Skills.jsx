import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">02 / stack</div>
          <h2 className="section-title">The toolchain I reach for.</h2>
          <p className="section-sub">Grouped the way I'd actually query it — by platform, then by job.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map(group => (
            <div key={group.title} className="skills__card panel">
              <div className="skills__card-head">
                <h3 className="skills__card-title">{group.title}</h3>
                <span className="mono skills__card-cmd">{group.mono}</span>
              </div>
              <div className="skills__chips">
                {group.items.map(item => (
                  <span key={item} className="tag skills__chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .skills__card { padding: 22px; }
        .skills__card-head { margin-bottom: 16px; }
        .skills__card-title { font-size: 15px; font-weight: 600; }
        .skills__card-cmd { display: block; font-size: 11px; color: var(--text-faint); margin-top: 4px; }
        .skills__chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .skills__chip { color: var(--text-dim); }

        @media (max-width: 980px) { .skills__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .skills__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
