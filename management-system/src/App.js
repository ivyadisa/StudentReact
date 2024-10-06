// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import StudentEnrolment from './components/Admission/StudentEnrolment';
import GradeRoster from './components/Admission/GradeRoster';
import StudentProfile from './components/Admission/StudentProfile';
import Streams from './components/Admission/Streams';
import Grades from './components/Admission/Grades';
import LearningAreas from './components/Examination/LearningAreas';
import FillAssessmentMarks from './components/Examination/FillAssessmentMarks';
import FillAssessmentResults from './components/Examination/FillAssessmentResults';
import Teachers from './components/Teachers';
import Parents from './components/Parents';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import './Styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar will be displayed on all pages */}
        <Navbar />

        <Routes>
          {/* Define all the routes for different components */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admissions/enrolment" element={<StudentEnrolment />} />
          <Route path="/admissions/grade-roster" element={<GradeRoster />} />
          <Route path="/admissions/student-profile" element={<StudentProfile />} />
          <Route path="/admissions/streams" element={<Streams />} />
          <Route path="/admissions/grades" element={<Grades />} />
          <Route path="/examination/learning-areas" element={<LearningAreas />} />
          <Route path="/examination/fill-marks" element={<FillAssessmentMarks />} />
          <Route path="/examination/fill-results" element={<FillAssessmentResults />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
        </Routes>

        {/* Footer will also be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;