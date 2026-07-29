import React, { useState } from "react";
import { Sidebar, TopBar } from "../components/FeDashboardShell";

const tabs = ["Pool", "Lookup", "Automation", "Blocked"];

export default function Engineer() {
  const [activeTab, setActiveTab] = useState("Pool");

  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />

        <div className="fe-page-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`fe-page-tab ${
                activeTab === tab ? "is-active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="fe-dash-content">
          <div className="fe-page-header">
            <div className="fe-page-header-title">
              <span className="fe-page-back">&#8249;</span>
              <h1>Pool</h1>
            </div>
            <p className="fe-page-header-desc">
              Manage and administer marketplace and private engineer pool
              that you can use later to route jobs.
            </p>
            <button type="button" className="fe-page-primary-btn">
              Create Pool
            </button>
          </div>

          <div className="fe-info-panel">
            <span className="fe-info-panel-icon">&#128203;</span>
            <p>
              You haven't yet created the Engineer Pools. Engineer Pools can
              be created here, and you can associate engineers to the pools
              from <strong>Engineer Look up screen</strong>. You can invite
              engineers from one of these pools while{" "}
              <strong>creating new jobs.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
