import React from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../../../../actions/post_actions';

class PostLikeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  timeSince(date) {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var interval = seconds / 604800;

  if (interval > 1) 
    return Math.floor(interval) + 'w';

  interval = seconds / 86400;
  if (interval > 1)
    return Math.floor(interval) + 'd';
  
  interval = seconds / 3600;
  if (interval > 1)
    return Math.floor(interval) + 'h';
  
  interval = seconds / 60;
  if (interval > 1)
    return Math.floor(interval) + 'm';

  return Math.floor(seconds) + ' s';
  }

  render() {
    return (
      <div className='timeframe-content-container'>
          <div>
            <canvas className="timeframe-canvas" height="108" width="108" style={{position: "absolute", top: "-5px", left: "-5px", width: "54px", height: "54px"}}></canvas>
            <span className='timeframe-profile-container'>
              <img className="timeframe-profile" src="" alt="" />
            </span>
          </div>
          <div className='timeframe-text'>
            <span className='timeframe-text-username-container'>
              <a className='timeframe-text-username'>{this.props.username}</a>
              <span> liked your post.</span>
            </span>
            <time className='timeframe-time'>{this.timeSince(this.props.postLike.createdAt)}</time>
          </div>
          <div className='timeframe-image-outside'> 
            <a className='timeframe-image-container'>
              <div className='timeframe-image-wrapper'>
                <div className='timeframe-image'>
                  <img className="timeframe-img" src={this.props.post.photoUrl} alt="" />
                </div>
              </div>
            </a>
          </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.postLike.postId],
  username: state.entities.users[ownProps.postLike.authorId].username
})

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
})

export default connect(mSTP, mDTP)(PostLikeIndexItem);
