import PostIndexItem from "./post_index_item";
import { connect } from 'react-redux';


const mSTP = (state, ownProps) =>{
  
  return{
  user: state.entities.users[ownProps.post.authorId],
  currentUser: state.session.currentUser
}}

export default connect(mSTP, null)(PostIndexItem)
