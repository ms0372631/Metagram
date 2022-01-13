import { connect } from "react-redux";
import FollowingCreate from "./following_create";
import { createFollowing, deleteFollowing, requestFollowings } from "../../../actions/following_actions";

const mSTP = (state, ownProps) => ({
  followings: Object.values(state.entities.followings),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestFollowings: userId => dispatch(requestFollowings(userId)),
  createFollowing: (following, userId) => dispatch(createFollowing(following, userId)),
  deleteFollowing: (userId, followingId) => dispatch(deleteFollowing(userId, followingId))
})

export default connect(mSTP, mDTP)(FollowingCreate);