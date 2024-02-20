import React, { useState } from 'react';
import axios from 'axios';

function UpdateFeedback() {
  const [feedbackId, setFeedbackId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:7009/api/feedback/${feedbackId}`, { name, email, message });
      alert('Feedback updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating feedback');
    }
  };

  return (
    <div>
      <h2>Update Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Feedback ID:</label>
        <input
          type="text"
          value={feedbackId}
          onChange={(e) => setFeedbackId(e.target.value)}
          required
        />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Update Feedback</button>
      </form>
    </div>
  );
}

export default UpdateFeedback;
