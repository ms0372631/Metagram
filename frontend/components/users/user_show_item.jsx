import React from 'react';

export default ({post, updatePost, deletePost}) => {

  return (
    <div className="gallery-item" tabIndex="0">
      <img className="gallery-image" src={post.photoUrl} alt="" />
      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span class="visually-hidden">Likes:</span>
            <i class="fas fa-heart" aria-hidden="true"></i>42
            </li>
        </ul>
      </div>
    </div>
  )
}

export default UserShowItem;