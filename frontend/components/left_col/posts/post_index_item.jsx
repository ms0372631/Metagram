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

  componentDidMount() {

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
        <div className="reaction-wrapper">
          <PostLikeCreateContainer post={post} user={user}/>
          <img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1640691758/NicePng_new-instagram-icon-png_7786050_oxsohf.png" alt="" />
          {/* <img className="icon" src="https://lh3.google.com/u/0/d/1YZp2Sob8-irx-MsJvJuIDiiCdn1IYOZE=w2732-h1726-iv1" alt="" />
          <img className="icon" src="https://lh3.google.com/u/0/d/18oLwdSv9d1yAaBaR6mKTch4Lg4BVLgqL=w2732-h1726-iv1" alt="" /> */}
        </div>
        <p className="likes">5 likes</p>
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



