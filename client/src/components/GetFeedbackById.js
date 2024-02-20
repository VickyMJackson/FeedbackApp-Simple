import React, { useState } from 'react';
import axios from 'axios';

function GetFeedbackById() {
  const [feedbackId, setFeedbackId] = useState('');
  const [feedbackDetails, setFeedbackDetails] = useState(null);

  const handleGetFeedbackById = async () => {
    try {
      const response = await axios.get(`http://localhost:7009/api/feedback/${feedbackId}`);
      setFeedbackDetails(response.data.data);
    } catch (error) {
      console.error(error);
      setFeedbackDetails(null);
    }
  };

  return (
    <div>
      <h2>Get Feedback by ID</h2>
      <label>Feedback ID:</label>
      <input
        type="text"
        value={feedbackId}
        onChange={(e) => setFeedbackId(e.target.value)}
        required
      />
      <button onClick={handleGetFeedbackById}>Get Feedback</button>

      {feedbackDetails && (
        <div>
          <h3>Feedback Details</h3>
          <p>
            <strong>Name:</strong> {feedbackDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {feedbackDetails.email}
          </p>
          <p>
            <strong>Message:</strong> {feedbackDetails.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default GetFeedbackById;
