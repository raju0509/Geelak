import { Globe2, ShieldCheck, PackageCheck } from "lucide-react";

function TrustBar() {
  const highlights = [
    {
      icon: Globe2,
      title: "Global Reach",
      text: "Connecting quality products from India with global markets.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Trade",
      text: "A professional approach focused on dependable business relationships.",
    },
    {
      icon: PackageCheck,
      title: "Quality Focused",
      text: "Focused on quality products prepared for international opportunities.",
    },
  ];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="trust-item" key={item.title}>
                <div className="trust-icon">
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                <div className="trust-content">
                  <span className="trust-number">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;