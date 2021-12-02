import { connect } from "react-redux";
import { updateComment, removeComment, requestComments } from "../../../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => ({
  comments: Object.values(state.entities.comments).filter(comment => comment.post_id === ownProps.post.id)
})

const mDTP = dispatch => ({
  removeComments: comment => dispatch(removeComment(comment)),
  requestComments: postId => dispatch(requestComments(postId))
})

export default connect(mSTP, mDTP)(CommentIndex)