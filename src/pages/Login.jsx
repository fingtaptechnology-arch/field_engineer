import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up authentication logic here
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="fe-login-page">
      <div className="fe-login-wrapper">
        <div className="fe-logo">
          <div className="fe-logo-mark">
            <span>FE</span>
            <div className="fe-logo-bar" />
          </div>
          <div className="fe-logo-caption">FIELD ENGINEER</div>
        </div>

        <p className="fe-tagline">
          The FE platform enables businesses to engage technicians when,
          where and how they&apos;re needed.
        </p>

        <div className="fe-card">
          <form onSubmit={handleSubmit}>
            <div className="fe-field">
              <label htmlFor="fe-username">Username / Email</label>
              <button
                type="button"
                className="fe-help-icon"
                aria-label="Username help"
              >
                ?
              </button>
              <input
                id="fe-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>

            <div className="fe-field">
              <label htmlFor="fe-password">Password</label>
              <input
                id="fe-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="fe-forgot-row">
              <a href="#forgot-password" className="fe-forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="fe-login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
