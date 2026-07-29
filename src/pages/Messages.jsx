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
  CheckIcon,
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

const conversations = [
  {
    key: "platform",
    name: "Field Engineer",
    sub: "Platform Messages",
    time: "01:52 am",
    date: "07 Mar",
    initials: "FE",
  },
  {
    key: "victor",
    name: "VICTOR CHUKWUKA",
    sub: "W190307008643",
    time: "12:58 pm",
    date: "18 Sep",
    initials: "VC",
  },
  {
    key: "erikas",
    name: "Erikas Sneideris",
    sub: "W190307008643",
    time: "08:20 pm",
    date: "20 Sep",
    initials: "ES",
  },
  {
    key: "arjun",
    name: "Arjun Singh",
    sub: "W190307008643",
    time: "06:41 pm",
    date: "02 Sep",
    initials: "A",
  },
  {
    key: "soheil",
    name: "Soheil Banej",
    sub: "W190307008643",
    time: "10:02 pm",
    date: "10 Jul",
    initials: "SB",
  },
  {
    key: "sabbir",
    name: "Sabbir Ahmed",
    sub: "W190307008643",
    time: "10:02 am",
    date: "31 Mar",
    initials: "SA",
  },
  {
    key: "randy",
    name: "Randy van Heynegen",
    sub: "W190307008643",
    time: "05:27 pm",
    date: "29 Dec",
    initials: "R",
  },
  {
    key: "zain",
    name: "Zain Iqbal",
    sub: "W190307008643",
    time: "09:41 pm",
    date: "25 Dec",
    initials: "ZI",
  },
  {
    key: "rahman",
    name: "Rahman Ahmad",
    sub: "W190307008643",
    time: "05:01 pm",
    date: "21 Nov",
    initials: "RA",
  },
  {
    key: "yasser",
    name: "Yasser Alivan",
    sub: "W190307008643",
    time: "10:50 am",
    date: "15 Nov",
    initials: "YA",
  },
];

const threadGroups = [
  {
    date: "10 Jul",
    messages: [
      {
        id: "m1",
        text: 'You have 25 applicant(s) for "FTS62113 - 8 Mar 19 - 9 O\'Clock Brussels, Belgium" - Onsite / W190307008643 to review.',
        time: "31 Mar 10:02 am",
      },
    ],
  },
  {
    date: "02 Sep",
    messages: [
      {
        id: "m2",
        text: 'You have 26 applicant(s) for "FTS62113 - 8 Mar 19 - 9 O\'Clock Brussels, Belgium" - Onsite / W190307008643 to review.',
        time: "02 Sep 06:40 pm",
      },
    ],
  },
  {
    date: "20 Sep",
    messages: [
      {
        id: "m3",
        text: 'You have 27 applicant(s) for "FTS62113 - 8 Mar 19 - 9 O\'Clock Brussels, Belgium" - Onsite / W190307008643 to review.',
        time: "20 Sep 07:15 pm",
      },
    ],
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("messages");

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

function ConversationList({ activeKey, onSelect }) {
  return (
    <div className="fe-msg-list">
      <div className="fe-msg-list-search">
        <input type="text" placeholder="Search" />
        <span className="fe-msg-list-search-icon">
          <SearchIcon size={14} />
        </span>
      </div>
      <ul className="fe-msg-list-items">
        {conversations.map((c) => (
          <li key={c.key}>
            <button
              type="button"
              className={`fe-msg-list-item ${
                activeKey === c.key ? "is-active" : ""
              }`}
              onClick={() => onSelect(c.key)}
            >
              <span className="fe-msg-avatar">{c.initials}</span>
              <span className="fe-msg-list-item-body">
                <span>
                  <span className="fe-msg-list-item-name">{c.name}</span>
                  <span className="fe-msg-list-item-sub">{c.sub}</span>
                </span>
                <span className="fe-msg-list-item-meta">
                  <span className="fe-msg-list-item-time">{c.time}</span>
                  <span className="fe-msg-list-item-date">{c.date}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Thread({ conversation }) {
  return (
    <div className="fe-msg-thread">
      <div className="fe-msg-thread-header">
        <span className="fe-msg-thread-avatar">{conversation.initials}</span>
        <div>
          <p className="fe-msg-thread-title">{conversation.name}</p>
          <p className="fe-msg-thread-subtitle">{conversation.sub}</p>
        </div>
      </div>

      <div className="fe-msg-thread-scroll">
        {threadGroups.map((group) => (
          <div key={group.date}>
            <div className="fe-msg-date-divider">
              <span>{group.date}</span>
            </div>
            {group.messages.map((m) => (
              <div className="fe-msg-bubble-row" key={m.id}>
                <span className="fe-msg-bubble-avatar">FE</span>
                <div className="fe-msg-bubble">
                  <p>{m.text}</p>
                  <div className="fe-msg-bubble-meta">
                    <span>{m.time}</span>
                    <span className="fe-msg-read-icon">
                      <CheckIcon size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Messages() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("platform");
  const activeConversation =
    conversations.find((c) => c.key === activeKey) || conversations[0];

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-msg-header">
          <button
            type="button"
            className="fe-msg-back"
            aria-label="Back"
            onClick={() => navigate("/dashboard")}
          >
            <ChevronLeftIcon size={20} />
          </button>
          <div>
            <h1>Messages</h1>
            <p>
              Access all your job-related communication with your engineers
              grouped by work orders.
            </p>
          </div>
        </div>

        <div className="fe-msg-body">
          <ConversationList activeKey={activeKey} onSelect={setActiveKey} />
          <Thread conversation={activeConversation} />
        </div>
      </div>
    </div>
  );
}
