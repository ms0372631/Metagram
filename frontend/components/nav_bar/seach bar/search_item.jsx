import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const SearchItem = ({user, currentUser, clearSearchWord}) => (
  <Link to={ user.id == currentUser.id ? ("/profile") : `user/${user.id}` }>
    <div className="namecard" onClick={() => clearSearchWord()}>
      <canvas style={{position: "absolute", top: "-100px", left: "-5px", width: "52px", height: "52px"}}></canvas>
      <img className="profile-pic" src="" alt="" />
      <div className='name'>
        <div className='search-username-container'>
          <div className="search-username">{user.username}</div>
        </div>
        <div className="fullname">{user.fullname} • following</div>
      </div>
    </div>
  </Link>
);

const mSTP = state => {
  return {
  currentUser: state.session.currentUser
}}

export default connect(mSTP, null)(SearchItem);