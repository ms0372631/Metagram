import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPosts();
  }
  
  render() {

    const {user, posts, updatePost, deletePost} = this.props;

    return (
      <div>
        <ul>
          {
            posts.map(post => (
              <UserShowItem
                key={`${post.id}`}
                post={post}
                updatePost={updatePost}
                deletePost={deletePost}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default UserShow;