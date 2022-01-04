import React from 'react';
import { Link } from 'react-router-dom';


export default ({user}) => (
  <>
    <Link to={`user/${user.id}`}>
      <div className="namecard">
        <canvas style={{position: "absolute", top: "-100px", left: "-5px", width: "54px", height: "54px"}}></canvas>
        <img className="profile-pic" src="" alt="" />
        <div className='name'>
          <div className='search-username-container'>
            <div className="search-username">{user.username}</div>
          </div>
          <div className="fullname">{user.fullname} • following</div>
        </div>
      </div>
    </Link>
  </>
);