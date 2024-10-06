// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css'; // Ensure this file exists and is correctly named

function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage; // This line is crucial
