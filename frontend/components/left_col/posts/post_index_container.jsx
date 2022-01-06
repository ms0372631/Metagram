import { connect } from "react-redux";
import { requestPosts, updatePost, deletePost } from "../../../actions/post_actions";
import { requestUsers } from "../../../actions/user_actions";
import { createComment } from "../../../actions/comment_actions";
import PostIndex from "./post_index";

const mSTP = state => ({
  posts: Object.values(state.entities.posts),
  users: Object.values(state.entities.users)
})

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  createComment: (comment, postId) => dispatch(createComment(comment, postId))
})

export default connect(mSTP, mDTP)(PostIndex)