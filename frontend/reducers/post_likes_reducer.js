import { RECEIVE_POST_LIKE, RECEIVE_POST_LIKES, REMOVE_POST_LIKE } from "../actions/post_like_actions";

const postLikesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POST_LIKE:
      nextState[action.postLike.id] = action.postLike;
      return nextState;
    case RECEIVE_POST_LIKES:
      return Object.assign(nextState, action.postLikes);
    case REMOVE_POST_LIKE:
      delete nextState[action.postLikeId];
      return nextState;
    default:
      return state;
  }
}

export default postLikesReducer;