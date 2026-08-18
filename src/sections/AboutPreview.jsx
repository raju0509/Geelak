import { ArrowRight, CheckCircle2 } from "lucide-react";

function AboutPreview() {
  const points = [
    "Quality-focused product sourcing",
    "Professional export support",
    "Long-term business relationships",
  ];

  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview-grid">

          {/* Content */}
          <div className="about-preview-content">

            <span className="section-eyebrow">
              OUR STORY
            </span>

            <h2 className="section-heading">
              Your Trusted Partner
              <span>Beyond Borders.</span>
            </h2>

            <p className="about-preview-text">
              We connect <strong>quality Indian products</strong>{" "}
              with opportunities in international markets.
            </p>

            <p className="about-preview-text">
              Our approach is built around{" "}
              <strong>quality, reliable trade</strong>, and long-term business relationships.
            </p> 

            <div className="about-points">
              {points.map((point) => (
                <div className="about-point" key={point}>
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a href="/about" className="about-link">
              <span>Learn More About Us</span>
              <ArrowRight size={17} />
            </a>

          </div>

          {/* Image */}
          <div className="about-preview-image">
            <div className="about-image-frame">

              <img
                src="/images/about/about.jpg"
                alt="Our export operations"
              />

              <div className="about-image-badge">
                <span>GEELAK</span>
                <small>Global Trade</small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;