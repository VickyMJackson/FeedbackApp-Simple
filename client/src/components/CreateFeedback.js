// // CreateFeedback.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../css/CreateFeedback.css'; // Import the CSS file

// function CreateFeedback() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:7009/api/feedback', { name, email, message });
//       alert('Feedback submitted successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error submitting feedback');
//     }
//   };

//   return (
//     <div>
//       <h2>Create Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label>Message:</label>
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

//         <button type="submit">Submit Feedback</button>
//       </form> 
//       <Link to="/get-feedback">View Feedbacks</Link>
//     </div>
    
//   );
// }

// export default CreateFeedback;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/CreateFeedback.css'; // Import the CSS file

function CreateFeedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [smiley, setSmiley] = useState(''); // New state for smiley selection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:7009/api/feedback', { name, email, message, smiley });
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Error submitting feedback');
    }
  };

  return (
    <div>
      <h2>Create Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <label>Feelings:</label>
        <select value={smiley} onChange={(e) => setSmiley(e.target.value)} required>
          <option value="">Select a smiley</option>
          <option value="happy 😊">😊 Happy</option>
          <option value="moderate 😐">😐 Moderate</option>
          <option value="sad 😢">😢 Sad</option>
        </select>

        <button type="submit">Submit Feedback</button>
      </form> 
      <Link to="/get-feedback-by-id">View My Feedbacks</Link>
    </div>
  );
}

export default CreateFeedback;