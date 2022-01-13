import React from "react";
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPosts();
    this.props.requestFollowings(this.props.currentUser.id);
  }

  render() {
   
    const {followings, posts} = this.props;

    let followingPosts = [];
    for (let i = 0; i < followings.length; ++i) {
      for (let j = 0; j < posts.length; ++j) {
        if (followings[i].receiverId === posts[j].authorId)
          followingPosts.push(posts[j]);
      }
    }
    const sortedPosts = followingPosts.sort(function(a, b) {
      var keyA = new Date(a.createdAt), keyB = new Date(b.createdAt);
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