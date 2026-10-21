import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  { id: 'home', href: '/#home', label: 'Home' },
  { id: 'about', href: '/#about', label: 'About' },
  { id: 'experience', href: '/#experience', label: 'Experience' },
  { id: 'skills', href: '/#skills', label: 'Skills' },
  { id: 'projects', href: '/#projects', label: 'Projects' },
  { id: 'certifications', href: '/#certifications', label: 'Certifications' },
  { id: 'blogs', href: '/blogs/', label: 'Blogs' },
  { id: 'contact', href: '/#contact', label: 'Contact' },
]

export default function Navbar({ page = 'home' }) {
  const [active, setActive] = useState(page === 'blogs' ? 'blogs' : 'home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently on screen (home page only).
  useEffect(() => {
    if (page !== 'home' || !('IntersectionObserver' in window)) return
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [page])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="/#home" className="nav__logo">
          {profile.name}<span className="nav__logo-dot">.</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {links.map(l => (
            <a key={l.id} href={l.href} className={active === l.id ? 'is-active' : ''}>{l.label}</a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map(l => (
            <a key={l.id} href={l.href} className={active === l.id ? 'is-active' : ''} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: var(--nav-h);
          background: rgba(255, 255, 253, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .nav--scrolled { border-color: var(--border); box-shadow: 0 4px 18px -12px rgba(19,52,59,0.25); }
        .nav__inner { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .nav__logo { font-family: var(--font-display); font-weight: 700; font-size: 19px; color: var(--primary); white-space: nowrap; }
        .nav__logo-dot { color: var(--text); }
        .nav__links { display: flex; gap: 26px; }
        .nav__links a {
          position: relative; font-size: 14px; font-weight: 500; color: var(--muted);
          padding: 6px 0; transition: color .2s ease;
        }
        .nav__links a::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px;
          border-radius: 2px; background: var(--primary);
          transform: scaleX(0); transition: transform .25s ease;
        }
        .nav__links a:hover, .nav__links a.is-active { color: var(--primary); }
        .nav__links a.is-active::after { transform: scaleX(1); }
        .nav__toggle { display: none; background: none; border: none; font-size: 20px; color: var(--text); padding: 8px; }
        .nav__mobile { display: none; }

        @media (max-width: 980px) {
          .nav__links { display: none; }
          .nav__toggle { display: block; }
          .nav__mobile {
            display: flex; flex-direction: column;
            background: var(--surface); border-bottom: 1px solid var(--border);
            padding: 8px 20px 16px;
          }
          .nav__mobile a { padding: 12px 0; border-bottom: 1px solid var(--border); color: var(--muted); font-weight: 500; }
          .nav__mobile a.is-active { color: var(--primary); }
        }
        @media (max-width: 420px) { .nav__logo { font-size: 16px; } }
      `}</style>
    </header>
  )
}
