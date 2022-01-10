import React from "react"
import { Link } from "react-router-dom";

const UserIndexItem = ({user}) => {
  return (
  <div className="profile-card">
    <div className="profile-pic">
      <Link to={`/user/${user.id}`}>
        <img src={user.photoUrl} alt="" />
      </Link>
    </div>
    <div style={{width: "185px"}}>
      <Link to={`/user/${user.id}`}>
        <p className="username">{user.username}</p>
      </Link>
      <p className="sub-text">followed by user</p>
    </div>
    <Link to={`/user/${user.id}`}>
      <button className="action-btn">Visit</button>
    </Link>
  </div>)
}


export default UserIndexItem;