import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, TopBar } from "../components/FeDashboardShell";
import { ChevronLeftIcon } from "../components/icons";

// Populate this once the reporting API is wired up.
const reports = [];

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
