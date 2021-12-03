import React from 'react';
import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestPosts, updatePost, deletePost} from '../../actions/post_actions';
import { requestUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
  user: Object.values(state.entities.users).filter(user => user.id === ownProps.match.params.userId),
  // state.entities.users[ownProps.match.params.userId],
  posts: Object.values(state.entities.posts),
  // .filter(post => post.authorId === ownProps.match.params.userId)
});

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUser: UserId => dispatch(requestUser(UserId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(UserShow);