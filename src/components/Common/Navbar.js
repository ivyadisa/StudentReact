// src/components/Common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add some styling for the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/admissions/enrolment">Student Enrolment</Link></li>
        <li><Link to="/admissions/grade-roster">Grade Roster</Link></li>
        <li><Link to="/admissions/student-profile">Student Profile</Link></li>
        <li><Link to="/examination/learning-areas">Learning Areas</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/parents">Parents</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;