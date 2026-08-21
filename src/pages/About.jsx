import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryCTA from "../sections/InquiryCTA";
import { ArrowRight } from "lucide-react";

function About() {
  const values = [
    {
      number: "01",
      title: "Quality Assurance",
      text: "We follow a quality-focused approach to sourcing and preparing products for international markets.",
    },
    {
      number: "02",
      title: "Trusted Partnerships",
      text: "We build professional and long-term relationships with customers and business partners.",
    },
    {
      number: "03",
      title: "Reliable Trade",
      text: "We maintain a professional approach focused on dependable and transparent export relationships.",
    },
    {
      number: "04",
      title: "Global Opportunity",
      text: "We connect quality Indian products with customers and business opportunities across international markets.",
    },
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* =================================
            ABOUT HERO
        ================================= */}

        <section className="about-page-hero">

          <div className="container">

            <span className="section-eyebrow">
              ABOUT US
            </span>

            <h1>
              Your Trusted Partner
              <span>Beyond Borders.</span>
            </h1>

            <p>
              We connect quality Indian products with customers and
              business opportunities across international markets.
            </p>

          </div>

        </section>


        {/* =================================
            WHO WE ARE
        ================================= */}

        <section className="about-page-intro">

          <div className="container">

            <div className="about-page-intro-grid">

              {/* Left Content */}

              <div className="about-content">

                <span className="section-eyebrow">
                  WHO WE ARE
                </span>

                <h2>
                  We Connect Indian Products
                  <span>With The World.</span>
                </h2>

              </div>


              {/* Right Content */}

              <div className="about-text">

                <p>
                  We connect trusted Indian products with global markets,
                  creating reliable opportunities through quality, integrity,
                  and long-term partnerships.
                </p>

                <p>
                  We focus on reliable sourcing, professional trade, and strong
                  relationships with customers and business partners across
                  international markets.
                </p>

              </div>

            </div>


            {/* =================================
                ABOUT HIGHLIGHTS
            ================================= */}

            <div className="about-values">

              <div className="about-value">

                <span>01</span>

                <div>
                  <h3>
                    Trusted Sourcing
                  </h3>

                  <p>
                    We work with reliable Indian suppliers to source quality products.
                  </p>
                </div>

              </div>


              <div className="about-value">

                <span>02</span>

                <div>
                  <h3>
                    Global Reach
                  </h3>

                  <p>
                    We connect Indian products with customers and opportunities worldwide.
                  </p>
                </div>

              </div>


              <div className="about-value">

                <span>03</span>

                <div>
                  <h3>
                    Long-Term Partnerships
                  </h3>

                  <p>
                    We build professional relationships focused on reliability,
                    trust, and long-term value.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =================================
            WHY CHOOSE GEELAK
        ================================= */}

        <section
          className="about-values section"
          id="why-choose"
        >

          <div className="container">

            <div className="about-values-header">

              <span className="section-eyebrow">
                WHY CHOOSE US
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


        {/* =================================
            GLOBAL VISION
        ================================= */}

        <section
          className="about-vision section"
          id="global-reach"
        >

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
                We aim to build professional trade connections that help
                quality Indian products reach customers and opportunities
                beyond geographical boundaries.
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


        {/* =================================
            INQUIRY CTA
        ================================= */}

        <InquiryCTA />

      </main>

      <Footer />
    </>
  );
}

export default About;