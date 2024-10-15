// src/components/Finance/FinancialReports.js
import React from 'react';
import './Finance.css';

function FinancialReports() {
  return (
    <div className="finance-container">
      <h2>Financial Reports</h2>

      <div className="report-summary">
        <h3>Income</h3>
        <p>Total Fees Collected: $50,000</p>

        <h3>Expenses</h3>
        <p>Total Expenses: $20,000</p>

        <h3>Net Balance</h3>
        <p>Balance: $30,000</p>
      </div>

      <button onClick={() => alert("Report Generated!")}>Generate PDF Report</button>
    </div>
  );
}

export default FinancialReports;
