import PostIndexItem from "./post_index_item";
import { connect } from 'react-redux';
import { deletePost } from "../../../actions/post_actions";


const mSTP = (state, ownProps) =>{
  return{
  user: state.entities.users[ownProps.post.authorId],
  currentUser: state.session.currentUser
}}

const mDTP = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndexItem)
