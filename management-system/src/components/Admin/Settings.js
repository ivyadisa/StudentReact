// src/components/Admin/Settings.js
import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [theme, setTheme] = useState('Light');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings">
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
