import React from 'react';
import { connect } from 'react-redux';
import { requestPost } from '../../../../actions/post_actions';

class PostLikeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPost(this.props.postLike.postId);
  }

  render() {
    return (
      <div className='timeframe-content-container'>
          <div className='timeframe-profile'></div>
          <div className='timeframe-text'>
            <span className='timeframe-text-username-container'></span>
              <a className='timeframe-text-username'></a>
              <span>liked your post.</span>
              <p className='timeframe-time'>1d</p>
              <a className='timeframe-image-container'>
                <div className='timeframe-image-wrapper'>
                  <div className='time-frame-image'>
                    <img src="" alt="" />
                  </div>
                </div>
              </a>
          </div>
          <div></div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.postId]
})

const mDTP = dispatch => ({
  requestPost: postId => dispatch(requestPost(postId))
})

export default connect(mSTP, mDTP)(PostLikeIndexItem);
