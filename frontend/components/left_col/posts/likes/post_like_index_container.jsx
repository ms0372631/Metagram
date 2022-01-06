import { connect } from "react-redux";
import PostLikeIndex from "./post_like_index";
import { requestPostLikes } from "../../../../actions/post_like_actions";


const mSTP = state => ({
  currentUser: state.session.currentUser,
  postLikes: Object.values(state.entities.postLikes).filter(postLike => postLike.receiverId === state.session.currentUser.id),
});

const mDTP = dispatch => ({
  requestPostLikes: () => dispatch(requestPostLikes()),
});

export default connect(mSTP, mDTP)(PostLikeIndex);