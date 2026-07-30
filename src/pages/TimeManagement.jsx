import React, { useState } from "react";
import { Sidebar, TopBar } from "../components/FeDashboardShell";

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
