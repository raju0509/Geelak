import {
  BadgeCheck,
  Clock3,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Quality Assurance",
    text: "A quality-focused approach to sourcing and preparing products for international markets.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Trusted Partnerships",
    text: "Building professional and long-term relationships with customers and business partners.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Reliable Trade",
    text: "A professional approach focused on dependable export relationships.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Global Opportunity",
    text: "Connecting Indian products with opportunities across international markets.",
  },
  {
    number: "05",
    icon: Clock3,
    title: "Professional Support",
    text: "Focused support throughout the customer inquiry and business communication process.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose section">
      <div className="container">
        <div className="why-choose-grid">

          {/* Left */}
          <div className="why-choose-intro">
            <span className="section-eyebrow">
              WHY CHOOSE US
            </span>

            <h2 className="section-heading">
              Built on Quality.
                <span>Driven by Trust.</span>
           </h2>

            <p>
              GEELAK focuses on creating reliable connections between
              quality Indian products and customers in international
              markets.
            </p>

            <p>
              Our approach combines quality-focused sourcing,
              professional communication and long-term business
              relationships.
            </p>
          </div>

          {/* Right */}
          <div className="why-choose-list">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="why-choose-item" key={reason.number}>
                  <span className="why-choose-number">
                    {reason.number}
                  </span>

                  <div className="why-choose-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="why-choose-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;