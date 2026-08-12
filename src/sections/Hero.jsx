import { ArrowRight, Globe2 } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <Globe2 size={17} />
            <span>GLOBAL EXPORTS</span>
          </div>

          <h1 className="hero-title">
            Moving Business
            <span>Beyond Borders.</span>
          </h1>

          <p className="hero-description">
            Connecting quality products from India with opportunities
            across global markets.
          </p>

          <div className="hero-actions">
            <a href="/products" className="hero-btn hero-btn-primary">
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>

            <a href="/contact" className="hero-btn hero-btn-secondary">
              Send an Inquiry
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-highlight">
            <span className="hero-highlight-number">01</span>

            <div>
              <strong>Quality Focused</strong>
              <p>Products prepared for global markets.</p>
            </div>
          </div>

          <div className="hero-highlight">
            <span className="hero-highlight-number">02</span>

            <div>
              <strong>Global Vision</strong>
              <p>Connecting Indian products with the world.</p>
            </div>
          </div>

          <div className="hero-highlight">
            <span className="hero-highlight-number">03</span>

            <div>
              <strong>Reliable Trade</strong>
              <p>Focused on professional export solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;