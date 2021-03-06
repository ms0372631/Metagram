import * as PostLikeAPIUtil from '../util/post_like_api_util';

export const RECEIVE_POST_LIKES = 'RECEIVE_POST_LIKES';
export const RECEIVE_POST_LIKE = 'RECEIVE_POST_LIKE';
export const REMOVE_POST_LIKE = 'REMOVE_POST_LIKE';
export const RECEIVE_POST_LIKES_ERRORS = 'RECEIVE_POST_LIKES_ERRORS';

export const receivePostLikes = postLikes => ({
  type: RECEIVE_POST_LIKES,
  postLikes
})

export const receivePostLike = postLike => ({
  type: RECEIVE_POST_LIKE,
  postLike
})

export const removePostLike = postLike => ({
  type: REMOVE_POST_LIKE,
  postLike
})

export const receivePostLikeErrors = errors => ({
  type: RECEIVE_POST_LIKES_ERRORS,
  errors
})

export const requestPostLikes = postId => dispatch => (
  PostLikeAPIUtil.fetchPostLikes(postId)
  .then(postLikes => dispatch(receivePostLikes(postLikes)))
  .fail(err => dispatch(receivePostLikeErrors(err)))
)

export const requestPostLike = (postId, postLikeId) => dispatch => (
  PostLikeAPIUtil.fetchPostLike(postId, postLikeId)
  .then(postLike => dispatch(receivePostLike(postLike)))
  .fail(err => dispatch(receivePostLikeErrors(err)))
)

export const createPostLike = (postLike, postId) => dispatch => (
  PostLikeAPIUtil.createPostLike(postLike, postId)
  .then(postLike => dispatch(receivePostLike(postLike)))
  .fail(err => dispatch(receivePostLikeErrors(err)))
)

export const deletePostLike = (postId, postLikeId)  => dispatch => (
  PostLikeAPIUtil.deletePostLike(postId, postLikeId)
  .then(postLike => dispatch(removePostLike(postLike)))
  .fail(err => dispatch(receivePostLikeErrors(err)))
)
