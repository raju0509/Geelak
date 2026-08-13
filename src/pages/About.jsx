import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryCTA from "../sections/InquiryCTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function About() {
  const values = [
    {
      number: "01",
      title: "Quality Assurance",
      text: "A quality-focused approach to sourcing and preparing products for international markets.",
    },
    {
      number: "02",
      title: "Trusted Partnerships",
      text: "Building professional and long-term relationships with customers and business partners.",
    },
    {
      number: "03",
      title: "Reliable Trade",
      text: "A professional approach focused on dependable export relationships.",
    },
    {
      number: "04",
      title: "Global Opportunity",
      text: "Connecting Indian products with opportunities across international markets.",
    },
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* ABOUT HERO */}

        <section className="about-page-hero">

          <div className="container">

            <span className="section-eyebrow">
              ABOUT GEELAK
            </span>

            <h1>
              Your Trusted Partner
              <span>Beyond Borders.</span>
            </h1>

            <p>
              GEELAK Exports Private Limited is focused on
              connecting quality Indian products with opportunities
              in international markets.
            </p>

          </div>

        </section>


        {/* WHO WE ARE */}

        <section className="about-page-intro section">

          <div className="container">

            <div className="about-page-intro-grid">

              <div>

                <span className="section-eyebrow">
                  WHO WE ARE
                </span>

                <h2 className="section-heading">
                  Connecting Indian
                  <span>Products With The World.</span>
                </h2>

              </div>


              <div className="about-page-intro-content">

                <p>
                  GEELAK Exports Private Limited is focused on
                  connecting quality Indian products with customers
                  and business opportunities across international
                  markets.
                </p>

                <p>
                  Our approach is built around quality, reliable trade
                  and professional relationships with customers and
                  business partners.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* OUR APPROACH */}

        <section className="about-approach section">

          <div className="container">

            <div className="about-approach-grid">

              <div className="about-approach-content">

                <span className="section-eyebrow">
                  OUR APPROACH
                </span>

                <h2 className="section-heading">
                  Built Around
                  <span>Quality & Trust.</span>
                </h2>

                <p>
                  GEELAK focuses on creating reliable connections
                  between quality Indian products and international
                  opportunities.
                </p>

                <div className="about-approach-points">

                  <div>
                    <CheckCircle2 size={19} />
                    <span>
                      Quality-focused product sourcing
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>
                      Professional export support
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>
                      Long-term business relationships
                    </span>
                  </div>

                </div>

              </div>


              <div className="about-approach-visual">

                <img
                  src="/images/about/about.jpg"
                  alt="GEELAK export operations"
                />

                <div className="about-visual-label">
                  <strong>GEELAK</strong>
                  <span>Global Trade</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* WHY GEELAK */}

        <section className="about-values section">

          <div className="container">

            <div className="about-values-header">

              <span className="section-eyebrow">
                WHY CHOOSE GEELAK
              </span>

              <h2 className="section-heading">
                Built on Quality.
                <span>Driven by Trust.</span>
              </h2>

            </div>


            <div className="about-values-list">

              {values.map((value) => (

                <div
                  className="about-value"
                  key={value.number}
                >

                  <span className="about-value-number">
                    {value.number}
                  </span>

                  <div>

                    <h3>
                      {value.title}
                    </h3>

                    <p>
                      {value.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* GLOBAL VISION */}

        <section className="about-vision section">

          <div className="container">

            <div className="about-vision-inner">

              <span className="section-eyebrow">
                GLOBAL VISION
              </span>

              <h2>
                From India
                <span>To The World.</span>
              </h2>

              <p>
                Our vision is to create professional trade
                connections that help quality Indian products
                reach opportunities beyond geographical boundaries.
              </p>

              <a href="/contact">

                <span>
                  Start a Conversation
                </span>

                <ArrowRight size={17} />

              </a>

            </div>

          </div>

        </section>


        <InquiryCTA />

      </main>

      <Footer />

    </>
  );
}

export default About;