import { useState } from 'react'
import { certifications } from '../data.js'

export default function Certifications() {
  const [preview, setPreview] = useState(null)

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
              {c.image ? (
                <button
                  type="button"
                  className="cert__thumb-btn"
                  onClick={() => setPreview(c)}
                  aria-label={`View ${c.name} certificate`}
                >
                  <img src={c.image} alt={`${c.name} certificate`} className="cert__thumb" />
                </button>
              ) : (
                <div className="cert__badge mono">{c.code}</div>
              )}
              <div>
                <div className="cert__name">{c.name}</div>
                <div className="cert__level mono">{c.level}</div>
                {c.issued && (
                  <div className="cert__meta mono">
                    Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div className="cert__overlay" onClick={() => setPreview(null)}>
          <div className="cert__overlay-inner" onClick={e => e.stopPropagation()}>
            <button className="cert__close" onClick={() => setPreview(null)} aria-label="Close">×</button>
            <img src={preview.image} alt={`${preview.name} certificate full view`} />
            <div className="cert__overlay-caption mono">
              {preview.name}
              {preview.validation ? ` · Validation: ${preview.validation}` : ''}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .cert__card { padding: 20px; display: flex; align-items: center; gap: 16px; }
        .cert__badge {
          font-size: 12px; font-weight: 600; color: var(--aws);
          border: 1px solid rgba(255,159,28,0.4); border-radius: 6px;
          padding: 8px 10px; flex-shrink: 0;
          background: rgba(255,159,28,0.06);
        }
        .cert__thumb-btn {
          padding: 0; border: 1px solid rgba(255,159,28,0.35); border-radius: 8px;
          overflow: hidden; flex-shrink: 0; cursor: pointer; background: none;
          width: 96px; height: 72px;
        }
        .cert__thumb { width: 100%; height: 100%; object-fit: cover; display: block; }
        .cert__name { font-size: 14.5px; font-weight: 500; }
        .cert__level { font-size: 11px; color: var(--text-faint); margin-top: 3px; }
        .cert__meta { font-size: 10.5px; color: var(--text-faint); margin-top: 4px; opacity: 0.8; }

        .cert__overlay {
          position: fixed; inset: 0; background: rgba(4,8,14,0.85);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; z-index: 1000;
        }
        .cert__overlay-inner {
          position: relative; max-width: min(900px, 92vw); max-height: 88vh;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
        }
        .cert__overlay-inner img {
          max-width: 100%; max-height: 76vh; border-radius: 8px;
          border: 1px solid rgba(255,159,28,0.3);
        }
        .cert__overlay-caption { color: var(--text-faint); font-size: 12px; text-align: center; }
        .cert__close {
          position: absolute; top: -14px; right: -14px; width: 32px; height: 32px;
          border-radius: 50%; border: 1px solid rgba(255,159,28,0.4);
          background: #0d1420; color: #fff; font-size: 18px; cursor: pointer;
        }

        @media (max-width: 720px) { .cert__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
