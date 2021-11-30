import React from 'react';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      body: '',
      photoFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[photo]', this.state.photoFile);
    formData.append('post[authorId]', this.state.authorId);
  }

  updateFile() {
    return e => this.setState({
      photoFile: e.curretTarget.files[0]
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentUser.value
    });
  }

  clearState() {
    this.setState({
      authorId: 0,
      body: '',
      photoUrl: ''
    })
  }

  render() {

    const {currentUser} = this.props;

    return (
      <>
        <div className="modal-form">
          <div className="modal header">
            <div className="modal header-back">back</div>
            <div className="modal header-title">Create new post</div>
            <button className="modal header-share" type="submit" form="rightform">Share</button>
          </div>
          <div className="modal bottom">
            <form className="modal bottom-left" onSubmit={this.handleSubmit}>
              <button type="file">Select from computer</button>
            </form>
            <form id="rightform" className="modal bottom-right" onSubmit={this.handleSubmit}>
              <div className="modal username">{currentUser.username}</div>
              <div className="modal text-area">
                <input type="text" value={this.state.body} onChange={this.update('body')}/>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-screen js-modal-close"></div>
      </>
    ) 
  }
}


export default PostCreate;

