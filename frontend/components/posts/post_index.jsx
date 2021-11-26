import React from "react";
import PostIndexItem from "./post_index_container";

class PostIndex extends React.Component {
  constructor(props) {
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.props.requestPosts()
  }

  render() {
    return (
      <div>
        {
          this.props.posts.map(post => (
            <ul>
              <PostIndexItem post={post}/>
            </ul>
          ))
        }
      </div>
    )
  }
}

export default PostIndex