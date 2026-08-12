import { ArrowRight, MessageCircle } from "lucide-react";

function InquiryCTA() {
  return (
    <section className="inquiry-cta">
      <div className="inquiry-cta-pattern" />

      <div className="container">
        <div className="inquiry-cta-inner">

          <div className="inquiry-cta-icon">
            <MessageCircle size={26} strokeWidth={1.6} />
          </div>

          <div className="inquiry-cta-content">
            <span className="section-eyebrow">
              HAVE AN INQUIRY?
            </span>

            <h2>
              Let's Build Business
              <span>Beyond Borders.</span>
            </h2>

            <p>
              Tell us what you are looking for and our team will
              get in touch with you.
            </p>
          </div>

          <a href="/contact" className="inquiry-cta-button">
            <span>Send an Inquiry</span>
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}

export default InquiryCTA;