import React, { useMemo, useState } from "react";

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

export default function JobOutlook() {
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
    <div className="job-outlook-page">
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
    </div>
  );
}
