import { useEffect, useState } from 'react'
import { profile } from '../data.js'

// Cycles through the roles with a simple typing effect.
function useTyping(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let i = 0, n = words[0].length, deleting = true, timer
    const tick = () => {
      const w = words[i]
      if (deleting) {
        n -= 1
        if (n <= 0) { deleting = false; i = (i + 1) % words.length; n = 0 }
      } else {
        n += 1
        if (n >= words[i].length) { setText(words[i]); deleting = true; timer = setTimeout(tick, hold); return }
      }
      setText(words[i].slice(0, Math.max(n, 0)) || '')
      timer = setTimeout(tick, deleting ? erase : type)
    }
    timer = setTimeout(tick, hold)
    return () => clearTimeout(timer)
  }, [words, type, erase, hold])
  return text
}

export default function Hero() {
  const role = useTyping(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__hello">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            I'm a <span className="hero__typed">{role}</span><span className="hero__caret" aria-hidden="true">|</span>
          </p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__buttons">
            <a href="#contact" className="btn btn--primary">Get In Touch <i className="fas fa-arrow-right" /></a>
            {profile.resume && (
              <a href={profile.resume} download className="btn btn--outline hero__cv">Download CV <i className="fas fa-download" /></a>
            )}
          </div>

          <div className="hero__social">
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            {profile.github && <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>}
            <a href={`mailto:${profile.email}`} aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><i className="fas fa-phone" /></a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-bg" />
          <img className="hero__photo" src={profile.photo} alt={profile.name} />
          <div className="hero__badge">
            <i className="fab fa-aws" />
            <span>AWS Solutions Architect<br /><b>Professional</b></span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          padding: calc(var(--nav-h) + 56px) 0 80px;
          display: flex; align-items: center;
          background: linear-gradient(135deg, #13343b 0%, #1f2121 52%, #626c71 100%);
          color: #fff;
        }
        .hero__inner { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center; }
        .hero__hello { color: #4fb3bf; font-size: 18px; font-weight: 500; }
        .hero__name { font-size: clamp(40px, 5.6vw, 64px); font-weight: 700; color: #fffffd; margin-top: 6px; line-height: 1.08; }
        .hero__role { font-size: clamp(18px, 2.2vw, 24px); color: #4fb3bf; margin-top: 14px; font-weight: 500; min-height: 1.5em; }
        .hero__typed { color: #5cc4cf; }
        .hero__caret { color: #5cc4cf; margin-left: 2px; animation: hero-blink 1s steps(1) infinite; }
        @keyframes hero-blink { 50% { opacity: 0; } }
        .hero__summary { margin-top: 18px; color: rgba(255,255,253,0.78); font-size: 15.5px; line-height: 1.75; max-width: 600px; }

        .hero__buttons { display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap; }
        .hero__cv { border-color: #4fb3bf; color: #5cc4cf; }
        .hero__cv:hover { background: #4fb3bf; color: #13343b; }

        .hero__social { display: flex; gap: 14px; margin-top: 28px; }
        .hero__social a {
          width: 44px; height: 44px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: #fffffd; color: #13343b; font-size: 16px;
          transition: background .2s ease, color .2s ease, transform .2s ease;
        }
        .hero__social a:hover { background: var(--primary); color: #fff; transform: translateY(-3px); }

        .hero__photo-wrap { position: relative; justify-self: center; width: min(400px, 100%); }
        .hero__photo-bg {
          position: absolute; inset: 22px -22px -22px 22px;
          background: var(--primary); border-radius: 6px;
        }
        .hero__photo {
          position: relative; display: block; width: 100%; aspect-ratio: 4 / 5;
          object-fit: cover; border-radius: 6px;
          box-shadow: 0 30px 60px -25px rgba(0,0,0,0.6);
        }
        .hero__badge {
          position: absolute; left: -28px; bottom: 34px;
          display: flex; align-items: center; gap: 12px;
          background: #fffffd; color: #13343b; border-radius: 12px;
          padding: 12px 16px; font-size: 12.5px; line-height: 1.35;
          box-shadow: 0 16px 34px -16px rgba(0,0,0,0.55);
        }
        .hero__badge i { font-size: 28px; color: #ff9900; }

        @media (max-width: 900px) {
          .hero { min-height: auto; }
          .hero__inner { grid-template-columns: 1fr; gap: 56px; }
          .hero__photo-wrap { width: min(320px, 80%); order: -1; }
          .hero__badge { left: -16px; }
        }
      `}</style>
    </section>
  )
}
