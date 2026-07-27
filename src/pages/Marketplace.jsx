import { useState } from "react";
import {
  ChevronDownIcon,
  MoreVerticalIcon,
  ChevronRightIcon,
  CountryFlagIcon,
} from "../components/icons";

const tabs = [
  { label: "Marketplace", count: 1 },
  { label: "Automation" },
  { label: "Focused", dot: true },
  { label: "Upcoming" },
  { label: "Closed" },
  { label: "Drafts", count: 1 },
];

const jobs = [
  {
    id: "FTS62113",
    postedDate: "8 Mar 19..",
    workOrder: "W190307008643",
    city: "Brussels",
    country: "Brussels",
    tag: "ONSITE",
    status: "Jeopardy,",
    statusSub: "requires engineer",
    overdue: "2697 day(s) overdue",
    payoutTotal: "Total: $60",
    duration: "2 Hours",
    rate: "$30/Hr",
    timeline: [
      { time: "08 Mar 19, 04:50 am", label: "Job posted by Muhammad", done: true },
      { time: null, label: "Engineer assigned --", done: false },
      { time: null, label: "Engineer accepted --", done: false },
      { time: "08 Mar 19, 09:00 am", label: "Start on", done: true },
    ],
    applicants: "28 applicant(s)",
    counters: "4 counter(s)",
  },
];

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState("Marketplace");

  return (
    <>
      <section className="marketplace-page">
        <div className="marketplace-page__toolbar">
          <div className="marketplace-page__search">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Search" />
          </div>

          <div className="marketplace-page__toolbar-right">
            <button className="marketplace-page__bell" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#3a4a5c">
                <path d="M12 2a6 6 0 0 0-6 6v3.09c0 .62-.24 1.22-.67 1.67L4 14.5V16h16v-1.5l-1.33-1.74a2.4 2.4 0 0 1-.67-1.67V8a6 6 0 0 0-6-6zm0 20a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22z" />
              </svg>
              <span className="marketplace-page__bell-badge"></span>
            </button>

            <div className="marketplace-page__owner">
              <span className="marketplace-page__owner-label">Job Owner</span>
              <span className="marketplace-page__owner-name">
                Muhammad Chaudry <ChevronDownIcon size={14} />
              </span>
            </div>
          </div>
        </div>

        <div className="marketplace-page__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`marketplace-page__tab ${
                activeTab === tab.label ? "marketplace-page__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.dot && <span className="marketplace-page__tab-dot"></span>}
              {tab.label}
              {tab.count && <span className="marketplace-page__tab-count">{tab.count}</span>}
            </button>
          ))}
        </div>

        <div className="marketplace-page__map">
          <svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect width="1000" height="340" fill="#eaf1e4" />
            <path d="M0 60 Q 260 20 520 70 T 1000 40 V0 H0 Z" fill="#e2ecda" />
            <path d="M0 340 Q 300 260 600 300 T 1000 260 V340 H0 Z" fill="#e2ecda" />
            <path d="M120 0 L150 340" stroke="#c9d6ee" strokeWidth="10" opacity="0.6" />
            <path d="M0 120 L1000 90" stroke="#fbe9b0" strokeWidth="6" opacity="0.7" />
            <path d="M0 210 L1000 230" stroke="#fbe9b0" strokeWidth="6" opacity="0.7" />
            <path d="M480 0 L520 340" stroke="#fbe9b0" strokeWidth="5" opacity="0.7" />
            <path d="M700 0 L660 340" stroke="#c9d6ee" strokeWidth="8" opacity="0.5" />

            {[
              { x: 90, y: 40, t: "Vilvoorde" },
              { x: 40, y: 110, t: "Halle" },
              { x: 170, y: 190, t: "Ninove" },
              { x: 310, y: 240, t: "Sint-Pieters-Leeuw" },
              { x: 470, y: 260, t: "Anderlecht" },
              { x: 700, y: 30, t: "Zaventem" },
              { x: 840, y: 90, t: "Leuven" },
              { x: 900, y: 210, t: "Oud-Heverlee" },
              { x: 620, y: 180, t: "Ixelles" },
              { x: 560, y: 220, t: "Uccle" },
            ].map((p) => (
              <text key={p.t} x={p.x} y={p.y} fontSize="11" fill="#5c6b57">
                {p.t}
              </text>
            ))}

            <g transform="translate(640,55)">
              <circle r="9" fill="#0d6efd" />
              <text x="14" y="4" fontSize="12" fill="#14314f" fontWeight="700">
                Luchthaven Brussel
              </text>
            </g>

            <g transform="translate(500,160)">
              <path
                d="M0 -26 C14 -26 24 -14 24 0 C24 16 0 34 0 34 C0 34 -24 16 -24 0 C-24 -14 -14 -26 0 -26 Z"
                fill="#14314f"
              />
              <circle r="8" fill="#fff" />
            </g>
            <text x="500" y="222" fontSize="20" fontWeight="700" fill="#1a1a1a" textAnchor="middle">
              Brussels
            </text>
          </svg>
        </div>

        <div className="marketplace-page__filter-row">
          <button className="marketplace-page__filter-btn" aria-label="Filters">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#555" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
              <circle cx="9" cy="6" r="2" fill="#555" />
              <circle cx="16" cy="12" r="2" fill="#555" />
              <circle cx="10" cy="18" r="2" fill="#555" />
            </svg>
          </button>
        </div>

        <div className="marketplace-page__table-wrap">
          <table className="marketplace-page__table">
            <thead>
              <tr>
                <th>Job Details</th>
                <th>Status</th>
                <th>Payout</th>
                <th>Time Line</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>
                    <p className="marketplace-page__job-id">
                      {job.id} - {job.postedDate}
                    </p>
                    <p className="marketplace-page__job-wo">{job.workOrder}</p>
                    <p className="marketplace-page__job-city">
                      <span>
                        <CountryFlagIcon size={13} />
                      </span>{" "}
                      {job.city}
                    </p>
                    <p className="marketplace-page__job-country">{job.country}</p>
                    <span className="marketplace-page__job-tag">{job.tag}</span>
                  </td>

                  <td>
                    <p className="marketplace-page__status">{job.status}</p>
                    <p className="marketplace-page__status">{job.statusSub}</p>
                    <p className="marketplace-page__overdue">{job.overdue}</p>
                  </td>

                  <td>
                    <p className="marketplace-page__payout-total">{job.payoutTotal}</p>
                    <p className="marketplace-page__payout-sub">{job.duration}</p>
                    <p className="marketplace-page__payout-sub">{job.rate}</p>
                  </td>

                  <td>
                    <ul className="marketplace-page__timeline">
                      {job.timeline.map((step, i) => (
                        <li key={i}>
                          <span
                            className={`marketplace-page__timeline-dot ${
                              step.done ? "marketplace-page__timeline-dot--done" : ""
                            }`}
                          ></span>
                          <span className="marketplace-page__timeline-text">
                            {step.time && <strong>{step.time}</strong>}
                            <em>{step.label}</em>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td>
                    <p className="marketplace-page__applicants">{job.applicants}</p>
                    <p className="marketplace-page__counters">{job.counters}</p>
                  </td>

                  <td className="marketplace-page__row-menu">
                    <button aria-label="More actions">
                      <MoreVerticalIcon size={16} />
                    </button>
                    <button aria-label="Open job">
                      <ChevronRightIcon size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
