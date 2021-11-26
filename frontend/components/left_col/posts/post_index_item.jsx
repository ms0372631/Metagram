import React from "react";

const PostIndexItem = ({ post }) => (
  <div className="post">
    <div className="info">
      <div className="user">
        <div className="profile-pic"><img src="" alt="" /></div>
        <p className="username"></p>
      </div>
      <img className="options" src="" alt="" />
    </div>
    <img className="post-image" src={post.photoUrl} alt="" />
    <div className="post-content">
      <div className="reaction-wrapper">
        <img className="icon" src="" alt="" />
        <img className="icon" src="" alt="" />
        <img className="icon" src="" alt="" />
        <img className="icon" src="" alt="" />
      </div>
      <p className="likes"></p>
      <p className="description">{post.body}</p>
      <p className="post-time"></p>
    </div>
    <div className="comment-wrapper"></div>
    <img className="icon" src="" alt="" />
    <input className="comment-box" type="text" />
    <button className="comment-btn">post</button>
  </div>
)

export default PostIndexItem;

