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
                <img src={currentUser.photoUrl ? currentUser.photoUrl : "https://res.cloudinary.com/dpx0kwaoi/image/upload/v1642084849/44884218_345707102882519_2446069589734326272_n.jpg_samy6y.jpg"} alt="" />
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