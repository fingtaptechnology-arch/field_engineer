

const categories = [
  "Artificial Intelligence",
  "Field Services",
  "Business",
  "Technology",
  "Network Security",
  "Freelance",
  "Site Survey",
  "SD-WAN",
  "Engineers",
  "5G",
  "On-Demand",
  "Field Engineer",
  "Network Deployment",
  "Network Engineer",
  "Telecom",
];

const posts = [
  {
    category: "Field Services",
    title: "Maximizing Field Service Technician Productivity: KPIs to Monitor",
    author: "Mustafa Ali",
    date: "April 26, 2024",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce520ae135eca3a5fa30b9f_mali.png",
    href: "/blogs/kpis-for-field-service-technician",
  },
  {
    category: "Network Engineer",
    title: "What is NOC Engineer?",
    author: "Mustafa Ali",
    date: "April 26, 2024",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ba6361f38733b2ae72b0a4a_Noc-Engineer-1.jpg",
    href: "/blogs/definition-noc-engineer",
  },
  {
    category: "Engineers",
    title: "Top 10 Highest Paying Engineering Jobs in 2023: A Comprehensive Guide",
    author: "Gary McCauley",
    date: "April 18, 2023",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d2f3dc4ae618b2841c69b83_top-ten-jobs.jpg",
    href: "/blogs/highest-paying-engineering-jobs",
  },
  {
    category: "Field Engineer",
    title: "What Does a Field Engineer Do?",
    author: "Kaushik Bhaumik",
    date: "November 29, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce3f54ac86d1bd268d2f334_main-img.jpg",
    href: "/blogs/what-does-a-field-engineer-do",
  },
  {
    category: "Telecom",
    title: "Could The Telecommunications Gig Economy Save Workers?",
    author: "Malik Zakaria",
    date: "November 1, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d0cd3531d8a8bfd986252fc_main-img.jpg",
    href: "/blogs/future-of-work-or-future-of-workers",
  },
  {
    category: "General",
    title: "What's The Difference? Computer Science vs Information Technology",
    author: "Kaushik Bhaumik",
    date: "October 13, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce57ae5da7c3a5e6c191c1c_What%27s%20The%20Difference%20Computer%20Science%20vs%20Information%20Technology.jpg",
    href: "/blogs/whats-the-difference-computer-science-vs-information-technology",
  },
];

const popularPost = {
  category: "Gig Economy",
  title: "In a Blended Economy, Who's in Charge?",
  author: "Syed Ali",
  date: "October 9, 2018",
  image:
    "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d026e8549cdcc11b7e37ac4_Image-1.jpg",
};

const Blog = () => {
  return (
    <>

      <section className="blog-page">
        <div className="blog-page__banner">
          <span className="blog-page__banner-tag">FIELD ENGINEER</span>
          <h1>BLOG</h1>
        </div>

        <div className="blog-page__categories">
          {categories.map((cat) => (
            <a href="#" key={cat} className="blog-page__chip">
              {cat}
            </a>
          ))}
        </div>

        <div className="blog-page__container">
          <div className="blog-page__grid">
            {posts.map((post) => (
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

          <aside className="blog-page__popular">
            <h4>Popular Posts</h4>
            <a href={popularPost.href} className="blog-card blog-card--popular">
              <div className="blog-card__image">
                <img src={popularPost.image} alt={popularPost.title} />
              </div>
              <span className="blog-card__category">{popularPost.category}</span>
              <h3 className="blog-card__title">{popularPost.title}</h3>
              <p className="blog-card__meta">
                by {popularPost.author} | {popularPost.date}
              </p>
            </a>
          </aside>
        </div>

        <div className="blog-page__cta">
          <h2>Source Engineers Globally. Save Cost. Save Time.</h2>
          <p>Sign up to get started.</p>
          <a href="/business-signup" className="header__btn header__btn--primary">
            Sign Up
          </a>
        </div>
      </section>
    </>
  );
};

export default Blog;
