// components/Examination/LearningAreas.js
import React from 'react';
import './LearningAreas.css';

function LearningAreas() {
  return (
    <div className="learning-areas-container">
      <h2>Learning Areas</h2>
      {/* Render list of subjects */}
      <ul>
        <li>Mathematics</li>
        <li>English</li>
        <li>Science</li>
      </ul>
    </div>
  );
}

export default LearningAreas;
