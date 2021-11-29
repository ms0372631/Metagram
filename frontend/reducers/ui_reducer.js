import { combineReducers } from "redux";
import modalReducer from "./comments_reducer";


const uiReducer = combineReducers({
  modal: modalReducer
});

export default uiReducer;