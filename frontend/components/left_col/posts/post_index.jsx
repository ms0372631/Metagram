import React from "react";
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const {posts, } = this.props;
    return (
      <>
        {
          posts.map((post, idx) => (
            <>
              <PostIndexItem post={post} key={idx} />
            </>
          ))
        }
      </>
    )
  }
}

export default PostIndex