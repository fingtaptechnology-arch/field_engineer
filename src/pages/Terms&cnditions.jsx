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

    </div>
  );
}
