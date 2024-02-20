// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateFeedback from './components/CreateFeedback';
import UpdateFeedback from './components/UpdateFeedback';
import GetFeedback from './components/GetFeedback';
import GetFeedbackById from './components/GetFeedbackById';
import DeleteFeedback from './components/DeleteFeedback';
import GetFeedbackByEmail from './components/GetFeedbackbyEmail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<CreateFeedback />} />
          <Route path="/update-feedback" element={<UpdateFeedback />} />
          <Route path="/get-feedback" element={<GetFeedback />} />
          <Route path="/get-feedback-by-id" element={<GetFeedbackById />} />
          <Route path="/delete-feedback" element={<DeleteFeedback />} />
          <Route path="/get-feedback-by-email" element={<GetFeedbackByEmail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
