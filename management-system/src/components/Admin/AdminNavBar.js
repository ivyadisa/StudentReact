// components/Admin/AdminNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavBar() {
  return (
    <nav className="admin-nav">
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNavBar;
