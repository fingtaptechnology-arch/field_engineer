import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { posts, popularPost } from "../../data/blogPosts";

const allPosts = [...posts, popularPost];

const BlogPost = () => {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <Header />

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
          <a href="/business-signup" className="header__btn header__btn--primary">
            Sign Up
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
