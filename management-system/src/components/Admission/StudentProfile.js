// components/Admission/StudentProfile.js
import React, { useState } from 'react';
import './StudentProfile.css';

const studentData = [
  { name: 'Ivy Ann', gender: 'Female', grade: 10, stream: 'A', dob: '2005-01-15', admissionNumber: 'A4590', photo: 'path/to/photo1.jpg' },
  { name: 'Wayne Runi', gender: 'Male', grade: 9, stream: 'B', dob: '2006-03-12', admissionNumber: 'A1234', photo: 'path/to/photo2.jpg' },
  // Add more students as needed
];

function StudentProfile() {
  const [searchTerm, setSearchTerm] = useState('');
  const [student, setStudent] = useState(null);

  const handleSearch = () => {
    const foundStudent = studentData.find(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.admissionNumber.toLowerCase() === searchTerm.toLowerCase()
    );
    setStudent(foundStudent);
  };

  return (
    <div className="student-profile-container">
      <h2>Student Profile</h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter student name or admission number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {student ? (
        <div className="profile-content">
          <div className="profile-photo">
            <img src={student.photo} alt="Profile" />
          </div>
          <div className="profile-details">
            <p><strong>Full Name:</strong> {student.name}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Stream:</strong> {student.stream}</p>
            <p><strong>Date of Birth:</strong> {student.dob}</p>
            <p><strong>Admission Number:</strong> {student.admissionNumber}</p>
          </div>
        </div>
      ) : (
        <p>No student found. Please try again.</p>
      )}
    </div>
  );
}

export default StudentProfile;
