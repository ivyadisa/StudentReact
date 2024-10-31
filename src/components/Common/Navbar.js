import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add some styling for the navbar

function Navbar() {
  // State to manage active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {/* Dashboard link */}
       <li><Link to="/dashboard">Dashboard</Link></li>

       
      

        {/* Admission Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown('admissions')}>Admissions</button>
          {activeDropdown === 'admissions' && (
            <ul className="dropdown-content">
              <li><Link to="/admissions/enrolment">Student Enrolment</Link></li>
              <li><Link to="/admissions/grade-roster">Grade Roster</Link></li>
              <li><Link to="/admissions/student-profile">Student Profile</Link></li>
              <li><Link to="/admissions/streams">Streams</Link></li>
              <li><Link to="/admissions/grades">Grades</Link></li>
            </ul>
          )}
        </li>
          {/* Examination Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown('examination')}>Examination</button>
          {activeDropdown === 'examination' && (
            <ul className="dropdown-content">
              <li><Link to="/examination/fill-marks">Fill Assessment Marks</Link></li>
              <li><Link to="/examination/fill-results">Fill Assessment Results</Link></li>
              <li><Link to="/examination/learning-areas">Learning Areas</Link></li>
            </ul>
          )}
        </li>
         {/* Finance Dropdown */}
        <li className="dropdown">
          <button onClick={() => toggleDropdown('finance')}>Finance</button>
          {activeDropdown === 'finance' && (
            <ul className="dropdown-content">
              <li><Link to="/finance/expense-management">Expense Management</Link></li>
              <li><Link to="/finance/fee-management">Fee Management</Link></li>
              <li><Link to="/finance/financial-reports">Financial Reports</Link></li>
            </ul>
          )}
        </li>



        {/* Teachers and Parents links */}
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/parents">Parents</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
