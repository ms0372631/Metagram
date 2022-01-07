import React from 'react';
import { deletePostLike } from '../../../actions/post_like_actions';
import { fetchPostLikes } from '../../../util/post_like_api_util';

class PostDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPostLikes(this.props.post.id)
  }

  postDelete() {
    const {postLikes, comments} = this.props;
    this.props.deletePost(this.props.post.id);
    for (let i = 0; i < postLikes.length; ++i) {
      this.props.deletePostLike(this.props.post.id, postLikes[i].id);
    }
    for (let i = 0; i < comments.length; ++i) {
      this.props.deleteComment(this.props.post.id, comments[i].id);
    }
    this.props.closeModal();
  }
  
  render() {
  
    return (
      <>
        <div className='deletePost'>
          {(this.props.post.authorId === this.props.currentUser.id) ? (
            <div className='deletePost-content' onClick={() => this.postDelete()}>Delete</div>
          ) : (
            <div className='deletePost-content' style={{color: "rgb(142, 142, 142)"}}>Delete</div>
          )}
          <div className='deletePost-content' onClick={() => this.props.closeModal()}>Cancel</div>
        </div>
      </>
    )
  }
}

export default PostDelete;




