import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ManageUsers.css';

function ManageUsers() {
  const navigate = useNavigate(); // Initialize navigate

  // Example user data (can be fetched from a backend)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' }
  ]);

  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    role: 'User' // Default role is 'User'
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    // Assign a unique ID to the new user (simple way to generate ID)
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Add the new user to the users array
    setUsers([...users, { ...newUser, id: newUserId }]);

    // Reset the new user form fields
    setNewUser({
      id: '',
      name: '',
      email: '',
      role: 'User'
    });
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // Handle back navigation
  const goBack = () => {
    navigate('/admin/dashboard'); // Navigate back to the admin dashboard
  };

  return (
    <div className="manage-users">
      {/* Back Arrow */}
      <button onClick={goBack} className="back-arrow">
        ← Back to Dashboard
      </button>

      <h1>Manage Users</h1>

      {/* Add User Form */}
      <form className="add-user-form" onSubmit={addUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleChange}
          required
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      {/* Existing Users Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => alert('Edit functionality')}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
