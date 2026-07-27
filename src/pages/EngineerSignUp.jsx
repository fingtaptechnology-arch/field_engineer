

const stats = [
  { value: "190+", label: "Countries", sublabel: "Global Presence" },
  { value: "1100", label: "Vendor Skills & Certifications", sublabel: "Talent" },
  { value: "300", label: "Have Hired on FE Platform", sublabel: "Customers" },
];

const EngineerSignUp = () => {
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
          <p>Do you want to post jobs and engage engineers?</p>
          <a href="/business-signup">click here to sign up as a customer</a>
        </div>

        <div className="auth-page__body">
          <div className="auth-page__form-col">
            <h1>Engineer Sign Up</h1>
            <p className="auth-page__tagline">Apply for Jobs</p>
            <p className="auth-page__subheading">Sign Up Below</p>
            <p className="auth-page__login-hint">
              Already have an account?{" "}
              <a href="https://app.fieldengineer.com/login">Login</a>
            </p>

            <form className="auth-page__form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
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
                Sign Up
              </button>
            </form>

            <div className="auth-page__app-download">
              <h4>Download our app to sign up and get started</h4>
              <div className="footer__app-badges auth-page__app-badges">
                <a href="https://itunes.apple.com/us/app/field-engineer/id1147116800?mt=8">
                  <img src="/assets/appstore.png" alt="Download on the App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ionicframework.fe&hl=en">
                  <img src="/assets/googleplay.png" alt="Get it on Google Play" />
                </a>
              </div>
              <p>
                or{" "}
                <a href="https://app.fieldengineer.com/login">click here</a> to
                login &amp; complete signup.
              </p>
            </div>
          </div>

          <div className="auth-page__image-col">
            <img
              src="/assets/engineer-signup-device.png"
              alt="Field Engineer app preview"
            />
          </div>
        </div>

        <div className="auth-page__intro">
          <h2>
            Companies Need You. Start Applying for Jobs. Work When and Where
            You Like With Field Engineer.
          </h2>
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

export default EngineerSignUp;
