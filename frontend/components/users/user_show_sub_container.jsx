
import { connect } from 'react-redux';
import UserShowSub from './user_show_sub';
import { requestPosts, updatePost, deletePost} from '../../actions/post_actions';
import { requestUsers } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
  return {
  // state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
  // .filter(post => post.authorId === ownProps.match.params.userId)
}};

const mDTP = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(UserShowSub);