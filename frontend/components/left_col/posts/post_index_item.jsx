import React from 'react';
import CommentCreate from '../posts/comments/comment_create';
import CommentIndexContainer from '../posts/comments/comment_index_container';
import PostLikeCreateContainer from './likes/post_like_create_container';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      likedbyCurrentUser: false,
      numberofLikes: 0
    });
    this.updateLikes = this.updateLikes.bind(this);
  }

  componentDidMount() {
    this.props.requestPostLikes(this.props.post.id)
    .then(
      payload => this.setState({
        numberofLikes: Object.values(payload.postLikes).length
      })
    )
  }

  updateLikes(num) {
    this.setState({
      numberofLikes: num
    })
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
        <PostLikeCreateContainer numberofLikes={this.state.numberofLikes} updateLikes={this.updateLikes} post={post} user={user}/>
      </div>
        <p className="likes">{this.state.numberofLikes} likes</p>
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



