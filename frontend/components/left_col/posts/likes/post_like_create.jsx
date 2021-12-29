import React from 'react';

class PostLikeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      postLikeId: 0,
      author_id: this.props.currentUser.id,
      post_id: this.props.post.id,
      liked: false
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.liked) {
      this.props.requestPostLikes();
      this.props.deletePostLike(this.props.postLike);
      this.setState({
        liked: false
      });
    }
    else {
      const postLike = Object.assign({}, this.state);
      this.props.createPostLike(postLike, this.props.post.id);
      this.setState({
        liked: true
      })
    }
  }

  render() {
    let like;
    if (this.state.liked) {
      like = (<img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1640691758/NicePng_new-instagram-icon-png_7786050_oxsohf.png" alt="" onClick={this.handleSubmit}/>)
    }
    else {
      like = (<img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262678/like_zmlwiw.png" alt="" onClick={this.handleSubmit} />)
    }
    return (
      <div>
        {like}
      </div>
    )
  }
}

export default PostLikeCreate;

