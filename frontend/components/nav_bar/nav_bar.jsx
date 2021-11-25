import React from 'react';
import { Link } from 'react-router-dom';
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <>
      <img src="https://lh3.google.com/u/0/d/1aMykwMlA83NxXm36R0tKZ7qk1cgE_GNW=w2732-h1840-iv1" className="icon" alt=""/>
      <img src="https://lh3.google.com/u/0/d/1gaitJO61JA1XlA8KQtA7EIG3J0w9OWYo=w2732-h1726-iv1" className="icon" alt=""/>
      <img src="https://lh3.google.com/u/0/d/1nf-JGwFe2VMcxVl-8m0dlpRfbsZCQlRW=w2732-h1840-iv1" className="icon" alt="" />
      <img src="https://lh3.google.com/u/0/d/1c24OJ5w9gx_1sNRDFlwrUjIsfSMOYDor=w2732-h1840-iv1" className="icon" alt=""/>
      <img src="https://lh3.google.com/u/0/d/1vP-vNl5nbffr_g12mrhFeyGP_Jx8-dt_=w2732-h1840-iv1" className="icon"alt=""/>
      <h3>{currentUser.fullname}</h3>
      <div className="icon user-proflie"></div>
      <button className="icon user-proflie" onClick={logout}>Logout</button>
    </>
  ) : (
    <div className="session-bar">
        <Link className="session-btn" to="/signup">
          <button type="button">
            Sign Up
          </button>
        </Link>
        <Link to="/login">Log In</Link>
    </div>
  );
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <img className="brand-img" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" class="brand-img" alt=""/>
        <input type="text" className="search-box" placeholder="search"/>
        <div className="nav-items">
          {display}
        </div>
      </div>
    </nav>
  )
}