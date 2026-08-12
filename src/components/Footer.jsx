import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <a href="/" className="footer-logo">
              GEELAK
            </a>

            <p>
              Connecting quality Indian products with
              opportunities across global markets.
            </p>

            <span className="footer-tagline">
              Global Trade Beyond Borders.
            </span>

          </div>


          {/* Company */}

          <div className="footer-column">

            <h4>Company</h4>

            <a href="/about">
              About Us
            </a>

            <a href="/#why-choose">
              Why GEELAK
            </a>

            <a href="/#global-reach">
              Global Reach
            </a>

          </div>


          {/* Products */}

          <div className="footer-column">

            <h4>Products</h4>

            <a href="/products">
              Coffee Powder
            </a>

            <a href="/products">
              Agriculture Products
            </a>

            <a href="/products">
              Leather Products
            </a>

          </div>


          {/* Contact */}

          <div className="footer-column footer-contact">

            <h4>Contact</h4>

            <div className="footer-contact-item">
              <Mail size={16} />
              <span>info@geelak.com</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>India</span>
            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} GEELAK Exports Private Limited.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;