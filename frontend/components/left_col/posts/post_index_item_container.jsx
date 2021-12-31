import PostIndexItem from "./post_index_item";
import { connect } from 'react-redux';
import { deletePost } from "../../../actions/post_actions";
import { requestPostLikes } from '../../../actions/post_like_actions';



const mSTP = (state, ownProps) => ({
  postLikes: Object.values(state.entities.postLikes),
  user: state.entities.users[ownProps.post.authorId],
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId))
})

export default connect(mSTP, mDTP)(PostIndexItem)
