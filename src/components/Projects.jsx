import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">04 / projects</div>
          <h2 className="section-title">Initiatives I've led end to end.</h2>
          <p className="section-sub">Selected engagements spanning governance, cost, resilience and modernization.</p>
        </div>

        <div className="proj__grid">
          {projects.map(p => (
            <div key={p.name} className="proj__card panel">
              <div className="proj__tag mono">{p.tag}</div>
              <h3 className="proj__name">{p.name}</h3>
              <p className="proj__desc">{p.description}</p>
              <div className="proj__stack">
                {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .proj__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .proj__card { padding: 26px; display: flex; flex-direction: column; gap: 12px; transition: border-color .15s ease, transform .15s ease; }
        .proj__card:hover { border-color: var(--text-faint); transform: translateY(-2px); }
        .proj__tag { font-size: 11px; color: var(--violet); letter-spacing: .04em; }
        .proj__name { font-size: 18px; font-weight: 600; }
        .proj__desc { font-size: 13.5px; color: var(--text-dim); line-height: 1.65; }
        .proj__stack { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 6px; }

        @media (max-width: 780px) { .proj__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
