import { connect } from 'react-redux';
import { createPostLike, deletePostLike, requestPostLikes, requestPostLike } from '../../../../actions/post_like_actions';
import PostLikeCreate from './post_like_create';


const mSTP = (state, ownProps) => {

  return {
  postLike: state.entities.postLikes,
  postLikes: Object.values(state.entities.postLikes),
  currentUser: state.session.currentUser
}}

const mDTP = dispatch => ({
  requestPostLike: (postId, postLikeId) => dispatch(requestPostLike(postId, postLikeId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId)),
  createPostLike: (postLike, postId) => dispatch(createPostLike(postLike, postId)),
  deletePostLike: (postId, postLikeId) => dispatch(deletePostLike(postId, postLikeId))
})

export default connect(mSTP, mDTP)(PostLikeCreate);

