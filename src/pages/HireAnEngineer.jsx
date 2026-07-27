
const stats = [
  { value: "200+", label: "Countries", sublabel: "Global Presence" },
  { value: "1100", label: "Vendor Skills & Certifications", sublabel: "Talent" },
  { value: "300", label: "Have Hired on FE Platform", sublabel: "Customers" },
];

const BusinessSignUp = () => {
  return (
    <>

      <section className="auth-page">
        <div className="auth-page__topbar">
          <a href="/" className="auth-page__logo">
            <img src="/assets/logo.svg" alt="Field Engineer" />
          </a>
          <a href="/" className="auth-page__back">
            &lt; Back
          </a>
        </div>

        <div className="auth-page__banner">
          <p>Are you a freelance engineer looking for work?</p>
          <a href="/engineer-signup">click here to signup to work</a>
        </div>

        <div className="auth-page__body">
          <div className="auth-page__form-col">
            <h1>Sign Up To Find &amp; Hire Engineers</h1>
            <p className="auth-page__tagline">Hire An Engineer</p>
            <p className="auth-page__subheading">Sign Up Below</p>
            <p className="auth-page__login-hint">
              Already have an account?{" "}
              <a href="https://app.fieldengineer.com/login">Login</a>
            </p>

            <form className="auth-page__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />

              <label className="auth-page__checkbox">
                <input type="checkbox" required />
                <span>
                  I have read and hereby agree to the Field Engineer{" "}
                  <a href="/terms">Terms &amp; Conditions</a>, and consent to
                  the <a href="/privacy">Privacy Policy</a>.
                </span>
              </label>

              <button type="submit" className="header__btn header__btn--primary">
                Signup to start hiring
              </button>
            </form>
          </div>

          <div className="auth-page__image-col">
            <img
              src="/assets/business-signup-device.png"
              alt="Field Engineer dashboard preview"
            />
          </div>
        </div>

        <div className="auth-page__intro">
          <h2>Hire On-Demand Freelance Engineers. Start Posting Jobs.</h2>
        </div>

        <div className="auth-page__stats">
          {stats.map((stat) => (
            <div className="auth-page__stat" key={stat.label}>
              <span className="auth-page__stat-sublabel">{stat.sublabel}</span>
              <span className="auth-page__stat-value">{stat.value}</span>
              <span className="auth-page__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default BusinessSignUp;
