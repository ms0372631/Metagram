import { connect } from "react-redux";
import FollowingCreate from "./following_create";
import { createFollowing, deleteFollowing } from "../../../actions/following_actions";

const mSTP = state => ({
  
})

const mDTP = dispatch => ({
  createFollowing: (following, userId) => dispatch(createFollowing(following, userId)),
  deleteFollowing: (userId, followingId) => dispatch(deleteFollowing(userId, followingId))
})

export default connect(mSTP, mDTP)(FollowingCreate);