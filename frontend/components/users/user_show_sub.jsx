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

    let photos = [];
    if (!this.props.user || !this.props.posts)
      return '';
    
    const posts = this.props.posts.filter(post => post.authorId === this.props.user.id)

    if (posts.length < 3) {
      for (let i = 0; i < 3 - posts.length; ++i) {
        photos.push(
        <div className="gallery-item-empty" tabIndex="0"></div>
        )
      }
    }

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
                <h1 className="profile-user-name">{this.props.user.username}</h1>
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
                <p><span className="profile-real-name">{this.props.user.fullname}</span> A Porsche 9-11 lover </p>
              </div>
            </div>
            <div className="select-type">
              <a className="icon-container" href="">
                <span className='content'>
                  <svg aria-label="" class="icons" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                  <span class="icon-word">Posts</span>
                </span>
              </a>
              <a className="icon-container" href="">
                <span className='content'>
                  <svg aria-label="" class="icons " color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path></svg>
                  <span className='icon-word'>Videos</span>
                </span>
              </a>
              <a className="icon-container" href="">
                <span className='content'>
                  <svg aria-label="" class="icons " color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  <span className='icon-word'>SAVED</span>
                </span>
              </a>
              <a className="icon-container" href="">
                <span className='content'>
                  <svg aria-label="" class="icons" color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                  <span className='icon-word'>TAGGED</span>
                </span>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="gallery">
              {
                posts.map(post => (
                  <UserShowItem key={post.id} post={post} user={this.props.user}/>
                ))
              }
              {photos}
            </div>
            <div className="loader"></div>
          </div>
        </div>
      </>
    )
  }
}




export default UserShowSub;