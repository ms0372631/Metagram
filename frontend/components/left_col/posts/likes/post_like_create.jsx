import React from 'react';

class PostLikeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      postLikeId: 0,
      author_id: this.props.currentUser.id,
      post_id: this.props.post.id,
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestPostLikes(this.props.post.id)
    .then(
      payload => this.setState({
        postLikeId: Object.values(payload.postLikes).filter(postLike => postLike.authorId === this.props.currentUser.id)[0].id ===
      })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.postLikeId !== 0) {
      console.log(this.state);
      this.props.deletePostLike(this.props.post.id, this.state.postLikeId)
      .then(
        () => this.setState({
          postLikeId: 0,
        })
      )
       this.props.updateLikes(this.props.numberofLikes - 1);
    }
    else {
      const postLike = Object.assign({}, this.state);
      this.props.createPostLike(postLike, this.props.post.id)
      .then(
        payload => this.setState({
            postLikeId: payload.postLike.id,
        })
      )
       this.props.updateLikes(this.props.numberofLikes + 1);
    }
  }

  render() {
    let like;
    if (this.state.postLikeId !== 0) {
      like = (<img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1640691758/NicePng_new-instagram-icon-png_7786050_oxsohf.png" alt="" onClick={this.handleSubmit}/>)
    }
    else {
      like = (<img className="icon" src="https://res.cloudinary.com/dpx0kwaoi/image/upload/v1638262678/like_zmlwiw.png" alt="" onClick={this.handleSubmit} />)
    }
    return (
      <>
        {like}
      </>
    )
  }
}

export default PostLikeCreate;

