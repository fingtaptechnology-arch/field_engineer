
const sidebar = [
  {
    heading: "For Engineers",
    links: [
      "Work Orders",
      "Taxes & Insurance",
      "Registration (Engineer)",
      "Profile",
      "Bank & Payments",
      "Payments (Engineer)",
      "Job Management (Engineer)",
      "General (Engineer)",
      "Insurance",
    ],
  },
  {
    heading: "For Customers",
    links: [
      "Registration (Customer)",
      "Account",
      "Payments (Customer)",
      "Job Management (Customer)",
      "General (Customer)",
    ],
  },
];

const stillNeedHelp = ["Email Us", "Chat With Us"];

const faqs = [
  "Can a job be saved as a draft and modified later for activation?",
  "Can I send a notification to all registered users upon creating a new Job?",
  "How do I assign a job to an engineer?",
  "How do I assign the work to a right engineer?",
  "How do I create a new Job?",
  "How do I delete an active job that I do not need to display on this website?",
  "How do I put an active job on hold?",
  "How do I update a job that was already posted to marketplace?",
  "How do I change my password as a Business?",
  "How can I ensure that the information I posted is secure & safe?",
  "What is the process for dispute and dispute resolution?",
  "What is Field Engineers job cancellation policy?",
  "What are forms W9 and 1099 and why do we need them?",
  "How do I know that the job has been completed successfully?",
  "Is there a mobile app for this website?",
  "Is multiple logins supported?",
  "How to retrieve my username?",
  "How should I reset my username and password?",
  'Does "fieldengineer.com" uses cookies?',
  "How do I change my password?",
  "How do I register with Field Engineer Portal to post a job?",
  "How do I Pay the Engineers?",
  "Do i file Taxes for my Field Engineer?",
  "How do we protect your information? What is your Privacy Policy?",
  "How do I clone a job?",
  "How do I assign the work to a qualified engineer?",
  "How do I update my PayPal details?",
  "Is there any way to upload my resume?",
  "I can't find my skills on the list?",
  "How do I reset my password?",
  "I am unable to log in to my FE profile after completing the signup process?",
  "Can I create a Business account to post jobs and bid for jobs using the same account?",
  "Is there a mobile app for the website?",
  "Where is FieldEngineer.com located? Is there a phone number to call-in?",
  "Why should I carry General Liability Insurance?",
  "How should I get a General Liability, Errors & Omission Insurance?",
  "What is the process to follow in case of payment not received?",
  "The payment has been processed from your end, but I have not received it? How can I resolve this issue?",
  "How should I transfer money in to my account?",
  "How do I withdraw my available balance?",
  "Can I receive a payment directly to my bank account?",
  "Can I receive a payment directly into my pay-pal account?",
  "What should I do if I am ready to go to the job site?",
  "What kind of Job can I get done?",
  "What is the benefit of Drug Tests and Background Checks cleared?",
  "How does Field Engineer Charge the service fee?",
  "How do we protect your privacy?",
  "How do I know if a job has been assigned in the area?",
  "How do I apply for available jobs in the area?",
  "How can I see published job orders?",
  "Why should I carry Errors & Omissions insurance?",
  "What are the recommended insurance minimums that I should carry?",
  "Process of getting a quote regarding insurance coverage?",
  "I don't have my insurance can I still apply for jobs on Field Engineer?",
  "Is multiple logins supported?",
  "How should I reset my username and password?",
  "How do I change my password as an Engineer?",
  'Does "fieldengineer.com" uses cookies?',
  "Does Field Engineer checks the certification and screen the engineers?",
  "Do I need special handheld devices for accessing this website?",
  "How can I ensure that the information I posted is secure & safe?",
  "I did not receive the verification code in my email. How do I activate my account?",
  "What do I do if I am unable to log in to my Field Engineer profile after completing the signup process?",
  "What do I do if I can't find my skills on the list?",
  "How do I receive my 1099 form?",
  "What is the benefit of background checks?",
  "How do I change my password?",
  "How do I retrieve a lost or forgotten username?",
  "Are multiple logins supported?",
  "How does Field Engineer use my location information?",
  "How long does Field Engineer keep my information?",
  "How does Field Engineer protect the information it collects?",
];

const Help = () => {
  return (
    <>
      <section className="help-page__hero">
        <h1>How can we help?</h1>
        <div className="help-page__search">
          <input type="text" placeholder="Search for a FAQ" />
        </div>
      </section>

      <section className="help-page">
        <aside className="help-page__sidebar">
          {sidebar.map((group) => (
            <div className="help-page__sidebar-group" key={group.heading}>
              <h5>{group.heading}</h5>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="help-page__sidebar-group">
            <h5>Still need help?</h5>
            <ul>
              {stillNeedHelp.map((link) => (
                <li key={link}>
                  <a href="/contact">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="help-page__main">
          <span className="help-page__filter">All</span>
          <ul className="help-page__faq-list">
            {faqs.map((question, index) => (
              <li key={index}>
                <a href="#">
                  <span>{question}</span>
                  <span className="contact-us__faq-arrow">&rsaquo;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hiw-cta help-page__cta">
        <h2>Ready to get started?</h2>
        <p>Download our app to sign up and get started</p>
        <div className="footer__app-badges help-page__cta-badges">
          <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
            <img src="/assets/appstore.png" alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
            <img src="/assets/googleplay.png" alt="Get it on Google Play" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Help;
