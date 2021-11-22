import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mSTP = (state, ownProps) => ({
  user: state.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
  requestPosts: posts => dispatch(requestPosts(posts))
});

export default connect(mSTP, mDTP)(UserShow);