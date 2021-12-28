import React from 'react';


class PostLikeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: null,
      post_id: null,
    }
    this.handldeSubmit = this.handldeSubmit.bind(this);
  }

  handldeSubmit(e) {
    e.preventDefault();
  
  }

  render() {
    return (
      <img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262678/like_zmlwiw.png" alt="" />
    )
  }
}

export default PostLikeCreate;

