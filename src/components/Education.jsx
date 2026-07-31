import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">06 / education</div>
          <h2 className="section-title">Formal grounding.</h2>
        </div>

        <div className="edu__list">
          {education.map(e => (
            <div key={e.school} className="edu__row">
              <div className="edu__period mono">{e.period}</div>
              <div>
                <div className="edu__degree">{e.degree}</div>
                <div className="edu__school">{e.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu__list { display: flex; flex-direction: column; }
        .edu__row {
          display: grid; grid-template-columns: 140px 1fr; gap: 24px;
          padding: 22px 0; border-top: 1px solid var(--border);
        }
        .edu__period { font-size: 12.5px; color: var(--text-faint); padding-top: 2px; }
        .edu__degree { font-size: 16px; font-weight: 600; }
        .edu__school { font-size: 13.5px; color: var(--text-dim); margin-top: 4px; }

        @media (max-width: 620px) { .edu__row { grid-template-columns: 1fr; gap: 6px; } }
      `}</style>
    </section>
  )
}
