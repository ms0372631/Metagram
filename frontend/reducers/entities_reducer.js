import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";
import postLikesReducer from "./post_likes_reducer";
import followingReducer from "./followingReducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  postLikes: postLikesReducer,
  followings: followingReducer
});

export default entitiesReducer;