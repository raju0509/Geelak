import { ArrowRight, CheckCircle2 } from "lucide-react";

function AboutPreview() {
  const points = [
    "Trusted Indian product sourcing",
    "Professional export support",
    "Reliable global partnerships",
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
              India Has the Potential.
              <span>We Take It Global.</span>
            </h2>

            <p className="about-preview-text">
              We connect <strong>trusted Indian sourcing</strong> with
              global demand through <strong>quality, integrity</strong>, and
              <strong> relentless execution.</strong>
            </p>

            <p className="about-preview-text">
              We don't simply export products. We build{" "}
              <strong>global connections</strong>, create{" "}
              <strong>opportunities</strong>, and deliver{" "}
              <strong>trust.</strong>
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
              <span>Discover Our Story</span>
              <ArrowRight size={17} />
            </a>

          </div>

          {/* Image */}
          <div className="about-preview-image">
            <div className="about-image-frame">

              <img
                src="/images/about/about.jpg"
                alt="Global export and trade operations"
              />

              <div className="about-image-badge">
                <span>GLOBAL TRADE</span>
                <small>From India to the World</small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;