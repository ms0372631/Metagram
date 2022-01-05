import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../../../actions/comment_actions";

const CommentDelete = ({comment, deleteComment, closeModal}) => (
  <>
    <div className='deletePost'>
      <div className='deletePost-content' onClick={() => { deleteComment(comment.postId, comment.id); closeModal(); }}>Delete</div>
      <div className='deletePost-content' onClick={() => closeModal()}>Cancel</div>
    </div>
  </>
) 


const mDTP = dispatch => ({
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId))
})

export default connect(null, mDTP)(CommentDelete);

