import PostIndexItem from "./post_index_item";
import { connect } from 'react-redux';


const mSTP = (state, ownProps) =>{
  debugger
  return {
  user: state.entities.users[ownProps.post.author_id]
  }
}

export default connect(mSTP, null)(PostIndexItem)
