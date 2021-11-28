import { connect } from 'react-redux';
import { createComment } from '../../../../actions/comment_actions';
import CommentCreate from './comment_create';

const mSTP = (state, ownProps) => ({
  user: state.session.currentUser
})

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentCreate);