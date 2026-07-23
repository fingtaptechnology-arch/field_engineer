import { useState } from "react";
import "./Header.css";

const navLinks = [
  { label: "How it Works", href: "/how-it-works-businesses" },
  { label: "Find Engineering Jobs", href: "/engineer" },
  { label: "Blog", href: "/blogs" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <a href="/" className="header__logo">
          <img src="/assets/logo.svg" alt="Field Engineer" />
        </a>

        {/* Nav links */}
        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {navLinks.map((link) => (
            <a href={link.href} key={link.label} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <a href="https://app.fieldengineer.com/login" className="header__login">
            Log in
          </a>
          <a href="/business-signup" className="header__btn header__btn--outline">
            Hire an Engineer
          </a>
          <a href="/engineer-signup" className="header__btn header__btn--primary">
            Apply for Jobs
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;