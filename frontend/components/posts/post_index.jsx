import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const {posts} = this.props;
    console.log(posts)
    return (
      <div>
        {
          posts.map((post, idx) => (
            <ul>
              <PostIndexItem post={post} key={idx}/>
            </ul>
          ))
        }
      </div>
    )
  }
}

export default PostIndex