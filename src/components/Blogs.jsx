import { blogIntro, posts } from '../blogs.js'

export default function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">blogs / events</div>
          <h1 className="section-title">{blogIntro.title}</h1>
          <p className="section-sub">{blogIntro.sub}</p>
        </div>

        <div className="blogs__grid">
          {posts.map(p => (
            <article key={p.src} className="blogs__card panel">
              <div className="blogs__media">
                {p.type === 'video' ? (
                  <video
                    src={p.src}
                    poster={p.poster}
                    controls
                    playsInline
                    preload="none"
                    aria-label={p.title}
                  />
                ) : (
                  <a href={p.src} target="_blank" rel="noreferrer" aria-label={`Open photo: ${p.title}`}>
                    <img src={p.src} alt={p.title} loading="lazy" />
                  </a>
                )}
                <span className="blogs__type mono">{p.type === 'video' ? '▶ video' : 'photo'}</span>
              </div>
              <div className="blogs__body">
                <div className="blogs__tag mono">{p.tag}</div>
                <h2 className="blogs__title">{p.title}</h2>
                <p className="blogs__caption">{p.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="blogs__back">
          <a href="/" className="btn btn--ghost mono">← back to portfolio</a>
        </div>
      </div>

      <style>{`
        .blogs { padding-top: 72px; }
        .blogs .section-title { font-size: clamp(30px, 4vw, 44px); }
        .blogs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }
        .blogs__card { overflow: hidden; display: flex; flex-direction: column; transition: border-color .15s ease, transform .15s ease; }
        .blogs__card:hover { border-color: var(--text-faint); transform: translateY(-2px); }
        .blogs__media { position: relative; background: #05080c; aspect-ratio: 4 / 5; }
        .blogs__media img, .blogs__media video {
          width: 100%; height: 100%; display: block; object-fit: cover; background: #05080c;
        }
        .blogs__media video { object-fit: contain; }
        .blogs__type {
          position: absolute; top: 10px; left: 10px; pointer-events: none;
          font-size: 10.5px; letter-spacing: .06em; text-transform: uppercase;
          padding: 3px 8px; border-radius: 4px;
          background: rgba(10,14,20,0.75); color: var(--text); border: 1px solid var(--border);
        }
        .blogs__body { padding: 18px 20px 22px; display: flex; flex-direction: column; gap: 8px; }
        .blogs__tag { font-size: 11px; color: var(--aws); letter-spacing: .04em; }
        .blogs__title { font-size: 17px; font-weight: 600; }
        .blogs__caption { font-size: 13.5px; color: var(--text-dim); line-height: 1.6; }
        .blogs__back { margin-top: 40px; }
        .btn { font-size: 13px; padding: 12px 18px; border-radius: 7px; display: inline-block; transition: all .15s ease; }
        .btn--ghost { border: 1px solid var(--border); color: var(--text-dim); }
        .btn--ghost:hover { border-color: var(--text-faint); color: var(--text); }

        @media (max-width: 980px) { .blogs__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .blogs__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
