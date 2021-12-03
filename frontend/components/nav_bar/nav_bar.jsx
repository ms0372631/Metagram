import React from 'react';
import { Link } from 'react-router-dom';
import modal from '../modal';
export default ({ currentUser, openModal }) => {
  const display = currentUser ? (
    <>
      <Link to="/index">
        <img src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262821/home_thiw3x.png" className="icon" alt=""/>
      </Link>
      
      <img src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638263608/messenger_kpuzoc.png" className="icon" alt=""/>
     
      <img src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262697/add_1_kdftop.png" className="icon" onClick={() => openModal('createPost')} alt="" />
      
      <img src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638263620/explore_vj6upp.png" className="icon" alt=""/>
      <img src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638263642/like_wbgxzs.png" className="icon"alt=""/>
      <div className="icon user-proflie"></div>
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
        <img className="brand-img" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262822/logo_qb03ym.png" alt=""></img>
        <input type="text" className="search-box" placeholder="search"/>
        <div className="nav-items">
          {display}
        </div>
      </div>
    </nav>
    </>
  )
}