import { connect } from "react-redux";
import { requestPosts } from "../../actions/post_actions";

const mSTP = state => ({
  posts: state.posts
})

const mDTP = () => dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  updatePost: post => dispatch(updatePosts(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)()