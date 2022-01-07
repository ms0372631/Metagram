import React from 'react';
import CommentCreate from '../posts/comments/comment_create';
import CommentIndexContainer from '../posts/comments/comment_index_container';
import PostLikeCreateContainer from './likes/post_like_create_container';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      numberofLikes: 0,
      saved: false
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

    const { post, user, currentUser, createComment, openModal } = this.props;
  
    let likes;

    if (this.state.numberofLikes === 1) {
      likes = (<p className="likes" onClick={() => openModal('receivePostLikes', post)}>{this.state.numberofLikes} like</p>)
    }
    else if (this.state.numberofLikes > 1) {
      likes = (<p className="likes" onClick={() => openModal('receivePostLikes', post)}>{this.state.numberofLikes} likes</p>)
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
        <svg aria-label="More options" className="options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={ () => openModal('deletePost', post)}><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
      </div>
      <img className="post-image" src={post.photoUrl} alt="" />
      <div className="post-content">
      <div className="reaction-wrapper">
        <PostLikeCreateContainer numberofLikes={this.state.numberofLikes} updateLikes={this.updateLikes} post={post} user={user}/>
        {/* {(this.state.saved) ? (
          <svg aria-label="Remove" class="save icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={() => this.setState({ saved: false })}><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg>
        ) : (
          <svg aria-label="Save" class="save icon" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={() => this.setState({ saved: true })}><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
        )} */}
      </div>
        {likes}
        <p className="description-post" >
          <Link to={`/user/${user.id}`}>
            <span className='description-post-username'>{user.username}</span> 
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



