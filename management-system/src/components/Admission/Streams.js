// components/Admission/Streams.js
import React from 'react';
import './Streams.css';

function Streams() {
  return (
    <div className="streams-container">
      <h2>Manage Streams</h2>
      <form className="streams-form">
        <input type="text" placeholder="Stream Name" />
        <button type="submit">Add Stream</button>
      </form>
    </div>
  );
}

export default Streams;
