
const steps = [
  {
    number: "Step 1",
    title: "Post a Job",
    description:
      "Creating a job post is fast and easy. You can start from a template or start with a clean slate.",
    quote:
      "I registered with fieldengineer.com and within a short period of time, I got assigned both remote job and onsite work. This platform is simple to use, easy to understand and made it very quick and easy to get paid as well. I recommend fieldengineer.com not just for engineers but also for companies to assist any project that they might have any in their organization.",
    name: "Nick Bevilacqua, Shoretel Engineer",
  },
  {
    number: "Step 2",
    title: "Review & Assign",
    description:
      "Once a job has been posted, applicants will begin to apply. You will be able to review candidates qualifications and assign engineers to the project.",
    quote:
      "Great site, within a short time I was able to find projects and get paid. An abundance of projects to choose from and registration was quick and easy. Fairly straight forward to find & apply projects and long time through the mobile app.",
    name: "Steven Faust, Avaya Architect",
  },
  {
    number: "Step 3",
    title: "Manage Your Jobs",
    description:
      "Once engineers accept the job assignment you will be able to track their arrival on the map and see which tasks have been completed. You will also be able to see a birds eye view of all the projects via the calendar.",
    quote:
      "fieldengineer.com is one of the best platforms for engineers who are looking for more project work. Payment is received once project work is approved, it is easy and quick.",
    name: "Sammy Mutua, Network Engineer",
  },
  {
    number: "Step 4",
    title: "Approve Payment",
    description:
      "When the job is complete engineers will submit their hours and you will be able to review and approve the payments.",
    quote:
      "The best thing I like about this website is their speedy payment process. After reporting the onsite hours, the payment usually arrives within 24 hours, sometimes even in one hour. It saved me a lot of time for tracking payments of different assignments.",
    name: "Chris, Field Engineer",
  },
];

const integrations = ["Microsoft", "JSON", "XML", "SAP", "RestFul", "Salesforce", "Structured Flat File", "Oracle", "Email"];

const faqs = [
  "How do I register with Field Engineer Portal to post a job?",
  "What is the process for dispute and dispute resolution?",
  "Do i file Taxes for my Field Engineer?",
  "What is Field Engineers job cancellation policy?",
  "How do I Pay the Engineers?",
];

const HowItWorksBusiness = () => {
  return (
    <>
      <section className="hiw-hero">
        <div className="hiw-hero__text">
          <h1>One Platform for All Your Global Engineering Needs</h1>
          <h4>Hire Skilled and Certified Engineers</h4>
          <ul className="hiw-hero__checklist">
            <li>On Demand</li>
            <li>On Your Schedule</li>
            <li>On Your Terms</li>
          </ul>
          <a href="/business-signup" className="header__btn header__btn--primary">
            Hire An Engineer
          </a>
        </div>
        <div className="hiw-hero__image">
          <div className="hiw-hero__mock">
            <div className="hiw-hero__mock-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hiw-hero__mock-body">
              <div className="hiw-hero__mock-sidebar"></div>
              <div className="hiw-hero__mock-main">
                <div className="hiw-hero__mock-header">
                  <span>Good Afternoon Jane</span>
                  <span className="hiw-hero__mock-sub">Today, May 15th: you have 5 scheduled jobs and 2 requiring action</span>
                </div>
                <div className="hiw-hero__mock-map"></div>
              </div>
            </div>
          </div>
          <div className="hiw-hero__play">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="hiw-steps">
        {steps.map((step, index) => (
          <div className="hiw-step" key={step.title}>
            <div className="hiw-step__marker">
              <span className="hiw-step__dot"></span>
              {index !== steps.length - 1 && <span className="hiw-step__line"></span>}
            </div>
            <div className="hiw-step__body">
              <span className="hiw-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p className="hiw-step__description">{step.description}</p>
              <div className="hiw-step__quote">
                <span className="hiw-step__quote-avatar">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                </span>
                <p>&ldquo;{step.quote}&rdquo;</p>
                <span className="hiw-step__quote-name">{step.name}</span>
              </div>
            </div>
            <div className="hiw-step__image"></div>
          </div>
        ))}
      </section>

      <section className="hiw-integrations">
        <div className="hiw-integrations__text">
          <h3>API Integrations</h3>
          <p>The Field Engineer platform conveniently connects with the apps and software you already use.</p>
          <ul>
            <li>Job Management</li>
            <li>Fund Management</li>
            <li>Realtime Tracking</li>
            <li>Work Approvals</li>
            <li>Work Assignments</li>
          </ul>
          <a href="/contact" className="header__btn header__btn--primary">
            Contact Us
          </a>
        </div>
        <div className="hiw-integrations__diagram">
          <span className="hiw-integrations__center">FE</span>
          {integrations.map((item, index) => (
            <span
              className="hiw-integrations__node"
              style={{ "--i": index, "--total": integrations.length }}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="hiw-local">
        <h3>Find Engineers in your Local Area</h3>
        <p>Search and filter available engineers and jobs by rating, location, experience, and rate.</p>
      </section>

      <section className="hiw-cta">
        <h2>Ready to get started?</h2>
        <a href="/business-signup" className="header__btn hiw-cta__btn">
          Sign Up
        </a>
      </section>

      <section className="contact-us__faq hiw-faq">
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
      </section>
    </>
  );
};

export default HowItWorksBusiness;
