import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetFeedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:7009/api/feedback');
        setFeedbackList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Get Feedback</h2>
      <ul>
        {feedbackList.map((feedback) => (
          <li key={feedback._id}>
            <strong>Name:</strong> {feedback.name} | <strong>Email:</strong> {feedback.email} |
            <strong>Message:</strong> {feedback.message} | <strong>Smiley:</strong> {feedback.smiley}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetFeedback;
