import React from 'react'
import { connect } from 'react-redux';

const CommentIndexItem = ({user, comment}) => {
  return (
  <p className="description">
    <span>{user.username}</span> {comment.body}
  </p>)
}

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.comment.author_id]
})


export default connect(mSTP, null)(CommentIndexItem);