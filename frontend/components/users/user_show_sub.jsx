import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item'

class UserShowSub extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }
  
  render() {

    const {user, posts} = this.props;
     
    if (!user)
      return '';

    return (
      <>
        <div style={{height: '50px'}}/>
        <div className="user">
          <div className="container">
            <div className="profile">
              <div className="profile-image">
                <img src="" alt="" />
              </div>
              <div className="profile-user-settings">
                <h1 className="profile-user-name">{user.username}</h1>
                <button className="btn profile-settings-btn" aria-label="profile settings">
                  <i className="fas fa-cog" aria-hidden="true"></i>
                </button>
              </div>
              <div className="profile-stats">
                <ul>
                  <li><span className="profile-stat-count">{posts.length} </span>posts</li>
                  <li><span className="profile-stat-count">21 </span>followers</li>
                  <li><span className="profile-stat-count">16 </span>following</li>
                </ul>
              </div>
              <div className="profile-bio">
                <p><span className="profile-real-name">{user.fullname}</span> A Porsche 9-11 lover </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="gallery">
              {
                posts.map(post => (
                  <UserShowItem key={post.id} post={post} user={user}/>
                ))
              }
            </div>
            <div className="loader"></div>
          </div>
        </div>
      </>
    )
  }
}




export default UserShowSub;