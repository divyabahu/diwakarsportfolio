import { education } from '../data.js'

const icons = ['fa-graduation-cap', 'fa-building-columns', 'fa-school', 'fa-book-open']

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">Learning</span>
          <h2 className="section-title">Education</h2>
          <p className="section-sub">Formal grounding, from mechanical engineering to cloud computing.</p>
        </div>

        <div className="ed__grid">
          {education.map((e, i) => (
            <div key={e.school} className="ed__card card reveal">
              <span className="icon-circle"><i className={`fas ${icons[i % icons.length]}`} /></span>
              <div>
                <span className="ed__period">{e.period}</span>
                <h3 className="ed__degree">{e.degree}</h3>
                <div className="ed__school">{e.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ed__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 980px; margin: 0 auto; }
        .ed__card { padding: 22px; display: flex; gap: 16px; align-items: flex-start; }
        .ed__period { display: inline-block; font-size: 11.5px; font-weight: 600; color: var(--primary); background: var(--primary-50); padding: 4px 10px; border-radius: 999px; }
        .ed__degree { font-size: 16.5px; font-weight: 700; margin-top: 8px; }
        .ed__school { font-size: 13.5px; color: var(--muted); margin-top: 3px; }
        @media (max-width: 720px) { .ed__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
