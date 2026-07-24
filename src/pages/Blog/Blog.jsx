import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { categories, posts, popularPost } from "../../data/blogPosts";

const Blog = () => {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default Blog;
