
import { connect } from 'react-redux';
import UserShowSub from './user_show_sub';
import { requestPosts, updatePost, deletePost} from '../../actions/post_actions';
import { requestFollowings } from "../../actions/following_actions";


const mSTP = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.session.currentUser,
    followings: Object.values(state.entities.followings)
}};

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  requestFollowings: () => dispatch(requestFollowings())
});

export default connect(mSTP, mDTP)(UserShowSub);