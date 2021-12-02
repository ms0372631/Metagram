import React from 'react';
import CommentCreate from '../posts/comments/comment_create';
import CommentIndexContainer from '../posts/comments/comment_index_container';

const PostIndexItem = ({post, user, createComment}) => (
  <div className="post">
    <div className="info">
      <div className="user">
        <div className="profile-pic"><img src="" alt="" /></div>
        <p className="username">{user.username}</p>
      </div>
      <img className="options" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262823/option_hdakyy.png" alt="" />
    </div>
    <img className="post-image" src={post.photoUrl} alt="" />
    <div className="post-content">
      <div className="reaction-wrapper">
        <img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262678/like_zmlwiw.png" alt="" />
        <img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262820/comment_lyvpp0.png" alt="" />
        {/* <img className="icon" src="https://lh3.google.com/u/0/d/1YZp2Sob8-irx-MsJvJuIDiiCdn1IYOZE=w2732-h1726-iv1" alt="" />
        <img className="icon" src="https://lh3.google.com/u/0/d/18oLwdSv9d1yAaBaR6mKTch4Lg4BVLgqL=w2732-h1726-iv1" alt="" /> */}
      </div>
      <p className="likes">5 likes</p>
      <p className="description">
        <span>{user.username}</span> {post.body}
        <CommentIndexContainer postId={post.id}/>
      </p>
      <p className="post-time"></p>
    </div>
    <CommentCreate post={post} user={user} createComment={createComment}/>
  </div>
)

export default PostIndexItem;

