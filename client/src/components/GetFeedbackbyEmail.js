import React, { useState } from 'react';
import axios from 'axios';

function GetFeedbackByEmail() {
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackDetails, setFeedbackDetails] = useState(null);

  const handleGetFeedbackByEmail = async () => {
    try {
      const response = await axios.get(`http://localhost:7009/api/feedback/${feedbackEmail}`);
      setFeedbackDetails(response.data.data);
      console.log("response:", response.data.data)
    } catch (error) {
      console.error(error);
      setFeedbackDetails(null);
    }
  };

  return (
    <div>
      <h2>Get Feedback by Email</h2>
      <label>Feedback Email:</label>
      <input
        type="text"
        value={feedbackEmail}
        onChange={(e) => setFeedbackEmail(e.target.value)}
        required
      />
      <button onClick={handleGetFeedbackByEmail}>Get Feedback</button>

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

{/* {feedbackDetails && (
  <div>
    <h3>Feedback Details</h3>
    {Array.isArray(feedbackDetails) ? (
      feedbackDetails.map((feedback, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {feedback.name}
          </p>
          <p>
            <strong>Email:</strong> {feedback.email}
          </p>
          <p>
            <strong>Message:</strong> {feedback.message}
          </p>
        </div>
      ))
    ) : (
      <div>
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
)} */}
    </div>
  );
}

export default GetFeedbackByEmail;
