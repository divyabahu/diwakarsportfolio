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
          {profile.photo && (
            <div className="about__photo-wrap">
              <div className="about__photo panel">
                <img src={profile.photo} alt={profile.name} />
              </div>
            </div>
          )}

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
        .about__grid {
          display: grid;
          grid-template-columns: auto 1.3fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .about__photo-wrap { display: flex; }
        .about__photo {
          width: 190px;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid var(--border);
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
        }
        .about__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.02);
        }
        .about__lead { font-size: 18px; line-height: 1.75; color: var(--text); max-width: 620px; }
        .about__facts { display: flex; flex-direction: column; gap: 20px; border-left: 1px solid var(--border); padding-left: 24px; }
        .about__fact-label { font-size: 11px; color: var(--text-faint); letter-spacing: .05em; }
        .about__fact-value { font-size: 14.5px; margin-top: 4px; }

        @media (max-width: 1000px) {
          .about__grid { grid-template-columns: 1fr 1fr; grid-template-areas: "photo lead" "facts facts"; }
          .about__photo-wrap { grid-area: photo; }
          .about__lead { grid-area: lead; }
          .about__facts { grid-area: facts; border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 20px; }
        }
        @media (max-width: 640px) {
          .about__grid { grid-template-columns: 1fr; grid-template-areas: "photo" "lead" "facts"; }
          .about__photo { width: 140px; }
        }
      `}</style>
    </section>
  )
}
