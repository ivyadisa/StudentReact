import React from 'react';
import './StudentEnrolment.css';

const EnrolmentForm = () => {
  return (
    <div className="enrolment-container">
      <h2>Student Enrolment</h2>
      <form className="enrolment-form">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Admission Number</th>
              <th>Grade</th>
              <th>Stream</th>
              <th>Gender</th>
              <th>Date of Birth (DOB)</th>
              <th>Date of Admission (DOA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" id="studentName" name="studentName" placeholder="Enter Name" /></td>
              <td><input type="text" id="admissionNumber" name="admissionNumber" placeholder="Admission Number" /></td>
              <td><input type="text" id="grade" name="grade" placeholder="Grade" /></td>
              <td><input type="text" id="stream" name="stream" placeholder="Stream" /></td>
              <td><input type="text" id="gender" name="gender" placeholder="Gender" /></td>
              <td><input type="date" id="dob" name="dob" /></td>
              <td><input type="date" id="doa" name="doa" /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnrolmentForm;
