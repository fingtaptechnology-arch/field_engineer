import React from "react";
import { Sidebar, TopBar } from "../components/FeDashboardShell";

const projects = [{ name: "default", dateCreated: "03/07/2019" }];

export default function MyProjects() {
  return (
    <div className="fe-dash-page">
      <Sidebar />
      <div className="fe-dash-main">
        <TopBar />
        <div className="fe-dash-content">
          <div className="fe-page-header">
            <div className="fe-page-header-title">
              <span className="fe-page-back">&#8249;</span>
              <h1>My Projects</h1>
            </div>
            <p className="fe-page-header-desc">
              Listed here are all your projects. Work orders that are not
              associated with a project can be found in the "default" project
              folder.
            </p>
            <button type="button" className="fe-page-primary-btn">
              Create A Project
            </button>
          </div>

          <h2 className="fe-section-title">All Projects</h2>

          <div className="fe-table-card">
            <table className="fe-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.name}>
                    <td className="fe-table-link">{project.name}</td>
                    <td>{project.dateCreated}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="fe-table-pagination">
              <label>
                Items per page:
                <select defaultValue="5">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                </select>
              </label>
              <button type="button" aria-label="Previous page">
                &#8249;
              </button>
              <button type="button" aria-label="Next page">
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
