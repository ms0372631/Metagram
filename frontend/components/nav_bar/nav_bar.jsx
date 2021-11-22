import React from 'react';
import { Link } from 'react-router-dom';
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>{currentUser.fullname}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <span className="session-bar">
        <Link className="session-btn" to="/signup">
          <button type="button">
            Sign Up
          </button>
        </Link>
        <Link to="/login">Log In</Link>
    </span>
  );
  return (
    <header className="nav-bar">
      <Link className="logo" to="/">Instagram</Link>
      <div>
        {display}
      </div>
    </header>
  )
}