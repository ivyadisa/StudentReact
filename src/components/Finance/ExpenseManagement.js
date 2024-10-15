// src/components/Finance/ExpenseManagement.js
import React from 'react';
import './Finance.css';

function ExpenseManagement() {
  return (
    <div className="finance-container">
      <h2>Expense Management</h2>
      <form className="expense-form">
        <input type="text" placeholder="Expense Description" />
        <input type="number" placeholder="Amount" />
        <input type="date" />
        <button type="submit">Record Expense</button>
      </form>

      <h3>Expense Records</h3>
      <table className="finance-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Example of dynamically populated data */}
          <tr>
            <td>Staff Salaries</td>
            <td>$10,000</td>
            <td>2024-10-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseManagement;
