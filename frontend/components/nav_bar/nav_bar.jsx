import React from 'react';
import { Link } from 'react-router-dom';
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <>
      <Link to="/index">
        <img src="https://lh3.google.com/u/0/d/1aMykwMlA83NxXm36R0tKZ7qk1cgE_GNW=w2724-h1840-iv1" className="icon" alt=""/>
      </Link>
        <img src="https://lh3.google.com/u/0/d/1gaitJO61JA1XlA8KQtA7EIG3J0w9OWYo=w2732-h1726-iv1" className="icon" alt=""/>
      <Link to="/create">
        <img src="https://lh3.google.com/u/0/d/1nf-JGwFe2VMcxVl-8m0dlpRfbsZCQlRW=w2732-h1840-iv1" className="icon" alt="" />
      </Link>
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
    <>
    <nav className="navbar">
      <div className="nav-wrapper">
        <img className="brand-img" src="https://lh3.google.com/u/0/d/1Gg1qVxN0Z2UcBjF52OQqwR3ikAwoyEep=w2732-h1726-iv1" alt=""/>
        <input type="text" className="search-box" placeholder="search"/>
        <div className="nav-items">
          {display}
        </div>
      </div>
    </nav>
    <div style={{height: '50px'}}/>
    </>
  )
}