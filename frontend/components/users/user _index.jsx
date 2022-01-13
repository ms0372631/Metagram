import React from 'react';
import UserIndexItem from './user_index_item';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component {

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const {users, currentUser, logout} = this.props;
    
    if (!currentUser || !users || users.length === 0)
      return ''

    return (
      <>
        <div className="right-col">
          <div className="profile-card">
            <Link to="/profile">
              <div className="profile-pic">
                <img src={currentUser.photoUrl ? currentUser.photoUrl : "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wXe0UPuQ03kAX8cJBSZ&edm=AEA5CHQBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-QiXa_SldO27w2D6vSaPMXtm244ZbJi8ipFGK0DONYaA&oe=61E579CF&_nc_sid=75d5da"} alt="" />
              </div>
            </Link>
            <div style={{width: "155px"}}>
              <Link to={"/profile"}>
                <p className="username">{currentUser.username}</p>
              </Link>
              <p className="sub-text">{currentUser.fullname}</p>
            </div>
            <button className="action-btn" onClick={logout}>switch</button>
          </div>
          <p className="suggestion-text">Suggestions for you</p>
          {
            users.map(user => 
              <UserIndexItem key={user.id} user={user} />
            )
          }
        </div>
      </>
    )
  }
}

export default UserIndex;