import React from 'react';
import UserIndexItem from './user_index_item';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component {

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const {users, currentUser, logout} = this.props;
    
    if (!currentUser)
      return ''

    return (
      <>
        <div className="right-col">
          <div className="profile-card">
            <Link to="/profile">
              <div className="profile-pic">
                <img src="" alt="" />
              </div>
            </Link>
            <div style={{paddingRight: "65px"}}>
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