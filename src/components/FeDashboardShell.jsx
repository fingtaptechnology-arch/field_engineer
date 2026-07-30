import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  CreateJobIcon,
  MenuIcon,
  SearchIcon,
  BellIcon,
} from "./icons";

// Single source of truth for the dashboard sidebar. Every item has a real
// `path` so it always navigates, no matter which page it's clicked from.
export const navItems = [
  { key: "dashboard", label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { key: "my-jobs", label: "My Jobs", icon: MyJobsIcon, path: "/myjob" },
  { key: "my-projects", label: "My Projects", icon: MyProjectsIcon, path: "/my-projects" },
  { key: "engineer", label: "Engineer", icon: EngineerIcon, path: "/engineer" },
  { key: "messages", label: "Messages", icon: MessagesIcon, path: "/messages" },
  { key: "funds", label: "Funds", icon: FundsIcon, path: "/funds", sub: "Wallet: $0.00" },
  { key: "reporting", label: "Reporting", icon: ReportingIcon, path: "/reporting" },
  { key: "time-management", label: "Time Management", icon: TimeManagementIcon, path: "/time-management" },
  { key: "manage-users", label: "Manage Users", icon: ManageUsersIcon, path: "/manage-users" },
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
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className={`fe-dash-nav-btn ${isActive ? "is-active" : ""}`}
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
                </Link>
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
        <span className="fe-dash-search-icon">
          <SearchIcon size={14} />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <button
        type="button"
        className="fe-dash-bell"
        aria-label="Notifications"
      >
        <BellIcon size={18} />
        <span className="fe-dash-bell-badge">4</span>
      </button>
    </div>
  );
}
