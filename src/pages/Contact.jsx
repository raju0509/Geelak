import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Contact() {
  return (
    <main className="contact-page">

      {/* Contact Hero */}
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


      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">

          <div className="contact-grid">

            {/* Contact Information */}
            <div className="contact-info">

              <span className="section-eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                Let's Talk
                <span>Business.</span>
              </h2>

              <p>
                We welcome product inquiries, sourcing requirements
                and business opportunities from customers and
                partners.
              </p>


              <div className="contact-details">

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <small>Location</small>
                    <strong>India</strong>
                  </div>
                </div>


                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                    <small>Phone</small>
                    <strong>+91 XXXXX XXXXX</strong>
                  </div>
                </div>


                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <small>Email</small>
                    <strong>info@geelak.com</strong>
                  </div>
                </div>

              </div>

            </div>


            {/* Inquiry Form */}
            <div className="inquiry-form-wrapper">

              <form className="inquiry-form">

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="product">
                      Product Interest
                    </label>

                    <select id="product">
                      <option value="">
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


                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us about your requirement..."
                  />

                </div>


                <button
                  type="submit"
                  className="inquiry-submit"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* Google Map */}
      <section className="contact-map">

        <div className="container">

          <div className="contact-map-header">
            <span className="section-eyebrow">
              FIND US
            </span>

            <h2>
              Our <span>Location.</span>
            </h2>
          </div>

          <div className="map-placeholder">
            <p>
              Google Maps will be embedded here once the
              client's business location is confirmed.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;