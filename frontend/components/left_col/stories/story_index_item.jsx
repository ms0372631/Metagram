import React from 'react';
import { Link } from 'react-router-dom';

export default ({user}) => (
  <>
    <Link to={`user/${user.id}`}>
      <div className="status-card">
        <div className="profile-pic">
          <img src={user.photoUrl ? user.photoUrl : "https://res.cloudinary.com/dpx0kwaoi/image/upload/v1642084849/44884218_345707102882519_2446069589734326272_n.jpg_samy6y.jpg"} alt="" />
        </div>
        <p className="username">{user.username}</p>
      </div>
    </Link>
  </>
)
