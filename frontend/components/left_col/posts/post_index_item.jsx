import React from 'react';
import CommentCreateContainer from './comments/comment_create_container';

const PostIndexItem = ({post}) => (
  <div className="post">
    <div className="info">
      <div className="user">
        <div className="profile-pic"><img src="" alt="" /></div>
        <p className="username"></p>
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
      <p className="likes"></p>
      <p className="description">{post.body}</p>
      <p className="post-time"></p>
    </div>
    <CommentCreateContainer/>
  </div>
)

export default PostIndexItem;

