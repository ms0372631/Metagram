import React from "react";
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const posts = this.props.posts;
  
    return (
      <>
        {
          posts.map(post => (
            <>
              <PostIndexItem key={post.id} post={post}/>
            </>
          ))
        }
      </>
    )
  }
}

export default PostIndex