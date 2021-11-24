import React from "react";
import PostIndexContainer from "./post_index_container";

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts()
  }

  render() {
    const { posts, updatePost, deletePost } = this.props;
    return (
      <div>
        {
          posts.map(post => (
            <ul>
              <PostIndexItem post={post} updatePost={updatePost} deletePost={deletePost}/>
            </ul>
          ))
        }
      </div>
    )
  }
}

export default PostIndex