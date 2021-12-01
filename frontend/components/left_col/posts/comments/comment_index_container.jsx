import { connect } from "react-redux";
import { updateComment, removeComment, requestComments} from "../../../../actions/comment_actions";
import CommentIndex from "./comment_index";

const mSTP = (state, ownProps) => ({
  comments: state.entities.comments[ownProps]
})

const mDTP = dispatch => ({
  removeComments: comment => dispatch(removeComment(comment))
  
})

export default connect(mSTP, mDTP)(CommentIndex)