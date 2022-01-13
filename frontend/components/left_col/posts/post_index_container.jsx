import { connect } from "react-redux";
import { requestPosts, updatePost, deletePost } from "../../../actions/post_actions";
import { requestUsers } from "../../../actions/user_actions";
import { createComment } from "../../../actions/comment_actions";
import { requestFollowings } from "../../../actions/following_actions";
import PostIndex from "./post_index";

const mSTP = state => ({
  followings: Object.values(state.entities.followings).filter(following => following.authorId === state.session.currentUser.id),
  posts: Object.values(state.entities.posts),
  users: Object.values(state.entities.users),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  requestFollowings: userId => dispatch(requestFollowings(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  createComment: (comment, postId) => dispatch(createComment(comment, postId))
})

export default connect(mSTP, mDTP)(PostIndex)