import { connect } from 'react-redux';
import { createPostLike, deletePostLike, requestPostLikes, requestPostLike } from '../../../../actions/post_like_actions';
import PostLikeCreate from './post_like_create';


const mSTP = (state, ownProps) => {
  let _postLikes;
  if (Object.keys(state.entities.postLikes) === 0) 
    _postLikes = [];
  if (Object.keys(state.entities.postLikes) === 1)
    _postLikes = [state.entities.postLikes];
  else
    _postLikes = Object.values(state.entities.postLikes);
  return {
  postLikes: _postLikes,
  currentUser: state.session.currentUser
}}

const mDTP = dispatch => ({
  requestPostLike: (postId, postLikeId) => dispatch(requestPostLike(postId, postLikeId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId)),
  createPostLike: (postLike, postId) => dispatch(createPostLike(postLike, postId)),
  deletePostLike: (postId, postLikeId) => dispatch(deletePostLike(postId, postLikeId))
})

export default connect(mSTP, mDTP)(PostLikeCreate);

