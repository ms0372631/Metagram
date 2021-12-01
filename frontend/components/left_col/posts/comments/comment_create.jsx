import React from 'react';

class CommentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: props.user.id,
      body: '',
      post_id: props.post.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state)
    this.props.createComment(comment);
    debugger
    this.clearState();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearState() {
    this.setState({
      body: '',
    })
  }


  render() {
    return (
      <form className="comment-wrapper" onSubmit={this.handleSubmit} >
        {/* <img className="icon" src="https://lh3.google.com/u/0/d/1D6xPaJOwpMcaQEYTeUXN1T3AgegZUnp2=w2732-h1726-iv1" alt="" /> */}
        <input className="comment-box" type="text" placeholder="Add a comment..." onChange={this.update('body')}/>
        <button type="submit" className="comment-btn">post</button>
      </form>
    )
  }
}

export default CommentCreate;