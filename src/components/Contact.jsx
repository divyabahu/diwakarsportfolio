import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  const items = [
    { icon: 'fas fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, action: { text: copied ? 'Copied' : 'Copy', onClick: copyEmail } },
    { icon: 'fas fa-phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}`, external: true },
    { icon: 'fas fa-location-dot', label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-pill">Get in touch</span>
          <h2 className="section-title">Let's Talk Infrastructure</h2>
          <p className="section-sub">Open to cloud consulting, architecture reviews, migrations and full-time roles across AWS and Azure.</p>
        </div>

        <div className="cn__grid">
          {items.map(it => (
            <div key={it.label} className="cn__card card reveal">
              <span className="icon-circle"><i className={it.icon} /></span>
              <div className="cn__text">
                <span className="cn__label">{it.label}</span>
                {it.href
                  ? <a href={it.href} className="cn__value" {...(it.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{it.value}</a>
                  : <span className="cn__value">{it.value}</span>}
              </div>
              {it.action && <button className="cn__action" onClick={it.action.onClick}>{it.action.text}</button>}
            </div>
          ))}
        </div>

        {profile.resume && (
          <div className="cn__cta reveal">
            <div>
              <h3>Want the full picture?</h3>
              <p>Download my resume: experience, migrations, projects and certifications in one place.</p>
            </div>
            <div className="cn__cta-buttons">
              <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--light">View resume <i className="fas fa-up-right-from-square" /></a>
              <a href={profile.resume} download className="btn cn__dl">Download CV <i className="fas fa-download" /></a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cn__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; max-width: 980px; margin: 0 auto; }
        .cn__card { padding: 20px 22px; display: flex; align-items: center; gap: 16px; }
        .cn__text { flex: 1; min-width: 0; }
        .cn__label { display: block; font-size: 11.5px; text-transform: uppercase; letter-spacing: .08em; color: var(--faint); }
        .cn__value { display: block; font-size: 15px; font-weight: 600; color: var(--text); margin-top: 2px; overflow-wrap: anywhere; }
        a.cn__value:hover { color: var(--primary); }
        .cn__action { border: 1px solid var(--border); background: var(--bg); color: var(--primary); font-weight: 600; font-size: 12.5px; padding: 7px 14px; border-radius: 999px; }
        .cn__action:hover { border-color: var(--primary); }

        .cn__cta {
          max-width: 980px; margin: 32px auto 0; padding: 30px 32px; border-radius: var(--radius);
          background: linear-gradient(135deg, #13343b 0%, #1f2121 55%, #626c71 100%); color: #fff;
          display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .cn__cta h3 { font-size: 22px; }
        .cn__cta p { color: rgba(255,255,253,0.75); font-size: 14.5px; margin-top: 6px; }
        .cn__cta-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
        .cn__dl { background: var(--primary); color: #fff; }
        .cn__dl:hover { background: #2aa3ad; }

        @media (max-width: 720px) { .cn__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
