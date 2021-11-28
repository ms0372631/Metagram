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
              <div className="modal header-back"></div>
              <div className="modal header-title">Create new post</div>
              <button className="modal header-share"type="submit" form="myform">Share</button>
            </div>
            <div className="modal bottom">
              <div className="modal bottom-left">
                <p>jkdcjdkc</p>
                <p>kdcdkcmds,</p>
                <form className="modal-form" onSubmit={this.handleSubmit}>
                  <button type="submit">Select from computer</button>
                </form>
              </div>
              <div className="modal bottom-right">
                <form id="myform" className="modal-form">
                  <p>cdkcnmdksc</p>
                  <p>dkcmdlkscmlksdc</p>
                  <div className="modal username"/>
                  <div className="modal text-area"/>
                  <div className="modal-from"></div>
                </form>
                <div className="modal-screen js-modal-close"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}


export default PostCreate;

