import { connect } from "react-redux";
import { updateComment, removeComment, requestComments } from "../../../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => ({
  comments: 
})

const mDTP = dispatch => ({
  removeComments: comment => dispatch(removeComment(comment)),
  requestComments: comments => dispatch(requestComments(comments))
})

export default connect(mSTP, mDTP)(CommentIndex)