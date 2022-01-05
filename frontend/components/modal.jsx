import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostCreateContainer from './nav_bar/posts/post_create_container';
import PostDeleteContainer from './left_col/posts/post_delete_container';

function Modal({modal, ownProps, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'createPost':
      component = <PostCreateContainer closeModal={closeModal}/>;
      break;
    case 'deletePost':
      component = <PostDeleteContainer postId={ownProps} closeModal={closeModal}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal is-open" onClick={closeModal}>
      <div className="modal-screen" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mSTP = state => ({
  modal: (state.ui.modal) ? state.ui.modal.modal : null,
  ownProps: (state.ui.modal) ? state.ui.modal.ownProps : null
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);