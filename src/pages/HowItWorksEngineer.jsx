
const benefits = [
  { title: "Fast Payments", description: "Request payment and transfer funds to your bank all within the app." },
  { title: "Find Work Fast", description: "Filter through marketplace to find the perfect job for you." },
  { title: "Choose Your Hours", description: "Make your own schedule and work at your convenience." },
  { title: "Grow Your Career", description: "Build your network and become an expert with endless job opportunities." },
  { title: "Work Remotely", description: "Browse remote jobs in our marketplace and work from wherever you are." },
  { title: "Counter Bid", description: "Counter a job's payout and hours." },
  { title: "Broaden Opportunities", description: "Filter through marketplace to find the perfect jobs for your projects." },
  { title: "Realtime Communication", description: "Stay in touch with us and your client with voice calls and text messaging, all within the app." },
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

const HowItWorksEngineer = () => {
  return (
    <>
      <section className="hiw-eng-hero">
        <div className="hiw-eng-hero__text">
          <h1>Engineering Jobs That Suit You</h1>
          <p>A On-Demand marketplace to find engineering jobs in your local area.</p>
          <div className="footer__app-badges hiw-eng-hero__badges">
            <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
              <img src="/assets/appstore.png" alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
              <img src="/assets/googleplay.png" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="hiw-eng-hero__image"></div>
      </section>

      <section className="home-feature">
        <div className="home-feature__text">
          <h3>Personalized marketplace filled with jobs suited for you</h3>
          <p>
            Finding the type of work that you want to do has never been easier. Search the
            marketplace, apply, and accept to start getting the pay and type of work you
            deserve.
          </p>
          <a href="/how-it-works-businesses" className="header__btn header__btn--outline">
            How It Works &gt;
          </a>
        </div>
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-tracker">
            <span>Marketplace</span>
            <p>Router Replacement · 10 miles away</p>
            <small>15 May · 10:00 am · $900</small>
          </div>
        </div>
      </section>

      <section className="home-feature home-feature--reverse">
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-payment">
            <span className="home-feature__mock-badge">JOB DETAIL</span>
            <div className="home-feature__mock-row">
              <span>Rate</span>
              <span>$60/hour</span>
            </div>
            <div className="home-feature__mock-row home-feature__mock-row--muted">
              <span>10% Service Fee</span>
              <span>$80.00</span>
            </div>
            <div className="home-feature__mock-row">
              <span>Total Payout</span>
              <span>$800.00</span>
            </div>
          </div>
        </div>
        <div className="home-feature__text">
          <h3>Review jobs with 100% transparency before applying</h3>
          <p>
            Transparency is important to us so we want to be clear that we charge a{" "}
            <strong>10% Service Fee</strong> on what you make. However, if you are unhappy with
            the total payout, counter bid is a great way to restore the balance.
          </p>
        </div>
      </section>

      <section className="home-feature">
        <div className="home-feature__text">
          <h3>Get paid with our simple checkout process</h3>
          <p>
            Simply hook up your bank account and we will send you a direct deposit once you
            withdraw. Keep track of all your withdrawals and invoices in the payments section.
            We also support Paypal &amp; Payoneer for payment processing.
          </p>
          <a href="/how-it-works-businesses" className="header__btn header__btn--outline">
            How It Works &gt;
          </a>
        </div>
        <div className="home-feature__image home-feature__image--small">
          <div className="home-feature__mock-tracker">
            <span>Payments</span>
            <p>Total Earnings: $3,000.00</p>
            <small>Available Balance: $1,000.00</small>
          </div>
        </div>
      </section>

      <section className="home-benefits">
        <h2>Benefits</h2>
        <div className="home-benefits__grid home-benefits__grid--four">
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

      <section className="hiw-local">
        <h3>Find Engineering Jobs in your Local Area</h3>
        <p>Search and filter available jobs by location, experience, and rate.</p>
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

export default HowItWorksEngineer;
