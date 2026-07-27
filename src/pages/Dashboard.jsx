import { useState } from "react";

const statCards = [
  { label: "Open Jobs", value: "18" },
  { label: "Active Engineers", value: "42" },
  { label: "Completed Jobs", value: "263" },
  { label: "Total Spend", value: "$54,200" },
];

const activity = [
  {
    time: "24 Jul 2026 @ 6:25 PM",
    text: "C441632283 have logged on to Field Engineer",
  },
  {
    time: "22 Jul 2026 @ 11:06 AM",
    text: "C441632283 have logged on to Field Engineer",
  },
  {
    time: "21 Jul 2026 @ 10:28 AM",
    text: "C441632283 have logged on to Field Engineer",
  },
  {
    time: "20 Jul 2026 @ 12:50 PM",
    text: "C441632283 have logged on to Field Engineer",
  },
  {
    time: "18 Jul 2026 @ 9:14 AM",
    text: "New job FTS62113 posted by Muhammad",
  },
];

const outlookWeeks = [
  { label: "Wk 1", value: 6 },
  { label: "Wk 2", value: 10 },
  { label: "Wk 3", value: 4 },
  { label: "Wk 4", value: 8 },
];

const Dashboard = () => {
  const [month, setMonth] = useState("July - 2026");
  const maxValue = Math.max(...outlookWeeks.map((w) => w.value));

  return (
    <>
      <section className="dashboard-page">
        <div className="dashboard-page__grid">
          <div className="dashboard-page__main">
            <div className="dashboard-page__stats">
              {statCards.map((card) => (
                <div className="dashboard-page__stat-card" key={card.label}>
                  <p className="dashboard-page__stat-value">{card.value}</p>
                  <p className="dashboard-page__stat-label">{card.label}</p>
                </div>
              ))}
            </div>

            <div className="dashboard-page__outlook">
              <div className="dashboard-page__outlook-header">
                <h3>Your Job Outlook</h3>
                <div className="dashboard-page__outlook-nav">
                  <button aria-label="Previous month">‹</button>
                  <span>{month}</span>
                  <button aria-label="Next month">›</button>
                </div>
                <div className="dashboard-page__outlook-owner">
                  <span>Job Owner</span>
                  <span className="dashboard-page__outlook-owner-value">All ▾</span>
                </div>
              </div>

              <div className="dashboard-page__chart">
                {outlookWeeks.map((week) => (
                  <div className="dashboard-page__chart-col" key={week.label}>
                    <div
                      className="dashboard-page__chart-bar"
                      style={{ height: `${(week.value / maxValue) * 100}%` }}
                    >
                      <span>{week.value}</span>
                    </div>
                    <p>{week.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="dashboard-page__activity">
            <h3>Activity (Top 50)</h3>
            <ul>
              {activity.map((item, i) => (
                <li key={i}>
                  <span className="dashboard-page__activity-dot"></span>
                  <div>
                    <p className="dashboard-page__activity-time">{item.time}</p>
                    <p className="dashboard-page__activity-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
