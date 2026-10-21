import { blogIntro, posts } from '../blogs.js'

const tagColour = {
  'Well-Architected Review': 'var(--primary)',
  'Cloud Security': '#c0152f',
  'Q&A': '#a84b2f',
  'Event': '#0b5394',
  'Event poster': '#5e5240',
}

export default function Blogs() {
  return (
    <section id="blogs" className="section section--alt bl">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">Events & talks</span>
          <h1 className="section-title">{blogIntro.title}</h1>
          <p className="section-sub">{blogIntro.sub}</p>
        </div>

        <div className="bl__grid">
          {posts.map(p => (
            <article key={p.src} className="bl__card card reveal">
              <div className="bl__media">
                {p.type === 'video' ? (
                  <video src={p.src} poster={p.poster} controls playsInline preload="none" aria-label={p.title} />
                ) : (
                  <a href={p.src} target="_blank" rel="noreferrer" aria-label={`Open photo: ${p.title}`}>
                    <img src={p.src} alt={p.title} loading="lazy" />
                  </a>
                )}
                <span className="bl__type">
                  <i className={`fas ${p.type === 'video' ? 'fa-play' : 'fa-image'}`} /> {p.type === 'video' ? 'Video' : 'Photo'}
                </span>
              </div>
              <div className="bl__body">
                <span className="bl__tag" style={{ color: tagColour[p.tag] || 'var(--primary)' }}>{p.tag}</span>
                <h2 className="bl__title">{p.title}</h2>
                <p className="bl__caption">{p.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="bl__back">
          <a href="/" className="btn btn--outline"><i className="fas fa-arrow-left" /> Back to portfolio</a>
        </div>
      </div>

      <style>{`
        .bl { padding-top: calc(var(--nav-h) + 64px); min-height: 100vh; }
        .bl__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .bl__card { overflow: hidden; display: flex; flex-direction: column; }
        .bl__media { position: relative; aspect-ratio: 4 / 5; background: #13343b; }
        .bl__media a { display: block; height: 100%; }
        .bl__media img, .bl__media video { width: 100%; height: 100%; display: block; object-fit: cover; }
        .bl__media video { object-fit: contain; background: #13343b; }
        .bl__type {
          position: absolute; top: 12px; left: 12px; pointer-events: none;
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11.5px; font-weight: 600; padding: 5px 11px; border-radius: 999px;
          background: rgba(255,255,253,0.92); color: var(--text);
        }
        .bl__type i { font-size: 10px; color: var(--primary); }
        .bl__body { padding: 18px 20px 22px; display: flex; flex-direction: column; gap: 6px; }
        .bl__tag { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
        .bl__title { font-size: 18px; font-weight: 700; color: var(--text); }
        .bl__caption { font-size: 14px; color: var(--muted); line-height: 1.65; }
        .bl__back { margin-top: 44px; text-align: center; }

        @media (max-width: 980px) { .bl__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .bl__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
