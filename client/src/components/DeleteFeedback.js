import React, { useState } from 'react';
import axios from 'axios';

function DeleteFeedback() {
  const [feedbackId, setFeedbackId] = useState('');

  const handleDeleteFeedback = async () => {
    try {
      await axios.delete(`http://localhost:7009/api/feedback/${feedbackId}`);
      alert('Feedback deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting feedback');
    }
  };

  return (
    <div>
      <h2>Delete Feedback</h2>
      <label>Feedback ID:</label>
      <input
        type="text"
        value={feedbackId}
        onChange={(e) => setFeedbackId(e.target.value)}
        required
      />
      <button onClick={handleDeleteFeedback}>Delete Feedback</button>
    </div>
  );
}

export default DeleteFeedback;
