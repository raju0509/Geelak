import { ArrowRight, Globe2 } from "lucide-react";

function GlobalReach() {
  return (
    <section className="global-reach section">
      <div className="container">
        <div className="global-reach-grid">

          <div className="global-reach-content">

            <span className="section-eyebrow">
              GLOBAL REACH
            </span>

            <h2 className="section-heading">
              From India <span>To The World.</span>
            </h2>

            <p className="global-reach-description">
              GEELAK is focused on connecting quality Indian products
              with customers and business opportunities across
              international markets.
            </p>

            <p className="global-reach-description">
              Our vision is to build professional trade relationships
              that create opportunities beyond geographical boundaries.
            </p>

            <a href="/contact" className="global-reach-link">
              <span>Start a Conversation</span>
              <ArrowRight size={17} />
            </a>

          </div>

          <div className="global-reach-visual">

            <div className="global-globe">
              <Globe2 size={300} strokeWidth={0.7} />
            </div>

            <div className="global-point global-point-india">
              <span />

              <div>
                <strong>India</strong>
                <small>Our sourcing base</small>
              </div>
            </div>

            <div className="global-point global-point-one">
              <span />
            </div>

            <div className="global-point global-point-two">
              <span />
            </div>

            <div className="global-point global-point-three">
              <span />
            </div>

            <div className="global-center-label">
              <span>GEELAK</span>
              <small>Beyond Borders</small>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default GlobalReach;