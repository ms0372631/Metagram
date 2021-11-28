import React from 'react';

const UserShowItem = ({post, updatePost, deletePost}) => {


  return (
    <div className="gallery-item" tabindex="0">
      <img className="gallery-image" src={post.photoUrl} alt="" />
      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes">
            <span className="visually-hidden">Likes:</span>
            <i className="fas fa-heart" aria-hidden="true"></i>42
          </li>
          <li className="gallery-item-comments">
            <span className="visually-hidden">Comments:</span>
            <i className="fas fa-comment" aria-hidden="true"></i>3
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserShowItem;