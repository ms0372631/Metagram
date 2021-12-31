import React from 'react';

export default ({user}) => (
  <div className="status-card">
    <div className="profile-pic">
      <img src="" alt="" />
    </div>
    <p className="username">{user.username}</p>
  </div>
)
