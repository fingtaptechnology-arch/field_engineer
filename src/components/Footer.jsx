const companyLinks = [
  { label: "Blog", href: "/blogs" },
  { label: "Help", href: "/help" },
  { label: "Skills", href: "/skills" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & conditions", href: "/legal" },
];

const getStartedLinks = [
  { label: "Hire an Engineer", href: "/hireanengineer" },
  { label: "Apply for Jobs", href: "/applyforjobs" },
];

const howItWorksLinks = [
  { label: "How It Works: Engineers", href: "/engineer" },
  { label: "How It Works: Businesses", href: "/how-it-works-businesses" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/fieldengineers", icon: "facebook" },
  { label: "Twitter", href: "https://twitter.com/FieldEngineer_", icon: "twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fieldengineer/", icon: "linkedin" },
];

const socialIconPaths = {
  facebook: "M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 15 6h2V2h-3c-3 0-5 2-5 5v3H6v4h3v8h4z",
  twitter:
    "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-7 3.6A11.4 11.4 0 0 1 3.4 4.7a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2 18.4a11.4 11.4 0 0 0 6.3 1.8c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-mark">FE</span>
            <span className="footer__logo-word">FIELD ENGINEER</span>
          </a>

          <p className="footer__address">
            77 Water Street,
            <br />
            Suite 7000
            <br />
            New York, NY 10005 USA
          </p>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Field Engineer
          </p>

          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} aria-label={social.label}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d={socialIconPaths[social.icon]} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <ul>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <ul>
            {getStartedLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <hr className="footer__divider" />
          <ul>
            {howItWorksLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__apps">
          <h5>Download the App!</h5>
          <div className="footer__app-badges">
            <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
              <img src="/assets/appstore.png" alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
              <img src="/assets/googleplay.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
