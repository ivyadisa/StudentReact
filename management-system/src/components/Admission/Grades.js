// components/Admission/Grades.js
import React from 'react';
import './Grades.css';

function Grades() {
  return (
    <div className="grades-container">
      <h2>Enter Student Grades</h2>
      <form className="grades-form">
        <input type="text" placeholder="Student Name" />
        <input type="number" placeholder="Grade" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Grades;
