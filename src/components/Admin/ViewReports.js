import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ViewReports.css';

function ViewReports() {
  const navigate = useNavigate(); // Initialize navigate

  // Handle back navigation
  const goBack = () => {
    navigate('/admin/dashboard'); // Navigate back to the admin dashboard
  };

  return (
    <div className="view-reports">
      {/* Back Arrow */}
      <button onClick={goBack} className="back-arrow">
        ← Back to Dashboard
      </button>

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
