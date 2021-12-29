import { connect } from 'react-redux';
import { createPostLike, deletePostLike, requestPostLikes } from '../../../../actions/post_like_actions';
import PostLikeCreate from './post_like_create';


const mSTP = state => ({
  postLikes: Object.values(state.entities.postLikes),
  postLike: Object.values(state.entities.postLikes).filter(postLike => postLike.author_id === state.session.currentUser),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestPostLikes: postId => dispatch(requestPostLikes(postId)),
  createPostLike: (postLike, postId) => dispatch(createPostLike(postLike, postId)),
  deletePostLike: postLikeId => dispatch(deletePostLike(postLikeId))
})

export default connect(mSTP, mDTP)(PostLikeCreate);

