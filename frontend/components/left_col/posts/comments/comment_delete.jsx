import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../../../actions/comment_actions";

const CommentDelete = ({commentId, deleteComment, closeModal}) => (
  <>
    <div className='deletePost'>
      <div className='deletePost-content' onClick={() => deleteComment(commentId)}>Delete</div>
      <div className='deletePost-content' onClick={() => closeModal()}>Cancel</div>
    </div>
  </>
) 

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(null, mDTP)(CommentDelete);

