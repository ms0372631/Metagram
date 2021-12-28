import PostIndexItem from "./post_index_item";
import { connect } from 'react-redux';
import { deletePost } from "../../../actions/post_actions";
import { receivePostLikes } from '../../../actions/post_like_actions';



const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.post.authorId],
  currentUser: state.session.currentUser
})

const mDTP = postId => dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  receivePostLikes: postId => dispatch(receivePostLikes(postId))
})

export default connect(mSTP, mDTP)(PostIndexItem)
