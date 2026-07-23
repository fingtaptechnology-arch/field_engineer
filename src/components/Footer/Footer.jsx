import "./Footer.css";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "Blog", href: "/blogs" },
      { label: "Help", href: "/help" },
      { label: "Skills", href: "/skills" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/legal" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "Hire an Engineer", href: "/business-signup" },
      { label: "Apply for Jobs", href: "/engineer-signup" },
    ],
  },
  {
    heading: "How It Works",
    links: [
      { label: "How It Works: Engineers", href: "/engineer" },
      { label: "How it Works: Businesses", href: "/how-it-works-businesses" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/fieldengineers", icon: "/assets/facebook.svg" },
  { label: "Twitter", href: "https://twitter.com/FieldEngineer_", icon: "/assets/twitter.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fieldengineer/", icon: "/assets/linkedin.svg" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top: logo, address, socials */}
        <div className="footer__top">
          <a href="/" className="footer__logo">
            <img src="/assets/logo.svg" alt="Field Engineer" />
          </a>

          <p className="footer__address">
            77 Water Street,
            <br />
            Suite 7000
            <br />
            New York, NY 10005 USA
          </p>

          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.label} aria-label={social.label}>
                <img src={social.icon} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="footer__columns">
          {footerLinks.map((col) => (
            <div className="footer__column" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App download */}
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

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Field Engineer</p>
      </div>
    </footer>
  );
};

export default Footer;