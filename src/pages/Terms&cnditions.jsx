import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  "General",
  "Engineers",
  "Customers",
  "Terms of use",
  "Work Order Terms",
  "Privacy Policy",
];

const items = [
  "Confidentiality",
  "Your Rights Regarding the Use of Your Personal Information",
  "Disintermediation and Non-Circumvention Policies",
  "Privacy Policy",
  "Children's Online Privacy Protection Act",
  "Type of Data We Collect",
  "Information You Provide to Us",
  "Information Collected via Technology",
  "Use of Your Personal Information",
  "Use of Non-Personal Information",
  "Important Information About Platform Permissions",
  "Location-Based Data",
  "Disclosure of Your Personal Information",
  "Links to Third Party Websites",
  "Security of Your Personal Information",
  "International Data Transfers",
  "Changes to This Privacy Policy",
  "Contact Information",
  "Notices",
  "Access, Correction, Deletion",
  "Terms of Use",
  "Privacy Policy",
  "Type of Users",
  "About Field Engineer",
  "Accounts",
  "Mobile Apps",
  "Mobile App and SMS Alerts",
  "Rights and Licenses",
  "User Content",
  "Links to Other Sites and/or Materials",
  "Release",
  "Indemnification",
  "Disclaimers",
  "Limitation of Liability",
  "Term and Termination",
  "Copyright Policy",
  "Legal Disputes",
  "General",
  "Standard Terms",
  "Work Order Process",
  "Payment Terms",
  "Independent Contractor Status",
  "Proprietary Rights",
  "Warranties and Representations",
  "Dispute Resolution",
  "General",
  "Customer Property",
  "Non Disclosure",
  "Withholding",
  "No Benefits",
  "No Authority to Bind Customers",
  "Expenses and Supplies",
  "Method of Provision of Services",
  "Binding Agreement",
  "Acceptance or Changes",
  "Information",
  "Provider Responsibilities",
  "Payment of Providers",
  "Background Checks",
  "Indemnification",
  "Disintermediation and Non-Circumvention Policies",
  "Insurance",
  "How it Works",
  "Our Relationship with Providers",
  "Provider User Agreement",
  "Waiver",
  "Customer Terms",
  "Background Checks",
  "Indemnification",
  "Services Related Dispute Procedures",
  "Payment Terms",
  "How it Works",
  "Our Relationship with Providers",
];

function Header() {
  return (
    <header className="fe-header">
      <div className="fe-header-top">
        <div className="fe-header-top-inner">
          <span className="fe-signup-label">SIGN UP</span>
        </div>
      </div>
      <div className="fe-header-main">
        <Link to="/" className="fe-header-logo">
          FE
        </Link>
        <nav className="fe-header-nav">
          <a href="#how-it-works">How It Works</a>
          <a href="#find-jobs">Find Engineering Jobs</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="fe-header-actions">
          <a href="#hire" className="fe-outline-btn">
            Hire an Engineer
          </a>
          <a href="#apply" className="fe-outline-btn">
            Apply for Jobs
          </a>
          <a href="#login">Log in</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fe-footer">
      <div className="fe-footer-main">
        <div className="fe-footer-brand">
          <div className="fe-footer-logo">FE</div>
          <p>
            77 Water Street,
            <br />
            Suite 7000
            <br />
            New York, NY 10005 USA
          </p>
          <p>&copy; 2026 Field Engineer</p>
          <div className="fe-footer-social">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#twitter" aria-label="Twitter">
              t
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="fe-footer-col">
          <a href="#blog">Blog</a>
          <a href="#help">Help</a>
          <a href="#skills">Skills</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; conditions</a>
        </div>

        <div className="fe-footer-col">
          <a href="#hire">Hire an Engineer</a>
          <a href="#jobs">Apply for Jobs</a>
          <span className="fe-footer-divider" />
          <a href="#how-engineers">How It Works: Engineers</a>
          <a href="#how-business">How It Works: Businesses</a>
        </div>

        <div className="fe-footer-apps">
          <span className="fe-footer-apps-label">Download the App!</span>
          <a href="#appstore" className="fe-store-badge">
            App Store
          </a>
          <a href="#googleplay" className="fe-store-badge">
            Google Play
          </a>
        </div>
      </div>

      <div className="fe-footer-bottom">
        <p>
          Our website uses cookies to make your browsing experience better.
          By using our website you agree to our use of cookies. Learn More.
        </p>
        <button type="button" className="fe-accept-btn">
          Accept
        </button>
      </div>
    </footer>
  );
}

function AccordionRow({ label }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`fe-accordion-row ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="fe-accordion-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span className="fe-chevron" aria-hidden="true">
          &rsaquo;
        </span>
      </button>
      {open && (
        <div className="fe-accordion-panel">
          <p>Content for &quot;{label}&quot; goes here.</p>
        </div>
      )}
    </div>
  );
}

export default function TermsConditions() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="fe-page">
      <Header />

      <div className="fe-terms-hero">
        <h1>Terms &amp; Conditions</h1>
      </div>

      <div className="fe-terms-layout">
        <aside className="fe-terms-sidebar">
          <nav>
            <ul>
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    type="button"
                    className={`fe-tab-btn ${
                      activeTab === tab ? "is-active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/" className="fe-back-link">
            &lsaquo; Back
          </Link>
        </aside>

        <main className="fe-terms-content">
          <p className="fe-breadcrumb">
            Legal / <span>{activeTab}</span>
          </p>

          <div className="fe-accordion-list">
            {items.map((label, idx) => (
              <AccordionRow key={`${label}-${idx}`} label={label} />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
