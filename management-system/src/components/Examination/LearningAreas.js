// components/Examination/LearningAreas.js
import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import './LearningAreas.css';

function LearningAreas() {
  const learningAreas = [
    'Visual Arts',
    'Sports and Physical Education',
    'Social Studies (Citizenship, Geography, History)',
    'Social Studies',
    'Science and Technology',
    'Religious Education and Life Skills Activities',
    'Religious Education (CRE, IRE, HRE)',
  ];

  const handleEdit = (name) => {
    alert(`Editing ${name}`);
  };

  const handleDelete = (name) => {
    alert(`Deleting ${name}`);
  };

  return (
    <div className="learning-areas-container">
      <h2>Learning Areas</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {learningAreas.map((area, index) => (
            <tr key={index}>
              <td>{area}</td>
              <td className="action-buttons">
                <button onClick={() => handleEdit(area)}>
                  <FaEye />
                </button>
                <button onClick={() => handleEdit(area)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(area)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LearningAreas;
