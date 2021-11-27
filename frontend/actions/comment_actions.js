import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

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

export const requestComment = () => dispatch => (
  CommentAPIUtil.fetchComment()
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(err => dispatch(receiveCommentErrors(err)))
)


