import React from 'react';
import CommentCreate from '../posts/comments/comment_create';
import CommentIndexContainer from '../posts/comments/comment_index_container';
import PostLikeCreateContainer from './likes/post_like_create_container';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      numberofLikes: 0
    });
    this.updateLikes = this.updateLikes.bind(this);
  }

  componentDidMount() {
    this.props.requestPostLikes(this.props.post.id)
    .then(
      payload => this.setState({
        numberofLikes: Object.values(payload.postLikes).filter(postLike => postLike.postId === this.props.post.id).length
      })
    )
  }

  updateLikes(num) {
    this.setState({
      numberofLikes: num
    })
  }

  timeSince(date) {
  
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) 
      return Math.floor(interval) + ((Math.floor(interval) == 1) ? ' YEAR' : ' YEARS');
    
    interval = seconds / 2592000;
    if (interval > 1) 
      return Math.floor(interval) + ((Math.floor(interval) == 1) ? ' MONTH' : ' MONTHS');

    interval = seconds / 86400;
    if (interval > 1)
      return Math.floor(interval) + ((Math.floor(interval) == 1) ? ' DAY' : ' DAYS');
    
    interval = seconds / 3600;
    if (interval > 1)
      return Math.floor(interval) + ((Math.floor(interval) == 1) ? ' HOUR' : ' HOURS');
    
    interval = seconds / 60;
    if (interval > 1)
      return Math.floor(interval) + ((Math.floor(interval) == 1) ? ' MINUTE' : ' MINUTES');

    return Math.floor(seconds) + ' SECONDS';
  }

  render () {
    // if (this.props.post.up)
    const { post, user, currentUser, createComment, deletePost } = this.props;
  
    let likes;

    if (this.state.numberofLikes === 1) {
      likes = (<p className="likes">{this.state.numberofLikes} like</p>)
    }
    else if (this.state.numberofLikes > 1) {
      likes = (<p className="likes">{this.state.numberofLikes} likes</p>)
    }

    if (!user)
      return '';
      
    return (
    <div className="post">
      <div className="info">
        <div className="user">
          <Link to={`/user/${user.id}`}>
            <div className="profile-pic"><img src="" alt="" /></div>
          </Link>
          <Link to={`/user/${user.id}`}>
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
        {likes}
        <p className="description" >
          <Link to={`/user/${user.id}`}>
            <span>{user.username}</span> 
          </Link>
            {post.body}
        </p>
        <CommentIndexContainer post={post}/>
        <p className="post-time">{this.timeSince(this.props.post.createdAt)} AGO</p>
      </div>
      <CommentCreate post={post} currentUser={currentUser} createComment={createComment}/>
    </div>
    )
  }
}

export default PostIndexItem;



