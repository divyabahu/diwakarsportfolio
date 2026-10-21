import { useState } from 'react'
import { certifications } from '../data.js'

const gradients = ['var(--g-aws)', 'var(--g-orange)', 'var(--g-blue)', 'var(--g-teal)']

export default function Certifications() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">My achievements</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-sub">Verified AWS certifications backing the work above.</p>
        </div>

        <div className="ct__grid">
          {certifications.map((c, i) => (
            <article key={c.code} className="ct__card card reveal">
              <div className="ct__head" style={{ background: gradients[i % gradients.length] }}>
                <div className="ct__logo">
                  {c.badge
                    ? <img src={c.badge} alt={`${c.name} badge`} />
                    : <i className="fab fa-aws" />}
                </div>
                <span className="ct__code">{c.code}</span>
              </div>
              <div className="ct__body">
                <h3 className="ct__name">{c.name}</h3>
                <div className="ct__issuer">Amazon Web Services · {c.level}</div>
                {c.issued && (
                  <div className="ct__date">
                    Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
                  </div>
                )}
                {c.image && (
                  <button type="button" className="ct__view" onClick={() => setPreview(c)}>
                    View certificate <i className="fas fa-arrow-right" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div className="ct__overlay" onClick={() => setPreview(null)} role="dialog" aria-modal="true" aria-label={`${preview.name} certificate`}>
          <div className="ct__overlay-inner" onClick={e => e.stopPropagation()}>
            <button className="ct__close" onClick={() => setPreview(null)} aria-label="Close">×</button>
            <img src={preview.image} alt={`${preview.name} certificate full view`} />
            <div className="ct__overlay-caption">
              {preview.name}{preview.validation ? ` · Validation: ${preview.validation}` : ''}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ct__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .ct__card { overflow: hidden; display: flex; flex-direction: column; }
        .ct__head { position: relative; height: 112px; display: flex; align-items: center; justify-content: space-between; padding: 0 18px; color: #fff; }
        .ct__logo {
          width: 76px; height: 76px; border-radius: 50%; background: #fff;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
          box-shadow: 0 8px 18px -8px rgba(0,0,0,0.45);
        }
        .ct__logo img { width: 70px; height: 70px; object-fit: contain; }
        .ct__logo i { font-size: 34px; color: #232f3e; }
        .ct__code { font-size: 12px; font-weight: 700; letter-spacing: .05em; padding: 5px 10px; border-radius: 999px; background: rgba(255,255,255,0.22); }
        .ct__body { padding: 18px 18px 20px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .ct__name { font-size: 16px; font-weight: 700; color: var(--primary); line-height: 1.35; }
        .ct__issuer { font-size: 13px; font-weight: 600; color: var(--text); }
        .ct__date { font-size: 12px; color: var(--muted); }
        .ct__valid { font-size: 10.5px; color: var(--faint); word-break: break-all; }
        .ct__view {
          margin-top: auto; padding-top: 10px; align-self: flex-start;
          background: none; border: none; color: var(--primary); font-weight: 600; font-size: 13px;
        }
        .ct__view i { font-size: 11px; margin-left: 4px; transition: transform .2s ease; }
        .ct__view:hover i { transform: translateX(3px); }

        .ct__overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(19,52,59,0.82); display: flex; align-items: center; justify-content: center; padding: 24px; }
        .ct__overlay-inner { position: relative; max-width: min(900px, 92vw); display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .ct__overlay-inner img { max-width: 100%; max-height: 76vh; border-radius: 10px; background: #fff; }
        .ct__overlay-caption { color: #e6eef0; font-size: 13px; text-align: center; }
        .ct__close { position: absolute; top: -14px; right: -14px; width: 34px; height: 34px; border-radius: 50%; border: none; background: #fff; color: var(--text); font-size: 20px; box-shadow: var(--shadow-md); }

        @media (max-width: 1080px) { .ct__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .ct__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
