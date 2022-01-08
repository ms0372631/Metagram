import React from 'react';
import { Link } from 'react-router-dom';

export default ({user}) => (
  <>
    <Link to={`user/${user.id}`}>
      <div className="status-card">
        <div className="profile-pic">
          <img src="" alt="" />
        </div>
        <p className="username">{user.username}</p>
      </div>
    </Link>
  </>
)
