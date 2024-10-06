// src/components/Parents.js
import React from 'react';
import './Parents.css';

const Parent = () => {
  const parentData = [
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', student: 'John Doe' },
    { id: 2, name: 'Mark Smith', email: 'mark.smith@example.com', student: 'Emily Smith' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', student: 'Michael Johnson' },
  ];

  return (
    <div className="parents-container">
      <h2 className="parents-header">Parents Information</h2>
      <table className="parents-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {parentData.map((parent) => (
            <tr key={parent.id}>
              <td>{parent.id}</td>
              <td>{parent.name}</td>
              <td>{parent.email}</td>
              <td>{parent.student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parent;
