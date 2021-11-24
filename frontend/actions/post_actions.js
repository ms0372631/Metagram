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

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

export const recievePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const requestPosts = () => dispatch => (
  PostAPIUtil.fetchPosts()
  .then(posts => dispatch(receivePosts(posts)))
  .fail(err => dispatch(recievePostErrors(err)))
)

export const requestPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId)
  .then(post => dispatch(receivePost(post)))
  .fail(err => dispatch(recievePostErrors(err)))
)

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post)
  .then(post => dispatch(receivePost(post)))
  .fail(err => dispatch(recievePostErrors(err)))
)

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post)
  .then(post => dispatch(requestPost(post)))
  .fail(err => dispatch(receivePosts(err)))
)

export const deletePost = postId => dispatch => (
  PostAPIUtil.updatePost(postId)
  .then(() => dispatch(receivePosts(postId)))
  .fail(err => dispatch(recievePostErrors(err)))
)

