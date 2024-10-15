// components/Examination/FillAssessmentResults.js
import React from 'react';
import './FillAssessmentResults.css';

function FillAssessmentResults() {
  return (
    <div className="results-container">
      <h2>Fill Assessment Results</h2>
      <form className="results-form">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Result" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FillAssessmentResults;
