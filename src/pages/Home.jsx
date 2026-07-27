
const popularJobs = [
  {
    title: "Print Services",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#14314f" strokeWidth="1.6">
        <path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2M6 14h12v7H6z" />
      </svg>
    ),
  },
  {
    title: "Network Security Services",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#14314f" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18M12 3a9 9 0 0 0 0 18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Audio Visual Services",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#14314f" strokeWidth="1.6">
        <path d="M3 9v6h4l5 4V5L7 9H3z" />
        <path d="M16 9a4 4 0 0 1 0 6" />
      </svg>
    ),
  },
  {
    title: "Data Center Services",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#14314f" strokeWidth="1.6">
        <rect x="4" y="3" width="16" height="7" rx="1" />
        <rect x="4" y="14" width="16" height="7" rx="1" />
        <circle cx="8" cy="6.5" r="0.6" fill="#14314f" />
        <circle cx="8" cy="17.5" r="0.6" fill="#14314f" />
      </svg>
    ),
  },
  {
    title: "Field Engineering Services",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#14314f" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
      </svg>
    ),
  },
];

const benefits = [
  { title: "Dedicated Support", description: "We're here for you, 24/7. Just reach out!" },
  { title: "Seamless Integration", description: "Our platform's API conveniently connects with the apps and software you already use." },
  { title: "No Hidden Fees", description: "Pay no fees as a business. Service fees are deducted from the engineer's earnings." },
  { title: "75K+ Engineers", description: "Source your jobs and match with our expansive engineer network." },
  { title: "Broaden Opportunities", description: "Filter through marketplace to find the perfect engineers for your projects." },
  { title: "30% Cost Savings", description: "Customers can save over 30% costs compared to traditional engagement." },
];

const blogPosts = [
  {
    category: "Field Services",
    title: "Maximizing Field Service Technician Productivity: KPIs to Monitor",
    author: "Mustafa Ali",
    date: "April 28, 2026",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce520ae135eca3a5fa30b9f_mali.png",
    href: "/blogs/kpis-for-field-service-technician",
  },
  {
    category: "Network Engineer",
    title: "What is NOC Engineer?",
    author: "Mustafa Ali",
    date: "April 28, 2026",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ba6361f38733b2ae72b0a4a_Noc-Engineer-1.jpg",
    href: "/blogs/definition-noc-engineer",
  },
  {
    category: "Network Deployment",
    title: "Five Steps to a Successful LAN Implementation",
    author: "Syed Ali",
    date: "April 26, 2023",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d0cd3531d8a8bfd986252fc_main-img.jpg",
    href: "/blogs/five-steps-to-a-successful-lan-implementation",
  },
];

const newsroom = [
  {
    title: "Field Engineer selected as one of the leading global B2B E-commerce players by Orbis Research",
    date: "February 3, 2021",
    excerpt:
      "Global freelance marketplace, Field Engineer, has been selected as one of the most influential B2B E-commerce companies.",
    href: "#",
  },
  {
    title: "This NYC Startup is Revolutionizing the Engineering Industry By Creating",
    date: "November 2, 2018",
    excerpt: "This NYC Startup is Revolutionizing the Engineering Industry By Creating",
    href: "#",
  },
  {
    title: "Openreach to hire 5,300 engineers, roll out EV fleet",
    date: "December 19, 2020",
    excerpt: "BT's infrastructure unit Openreach will recruit thousands of engineers next year as it ramps up its full fibre rollout.",
    href: "#",
  },
];

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__container">
          <h1>
            Source engineers globally.
            <br />
            Save cost, save time.
          </h1>
          <p>A global freelance marketplace that connects businesses with engineers on demand</p>
          <div className="home-hero__actions">
            <a href="#" className="header__btn header__btn--outline home-hero__btn--light">
              Watch Now
            </a>
            <a href="/business-signup" className="header__btn header__btn--primary">
              Hire an Engineer
            </a>
          </div>
          <div className="home-hero__pin">
            <span className="home-hero__pin-dot"></span>
            Australia
            <br />
            <strong>3000 engineers</strong>
          </div>
        </div>
      </section>

      <section className="home-jobs">
        <h2>Most Popular Jobs Serviced</h2>
        <div className="home-jobs__grid">
          {popularJobs.map((job) => (
            <div className="home-jobs__card" key={job.title}>
              <span className="home-jobs__icon">{job.icon}</span>
              <p>{job.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-feature">
        <div className="home-feature__image">
          <img
            src="https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d2f3dc4ae618b2841c69b83_top-ten-jobs.jpg"
            alt="Field Engineer dashboard preview"
          />
        </div>
        <div className="home-feature__text">
          <h3>Contract jobs to over 75,000+ vetted engineers in 200+ countries.</h3>
          <p>
            We will algorithmically match the best engineers for the job. Our engineers who
            opt-in are background checked and ready to work. You will be able to filter and sort
            by rating, years of experience, and proximity to the job site.
          </p>
        </div>
      </section>

      <section className="home-feature home-feature--reverse">
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-payment">
            <span className="home-feature__mock-badge">NO FEE</span>
            <div className="home-feature__mock-row">
              <span>Requested: 2 hours</span>
              <span className="home-feature__mock-status">Pending</span>
            </div>
            <div className="home-feature__mock-row home-feature__mock-row--muted">
              <span>Approved to date: 4 hours</span>
              <span>$ 150.00</span>
            </div>
          </div>
        </div>
        <div className="home-feature__text">
          <h3>Posting a job is easy and free!</h3>
          <p>
            Once we match you with the perfect engineer for the job, a <strong>10% fee</strong> is
            deducted from the engineer&rsquo;s earnings — it won&rsquo;t cost you a dime.
          </p>
        </div>
      </section>

      <section className="home-feature">
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-tracker">
            <span>Engineer Tracker</span>
            <p>Database Admin Fundamentals</p>
            <small>Engineer: Derek McKenzie · In Progress</small>
          </div>
        </div>
        <div className="home-feature__text">
          <h3>Personalized project management for everyone in your company.</h3>
          <p>
            Managing large scale projects with multiple engineers in multiple locations can be a
            challenge. Our dashboard and project views allow us to have everything in one place.
          </p>
        </div>
      </section>

      <section className="home-feature home-feature--reverse">
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-chat">
            <p>
              Hello Jane, I have submitted <strong>4 hours</strong> for job Database Installation
            </p>
            <span className="home-feature__mock-review">Review</span>
          </div>
        </div>
        <div className="home-feature__text">
          <h3>Stay in touch with messaging &amp; voice calls.</h3>
          <p>
            Keeping up to date on projects has never been easier. We have built various forms of
            getting in touch straight into the platform to allow for seamless communication
            between businesses and the engineers they hire.
          </p>
        </div>
      </section>

      <section className="home-benefits">
        <h2>Benefits</h2>
        <div className="home-benefits__grid">
          {benefits.map((benefit) => (
            <div className="home-benefits__item" key={benefit.title}>
              <span className="home-benefits__icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-find">
        <div className="home-find__devices">
          <div className="home-find__device home-find__device--wide"></div>
          <div className="home-find__device home-find__device--phone"></div>
          <div className="home-find__device home-find__device--wide"></div>
        </div>
        <div className="home-find__text">
          <h3>Find Engineers in your Job locations worldwide</h3>
          <p>Search and filter available engineers by rating, location, experience, and rate.</p>
          <div className="footer__app-badges home-find__badges">
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
              <img src="/assets/googleplay.png" alt="Get it on Google Play" />
            </a>
            <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
              <img src="/assets/appstore.png" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </section>

      <section className="home-blog">
        <h2>Blog Posts</h2>
        <div className="home-blog__grid">
          {blogPosts.map((post) => (
            <a href={post.href} className="blog-card" key={post.title}>
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} />
              </div>
              <span className="blog-card__category">{post.category}</span>
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__meta">
                by {post.author} | {post.date}
              </p>
            </a>
          ))}
        </div>
        <a href="/blogs" className="blog-page__view-more">
          View more &gt;
        </a>
      </section>

      <section className="home-news">
        <h2>Newsroom</h2>
        <div className="home-news__grid">
          {newsroom.map((item) => (
            <div className="home-news__card" key={item.title}>
              <h4>{item.title}</h4>
              <span className="home-news__date">{item.date}</span>
              <p>{item.excerpt}</p>
              <a href={item.href}>Read article</a>
            </div>
          ))}
        </div>
        <div className="home-news__dots">
          <span className="home-news__dot home-news__dot--active"></span>
          <span className="home-news__dot"></span>
        </div>
      </section>
    </>
  );
};

export default Home;
