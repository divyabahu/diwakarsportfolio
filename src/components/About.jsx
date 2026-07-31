import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="section-head">
          <div className="eyebrow">01 / about</div>
          <h2 className="section-title">Cloud engineer, migration lead, cost custodian.</h2>
        </div>

        <div className="about__grid">
          <p className="about__lead">
            I work at the intersection of two clouds. Most days that means reading a client's
            AWS bill like a diagnostic report, tightening an Azure network policy, or turning a
            failed audit into a remediation plan someone can actually execute. I care less about
            which provider "wins" and more about whether the infrastructure is resilient,
            explainable, and priced sensibly.
          </p>

          <div className="about__facts">
            <div className="about__fact">
              <div className="about__fact-label mono">based in</div>
              <div className="about__fact-value">{profile.location}</div>
            </div>
            <div className="about__fact">
              <div className="about__fact-label mono">current role</div>
              <div className="about__fact-value">Cloud Consultant, Infosprint Technologies</div>
            </div>
            <div className="about__fact">
              <div className="about__fact-label mono">studying</div>
              <div className="about__fact-value">M.Tech, Cloud Computing — BITS Pilani</div>
            </div>
            <div className="about__fact">
              <div className="about__fact-label mono">certified</div>
              <div className="about__fact-value">AWS Solutions Architect — Professional</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; }
        .about__lead { font-size: 18px; line-height: 1.75; color: var(--text); max-width: 620px; }
        .about__facts { display: flex; flex-direction: column; gap: 20px; border-left: 1px solid var(--border); padding-left: 24px; }
        .about__fact-label { font-size: 11px; color: var(--text-faint); letter-spacing: .05em; }
        .about__fact-value { font-size: 14.5px; margin-top: 4px; }

        @media (max-width: 820px) {
          .about__grid { grid-template-columns: 1fr; }
          .about__facts { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 20px; }
        }
      `}</style>
    </section>
  )
}
