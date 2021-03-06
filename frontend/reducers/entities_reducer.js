import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import postLikesReducer from "./post_likes_reducer";
import followingsReducer from "./followings_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  postLikes: postLikesReducer,
  followings: followingsReducer
});

export default entitiesReducer;