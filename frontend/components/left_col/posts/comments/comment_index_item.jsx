import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({user, comment}) => {
  
  return (
  <p className="description">
    <span>{user.username}</span> {comment.body}
  </p>
  )
}

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.comment.authorId]
})


export default connect(mSTP, null)(CommentIndexItem);