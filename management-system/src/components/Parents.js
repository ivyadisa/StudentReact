import React from 'react';
import './Parents.css';
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Import icons for action buttons

const Parent = () => {
  const parentData = [
    { id: 1, name: 'Emmanuel Oduor', phone: '0795719572', students: ['Mary Johana A3491', 'James Doe B3490'] },
    { id: 2, name: 'Emmanuel Oduor', phone: '0795719572', students: ['Daniel Makwa B8909'] },
    { id: 3, name: 'Emmanuel Oduor', phone: '0795719572', students: ['Harrison Klepth A9034'] },
  ];

  return (
    <div className="parents-container">
      <h2 className="parents-header">Parents Information</h2>
      <table className="parents-table">
        <thead>
          <tr>
            <th>Parent Name</th>
            <th>Student Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentData.map((parent, index) => (
            <React.Fragment key={index}>
              {parent.students.map((student, idx) => (
                <tr key={idx}>
                  {idx === 0 ? (
                    <td rowSpan={parent.students.length}>
                      {parent.name} {parent.phone}
                    </td>
                  ) : null}
                  <td>{student}</td>
                  <td>
                    <button className="action-btn view-btn">
                      <FaEye />
                    </button>
                    <button className="action-btn delete-btn">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parent;
