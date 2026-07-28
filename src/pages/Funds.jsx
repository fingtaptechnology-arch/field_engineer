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
  FilterIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  CountryFlagIcon,
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

const transactions = [
  {
    id: "t1",
    date: "8th Mar 2019",
    time: "04:50 AM",
    action: "Job created",
    descriptionTitle: "FTS62113 - 8 Mar 19 - 9 O'Clock Brussels, Belgium",
    descriptionSub: "W190307008643 - Brussels,Brussels",
    amount: -60,
    balance: 0,
    kind: "debit",
  },
  {
    id: "t2",
    date: "8th Mar 2019",
    time: "04:46 AM",
    action: "Wallet reload",
    descriptionTitle: "Fund added using Credit Card",
    amount: 50,
    balance: 60,
    kind: "credit",
  },
  {
    id: "t3",
    date: "8th Mar 2019",
    time: "04:21 AM",
    action: "Wallet reload",
    descriptionTitle: "Fund added using Credit Card",
    amount: 10,
    balance: 10,
    kind: "credit",
  },
];

function formatAmount(amount) {
  const sign = amount < 0 ? "- " : "";
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("funds");

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

function FundsTabs({ activeTab, onSelect }) {
  return (
    <div className="fe-funds-tabs">
      <button
        type="button"
        className={`fe-funds-tab ${activeTab === "wallet" ? "is-active" : ""}`}
        onClick={() => onSelect("wallet")}
      >
        Wallet
      </button>
      <button
        type="button"
        className={`fe-funds-tab ${activeTab === "credit" ? "is-active" : ""}`}
        onClick={() => onSelect("credit")}
      >
        Credit
      </button>
    </div>
  );
}

function TransactionsToolbar() {
  return (
    <div className="fe-funds-toolbar">
      <button type="button" className="fe-funds-filter-btn" aria-label="Filter transactions">
        <FilterIcon size={16} />
      </button>

      <div className="fe-funds-toolbar-right">
        <div className="fe-funds-stat">
          <span className="fe-funds-stat-label">Money Spent</span>
          <span className="fe-funds-stat-value">$60.00</span>
        </div>

        <label className="fe-funds-select">
          <span>View By Month</span>
          <span className="fe-funds-select-control">
            All
            <ChevronDownIcon size={14} />
          </span>
        </label>
      </div>
    </div>
  );
}

function TransactionsTable() {
  return (
    <div className="fe-funds-table-wrap">
      <table className="fe-funds-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className={`fe-funds-row fe-funds-row--${tx.kind}`}>
              <td>
                <p className="fe-funds-cell-primary">{tx.date}</p>
                <p className="fe-funds-cell-secondary">{tx.time}</p>
              </td>
              <td>
                <span className="fe-funds-action">{tx.action}</span>
              </td>
              <td>
                <p className="fe-funds-cell-primary">{tx.descriptionTitle}</p>
                {tx.descriptionSub && (
                  <p className="fe-funds-cell-secondary">
                    <span className="fe-funds-desc-link">{tx.descriptionSub}</span>
                    <span className="fe-funds-flag">
                      <CountryFlagIcon size={12} />
                    </span>
                  </p>
                )}
              </td>
              <td>
                <span
                  className={`fe-funds-amount ${
                    tx.amount < 0 ? "is-negative" : "is-positive"
                  }`}
                >
                  {formatAmount(tx.amount)}
                </span>
              </td>
              <td>
                <span className="fe-funds-balance">${tx.balance.toFixed(2)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TransactionsPagination() {
  return (
    <div className="fe-funds-pagination">
      <label className="fe-funds-per-page">
        Items per page:
        <span className="fe-funds-per-page-control">
          10
          <ChevronDownIcon size={14} />
        </span>
      </label>
      <div className="fe-funds-pagination-arrows">
        <button type="button" aria-label="Previous page" disabled>
          <ChevronLeftIcon size={16} />
        </button>
        <button type="button" aria-label="Next page">
          <ChevronRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}

function WalletSummaryCard() {
  return (
    <div className="fe-funds-wallet-card">
      <div className="fe-funds-wallet-top">
        <div>
          <p className="fe-funds-wallet-label">Wallet</p>
          <p className="fe-funds-wallet-amount">$0.00</p>
        </div>
        <button type="button" className="fe-funds-wallet-add" aria-label="Add funds">
          <PlusCircleIcon size={22} />
        </button>
      </div>
      <button type="button" className="fe-funds-refund-link">
        Request Refund
      </button>
    </div>
  );
}

function WalletPanel() {
  return (
    <div className="fe-funds-panel">
      <div className="fe-funds-panel-header">
        <div>
          <h1>Transactions</h1>
          <p>All transactions posted and pending can be found here.</p>
        </div>
        <WalletSummaryCard />
      </div>

      <TransactionsToolbar />
      <TransactionsTable />
      <TransactionsPagination />
    </div>
  );
}

function CreditPanel() {
  return (
    <div className="fe-funds-panel">
      <div className="fe-funds-panel-header">
        <div>
          <h1>Credit</h1>
          <p>Your credit balance and history will be shown here.</p>
        </div>
      </div>
      <div className="fe-funds-empty">
        <p>No credit activity yet.</p>
      </div>
    </div>
  );
}

export default function Funds() {
  const [activeTab, setActiveTab] = useState("wallet");

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <FundsTabs activeTab={activeTab} onSelect={setActiveTab} />
        <div className="fe-funds-content">
          {activeTab === "wallet" ? <WalletPanel /> : <CreditPanel />}
        </div>
      </div>
    </div>
  );
}
