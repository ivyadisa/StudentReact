import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <Link to="/admissions" className="card">
          Admissions
        </Link>
        <Link to="/examination" className="card">
          Examination
        </Link>
        <Link to="/teachers" className="card">
          Teachers
        </Link>
        <Link to="/parents" className="card">
          Parents
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
