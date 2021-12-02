import React from "react";
import PostItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPosts();
    this.props.requestUsers();
  }

  render() {
    const {posts, users} = this.props;
    console.log(this.props);
    return (
      <>
        {
          posts.map(post => (
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