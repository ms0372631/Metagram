import { connect } from 'react-redux';
import PostDelete from './post_delete';
import { deletePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import { requestPostLikes, deletePostLike  } from '../../../actions/post_like_actions';
import { requestComments, deleteComment } from '../../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
  postLikes: Object.values(state.entities.postLikes).filter(postLike => postLike.postId === ownProps.post.id),
  comments: Object.values(state.entities.comments).filter(comment => comment.postId === ownProps.post.id),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestComments: () => dispatch(requestComments()),
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId,commentId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  deletePostLike: (postId, postLikeId) => dispatch(deletePostLike(postId, postLikeId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostDelete);