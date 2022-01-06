import { connect } from 'react-redux';
import PostDelete from './post_delete';
import { deletePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import { requestPostLikes } from '../../../actions/post_like_actions';
import { deletePostLike } from '../../../actions/post_like_actions';

const mSTP = (state, ownProps) => ({
  postLikes: Object.values(state.entities.postLikes).filter(postLike => postLike.postId === ownProps.post.id)
})

const mDTP = dispatch => ({
  requestPostLikes: postId => dispatch(requestPostLikes(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  deletePostLike: (postId, postLikeId) => dispatch(deletePostLike(postId, postLikeId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostDelete);