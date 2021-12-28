import { connect } from 'react-redux';
import { createPostLike } from '../../../../actions/post_like_actions';
import { deletePostLike } from '../../../../actions/post_like_actions';

const mSTP = state => ({
  postLike: state.entities.postLike
})

const mDTP = (post postLikeId => dispatch => ({
  createPostLike: () => dispatch(createPostLike()),
  deletePostLike: postLikeId => dispatch(deletePostLike(postLikeId))
})

