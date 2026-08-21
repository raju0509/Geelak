import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryCTA from "../sections/InquiryCTA";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =================================
            CONTACT HERO
        ================================= */}

        <section className="contact-hero section">
          <div className="container">

            <span className="section-eyebrow">
              CONTACT GEELAK
            </span>

            <h1>
              Let's Start a
              <span>Conversation.</span>
            </h1>

            <p>
              Have a product requirement or business inquiry?
              Tell us what you are looking for and our team will
              get in touch with you.
            </p>

          </div>
        </section>


        {/* =================================
            CONTACT + INQUIRY FORM
        ================================= */}

        <section className="contact-section section">
          <div className="container">

            <div className="contact-grid">

              {/* =================================
                  CONTACT INFORMATION
              ================================= */}

              <div className="contact-info">

                <span className="section-eyebrow">
                  GET IN TOUCH
                </span>

                <h2>
                  Let's Talk
                  <span>Business.</span>
                </h2>

                <p>
                  We welcome product inquiries, sourcing
                  requirements and business opportunities from
                  customers and partners.
                </p>


                <div className="contact-details">

                  {/* Location */}

                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <small>Location</small>
                      <strong>Hyderabad, Telaangana, India.</strong>
                    </div>

                  </div>


                  {/* Phone */}

                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <Phone size={20} />
                    </div>

                    <div>
                      <small>Phone</small>
                      <strong>
                        +91 99517 10724
                      </strong>
                    </div>

                  </div>


                  {/* Email */}

                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <Mail size={20} />
                    </div>

                    <div>
                      <small>Email</small>
                      <strong>
                        info@geelak.com
                      </strong>
                    </div>

                  </div>

                </div>

              </div>


              {/* =================================
                  INQUIRY FORM
              ================================= */}

              <div className="inquiry-form-wrapper">

                <form
                  className="inquiry-form"
                  onSubmit={handleSubmit}
                >

                  {/* Name + Email */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="name">
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="email">
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />

                    </div>

                  </div>


                  {/* Phone + Product */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="phone">
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="product">
                        Product Interest
                      </label>

                      <select
                        id="product"
                        name="product"
                        defaultValue=""
                        required
                      >

                        <option value="" disabled>
                          Select a product
                        </option>

                        <option value="coffee">
                          Coffee Powder
                        </option>

                        <option value="agriculture">
                          Agriculture Products
                        </option>

                        <option value="leather">
                          Leather Products
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* Message */}

                  <div className="form-group">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us about your requirement..."
                      required
                    />

                  </div>


                  {/* Submit Button */}

                  <button
                    type="submit"
                    className="inquiry-submit"
                  >
                    Send Inquiry
                  </button>


                  {/* Success Message */}

                  {submitted && (
                    <div className="form-success">
                      Thank you for your inquiry.
                      <br />
                      Our team will get back to you soon.
                    </div>
                  )}

                </form>

              </div>

            </div>

          </div>
        </section>


        {/* =================================
            LOCATION / GOOGLE MAP
        ================================= */}
        {/* =================================
            INQUIRY CTA
        ================================= */}

        <InquiryCTA />

      </main>


      {/* =================================
          FOOTER
      ================================= */}

      <Footer />

    </>
  );
}

export default Contact;