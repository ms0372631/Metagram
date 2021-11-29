import React from 'react';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.user.id,
      body: '',
      photoUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post  = Object.assign({}, this.state);
    this.props.createPost(post);
    this.clearState();
  }

  clearState() {
    this.setState({
      authorId: 0,
      body: '',
      photoUrl: ''
    })
  }

  render() {
    return (
      <div className="modal is-open">
        <div className="modal-screen">
          <div className="modal-form">
            <div className="modal header">
              <div className="modal header-back">back</div>
              <div className="modal header-title">Create new post</div>
              <button className="modal header-share"type="submit" form="myform">Share</button>
            </div>
            <div className="modal bottom">
              <div className="modal bottom-left">
                <form className="modal modal-picture" onSubmit={this.handleSubmit}>
                  <button type="submit">Select from computer</button>
                </form>
              </div>
              <div className="modal bottom-right">
                <div className="modal username"/>
                <div className="modal text-area"/>
                <div className="modal form">
              </div>
              </div>
            </div>
          </div>
          <div className="modal-screen js-modal-close"></div>
        </div>
      </div>
    ) 
  }
}


export default PostCreate;

