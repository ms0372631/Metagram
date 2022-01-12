import React from "react"
import { Link } from "react-router-dom";

const UserIndexItem = ({user}) => {
  return (
  <div className="profile-card">
    <div className="profile-pic">
      <Link to={`/user/${user.id}`}>
        <img src={user.photoUrl ? user.photoUrl : "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wXe0UPuQ03kAX8cJBSZ&edm=AEA5CHQBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-QiXa_SldO27w2D6vSaPMXtm244ZbJi8ipFGK0DONYaA&oe=61E579CF&_nc_sid=75d5da"} alt="" />
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