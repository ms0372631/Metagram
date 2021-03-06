import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign(nextState, action.comments);
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;
    default: 
      return state;
  }
}

export default commentsReducer;