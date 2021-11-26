import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post }) => {
  console.log(post);
  return (
  <li >
    <h3>{post.body}</h3>
    <img src={post.photoUrl} alt="" />
  </li>
  )
}

export default PostIndexItem;