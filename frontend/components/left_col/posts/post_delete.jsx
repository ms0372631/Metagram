import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';

class PostDelete extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  
    return (
      <>
      </>
    )
  }
}

const mDTP = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(null, mDTP)(PostDelete);


