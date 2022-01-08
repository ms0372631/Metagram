import React from 'react';
import PostLikeIndexItem from './post_like_index_item';

class PostLikeIndexSub extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    if (this.props.postLikes.length === 0)
      return '';

    const sortedPostLikes = this.props.postLikes.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date(b.updatedAt);
      if (keyA < keyB) return 1;
      else return -1;
    });
    
    return (
      <div className='timeframe'>
        <div className='timeframe-word-container'>
          <div className='timeframe-word'>
            <div className='timeframe-header-text'>{this.props.timeFrame}</div>
          </div>
          {
            sortedPostLikes.map(postLike => (
              <PostLikeIndexItem key={postLike.id} postLike={postLike}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default PostLikeIndexSub;

