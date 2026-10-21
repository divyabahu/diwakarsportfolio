import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">My journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-sub">Where the work happened: migrations, governance, security and cost across AWS and Azure.</p>
        </div>

        <div className="tl">
          {experience.map(job => (
            <div key={job.company} className="tl__item reveal">
              <span className="tl__dot" />
              <article className="tl__card card">
                <header className="tl__head">
                  <span className="tl__date">{job.period}</span>
                  <h3 className="tl__role">{job.role}</h3>
                  <div className="tl__company">{job.company}</div>
                  <div className="tl__loc"><i className="fas fa-location-dot" /> {job.location}</div>
                </header>
                <div className="tl__body">
                  <ul className="tl__points">
                    {job.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                  {job.tags && (
                    <div className="pill-row tl__tags">
                      {job.tags.map(t => <span key={t} className="pill">{t}</span>)}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tl { position: relative; max-width: 940px; margin: 0 auto; padding-left: 44px; }
        .tl::before { content: ''; position: absolute; left: 12px; top: 8px; bottom: 8px; width: 3px; border-radius: 3px; background: var(--primary); }
        .tl__item { position: relative; }
        .tl__item + .tl__item { margin-top: 36px; }
        .tl__dot {
          position: absolute; left: -40px; top: 26px; width: 18px; height: 18px; border-radius: 50%;
          background: var(--primary); border: 4px solid var(--bg); box-shadow: 0 0 0 2px var(--primary);
        }
        .tl__card { overflow: hidden; }
        .tl__card:hover { transform: none; }
        .tl__head { background: var(--g-teal); color: #fff; padding: 22px 26px; }
        .tl__date { display: inline-block; font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 999px; background: rgba(255,255,255,0.2); }
        .tl__role { font-size: 21px; font-weight: 700; margin-top: 12px; }
        .tl__company { font-size: 15px; font-weight: 500; margin-top: 4px; opacity: .95; }
        .tl__loc { font-size: 12.5px; opacity: .85; margin-top: 6px; }
        .tl__body { padding: 22px 26px 24px; }
        .tl__points { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; }
        .tl__points li { position: relative; padding-left: 20px; font-size: 14.5px; color: var(--muted); line-height: 1.65; }
        .tl__points li::before {
          content: ''; position: absolute; left: 0; top: 8px;
          border-left: 7px solid var(--primary); border-top: 4.5px solid transparent; border-bottom: 4.5px solid transparent;
        }
        .tl__tags { margin-top: 18px; }

        @media (max-width: 620px) {
          .tl { padding-left: 30px; }
          .tl::before { left: 6px; }
          .tl__dot { left: -32px; width: 16px; height: 16px; }
          .tl__head, .tl__body { padding-left: 18px; padding-right: 18px; }
        }
      `}</style>
    </section>
  )
}
