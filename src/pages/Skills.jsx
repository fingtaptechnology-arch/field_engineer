
const skillGroups = [
  [
    ["Senior Telecom Analyst", "Telecommunications Coordinator", "System Integration Engineer"],
    ["Remote Network Engineer", "What is a DDoS Attack", "Certified Wireless Analysis Professional"],
    ["Certified Wireless Technology Specialist", "Certified Wireless Network Administrator (CWNA)", "SDN Certification"],
    ["PMI Certification", "Red Hat Certification", "PMP Certification"],
    ["AWS Certification", "CompTIA", "Data Science"],
    ["Lean Six Sigma", "Certified Scrum Master", "CISSP Certification"],
    ["SCCM Administrator", "Data Security Engineer", "Cyber Security"],
    ["Computer Hardware Engineer", "Entry Level Computer Engineer", "Computer Skills"],
    ["Process Technician", "Oracle Certification Guide", "Technical Illustrator"],
  ],
  [
    ["SCCM", "IT Help Desk", "IC3 Certification"],
    ["Telecommunications Operator", "Telecommunications Director", "Telecom Analyst"],
    ["Satellite Communications Engineer", "Information Systems Professional", "Virtual Assistant"],
    ["ARM Accredited Engineer", "Chief Networking Officer", "Cisco Certification"],
    ["Software Testing", "Configuration Management Engineer", "Computer Operator"],
    ["Application Analyst", "Certified Ethical Hacker", "IT Assistant"],
    ["Software Defined Networking", "Cisco Adaptive Security Appliance (ASA)", "Cisco Identity Services Engine (ISE)"],
    ["Subnetting", "Computer Scientist", "CCENT"],
    ["ICND1", "Network Software Engineer", "Principal Network Engineer"],
  ],
  [
    ["Cloud Network Engineer", "Entry Level Network Engineer Job Description", "What is Network Support Engineer? Job Description and Salary"],
    ["What is a Senior Network Engineer? Job Description and Salary", "Junior Network Engineer Jobs", "What is a Technical Project Manager? Its Role and Job Description"],
    ["What Is Edge Computing? Benefits, and Future", "What is an IS manager? Job Description, Skills and Salary", "What is Wireless LAN Controller, Job Description and Salary?"],
    ["What is Network Automation And Why Network Automation", "What is Network Orchestration", "Network Optimization Engineers"],
    ["What is Broadband Technician, Job Description and Salary?", "How To Become Electronic Designer Engineer", "What is a Network Designer?"],
    ["What is Hardware Design Engineer, Job Description, and Salary", "What is Field Manager, Job Description and Salary?", "Cell Tower Technician, Job Skills & Salary"],
    ["What is SCADA, Job Description and Salary of SCADA Technician?", "How To Become A Tower Climber", "What is Fiber Optic, Pros and Cons of Fiber Optics"],
    ["Big Data Engineer Definition, Skills, Job Description & Salary", "Qualified Server Repair Technician", "What is Technical Recruiter, Skills, Job Description & Salary?"],
    ["Why A Remote Workforce Is Better For Business", "What is The Gig Economy? Pros and Cons", "What is Business Intelligence"],
  ],
  [
    ["What Is An On-Demand Worker", "Microsoft Azure is big news in the world of cloud computing", "IT Operations and Guide to Remote Workers"],
    ["Aryaka SD-WAN Engineer", "RF Drive Tester", "RF Hardware Engineer"],
    ["Aryaka SD-WAN Expert", "WAN Optimization Engineer", "RF Optimization Engineer"],
    ["Event Technician", "Citrix NetScaler SD-WAN Engineer", "RF Design Engineer"],
    ["FortiNet SD-WAN Engineer", "FatPipe SD-WAN Engineer", "Riverbed SD-WAN Engineer"],
    ["Smart Hands Engineer", "Cabling Engineer", "Network Deployment Technician"],
    ["UPS Installer", "", ""],
  ],
];

const faqs = [
  "Is there a mobile app for this website?",
  "How do I withdraw my available balance?",
  "How long does Field Engineer keep my information?",
  "How do I report my work hours for the work order?",
  "What kind of Jobs are available at FieldEngineer.com?",
];

const Skills = () => {
  return (
    <>
      <section className="page-hero skills-page__hero">
        <h1>300,000 Jobs Types &amp; Counting</h1>
      </section>

      <section className="skills-page">
        {skillGroups.map((group, groupIndex) => (
          <div className="skills-page__group" key={groupIndex}>
            {group.map((row, rowIndex) => (
              <div className="skills-page__row" key={rowIndex}>
                {row.map((skill, colIndex) =>
                  skill ? (
                    <a href="#" className="skills-page__link" key={colIndex}>
                      {skill}
                    </a>
                  ) : (
                    <span key={colIndex}></span>
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="hiw-cta skills-page__cta">
        <h2>Ready to get started?</h2>
        <div className="footer__app-badges skills-page__cta-badges">
          <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
            <img src="/assets/appstore.png" alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
            <img src="/assets/googleplay.png" alt="Get it on Google Play" />
          </a>
        </div>
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

export default Skills;
