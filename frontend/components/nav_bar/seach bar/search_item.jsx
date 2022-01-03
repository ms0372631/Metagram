import React from 'react';
import { Link } from 'react-router-dom';


export default ({user}) => (
  <>
    <Link to={`user/`}></Link>
    <li>
      <img src="" alt="" />
      <a href="">{user.username}</a>
      <a href="">{user.fullname}</a>
    </li>
  </>
);