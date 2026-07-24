import { useParams, Navigate } from "react-router-dom";

const posts = [
  {
    slug: "kpis-for-field-service-technician",
    category: "Field Services",
    title: "Maximizing Field Service Technician Productivity: KPIs to Monitor",
    author: "Mustafa Ali",
    date: "April 26, 2024",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce520ae135eca3a5fa30b9f_mali.png",
    content: [
      "Field service organizations depend on technician productivity to keep customers satisfied and operating costs under control. Tracking the right key performance indicators helps managers spot bottlenecks before they affect service quality.",
      "Metrics such as first-time fix rate, average response time, and technician utilization give a clear picture of how efficiently a workforce is operating. Reviewing them regularly makes it easier to plan training, staffing, and scheduling improvements.",
      "Combining these KPIs with modern field service management tools gives teams the visibility they need to keep productivity high while delivering a better customer experience.",
    ],
  },
  {
    slug: "definition-noc-engineer",
    category: "Network Engineer",
    title: "What is NOC Engineer?",
    author: "Mustafa Ali",
    date: "April 26, 2024",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ba6361f38733b2ae72b0a4a_Noc-Engineer-1.jpg",
    content: [
      "A Network Operations Center (NOC) engineer monitors, manages, and troubleshoots network infrastructure to keep systems running smoothly around the clock.",
      "Their day-to-day responsibilities include monitoring alerts, resolving incidents, coordinating with field teams, and maintaining uptime across servers, routers, and other network equipment.",
      "As networks grow more complex, NOC engineers play an increasingly important role in preventing outages and minimizing downtime for businesses of every size.",
    ],
  },
  {
    slug: "highest-paying-engineering-jobs",
    category: "Engineers",
    title: "Top 10 Highest Paying Engineering Jobs in 2023: A Comprehensive Guide",
    author: "Gary McCauley",
    date: "April 18, 2023",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d2f3dc4ae618b2841c69b83_top-ten-jobs.jpg",
    content: [
      "Engineering remains one of the most rewarding career paths, offering strong salaries across a wide range of specializations.",
      "From petroleum and computer hardware engineers to aerospace and chemical engineers, this guide breaks down the roles that consistently rank among the highest paying in the industry.",
      "Whether you're just starting out or considering a career change, understanding where the demand and compensation are highest can help you plan your next move.",
    ],
  },
  {
    slug: "what-does-a-field-engineer-do",
    category: "Field Engineer",
    title: "What Does a Field Engineer Do?",
    author: "Kaushik Bhaumik",
    date: "November 29, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce3f54ac86d1bd268d2f334_main-img.jpg",
    content: [
      "Field engineers install, maintain, and repair equipment and systems on-site for clients across telecom, IT, and other technical industries.",
      "The role requires a mix of hands-on technical skill and strong communication, since field engineers often work directly with customers to diagnose and resolve issues.",
      "With the rise of on-demand staffing platforms, more field engineers are finding flexible, project-based work that fits their schedule and expertise.",
    ],
  },
  {
    slug: "future-of-work-or-future-of-workers",
    category: "Telecom",
    title: "Could The Telecommunications Gig Economy Save Workers?",
    author: "Malik Zakaria",
    date: "November 1, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d0cd3531d8a8bfd986252fc_main-img.jpg",
    content: [
      "The gig economy has reshaped how telecommunications work gets done, giving skilled technicians the freedom to choose projects that fit their schedules.",
      "For many workers, this flexibility translates into better work-life balance and the ability to take on higher-paying assignments without being tied to a single employer.",
      "As telecom infrastructure continues to expand with new technologies, the gig model may offer a sustainable way to meet demand while giving workers more control over their careers.",
    ],
  },
  {
    slug: "whats-the-difference-computer-science-vs-information-technology",
    category: "General",
    title: "What's The Difference? Computer Science vs Information Technology",
    author: "Kaushik Bhaumik",
    date: "October 13, 2022",
    image:
      "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5ce57ae5da7c3a5e6c191c1c_What%27s%20The%20Difference%20Computer%20Science%20vs%20Information%20Technology.jpg",
    content: [
      "Computer Science and Information Technology are closely related fields, but they focus on different aspects of the technology world.",
      "Computer Science emphasizes the theory behind computing, algorithms, and software development, while Information Technology focuses on deploying, managing, and supporting the systems that businesses rely on.",
      "Understanding the distinction can help students and career changers choose the path that best matches their interests and goals.",
    ],
  },
];

const popularPost = {
  slug: "in-a-blended-economy-whos-in-charge",
  category: "Gig Economy",
  title: "In a Blended Economy, Who's in Charge?",
  author: "Syed Ali",
  date: "October 9, 2018",
  image:
    "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d026e8549cdcc11b7e37ac4_Image-1.jpg",
  content: [
    "The modern economy is a blend of traditional employment and independent, gig-based work, and the lines between the two continue to blur.",
    "This shift raises important questions about who sets the rules for pay, benefits, and working conditions when workers move fluidly between full-time roles and freelance projects.",
    "As more industries adopt blended workforce models, businesses and workers alike are still figuring out how to balance flexibility with stability.",
  ],
};

const allPosts = [...posts, popularPost];

const BlogPost = () => {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <section className="blog-post">
        <div className="blog-post__container">
          <a href="/blogs" className="blog-post__back">
            &lt; Back to Blog
          </a>

          <span className="blog-post__category">{post.category}</span>
          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__meta">
            by {post.author} | {post.date}
          </p>

          <div className="blog-post__image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="blog-post__content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="blog-page__cta">
          <h2>Source Engineers Globally. Save Cost. Save Time.</h2>
          <p>Sign up to get started.</p>
          <a href="/hireanengineer" className="header__btn header__btn--primary">
            Sign Up
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogPost;