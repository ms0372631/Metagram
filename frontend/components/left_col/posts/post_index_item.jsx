import React from 'react';
import CommentCreate from '../posts/comments/comment_create';
import CommentIndexContainer from '../posts/comments/comment_index_container';
import PostLikeCreateContainer from './likes/post_like_create_container';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      likedbyCurrentUser: false
    });
  }

  render () {

    const { post, user, currentUser, createComment, deletePost } = this.props;
    
    if (!user)
      return '';
      
    return (
    <div className="post">
      <div className="info">
        <div className="user">
          <Link to={`/users/${user.id}`}>
            <div className="profile-pic"><img src="" alt="" /></div>
          </Link>
          <Link to={`/users/${user.id}`}>
            <p className="username">{user.username}</p>
          </Link>
        </div>
        <img className="options" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262823/option_hdakyy.png" alt="" />
      </div>
      <img className="post-image" src={post.photoUrl} alt="" />
      <div className="post-content">
        <PostLikeCreateContainer  post={post} user={user}/>
        <p className="description">
          <span>{user.username}</span> {post.body}
        </p>
        <CommentIndexContainer post={post}/>
        <p className="post-time"></p>
      </div>
      <CommentCreate post={post} currentUser={currentUser} createComment={createComment}/>
    </div>
    )
  }
}

export default PostIndexItem;



