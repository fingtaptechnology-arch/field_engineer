

const contactOptions = [
  {
    title: "Engineers",
    description: "Contact for On-Demand Engineers",
    link: "/contact-us-form?form_type=engineers",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
        <path d="M12 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v3.5c0 .8-.7 1.5-1.5 1.5H16v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7h-.5C6.7 13 6 12.3 6 11.5V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3z" />
      </svg>
    ),
  },
  {
    title: "Customers",
    description: "Contact for customers",
    link: "/contact-us-form?form_type=businesses",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
        <path d="M9 4a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v3h18V9a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H9zm0 2h6v1H9V6zM3 13v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6H3zm8 1h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    title: "General",
    description: "General Contact",
    link: "/contact-us-form",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 15.5h-1.8v-1.8h1.8v1.8zm1.87-7a2.6 2.6 0 0 1-1 2c-.6.5-.87.8-.87 1.5h-1.8c0-1.2.5-1.8 1.2-2.4.5-.4.77-.7.77-1.2 0-.7-.6-1.2-1.4-1.2-.75 0-1.3.45-1.5 1.15l-1.7-.7C7.9 8.4 9.2 7.5 11 7.5c2 0 3.3 1.15 3.3 2.9 0 .7-.25 1.3-.53 1.7z" />
      </svg>
    ),
  },
];

const faqs = [
  "Is there a mobile app for this website?",
  "How do I withdraw my available balance?",
  "How long does Field Engineer keep my information?",
  "How do I report my work hours for the work order?",
  "What kind of Jobs are available at FieldEngineer.com?",
];

const ContactUs = () => {
  return (
    <>

      <section className="page-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-us">
        <div className="contact-us__top">
          <div className="contact-us__intro">
            <p className="contact-us__subheading">
              Contact Support 7 days a week, 9am - 5pm
            </p>
            <p className="contact-us__description">
              Select your inquiry type and then fill out the form. A
              representative will contact you as soon as possible. For
              immediate assistance, please refer to our{" "}
              <a href="/help">FAQ</a>
            </p>
          </div>

          <div className="contact-us__options">
            {contactOptions.map((option) => (
              <a href={option.link} className="contact-card" key={option.title}>
                <span className="contact-card__icon">{option.icon}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="contact-card__arrow">&rsaquo;</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-us__faq">
          <h4>Frequently Asked Questions</h4>
          <ul>
            {faqs.map((question) => (
              <li key={question}>
                <a href="/help">
                  <span>{question}</span>
                  <span className="contact-us__faq-arrow">&rsaquo;</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="/help" className="see-more">
            See more <span>&rsaquo;</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
