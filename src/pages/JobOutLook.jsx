import React, { useState } from "react";
import { Sidebar, TopBar } from "../components/FeDashboardShell";
import {
  FilterIcon,
  ChevronDownIcon,
  MoreVerticalIcon,
  ChevronRightIcon,
  CountryFlagIcon,
} from "../components/icons";

const marketplaceTabs = [
  { key: "marketplace", label: "Marketplace", count: 1 },
  { key: "automation", label: "Automation" },
  { key: "focused", label: "Focused", dot: true },
  { key: "upcoming", label: "Upcoming" },
  { key: "closed", label: "Closed" },
  { key: "drafts", label: "Drafts", count: 1 },
];

const jobs = [
  {
    id: "job-fts62113",
    code: "FTS62113 - 8 Mar 19..",
    workOrder: "W190307008643",
    country: "Brussels",
    city: "Brussels",
    tag: "ONSITE",
    statusLine1: "Jeopardy,",
    statusLine2: "requires engineer",
    overdue: "2697 day(s) overdue",
    payoutTotal: "$60",
    payoutDuration: "2 Hours",
    payoutRate: "$30/Hr",
    timeline: [
      { time: "08 Mar 19, 04:50 am", label: "Job posted by Muhammad", done: true },
      { time: null, label: "Engineer assigned: --", done: false },
      { time: null, label: "Engineer accepted: --", done: false },
      { time: "08 Mar 19, 09:00 am", label: "Start on", done: true },
    ],
    applicants: 28,
    counters: 4,
  },
];

function MarketplaceTabs({ activeTab, onSelect }) {
  return (
    <div className="fe-mkt-tabs">
      <div className="fe-mkt-tabs-left">
        {marketplaceTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`fe-mkt-tab ${activeTab === tab.key ? "is-active" : ""}`}
            onClick={() => onSelect(tab.key)}
          >
            {tab.label}
            {tab.count != null && (
              <span className="fe-mkt-tab-count">{tab.count}</span>
            )}
            {tab.dot && <span className="fe-mkt-tab-dot" />}
          </button>
        ))}
      </div>

      <div className="fe-mkt-owner">
        <span className="fe-mkt-owner-label">Job Owner</span>
        <button type="button" className="fe-mkt-owner-name">
          Muhammad Chaudry
          <ChevronDownIcon size={14} />
        </button>
      </div>
    </div>
  );
}

function MarketplaceMap() {
  return (
    <div className="fe-mkt-map-wrap">
      <iframe
        title="Job locations map"
        className="fe-mkt-map"
        src="https://www.google.com/maps?q=Brussels,Belgium&z=9&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function MarketplaceFilterBar() {
  return (
    <div className="fe-mkt-filter-bar">
      <button type="button" className="fe-mkt-filter-btn" aria-label="Filter jobs">
        <FilterIcon size={16} />
      </button>
    </div>
  );
}

function JobTimeline({ steps }) {
  return (
    <ul className="fe-mkt-timeline">
      {steps.map((step, idx) => (
        <li
          key={idx}
          className={`fe-mkt-timeline-step ${step.done ? "is-done" : ""}`}
        >
          <span className="fe-mkt-timeline-dot" />
          <div className="fe-mkt-timeline-text">
            {step.time && <p className="fe-mkt-timeline-time">{step.time}</p>}
            <p className="fe-mkt-timeline-label">{step.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function JobsTable() {
  return (
    <div className="fe-mkt-table-wrap">
      <table className="fe-mkt-table">
        <thead>
          <tr>
            <th>Job Details</th>
            <th>Status</th>
            <th>Payout</th>
            <th>Time Line</th>
            <th>Actions</th>
            <th aria-hidden="true"></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>
                <p className="fe-mkt-cell-primary">{job.code}</p>
                <p className="fe-mkt-cell-secondary">{job.workOrder}</p>
                <p className="fe-mkt-location">
                  <span className="fe-mkt-flag">
                    <CountryFlagIcon size={12} />
                  </span>
                  {job.country}
                </p>
                <p className="fe-mkt-cell-secondary">{job.city}</p>
                <span className="fe-mkt-tag">{job.tag}</span>
              </td>
              <td>
                <p className="fe-mkt-status">{job.statusLine1}</p>
                <p className="fe-mkt-status">{job.statusLine2}</p>
                <p className="fe-mkt-cell-secondary">{job.overdue}</p>
              </td>
              <td>
                <p className="fe-mkt-cell-primary">Total: {job.payoutTotal}</p>
                <p className="fe-mkt-cell-secondary">{job.payoutDuration}</p>
                <p className="fe-mkt-cell-secondary">{job.payoutRate}</p>
              </td>
              <td>
                <JobTimeline steps={job.timeline} />
              </td>
              <td>
                <p className="fe-mkt-action-link">{job.applicants} applicant(s)</p>
                <p className="fe-mkt-action-link">{job.counters} counter(s)</p>
              </td>
              <td className="fe-mkt-row-controls">
                <button type="button" className="fe-mkt-icon-btn" aria-label="More actions">
                  <MoreVerticalIcon size={16} />
                </button>
                <button type="button" className="fe-mkt-icon-btn" aria-label="Expand job">
                  <ChevronRightIcon size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function JobOutLook() {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <MarketplaceTabs activeTab={activeTab} onSelect={setActiveTab} />
        <div className="fe-mkt-content">
          <MarketplaceMap />
          <MarketplaceFilterBar />
          <JobsTable />
        </div>
      </div>
    </div>
  );
}
