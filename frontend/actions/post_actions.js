import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS"

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const removePost = post => ({
  type: REMOVE_POST,
  post
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const requestPosts = () => dispatch => (
  PostAPIUtil.fetchPosts()
  .then(posts => dispatch(receivePosts(posts)))
  .fail(err => dispatch(receivePostErrors(err)))
)

export const requestPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId)
  .then(post => dispatch(receivePost(post)))
  .fail(err => dispatch(receivePostErrors(err)))
)

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post)
  .then(post => dispatch(receivePost(post)))
  .fail(err => dispatch(receivePostErrors(err)))
)

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post)
  .then(post => dispatch(receivePost(post)))
  .fail(err => dispatch(receivePostErrors(err)))
)

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId)
  .then(post => dispatch(removePost(post)))
  .fail(err => dispatch(receivePostErrors(err)))
)

