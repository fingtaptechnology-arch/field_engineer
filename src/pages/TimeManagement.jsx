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

function Sidebar() {
  const [active, setActive] = useState("time-management");

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

function TimeManagementHeader() {
  return (
    <div className="time-mgmt__header">
      <div className="time-mgmt__title-row">
        <button
          type="button"
          className="time-mgmt__back-btn"
          aria-label="Go back"
        >
          &#8249;
        </button>
        <div>
          <h1 className="time-mgmt__title">Time Management</h1>
          <p className="time-mgmt__subtitle">
            Review and approve, time &amp; expense submitted by engineers for
            the work they performed.
          </p>
        </div>
      </div>

      <div className="time-mgmt__wallet-card">
        <div className="time-mgmt__wallet-info">
          <span className="time-mgmt__wallet-label">Wallet</span>
          <span className="time-mgmt__wallet-amount">$0.00</span>
        </div>
        <button type="button" className="time-mgmt__add-funds-btn">
          Add Funds
        </button>
      </div>
    </div>
  );
}

function TimeManagementFilterBar() {
  return (
    <div className="time-mgmt__filter-bar">
      <button
        type="button"
        className="time-mgmt__filter-btn"
        aria-label="Filter"
      >
        &#9776;
      </button>
    </div>
  );
}

function TimeManagementTabs({ activeTab, onChange }) {
  return (
    <div className="time-mgmt__tabs-row">
      <div className="time-mgmt__tabs">
        <button
          type="button"
          className={`time-mgmt__tab ${
            activeTab === "hourly" ? "is-active" : ""
          }`}
          onClick={() => onChange("hourly")}
        >
          Hourly Jobs
        </button>
        <button
          type="button"
          className={`time-mgmt__tab ${
            activeTab === "fixed" ? "is-active" : ""
          }`}
          onClick={() => onChange("fixed")}
        >
          Fixed Jobs
        </button>
      </div>

      <div className="time-mgmt__job-owner">
        <span className="time-mgmt__job-owner-label">Job Owner</span>
        <select className="time-mgmt__job-owner-select" defaultValue="all">
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
}

function TimeManagementTable({ rows }) {
  return (
    <div className="time-mgmt__table-wrap">
      <table className="time-mgmt__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Job Details</th>
            <th>Engineer</th>
            <th>Hours</th>
            <th>Allowance</th>
            <th>Expenses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={7} className="time-mgmt__table-empty">
                No records found.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.jobDetails}</td>
                <td>{row.engineer}</td>
                <td>{row.hours}</td>
                <td>{row.allowance}</td>
                <td>{row.expenses}</td>
                <td>{row.action}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function TimeManagement() {
  const [activeTab, setActiveTab] = useState("hourly");
  const rows = [];

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-dash-content time-mgmt">
          <TimeManagementHeader />
          <TimeManagementFilterBar />
          <TimeManagementTabs activeTab={activeTab} onChange={setActiveTab} />
          <TimeManagementTable rows={rows} />
        </div>
      </div>
    </div>
  );
}
