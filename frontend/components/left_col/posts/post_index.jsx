import React from "react";
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {

    const sortedPosts = this.props.posts.sort(function(a, b) {
      var keyA = new Date(a.updatedAt), keyB = new Date(b.updatedAt);
      if (keyA < keyB)
        return 1;
      else
        return -1;
    });

    return (
      <>
        {
          sortedPosts.map(post => (
            <PostIndexItemContainer 
              key={post.id} 
              post={post} 
              createComment={this.props.createComment}/>
          ))
        }
      </>
    )
  }
}

export default PostIndex;