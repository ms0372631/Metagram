import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const requestUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))
  .fail(err => dispatch(receiveUserErrors(err)))
)

export const requestUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)))
  .fail(err => dispatch(receiveUserErrors(err)))
)

export const createUser = user => dispatch => (
  UserAPIUtil.createUser(user)
  .then(user => dispatch(receiveUser(user)))
  .fail(err => dispatch(receiveUserErrors(err)))
)