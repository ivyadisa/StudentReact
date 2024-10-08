// src/components/Admin/ViewReports.js
import React from 'react';
import './ViewReports.css';

function ViewReports() {
  return (
    <div className="view-reports">
      <h1>View Reports</h1>
      <div className="report">
        <h2>Monthly User Activity</h2>
        <p>Report details and analytics...</p>
      </div>
      <div className="report">
        <h2>Sales Overview</h2>
        <p>Report details and analytics...</p>
      </div>
      <div className="report">
        <h2>System Logs</h2>
        <p>Report details and analytics...</p>
      </div>
    </div>
  );
}

export default ViewReports;
