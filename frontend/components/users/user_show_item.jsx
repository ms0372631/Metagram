import React from 'react';

export default ({post, updatePost, deletePost}) => {
  
  return (
    <li>
      <h3>{post.id}</h3>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </li>
  )
}