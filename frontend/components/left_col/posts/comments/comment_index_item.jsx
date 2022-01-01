import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({user, comment}) => (
  <>
      <p className="description">
        <Link to={`/user/${user.id}`}>
          <span>{user.username}</span> 
        </Link>
        {comment.body}
      </p>
  </>
)

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.comment.authorId]
})


export default connect(mSTP, null)(CommentIndexItem);