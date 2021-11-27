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
        <img className="icon" src="https://lh3.google.com/u/0/d/1vP-vNl5nbffr_g12mrhFeyGP_Jx8-dt_=w2732-h1726-iv1" alt="" />
        <img className="icon" src="https://lh3.google.com/u/0/d/1fRcgK289KVfcJ5m_6KUEJLJZf8yWUS2r=w2732-h1726-iv1" alt="" />
        {/* <img className="icon" src="https://lh3.google.com/u/0/d/1YZp2Sob8-irx-MsJvJuIDiiCdn1IYOZE=w2732-h1726-iv1" alt="" />
        <img className="icon" src="https://lh3.google.com/u/0/d/18oLwdSv9d1yAaBaR6mKTch4Lg4BVLgqL=w2732-h1726-iv1" alt="" /> */}
      </div>
      <p className="likes"></p>
      <p className="description">{post.body}</p>
      <p className="post-time"></p>
    </div>
    <div className="comment-wrapper">
      {/* <img className="icon" src="https://lh3.google.com/u/0/d/1D6xPaJOwpMcaQEYTeUXN1T3AgegZUnp2=w2732-h1726-iv1" alt="" /> */}
        <input className="comment-box" type="text" placeholder="Add a comment..."/>
        <button className="comment-btn">post</button>
    </div>
  </div>
)

export default PostIndexItem;

