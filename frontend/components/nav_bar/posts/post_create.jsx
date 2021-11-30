import React from 'react';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      body: '',
      photoFile: null,
      imageUrl: ''
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
    this.props.fetchPosts()
      .then(posts => this.setState({
        imageUrl: posts[posts.length - 1].photoUrl
      }))
  }

  updateFile() {
    return e => this.setState({
      photoFile: e.target.files[0]
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
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

    let imageSelector;

    if (this.state.imageUrl === '') {
      imageSelector = (
        <form className="modal bottom-left" onSubmit={() => this.updateFile()}>
          <input type="file" />
        </form>
      )
    }
    else {
      imageSelector = (
        <img src={this.state.imageUrl} alt="" />
      )
    }

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
            {imageSelector}
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

