import React from 'react';
import { Link } from 'react-router-dom';

export default ({user}) => (
  <>
    <Link to={`user/${user.id}`}>
      <div className="status-card">
        <div className="profile-pic">
          <img src={user.photoUrl ? user.photoUrl : "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wXe0UPuQ03kAX8cJBSZ&edm=AEA5CHQBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-QiXa_SldO27w2D6vSaPMXtm244ZbJi8ipFGK0DONYaA&oe=61E579CF&_nc_sid=75d5da"} alt="" />
        </div>
        <p className="username">{user.username}</p>
      </div>
    </Link>
  </>
)
