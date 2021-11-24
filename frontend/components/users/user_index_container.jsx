import { connect } from "react-redux";
import { updatePost, deletePost } from "../../actions/post_actions";
import UserIndex from '../posts/post_index';

const mSTP = (state, ownProps) => ({
  posts: Object.values(state.entities.posts[ownProps.match.params.userId])
})

const mDTP = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post))
})

export default connect(mSTP, mDTP)(UserIndex)