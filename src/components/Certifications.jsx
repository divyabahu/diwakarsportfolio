import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">05 / certifications</div>
          <h2 className="section-title">Verified, not just claimed.</h2>
        </div>

        <div className="cert__grid">
          {certifications.map(c => (
            <div key={c.code} className="cert__card panel">
              <div className="cert__badge mono">{c.code}</div>
              <div>
                <div className="cert__name">{c.name}</div>
                <div className="cert__level mono">{c.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .cert__card { padding: 20px; display: flex; align-items: center; gap: 16px; }
        .cert__badge {
          font-size: 12px; font-weight: 600; color: var(--aws);
          border: 1px solid rgba(255,159,28,0.4); border-radius: 6px;
          padding: 8px 10px; flex-shrink: 0;
          background: rgba(255,159,28,0.06);
        }
        .cert__name { font-size: 14.5px; font-weight: 500; }
        .cert__level { font-size: 11px; color: var(--text-faint); margin-top: 3px; }

        @media (max-width: 720px) { .cert__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
