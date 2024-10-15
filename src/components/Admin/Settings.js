import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Settings.css';

function Settings() {
  const navigate = useNavigate(); // Initialize navigate
  const [theme, setTheme] = useState('Light');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  // Handle back navigation
  const goBack = () => {
    navigate('/admin/dashboard'); // Navigate back to the admin dashboard
  };

  return (
    <div className="settings">
      {/* Back Arrow */}
      <button onClick={goBack} className="back-arrow">
        ← Back to Dashboard
      </button>

      <h1>Settings</h1>
      <div className="setting-item">
        <label>Theme: </label>
        <select value={theme} onChange={handleThemeChange}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div className="setting-item">
        <label>
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={toggleNotifications} 
          />
          Enable Notifications
        </label>
      </div>
    </div>
  );
}

export default Settings;
