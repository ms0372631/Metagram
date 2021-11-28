import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import PostCreate from './post_create';

const mSTP = (state, ownProps) => ({
  user: state.session.currentUser
})

const mDTP = dispatch => ({
  createPost: post => dispatch(createPost(post))
})


export default connect(mSTP, mDTP)(PostCreate)