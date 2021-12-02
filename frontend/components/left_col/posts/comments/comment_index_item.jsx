import React from 'react'

const CommentIndexItem = ({user, comment}) => (
  <p className="description">
    <span>{user.username}</span> {comment.body}
  </p>
)

export default CommentIndexItem;