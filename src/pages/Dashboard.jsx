import React, { useMemo, useState } from "react";
import { Sidebar, TopBar } from "../components/FeDashboardShell";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Highlighted job date (matches the reference design: Fri, 24 July 2026)
const HIGHLIGHTED_DATE = { year: 2026, month: 6, day: 24 };

function buildCalendarMatrix(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startWeekday = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];

  // Leading days from previous month
  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({
      day: daysInPrevMonth - i,
      currentMonth: false,
      year: month === 0 ? year - 1 : year,
      month: month === 0 ? 11 : month - 1,
    });
  }

  // Days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, currentMonth: true, year, month });
  }

  // Trailing days from next month to complete the last week row
  while (cells.length % 7 !== 0) {
    const nextIndex = cells.length - (startWeekday + daysInMonth) + 1;
    cells.push({
      day: nextIndex,
      currentMonth: false,
      year: month === 11 ? year + 1 : year,
      month: month === 11 ? 0 : month + 1,
    });
  }

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

function JobOutlookCalendar() {
  const [viewDate, setViewDate] = useState(
    new Date(HIGHLIGHTED_DATE.year, HIGHLIGHTED_DATE.month, 1)
  );
  const [jobOwner, setJobOwner] = useState("All");

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const weeks = useMemo(() => buildCalendarMatrix(year, month), [year, month]);

  const goToPrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isHighlighted = (cell) =>
    cell.currentMonth &&
    cell.year === HIGHLIGHTED_DATE.year &&
    cell.month === HIGHLIGHTED_DATE.month &&
    cell.day === HIGHLIGHTED_DATE.day;

  return (
    <div className="job-outlook-card">
      {/* Toolbar */}
      <div className="job-outlook-toolbar">
        <div className="job-outlook-title">Your Job Outlook</div>

        <div className="job-outlook-month-nav">
          <button
            type="button"
            className="job-outlook-nav-btn"
            aria-label="Previous month"
            onClick={goToPrevMonth}
          >
            &#8249;
          </button>
          <span className="job-outlook-month-label">
            {MONTH_NAMES[month]} - {year}
          </span>
          <button
            type="button"
            className="job-outlook-nav-btn"
            aria-label="Next month"
            onClick={goToNextMonth}
          >
            &#8250;
          </button>
        </div>

        <div className="job-outlook-owner">
          <label htmlFor="job-owner-select">Job Owner</label>
          <select
            id="job-owner-select"
            className="job-outlook-owner-select"
            value={jobOwner}
            onChange={(e) => setJobOwner(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Me">Me</option>
            <option value="Team">Team</option>
          </select>
        </div>
      </div>

      {/* Weekday header */}
      <div className="job-outlook-weekdays">
        {WEEKDAYS.map((wd) => (
          <div key={wd} className="job-outlook-weekday-cell">
            {wd}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="job-outlook-grid">
        {weeks.map((week, wIdx) => (
          <div className="job-outlook-week-row" key={wIdx}>
            {week.map((cell, cIdx) => (
              <div
                key={cIdx}
                className={[
                  "job-outlook-day-cell",
                  !cell.currentMonth ? "is-muted" : "",
                  isHighlighted(cell) ? "is-highlighted" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="job-outlook-day-number">{cell.day}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

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
        <span className="fe-dash-panel-icon">&#9432;</span>
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
        <span className="fe-dash-panel-icon">&#36;</span>
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
        <span className="fe-dash-panel-icon">&#9432;</span>
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
          <div className="fe-dash-stars">☆☆☆☆☆</div>
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

          <div className="fe-dash-job-outlook">
            <JobOutlookCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
