import { connect } from "react-redux";
import { requestPosts, updatePost, deletePost } from "../../../actions/post_actions";
import PostIndex from "./post_index";

const mSTP = state => ({
  posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex)