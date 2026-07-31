import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'stack' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#certifications', label: 'certs' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand mono">
          <span className="navbar__dot" />
          {profile.name.split(' ').map(w => w[0]).join('')}<span className="navbar__brand-full"> · {profile.name}</span>
        </a>

        <nav className="navbar__links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="mono">{l.label}</a>
          ))}
        </nav>

        <a className="navbar__cta mono" href={`mailto:${profile.email}`}>get in touch</a>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} className="mono" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="mono navbar__mobile-cta" href={`mailto:${profile.email}`}>get in touch</a>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid transparent;
          background: rgba(10,14,20,0.6);
          backdrop-filter: blur(10px);
          transition: border-color .2s ease, background .2s ease;
        }
        .navbar--scrolled { border-color: var(--border); background: rgba(10,14,20,0.85); }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }
        .navbar__dot {
          width: 8px; height: 8px; border-radius: 2px;
          background: linear-gradient(135deg, var(--aws), var(--azure));
        }
        .navbar__brand-full { color: var(--text-dim); font-weight: 400; }
        .navbar__links { display: flex; gap: 28px; }
        .navbar__links a { font-size: 13px; color: var(--text-dim); transition: color .15s ease; }
        .navbar__links a:hover { color: var(--text); }
        .navbar__cta {
          font-size: 12px;
          border: 1px solid var(--border);
          padding: 8px 14px;
          border-radius: 6px;
          color: var(--text);
          transition: border-color .15s ease, background .15s ease;
        }
        .navbar__cta:hover { border-color: var(--azure); background: rgba(58,160,255,0.08); }
        .navbar__toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; padding: 8px; }
        .navbar__toggle span { width: 20px; height: 2px; background: var(--text); display: block; }
        .navbar__mobile { display: none; }

        @media (max-width: 820px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__brand-full { display: none; }
          .navbar__toggle { display: flex; }
          .navbar__mobile {
            display: flex;
            flex-direction: column;
            gap: 2px;
            padding: 8px 20px 20px;
            border-top: 1px solid var(--border);
          }
          .navbar__mobile a { padding: 12px 0; color: var(--text-dim); font-size: 14px; border-bottom: 1px solid var(--border); }
          .navbar__mobile-cta { color: var(--azure) !important; }
        }
      `}</style>
    </header>
  )
}
