import React from "react";
import PostIndexItem from './post_index_item';

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
              <PostIndexItem key={post.id} post={post} user={users.filter(user => user.id === post.author_id)} createComment={this.props.createComment}/>
            </>
          ))
        }
      </>
    )
  }
}

export default PostIndex