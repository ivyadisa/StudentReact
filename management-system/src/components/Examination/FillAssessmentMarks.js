// components/Examination/FillAssessmentMarks.js
import React from 'react';
import './FillAssessmentMarks.css';

function FillAssessmentMarks() {
  return (
    <div className="marks-container">
      <h2>Fill Assessment Marks</h2>
      <form className="marks-form">
        <input type="text" placeholder="Student Name" />
        <input type="number" placeholder="Marks" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FillAssessmentMarks;
