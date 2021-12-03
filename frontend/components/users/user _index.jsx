import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const {users, currentUser} = this.props;
    
    if (!currentUser)
      return ''

    console.log(users);
    return (
      <>
        <div className="right-col">
          <div className="profile-card">
            <div className="profile-pic">
              <img src="" alt="" />
            </div>
            <div>
              <p className="username">{currentUser.username}</p>
              <p className="sub-text">{currentUser.fullname}</p>
            </div>
            <button className="action-btn">switch</button>
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