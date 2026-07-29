import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  MyJobsIcon,
  MyProjectsIcon,
  EngineerIcon,
  MessagesIcon,
  FundsIcon,
  ReportingIcon,
  TimeManagementIcon,
  ManageUsersIcon,
  CustomFieldIcon,
  CreateJobIcon,
  MenuIcon,
  SearchIcon,
  BellIcon,
  ChevronLeftIcon,
} from "../components/icons";

// key -> route path, for the sidebar items that already have a page
const navRoutes = {
  dashboard: "/dashboard",
  messages: "/messages",
  funds: "/funds",
  reporting: "/reporting",
};

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: DashboardIcon },
  { key: "my-jobs", label: "My Jobs", icon: MyJobsIcon },
  { key: "my-projects", label: "My Projects", icon: MyProjectsIcon },
  { key: "engineer", label: "Engineer", icon: EngineerIcon },
  { key: "messages", label: "Messages", icon: MessagesIcon },
  { key: "funds", label: "Funds", icon: FundsIcon, sub: "Wallet: $0.00" },
  { key: "reporting", label: "Reporting", icon: ReportingIcon },
  { key: "time-management", label: "Time Management", icon: TimeManagementIcon },
  { key: "manage-users", label: "Manage Users", icon: ManageUsersIcon },
  { key: "custom-field", label: "Custom Field", icon: CustomFieldIcon },
];

// Populate this once the reporting API is wired up.
const reports = [];

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("reporting");

  const handleClick = (item) => {
    setActive(item.key);
    const path = navRoutes[item.key];
    if (path) navigate(path);
  };

  return (
    <aside className="fe-dash-sidebar">
      <div className="fe-dash-sidebar-top">
        <div className="fe-dash-logo">
          FE
          <span>FIELD ENGINEER</span>
        </div>
        <button type="button" className="fe-dash-hamburger" aria-label="Menu">
          <MenuIcon size={18} />
        </button>
      </div>

      <button type="button" className="fe-dash-create-job">
        <span className="fe-plus">
          <CreateJobIcon size={14} />
        </span>{" "}
        Create Job
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
                onClick={() => handleClick(item)}
              >
                <span className="fe-dash-nav-icon">
                  <item.icon size={16} />
                </span>
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
        <span className="fe-dash-search-icon">
          <SearchIcon size={14} />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <button type="button" className="fe-dash-bell" aria-label="Notifications">
        <BellIcon size={18} />
        <span className="fe-dash-bell-badge">4</span>
      </button>
    </div>
  );
}

function ReportingHeader() {
  const navigate = useNavigate();

  return (
    <div className="fe-report-header">
      <div className="fe-report-title-row">
        <button
          type="button"
          className="fe-report-back"
          aria-label="Back"
          onClick={() => navigate("/dashboard")}
        >
          <ChevronLeftIcon size={20} />
        </button>
        <div>
          <h1>Reporting</h1>
          <p>Create reports using our ad-hoc reporting tool to suit your business requirements.</p>
        </div>
      </div>
      <button type="button" className="fe-dash-primary-btn fe-report-create-btn">
        Create Report
      </button>
    </div>
  );
}

function ReportsTable() {
  return (
    <div className="fe-report-table-wrap">
      <table className="fe-report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Created</th>
            <th>Is Shared</th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 ? (
            <tr className="fe-report-empty-row">
              <td colSpan={4}>No Reports found</td>
            </tr>
          ) : (
            reports.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.password}</td>
                <td>{r.created}</td>
                <td>{r.isShared ? "Yes" : "No"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function Reporting() {
  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-report-content">
          <ReportingHeader />
          <ReportsTable />
        </div>
      </div>
    </div>
  );
}
