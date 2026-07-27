import React, { useState } from "react";
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
  InfoIcon,
  DollarIcon,
  StarIcon,
} from "../components/icons";

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

const activity = [
  {
    time: "24 Jul 2026 @ 6:25 PM",
    text: "C441632283 have logged on to Field Engineer",
  },
  {
    time: "24 Jul 2026 @ 5:58 PM",
    text: "A new job has been posted to the Marketplace",
  },
  {
    time: "23 Jul 2026 @ 4:12 PM",
    text: "Job #A28193 has moved into Jeopardy",
  },
  {
    time: "22 Jul 2026 @ 11:03 AM",
    text: "A visit was marked complete for Job #A28190",
  },
];

function Sidebar() {
  const [active, setActive] = useState("dashboard");

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
        <span className="fe-plus"><CreateJobIcon size={14} /></span> Create Job
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

function OverviewBar() {
  return (
    <section className="fe-dash-card fe-dash-overview">
      <h2>Muhammad Chaudry - Workorder Overview</h2>
      <div className="fe-dash-overview-bar" />
      <div className="fe-dash-overview-legend">
        <span>
          <i className="fe-dot fe-dot-teal" /> Unassigned (1)
        </span>
        <span>
          <i className="fe-dot fe-dot-red" /> In Jeopardy (1)
        </span>
      </div>
    </section>
  );
}

function MarketplaceCard() {
  return (
    <div className="fe-dash-card fe-dash-panel">
      <div className="fe-dash-panel-header">
        <span className="fe-dash-panel-icon">
          <InfoIcon size={14} />
        </span>
        <h3>Marketplace Job(s)</h3>
      </div>
      <ul className="fe-dash-stat-list">
        <li>
          <strong>1</strong> job(s) are unassigned
        </li>
        <li>
          <strong>0</strong> job(s) have no applicant
        </li>
        <li>
          <strong>0</strong> job(s) are pending acceptance
        </li>
        <li>
          <strong>1</strong> Job(s) are in Jeopardy
        </li>
      </ul>
      <div className="fe-dash-panel-footer">
        <button type="button" className="fe-dash-primary-btn">
          Marketplace
        </button>
        <label className="fe-dash-select">
          Job Owner
          <select defaultValue="All">
            <option>All</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function UnpaidVisitsCard() {
  return (
    <div className="fe-dash-card fe-dash-panel">
      <div className="fe-dash-panel-header">
        <span className="fe-dash-panel-icon">
          <DollarIcon size={14} />
        </span>
        <h3>Unpaid Visits</h3>
      </div>
      <ul className="fe-dash-stat-list">
        <li>
          <strong>0</strong> Fixed pay visit(s)
        </li>
        <li>
          <strong>0</strong> Hourly pay visit(s)
        </li>
      </ul>
      <div className="fe-dash-panel-footer">
        <button type="button" className="fe-dash-primary-btn">
          Review Visits
        </button>
        <label className="fe-dash-select">
          Job Owner
          <select defaultValue="All">
            <option>All</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function JobMessagesCard() {
  return (
    <div className="fe-dash-card fe-dash-panel">
      <div className="fe-dash-panel-header">
        <span className="fe-dash-panel-icon">
          <InfoIcon size={14} />
        </span>
        <h3>Job Messages</h3>
      </div>
      <p className="fe-dash-messages-empty">You have 0 unread messages.</p>
      <div className="fe-dash-panel-footer">
        <button type="button" className="fe-dash-primary-btn">
          View messages
        </button>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="fe-dash-card fe-dash-profile">
      <div className="fe-dash-profile-top">
        <span className="fe-dash-avatar fe-dash-avatar-lg" />
        <div>
          <p className="fe-dash-profile-name">Muhammad Chaudry</p>
          <p className="fe-dash-profile-company">FingTap Solutions</p>
          <div className="fe-dash-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} size={13} />
            ))}
          </div>
        </div>
        <button type="button" className="fe-dash-edit-btn">
          Edit
        </button>
      </div>
      <div className="fe-dash-wallet">
        <p className="fe-dash-wallet-label">Wallet</p>
        <p className="fe-dash-wallet-amount">$0.00</p>
        <a href="#transactions">View transaction history</a>
      </div>
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="fe-dash-card fe-dash-activity">
      <h3>Activity (Top 50)</h3>
      <ul>
        {activity.map((a, idx) => (
          <li key={idx}>
            <span className="fe-dash-activity-dot" />
            <div>
              <p className="fe-dash-activity-time">{a.time}</p>
              <p className="fe-dash-activity-text">{a.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-dash-content">
          <div className="fe-dash-customize-row">
            <a href="#customize">Customize Dashboard</a>
          </div>
          <OverviewBar />

          <div className="fe-dash-grid">
            <div className="fe-dash-panels-row">
              <MarketplaceCard />
              <UnpaidVisitsCard />
              <JobMessagesCard />
            </div>

            <div className="fe-dash-side-col">
              <ProfileCard />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
