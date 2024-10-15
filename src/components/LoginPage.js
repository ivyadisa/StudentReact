// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simple logic to redirect based on role
    if (role === 'admin') {
      console.log('Logging in as admin:', { email, password });
      navigate('/admin/dashboard'); // Navigate to AdminDashboard
    } else {
      console.log('Logging in as user:', { email, password });
      navigate('/user'); // Redirect to user-specific page if you have one
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
