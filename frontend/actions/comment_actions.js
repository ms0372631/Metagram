import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const requestComments = postId => dispatch => (
  CommentAPIUtil.fetchComments(postId)
  .then(comments => dispatch(receiveComments(comments))
  .fail(err => dispatch(receiveCommentErrors(err))))
)

export const requestComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)

export const createComment = (comment, postId) => dispatch => (
  CommentAPIUtil.createComment(comment, postId)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
  .then(commentId => dispatch(removePost(commentId)))
  .fail(err => dispatch(reveiveCommentErrors(err)))
)


