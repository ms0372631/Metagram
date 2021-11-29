import React from 'react';
import { closeModal } from '../actions/modal_actions';
import connect from 'react-redux';
import PostCreateContainer from './nav_bar/posts/post_create_container';

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'create post':
      component = <PostCreateContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mSTP = state => ({
  modal: state.ui.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect (mSTP, mDTP)(Modal);