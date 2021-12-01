import { connect } from "react-redux";
import { updateComment, removeComment, requestComments} from "../../../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
  comments: state.entities.comments[ownProps]
})

const mDTP = dispatch => ({
  removeComments: comment => dispatch(removeComment()
  
})