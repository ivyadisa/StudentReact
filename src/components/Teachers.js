// components/Teachers.js
import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons for actions
import './Teachers.css';

function Teachers() {
  const teachers = [
    { firstName: 'EMMANUEL', surname: 'ODOUR', phone: '0795719572', email: 'ottimanuel714@gmail.com' },
    { firstName: 'Ruth', surname: 'Naomi', phone: '0795719567', email: 'ruthnaomil714@gmail.com' },
  
 ];

  const handleView = (email) => {
    alert(`Viewing ${email}`);
  };

  const handleEdit = (email) => {
    alert(`Editing ${email}`);
  };

  const handleDelete = (email) => {
    alert(`Deleting ${email}`);
  };

  return (
    <div className="teachers-container">
      <h2>Teachers</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.firstName}</td>
              <td>{teacher.surname}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.email}</td>
              <td className="action-buttons">
                <button onClick={() => handleView(teacher.email)}>
                  <FaEye />
                </button>
                <button onClick={() => handleEdit(teacher.email)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(teacher.email)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 1 to 1 of 1 entries</span>
        <div>
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
