import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, LOGIN_DEMO_USER} from "../actions/session_actions";

const _nullUser = Object.freeze({
  currentUser: null
});


const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case LOGIN_DEMO_USER:
      return {currentUser: action.demoUser};
    default: 
      return state;
  }
};

export default sessionReducer;