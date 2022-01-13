import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PostCreateContainer from './nav_bar/posts/post_create_container';
import PostDeleteContainer from './left_col/posts/post_delete_container';
import CommentDelete from './left_col/posts/comments/comment_delete';
import PostItemLikesIndex from './left_col/posts/likes/post_item_likes_index';
import FollowingDelete from './left_col/followings/following_delete';
import SessionForm from './session/session_form';
import login_form_container from './session/login_form_container';
import { signup } from '../util/session_api_util';
import signup_form_container from './session/signup_form_container';

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
      component = <PostDeleteContainer post={ownProps} closeModal={closeModal}/>;
      break;
    case 'deleteComment':
      component = <CommentDelete comment={ownProps} closeModal={closeModal}/>;
      break;
    case 'login':
      component = <sessionModal closeModal={closeModal}/>;
      break;
    case "receivePostLikes":
      component = <PostItemLikesIndex post={ownProps} closeModal={closeModal}/>;
      break;
    case 'deleteFollowing':
      component = <FollowingDelete following={ownProps} closeModal={closeModal}/>;
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