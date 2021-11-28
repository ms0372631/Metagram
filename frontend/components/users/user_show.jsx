import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }
  
  render() {

    const {user, posts, updatePost, deletePost} = this.props;
  
    return (

      <div className="user">
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img src="" alt="" />
            </div>
            <div className="profile-user-settings">
              <h1 class="profile-user-name">{user.fullname}</h1>
              <button className="btn profile-edit-bin">Edit Profile</button>
              <button class="btn profile-settings-btn" aria-label="profile settings">
                <i class="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li><span className="profile-stat-count">3</span>posts</li>
                <li><span className="profile-stat-count">21</span>followers</li>
                <li><span className="profile-stat-count">16</span>following</li>
              </ul>
            </div>
            <div className="profile-boi">
              <p><span className="profile-real-name">{user.fullname}</span>A Porsche 9-11 lover </p>
            </div>
          </div>
        </div>
        <div className="user-container">
          <div className="gallery">
            
            <UserShowItem/>
          </div>
          <div class="loader"></div>
        </div>
      </div>
  
    )
  }
}

export default UserShow;