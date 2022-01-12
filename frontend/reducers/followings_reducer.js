import { RECEIVE_FOLLOWING, RECEIVE_FOLLOWINGS, REMOVE_FOLLOWING } from "../actions/following_actions"

const followingReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_FOLLOWING:
      nextState[action.following.id] = aciton.following;
      return nextState;
    case RECEIVE_FOLLOWINGS:
      return Object.assign({}, actions.followings);
    case REMOVE_FOLLOWING:
      delete nextState[action.following.id];
      return nextState;
    default:
      return state;
  }
}

export default followingsReducer;