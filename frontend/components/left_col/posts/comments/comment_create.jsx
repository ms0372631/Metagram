import React from 'react';

class CommentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: this.props.user,
      body: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state)
    this.props.createComment(comment);
  }

  



  render() {
    return (
      <div className="comment-wrapper">
        {/* <img className="icon" src="https://lh3.google.com/u/0/d/1D6xPaJOwpMcaQEYTeUXN1T3AgegZUnp2=w2732-h1726-iv1" alt="" /> */}
        <input className="comment-box" type="text" placeholder="Add a comment..." />
        <button className="comment-btn">post</button>
      </div>
    )
  }
}

export default CommentCreate;