// src/components/Finance/FeeManagement.js
import React from 'react';
import './Finance.css';

function FeeManagement() {
  return (
    <div className="finance-container">
      <h2>Fee Management</h2>
      <form className="fee-form">
        <input type="text" placeholder="Student Name" />
        <input type="number" placeholder="Amount Paid" />
        <select>
          <option value="term1">Term 1</option>
          <option value="term2">Term 2</option>
          <option value="term3">Term 3</option>
        </select>
        <button type="submit">Record Payment</button>
      </form>

      <h3>Fee Records</h3>
      <table className="finance-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Term</th>
            <th>Amount Paid</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Example of dynamically populated data */}
          <tr>
            <td>John Doe</td>
            <td>Term 1</td>
            <td>$500</td>
            <td>2024-10-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FeeManagement;
