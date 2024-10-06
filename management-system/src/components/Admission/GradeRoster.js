import React, { useState } from 'react';
import './GradeRoster.css';

const studentsData = [
  { name: 'John Doe', grade: '1', stream: 'A' },
  { name: 'Jane Doe', grade: '1', stream: 'B' },
  { name: 'Sam Smith', grade: '2', stream: 'A' },
  { name: 'Emily Johnson', grade: '2', stream: 'B' },
  // Add more student data as needed
];

function GradeRoster() {
  const [searchGrade, setSearchGrade] = useState('');
  const [searchStream, setSearchStream] = useState('');

  // Filter students based on search input
  const filteredStudents = studentsData.filter((student) => {
    return (
      (!searchGrade || student.grade === searchGrade) &&
      (!searchStream || student.stream === searchStream)
    );
  });

  return (
    <div className="grade-roster-container">
      <h2>Grade Roster</h2>

      {/* Search Inputs */}
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by Grade"
          value={searchGrade}
          onChange={(e) => setSearchGrade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Stream"
          value={searchStream}
          onChange={(e) => setSearchStream(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th>Stream</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.stream}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GradeRoster;
