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
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">07 / contact</div>
          <h2 className="section-title">Let's talk infrastructure.</h2>
          <p className="section-sub">
            Open to cloud consulting, architecture reviews, and full-time roles across AWS and Azure.
          </p>
        </div>

        <div className="contact__panel panel">
          <div className="contact__row">
            <span className="mono contact__label">email</span>
            <a href={`mailto:${profile.email}`} className="contact__value">{profile.email}</a>
            <button className="contact__copy mono" onClick={copyEmail}>{copied ? 'copied' : 'copy'}</button>
          </div>
          <div className="contact__row">
            <span className="mono contact__label">phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__value">{profile.phone}</a>
          </div>
          <div className="contact__row">
            <span className="mono contact__label">linkedin</span>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="contact__value">{profile.linkedin}</a>
          </div>
          <div className="contact__row">
            <span className="mono contact__label">location</span>
            <span className="contact__value">{profile.location}</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact__panel { padding: 8px 24px; }
        .contact__row {
          display: flex; align-items: center; gap: 18px;
          padding: 18px 0; border-bottom: 1px solid var(--border);
        }
        .contact__row:last-child { border-bottom: none; }
        .contact__label { width: 90px; color: var(--text-faint); font-size: 12px; flex-shrink: 0; }
        .contact__value { font-size: 14.5px; flex: 1; }
        a.contact__value:hover { color: var(--azure); }
        .contact__copy {
          background: none; border: 1px solid var(--border); color: var(--text-dim);
          font-size: 11px; padding: 6px 10px; border-radius: 5px;
        }
        .contact__copy:hover { border-color: var(--azure); color: var(--text); }

        @media (max-width: 560px) {
          .contact__row { flex-wrap: wrap; }
          .contact__label { width: 100%; }
        }
      `}</style>
    </section>
  )
}
