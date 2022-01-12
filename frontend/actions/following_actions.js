import * FollowingAPIUtil from '../util/following_api_util';

export const RECEIVE_FOLLOWINGS = 'RECEIVE_FOLLOWINGS';
export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';
export const RECEIVE_FOLLOWING_ERRORS = 'RECEIVE_FOLLOWING_ERRORS';

export const receiveFollowings = followings => ({
  type: RECEIVE_FOLLOWINGS,
  followings
})

export const receievFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  following
})

export const removeFollowing = following => ({
  type: REMOVE_FOLLOWING,
  following
})

export const receievFollowingErrors = errors => ({
  type: RECEIVE_FOLLOWING_ERRORS,
  errors
})

export const requestFollowings = followingId => dispatch => (
  FollowingAPIUtil.fetchFollowings(followingId)
  .then(followings => dispatch(receiveFollowings(followings)))
  .fail(err => dispatch(receievFollowingErrors(err)))
)

export const requestFollowing = (userId, followingId) => dispatch => (
  FollowingAPIUtil.fetchFollowing(userId, followingId)
  .then(following => dispatch(receiveFollowing(following)))
  .fail(err => dispatch(receiveFollowingErrors(err)))
)

export const createFollowing = (following, userId) => dispatch => (
  FollowingAPIUtil.createFollowing(following, userId)
  .then(following => dispatch(receiveFollowing(following)))
  .fail(err => dispatch(receiveFollowingErrors(err)))
)

export const deleteFollowing = (userId, followingId) => dispatch => (
  FollowingAPI.deleteFollowing(userId, followingId)
  .then(following => dispatch(removeFollowing(following)))
  .fail(err => dispatch(receiveFollowingErrors(err)))
)