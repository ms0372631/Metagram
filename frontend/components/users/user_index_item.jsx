import React from "react"
import { Link } from "react-router-dom";

const UserIndexItem = ({user}) => {
  return (
  <div className="profile-card">
    <div className="profile-pic">
      <Link to={`/users/${user.id}`}>
        <img src="" alt="" />
      </Link>
    </div>
    <div>
      <Link to={`/users/${user.id}`}>
        <p className="username">{user.username}</p>
      </Link>
      <p className="sub-text">followed by user</p>
    </div>
    <button className="action-btn">Follow</button>
  </div>)
}


export default UserIndexItem;