import React from "react"

const UserIndexItem = ({user}) => {
  return (
  <div className="profile-card">
    <div className="profile-pic">
      <img src="" alt="" />
    </div>
    <div>
      <p className="username">{user.username}</p>
      <p className="sub-text">followed by user</p>
    </div>
    <button className="action-btn">Follow</button>
  </div>)
}


export default UserIndexItem;