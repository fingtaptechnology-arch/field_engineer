

const sidebarLinks = [
  { label: "In the news", href: "/news" },
  { label: "Read the blog", href: "/blogs" },
  { label: "Job Openings", href: "/jobs" },
];

const presence = [
  { count: "3000+", region: "Australia" },
  { count: "12000+", region: "Asia" },
  { count: "4000+", region: "South Africa" },
  { count: "13000+", region: "Europe" },
  { count: "12000+", region: "South America" },
  { count: "15000+", region: "West Coast, USA" },
  { count: "7000+", region: "South East Asia" },
  { count: "1500+", region: "Russia" },
  { count: "2500+", region: "North Africa" },
  { count: "3500+", region: "United Kingdom" },
  { count: "15000+", region: "East Coast, USA" },
  { count: "2200+", region: "Canada" },
];

const team = [
  {
    name: "Malik Zakaria",
    role: "Founder & CEO",
    image: "/assets/team/malik-zakaria.jpg",
  },
  {
    name: "Kaushik Bhaumik",
    role: "Chief Technology Officer",
    image: "/assets/team/kaushik-bhaumik.jpg",
  },
  {
    name: "Thales Texeira",
    role: "Advisor",
    image: "/assets/team/thales-texeira.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      

      <section className="about-hero">
        <div className="about-hero__inner">
          <h1>About Us</h1>
        </div>
      </section>

      <main className="about-content">
        <div className="about-content__inner">
          <aside className="about-sidebar">
            {sidebarLinks.map(({ label, href }) => (
              <a key={label} href={href} className="about-sidebar__link">
                <span>{label}</span>
                <span className="about-sidebar__chevron">&rsaquo;</span>
              </a>
            ))}
          </aside>

          <div className="about-main">
            <section className="about-section">
              <h2>Our Mission</h2>
              <p className="about-mission__lead">
                We are obsessed with cutting through obstacles between
                ambitious businesses and gig-hungry engineers.
              </p>
              <p className="about-mission__body">
                We live, breathe and bleed telecom. We&rsquo;re dedicated to
                directly connecting field engineers and the businesses that
                hire them to unleash opportunities in an era of insatiable
                digital demand. FE is a powerful platform for businesses and
                talent who want to be free of old school recruitment hurdles.
                We streamline slow and costly talent and job search,
                interviewing, vetting, hiring and paying. FE frees the
                ambitious to succeed. FE is proving to be an indispensable
                global marketplace.
              </p>
            </section>

            <section className="about-section">
              <h2>Engineers Worldwide Presence</h2>
              <div className="about-presence">
                {presence.map(({ count, region }) => (
                  <div key={region} className="about-presence__item">
                    <span className="about-presence__count">{count}</span>
                    <span className="about-presence__region">{region}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-section">
              <h2>Our Team</h2>
              <div className="about-team">
                {team.map(({ name, role, image }) => (
                  <div key={name} className="about-team__member">
                    <img src={image} alt={name} className="about-team__photo" />
                    <div className="about-team__name">{name}</div>
                    <div className="about-team__role">{role}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  );
};

export default AboutUs;
