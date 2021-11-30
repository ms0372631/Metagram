
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import PostCreate from './post_create';

const mSTP = state => ({
  // errors: state.errors.posts,
  currentUser: state.session.currentUser,
  formType: 'create post'
})

const mDTP = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal())
})


export default connect(mSTP, mDTP)(PostCreate)