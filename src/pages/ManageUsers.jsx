import React, { useState } from "react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "my-jobs", label: "My Jobs", icon: "📍" },
  { key: "my-projects", label: "My Projects", icon: "🗂" },
  { key: "engineer", label: "Engineer", icon: "👥" },
  { key: "messages", label: "Messages", icon: "💬" },
  { key: "funds", label: "Funds", icon: "💰", sub: "Wallet: $0.00" },
  { key: "reporting", label: "Reporting", icon: "📊" },
  { key: "time-management", label: "Time Management", icon: "⏱" },
  { key: "manage-users", label: "Manage Users", icon: "🧑‍💼" },
  { key: "custom-field", label: "Custom Field", icon: "📋" },
];

const users = [
  {
    id: "C441632283",
    name: "Muhammad Chaudry",
    company: "company",
    status: "ACTIVE",
  },
];

function Sidebar() {
  const [active, setActive] = useState("manage-users");

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
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`fe-dash-nav-btn ${
                  active === item.key ? "is-active" : ""
                }`}
                onClick={() => setActive(item.key)}
              >
                <span className="fe-dash-nav-icon">{item.icon}</span>
                <span className="fe-dash-nav-label">
                  {item.label}
                  {item.sub && (
                    <span className="fe-dash-nav-sub">{item.sub}</span>
                  )}
                </span>
              </button>
            </li>
          ))}
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

function TopBar() {
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

function ManageUsersHeader() {
  return (
    <div className="manage-users__header">
      <div className="manage-users__title-row">
        <button
          type="button"
          className="manage-users__back-btn"
          aria-label="Go back"
        >
          &#8249;
        </button>
        <div>
          <h1 className="manage-users__title">Manage Users</h1>
          <p className="manage-users__subtitle">
            Manage and administer your business users and private engineers.
          </p>
        </div>
      </div>
      <button type="button" className="manage-users__create-btn">
        Create User
      </button>
    </div>
  );
}

function ManageUsersTabs({ activeTab, onChange }) {
  return (
    <div className="manage-users__tabs">
      <button
        type="button"
        className={`manage-users__tab ${
          activeTab === "users" ? "is-active" : ""
        }`}
        onClick={() => onChange("users")}
      >
        Users
      </button>
      <button
        type="button"
        className={`manage-users__tab ${
          activeTab === "private-engineers" ? "is-active" : ""
        }`}
        onClick={() => onChange("private-engineers")}
      >
        Private Engineers
      </button>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="manage-users__card">
      <div className="manage-users__avatar-wrap">
        <span className="manage-users__avatar" />
        <span className="manage-users__avatar-id">{user.id}</span>
      </div>
      <div className="manage-users__card-info">
        <p className="manage-users__card-name">{user.name}</p>
        <p className="manage-users__card-company">{user.company}</p>
        <p className="manage-users__card-status">{user.status}</p>
      </div>
    </div>
  );
}

function ManageUsersPagination() {
  return (
    <div className="manage-users__pagination">
      <span className="manage-users__pagination-label">
        Items per page:
      </span>
      <select
        className="manage-users__pagination-select"
        defaultValue="20"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button
        type="button"
        className="manage-users__pagination-btn"
        aria-label="Previous page"
        disabled
      >
        &#8249;
      </button>
      <button
        type="button"
        className="manage-users__pagination-btn"
        aria-label="Next page"
        disabled
      >
        &#8250;
      </button>
    </div>
  );
}

export default function ManageUsers() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-dash-content manage-users">
          <ManageUsersHeader />

          <ManageUsersTabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "users" ? (
            <div className="manage-users__grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <p className="manage-users__empty">
              No private engineers added yet.
            </p>
          )}

          <ManageUsersPagination />
        </div>
      </div>
    </div>
  );
}
