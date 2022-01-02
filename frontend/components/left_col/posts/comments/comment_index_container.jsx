import { connect } from "react-redux";
import { updateComment, removeComment, requestComments } from "../../../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => {
//   let _comments;
//   if (Object.keys(state.entities.commments).length === 1)
//     _comments = [state.entities.comments]
//  ents = Object.values(state.entities.comments)
  return {
  comments: Object.values(state.entities.comments)
}}

const mDTP = dispatch => ({
  removeComments: comment => dispatch(removeComment(comment)),
  requestComments: postId => dispatch(requestComments(postId))
})

export default connect(mSTP, mDTP)(CommentIndex)