import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";

const contactOptions = [
  {
    title: "Engineers",
    description: "Contact for On-Demand Engineers",
    link: "/contact-us-form?form_type=engineers",
  },
  {
    title: "Customers",
    description: "Contact for customers",
    link: "/contact-us-form?form_type=businesses",
  },
  {
    title: "General",
    description: "General Contact",
    link: "/contact-us-form",
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
      <Header />

      <section className="contact-us">
        {/* Hero */}
        <div className="contact-us__hero">
          <h1>Contact Us</h1>
          <p className="contact-us__subheading">
            Contact Support 7 days a week, 9am - 5pm
          </p>
          <p className="contact-us__description">
            Select your inquiry type and then fill out the form. A
            representative will contact you as soon as possible. For
            immediate assistance, please refer to our <a href="/help">FAQ</a>
          </p>
        </div>

        {/* Contact category cards */}
        <div className="contact-us__options">
          {contactOptions.map((option) => (
            <a href={option.link} className="contact-card" key={option.title}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div className="contact-us__faq">
          <h4>Frequently Asked Questions</h4>
          <ul>
            {faqs.map((question) => (
              <li key={question}>
                <a href="/help">{question}</a>
              </li>
            ))}
          </ul>
          <a href="/help" className="see-more">
            See more
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;