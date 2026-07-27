

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "contacting-us", label: "Contacting us" },
  { id: "what-info", label: "What information do we collect?" },
  { id: "auto-collected", label: "Automatically collected information" },
  {
    id: "sensitive-info",
    label: "Collection and processing of sensitive information",
  },
  { id: "other-sources", label: "Information from other sources" },
  { id: "how-we-use", label: "How do we use your personal information?" },
  { id: "legal-basis-eu", label: "Legal basis for processing in the EU" },
  {
    id: "when-we-share",
    label: "When do we share your personal information?",
  },
  { id: "communication-choices", label: "Communication choices" },
  { id: "rights-to-access", label: "Rights to access" },
  { id: "external-links", label: "Links to external sites" },
  {
    id: "how-long-keep",
    label: "How long do we keep your personal information for?",
  },
  { id: "eu-privacy-rights", label: "EU privacy rights" },
  { id: "children-policy", label: "What is our policy on children?" },
  {
    id: "where-we-store",
    label: "Where do we store and process your personal information?",
  },
  { id: "jurisdiction", label: "Jurisdiction and Enforcement" },
  { id: "california", label: "California privacy disclosures" },
  {
    id: "secure-info",
    label: "How do we secure your personal information?",
  },
  { id: "updates", label: "Updates to this Policy" },
];




export default function Privacy() {
  return (
    <div className="fe-page">

      <div className="fe-privacy-layout">
        <aside className="fe-sidebar">
          <nav>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

        </aside>

        <main className="fe-privacy-content">
          <h1>Privacy policy</h1>
          <p className="fe-updated">Last Updated: November 16th, 2020</p>

          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              This privacy policy (&quot;Privacy Policy&quot;) describes the
              collection of personal information by FieldEngineer, Inc., a
              Delaware corporation (&quot;Company,&quot; &quot;we,&quot; or
              &quot;us&quot;) from users of and visitors to our website
              (collectively, the &quot;Site&quot;) along with our related web
              sites, mobile applications, networks, and any other services
              provided by us and to which a link to this Privacy Policy is
              displayed (collectively, together with the Site, the
              &quot;Services&quot;). This Privacy Policy also describes our
              use and disclosure of that information.
            </p>
            <p>
              Your continued use of the Services indicates your acceptance of
              this Privacy Policy and of our Terms and Conditions.
            </p>
          </section>

          <section id="contacting-us">
            <h2>Contacting us</h2>
            <p>
              If you have any questions or comments about this Privacy
              Policy, please contact us using the following contact
              information:
            </p>
            <p>
              FieldEngineer, Inc.
              <br />
              77 Water Street
              <br />
              Suite 700
              <br />
              New York, NY 10005
              <br />
              <a href="mailto:privacy@fieldengineer.com">
                privacy@fieldengineer.com
              </a>
            </p>
          </section>

          <section id="what-info">
            <h2>What information do we collect?</h2>
            <p>
              We use your personal information to carry out the obligations
              arising from any contracts entered into between you and us and
              to provide you with the information, products, and services
              that you request from us.
            </p>
            <p>Information you provide directly:</p>
            <ul>
              <li>
                When you create an account or engage with our Services, we
                collect contact and profile information such as your name,
                email address, phone number, and location.
              </li>
              <li>
                When you use our Services, we collect information related to
                the work you submit and complete, including your work
                history, certifications, education, and payment details.
              </li>
              <li>
                When you communicate with other users through the Services,
                we may collect information about that communication and its
                content.
              </li>
            </ul>
          </section>

          <section id="auto-collected">
            <h2>Automatically collected information</h2>
            <p>
              When you use our Services, we automatically collect certain
              information about your device and usage, including your IP
              address, browser type, operating system, referring URLs, device
              information, pages viewed, and the dates and times of your
              visits.
            </p>
            <p>
              We may collect this information using cookies, pixel tags, and
              similar technologies. For more information, please see our{" "}
              <a href="#cookies">Cookie Policy</a>.
            </p>
          </section>

          <section id="sensitive-info">
            <h2>Collection and processing of sensitive information</h2>
            <p>
              The Services do not collect or process sensitive personal
              information, defined as data consisting of racial or ethnic
              origin, political opinions, religious or philosophical beliefs,
              trade union membership, genetic data, biometric data, health
              data, or data concerning a person&apos;s sex life or sexual
              orientation, except where you have provided that information as
              part of your use of the Service, or as otherwise required by
              applicable law.
            </p>
          </section>

          <section id="other-sources">
            <h2>Information from other sources</h2>
            <p>
              We may also obtain information about you from other sources,
              including third-party services and publicly available
              databases, and combine that with information we already have
              about you in order to help us update, expand, and analyze our
              records.
            </p>
          </section>

          <section id="how-we-use">
            <h2>How do we use your personal information?</h2>
            <p>
              We collect personal information when you register for a Site or
              engage with us, and use it to provide you the Services you
              request. We use personal information for the following
              purposes:
            </p>
            <ul>
              <li>To provide the Services and process your account.</li>
              <li>
                To verify your identity and screen for potential risk or
                fraud.
              </li>
              <li>
                To communicate with you about your account and our Services.
              </li>
              <li>
                To personalize and improve the Services and your experience.
              </li>
              <li>
                To send marketing communications, where permitted by law.
              </li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section id="legal-basis-eu">
            <h2>Legal basis for processing in the EU</h2>
            <p>
              If you are resident in the EU, we collect and process
              information about you only where we have a legal basis for
              doing so, such as where processing is necessary to perform our
              contract with you, where processing is in our legitimate
              interests, or where we have your consent.
            </p>
          </section>

          <section id="when-we-share">
            <h2>When do we share your personal information?</h2>
            <p>
              Except as described in this Privacy Policy, we do not disclose
              your personal information to third parties without your
              consent, except in the following circumstances:
            </p>
            <ul>
              <li>
                With service providers who perform services on our behalf,
                such as payment processing and data hosting.
              </li>
              <li>
                To comply with legal obligations or respond to lawful
                requests from public authorities.
              </li>
              <li>
                In connection with a merger, acquisition, or sale of assets.
              </li>
              <li>With your consent or at your direction.</li>
            </ul>
          </section>

          <section id="communication-choices">
            <h2>Communication choices</h2>
            <p>
              If you receive marketing email from us, you may unsubscribe at
              any time by following the instructions included in the email,
              or by contacting us at{" "}
              <a href="mailto:privacy@fieldengineer.com">
                privacy@fieldengineer.com
              </a>
              .
            </p>
          </section>

          <section id="rights-to-access">
            <h2>Rights to access</h2>
            <p>
              If you have a user account and profile on our Service, you have
              the ability to access and update your personal information
              directly within your account settings. You may also contact us
              to request access to, correction of, or deletion of personal
              information we hold about you.
            </p>
          </section>

          <section id="external-links">
            <h2>Links to external sites</h2>
            <p>
              The Service may contain links to other websites not operated or
              controlled by us. We are not responsible for the content or
              privacy practices of those sites, and encourage you to review
              their privacy policies.
            </p>
          </section>

          <section id="how-long-keep">
            <h2>How long do we keep your personal information for?</h2>
            <p>
              We retain personal information for as long as necessary to
              fulfill the purposes for which it was collected, including to
              satisfy legal, accounting, or reporting requirements.
            </p>
          </section>

          <section id="eu-privacy-rights">
            <h2>EU privacy rights</h2>
            <p>
              If you are located in the EU, you have the following Data
              Subject Access Rights with respect to your personal
              information: the right of access, rectification, erasure,
              restriction, portability, and objection.
            </p>
          </section>

          <section id="children-policy">
            <h2>What is our policy on children?</h2>
            <p>
              Our Services are directed to individuals who are 18 years of
              age or older. We do not knowingly collect personal information
              from children.
            </p>
          </section>

          <section id="where-we-store">
            <h2>Where do we store and process your personal information?</h2>
            <p>
              Your information may be transferred to, and maintained on,
              computers located outside of your state, province, country, or
              other governmental jurisdiction where data protection laws may
              differ.
            </p>
          </section>

          <section id="jurisdiction">
            <h2>Jurisdiction and Enforcement</h2>
            <p>
              As part of our commitment to this Privacy Policy, we are
              subject to relevant regulatory oversight and cooperate with
              applicable enforcement authorities.
            </p>
          </section>

          <section id="california">
            <h2>California privacy disclosures</h2>
            <p>
              California law requires us to provide residents of California
              with a summary of the categories of personal information we
              collect and disclose, and the categories of third parties to
              whom that information is disclosed, in accordance with the
              California Consumer Privacy Act of 2018.
            </p>
          </section>

          <section id="secure-info">
            <h2>How do we secure your personal information?</h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards designed to protect the personal information we
              collect. However, no method of transmission over the internet
              or electronic storage is completely secure.
            </p>
          </section>

          <section id="updates">
            <h2>Updates to this Policy</h2>
            <p>
              We may occasionally update this Privacy Policy. When we do, we
              will revise the &quot;Last Updated&quot; date at the top of
              this page and, where required by law, notify you of material
              changes.
            </p>
          </section>
        </main>
      </div>

    
    </div>
  );
}
