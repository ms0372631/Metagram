import React from "react";
import PostItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {

    return (
      <>
        {
          this.props.posts.map(post => (
            <>
              <PostItemContainer 
                key={post.id} 
                post={post} 
                createComment={this.props.createComment}/>
            </>
          ))
        }
      </>
    )
  }
}

export default PostIndex