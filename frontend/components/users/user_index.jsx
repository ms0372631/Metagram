import React from "react";
import { logout } from "../../actions/session_actions";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {posts, updatePost, deletePost} = this.props;

    return (
      posts.map(post => (
        <ul>
          <PostIndexItem post={post} updatePost={updatePost} deletePost={deletePost}/>
        </ul>
      ))
    )
  }
}

export default UserIndex;