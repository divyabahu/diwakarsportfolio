import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">03 / experience</div>
          <h2 className="section-title">Where the work happened.</h2>
        </div>

        <div className="exp">
          {experience.map((job, i) => (
            <div key={job.company} className="exp__row">
              <div className="exp__meta">
                <div className="exp__period mono">{job.period}</div>
                <div className="exp__location">{job.location}</div>
              </div>

              <div className="exp__line">
                <span className="exp__dot" />
                {i !== experience.length - 1 && <span className="exp__bar" />}
              </div>

              <div className="exp__content panel">
                <h3 className="exp__role">{job.role}</h3>
                <div className="exp__company mono">{job.company}</div>
                <ul className="exp__points">
                  {job.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp { display: flex; flex-direction: column; }
        .exp__row {
          display: grid;
          grid-template-columns: 150px 24px 1fr;
          gap: 24px;
        }
        .exp__meta { padding-top: 28px; text-align: right; }
        .exp__period { font-size: 12.5px; color: var(--text); }
        .exp__location { font-size: 12px; color: var(--text-faint); margin-top: 4px; }

        .exp__line { display: flex; flex-direction: column; align-items: center; }
        .exp__dot { width: 10px; height: 10px; border-radius: 50%; background: var(--azure); margin-top: 32px; box-shadow: 0 0 0 4px rgba(58,160,255,0.15); flex-shrink: 0; }
        .exp__bar { width: 1px; flex: 1; background: var(--border); margin-top: 8px; }

        .exp__content { padding: 24px; margin-bottom: 40px; }
        .exp__role { font-size: 18px; font-weight: 600; }
        .exp__company { font-size: 12.5px; color: var(--azure); margin-top: 4px; }
        .exp__points { margin: 16px 0 0; padding-left: 18px; display: flex; flex-direction: column; gap: 10px; }
        .exp__points li { font-size: 13.5px; color: var(--text-dim); line-height: 1.6; }

        @media (max-width: 720px) {
          .exp__row { grid-template-columns: 20px 1fr; }
          .exp__meta { display: none; }
        }
      `}</style>
    </section>
  )
}
