import { useEffect, useState } from 'react'
import { profile } from '../data.js'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="ft">
      <div className="container">
        <div className="ft__top">
          <div className="ft__brand">
            <a href="/#home" className="ft__logo">{profile.name}<span>.</span></a>
            <p>Cloud engineer building platforms that stay up, stay governed and stay under budget, across AWS and Azure.</p>
          </div>
          <div className="ft__social">
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            {profile.github && <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>}
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><i className="fas fa-phone" /></a>
          </div>
        </div>
        <div className="ft__bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React · Deployed on AWS</span>
        </div>
      </div>

      <a href="#" className={`ft__totop${showTop ? ' is-shown' : ''}`} aria-label="Back to top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <i className="fas fa-chevron-up" />
      </a>

      <style>{`
        .ft { background: #13343b; color: #fff; padding: 56px 0 28px; }
        .ft__top { display: flex; justify-content: space-between; align-items: center; gap: 28px; flex-wrap: wrap; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.12); }
        .ft__logo { font-family: var(--font-display); font-weight: 700; font-size: 22px; color: #5cc4cf; }
        .ft__logo span { color: #fff; }
        .ft__brand p { color: rgba(255,255,253,0.7); font-size: 14px; max-width: 520px; margin-top: 8px; }
        .ft__social { display: flex; gap: 12px; }
        .ft__social a {
          width: 42px; height: 42px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.1); color: #fff; transition: background .2s ease, transform .2s ease;
        }
        .ft__social a:hover { background: var(--primary); transform: translateY(-3px); }
        .ft__bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding-top: 22px; font-size: 13px; color: rgba(255,255,253,0.6); }

        .ft__totop {
          position: fixed; right: 24px; bottom: 24px; z-index: 90;
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: var(--primary); color: #fff; box-shadow: var(--shadow-md);
          opacity: 0; pointer-events: none; transform: translateY(10px);
          transition: opacity .25s ease, transform .25s ease, background .2s ease;
        }
        .ft__totop.is-shown { opacity: 1; pointer-events: auto; transform: none; }
        .ft__totop:hover { background: var(--primary-700); }
      `}</style>
    </footer>
  )
}
