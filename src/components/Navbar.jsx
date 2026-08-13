import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import "../../src/styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = window.location.pathname;

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }

    return currentPath.startsWith(path);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/images/logo/geelak-logo.png"
            alt="GEELAK Exports Private Limited"
          />
        </a>


        {/* Desktop Navigation */}

        <nav className="navbar-nav">

          <a
            href="/"
            className={`navbar-link ${
              isActive("/") ? "active" : ""
            }`}
          >
            Home
          </a>


          <a
            href="/about"
            className={`navbar-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            About
          </a>


          <a
            href="/products"
            className={`navbar-link ${
              isActive("/products") ? "active" : ""
            }`}
          >
            Products
          </a>


          <a
            href="/contact"
            className={`navbar-link ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            Contact
          </a>


          {/* Inquiry Button */}

          <a
            href="/contact"
            className="navbar-cta"
          >
            <span>Inquire Now</span>
            <ArrowRight size={16} />
          </a>

        </nav>


        {/* Mobile Menu Button */}

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>


      {/* Mobile Navigation */}

      <div
        className={`mobile-menu ${
          isMenuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        <nav className="mobile-nav">

          <a
            href="/"
            className={`mobile-nav-link ${
              isActive("/") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </a>


          <a
            href="/about"
            className={`mobile-nav-link ${
              isActive("/about") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            About
          </a>


          <a
            href="/products"
            className={`mobile-nav-link ${
              isActive("/products") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Products
          </a>


          <a
            href="/contact"
            className={`mobile-nav-link ${
              isActive("/contact") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </a>


          {/* Mobile Inquiry Button */}

          <a
            href="/contact"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Inquire Now
            <ArrowRight size={17} />
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;