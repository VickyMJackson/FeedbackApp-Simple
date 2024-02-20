// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/create-feedback">Post Your Valuable Feedback</Link>
        <Link to="/get-feedback">View Feedback</Link>
      </div>
    </nav>
  );
}

export default NavBar;
