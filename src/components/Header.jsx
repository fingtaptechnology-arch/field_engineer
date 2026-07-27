import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "How it Works", href: "/how-it-works-businesses" },
  { label: "Find Engineering Jobs", href: "/engineer" },
  { label: "Blog", href: "/blogs" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-mark">FE</span>
          <span className="header__logo-word">FIELD ENGINEER</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {navLinks.map((link) => (
            <Link to={link.href} key={link.label} className="header__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <div className="header__signup">
            <span className="header__signup-label">SIGNUP</span>
            <div className="header__signup-btns">
              <Link to="/business-signup">Hire an Engineer</Link>
              <span className="header__signup-divider"></span>
              <Link to="/engineer-signup">Apply for Jobs</Link>
            </div>
          </div>
          <a href="https://app.fieldengineer.com/login" className="header__login">
            Log in
          </a>
        </div>

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