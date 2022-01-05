import React from 'react';
import { deletePostLike } from '../../../actions/post_like_actions';
import { fetchPostLikes } from '../../../util/post_like_api_util';

class PostDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPostLikes(this.props.postId)
  }

  postDelete() {
    const postLikes = this.props.postLikes;
    this.props.deletePost(this.props.postId);
    for (let i = 0; i < postLikes.length; ++i) {
      this.props.deletePostLike(this.props.postId, postLikes[i].id);
    }
    this.props.closeModal();
  }
  
  render() {
  
    return (
      <>
        <div className='deletePost'>
          <div className='deletePost-content' onClick={() => this.postDelete()}>Delete</div>
          <div className='deletePost-content' onClick={() => this.props.closeModal()}>Cancel</div>
        </div>
      </>
    )
  }
}

export default PostDelete;




