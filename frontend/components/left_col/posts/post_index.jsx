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
    if (this.props.posts.length === 0)
      return 'loading'
    return (
      <>
        {
          posts.map(post => (
            <>
              <PostIndexItem key="{post.id}" post={post}/>
            </>
          ))
        }
      </>
    )
  }
}

export default PostIndex