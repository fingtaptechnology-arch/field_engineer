import React from "react";
import { Link, useLocation } from "react-router-dom";

// `path` is set only for pages that actually exist and are routed in
// src/routes. Items without a `path` render as disabled buttons with a
// "Coming soon" label instead of a dead link.
//
// For pages that aren't built yet, the intended route is left as a
// commented-out `path` below. Once the page/route exists, just uncomment
// the `path` line for that item and it will automatically turn into a
// working link (no other changes needed).
export const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "🏠", path: "/dashboard" },
  {
    key: "my-jobs",
    label: "My Jobs",
    icon: "📍",
    // path: "/my-jobs",
  },
  { key: "my-projects", label: "My Projects", icon: "🗂", path: "/my-projects" },
  { key: "engineer", label: "Engineer", icon: "👥", path: "/engineer" },
  {
    key: "messages",
    label: "Messages",
    icon: "💬",
    // path: "/messages",
  },
  {
    key: "funds",
    label: "Funds",
    icon: "💰",
    sub: "Wallet: $0.00",
    // path: "/funds",
  },
  {
    key: "reporting",
    label: "Reporting",
    icon: "📊",
    // path: "/reporting",
  },
  {
    key: "time-management",
    label: "Time Management",
    icon: "⏱",
    // path: "/time-management",
  },
  {
    key: "manage-users",
    label: "Manage Users",
    icon: "🧑‍💼",
    // path: "/manage-users",
  },
  {
    key: "custom-field",
    label: "Custom Field",
    icon: "📋",
    // path: "/custom-field",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fe-dash-sidebar">
      <div className="fe-dash-sidebar-top">
        <div className="fe-dash-logo">
          FE
          <span>FIELD ENGINEER</span>
        </div>
        <button type="button" className="fe-dash-hamburger" aria-label="Menu">
          &#9776;
        </button>
      </div>

      <button type="button" className="fe-dash-create-job">
        <span className="fe-plus">+</span> Create Job
      </button>

      <nav className="fe-dash-nav">
        <ul>
          {navItems.map((item) => {
            const isActive = item.path
              ? location.pathname === item.path
              : false;

            const content = (
              <>
                <span className="fe-dash-nav-icon">{item.icon}</span>
                <span className="fe-dash-nav-label">
                  {item.label}
                  {item.sub && (
                    <span className="fe-dash-nav-sub">{item.sub}</span>
                  )}
                  {!item.path && (
                    <span className="fe-dash-nav-soon">Coming soon</span>
                  )}
                </span>
              </>
            );

            return (
              <li key={item.key}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`fe-dash-nav-btn ${isActive ? "is-active" : ""}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="fe-dash-nav-btn is-disabled"
                    disabled
                    title="Coming soon"
                  >
                    {content}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="fe-dash-sidebar-bottom">
        <button type="button" className="fe-dash-user">
          <span className="fe-dash-avatar" />
          Muhammad Chaudry
        </button>
        <a href="#feedback">Feedback</a>
        <a href="#release-notes">Release Notes</a>
        <a href="#settings">Settings</a>
        <a href="#signout">Sign Out</a>
        <button type="button" className="fe-dash-help-btn">
          Need help?
        </button>
      </div>
    </aside>
  );
}

export function TopBar() {
  return (
    <div className="fe-dash-topbar">
      <div className="fe-dash-search">
        <span className="fe-dash-search-icon">&#128269;</span>
        <input type="text" placeholder="Search" />
      </div>
      <button
        type="button"
        className="fe-dash-bell"
        aria-label="Notifications"
      >
        &#128276;
        <span className="fe-dash-bell-badge">4</span>
      </button>
    </div>
  );
}
