import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono footer__built">built with React · deployed on AWS</span>
      </div>

      <style>{`
        .footer { padding: 28px 0 40px; }
        .footer__inner {
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;
          font-size: 12px; color: var(--text-faint);
        }
      `}</style>
    </footer>
  )
}
