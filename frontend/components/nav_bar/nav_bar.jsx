import React from 'react';
import { Link } from 'react-router-dom';
export default ({ currentUser, logout }) => {
  const display = (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )
  return (
    <header>
      <Link to="/">Instagram</Link>
      <div>
        {display}
      </div>
    </header>
  )
}