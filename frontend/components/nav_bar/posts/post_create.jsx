import React from 'react';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      body: '',
      photoFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[photo]', this.state.photoFile);
    formData.append('post[authorId]', this.state.authorId);
    $.ajax({
      url: 'api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
  }



  updateFile(e) {
    this.setState({
      photoFile: e.currentTarget.files[0]
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  clearState() {
    this.setState({
      authorId: 0,
      body: '',
      photoUrl: ''
    })
  }

  preview(e) {
    const [file] = e.currentTarget.files
    if (file) {
      blah.src = URL.createObjectURL(file);
      blah.removeAttribute('hidden');
    }
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
            <form className="modal bottom-left" runat="server">
              <input accept="image/*" type='file' onChange={this.updateFile}/>
              <img id="blah" src="#" alt="your image" hidden/>
            </form>
            <form id="rightform" className="modal bottom-right" onSubmit={this.handleSubmit}>
              <div className="modal username">{currentUser.username}</div>
              <input 
              className="modal text-area" 
              type="text" 
              value={this.state.body} 
              placeholder="Write a caption..." 
              onChange={this.update('body')}/>
            </form>
          </div>
        </div>
        <div className="modal-screen js-modal-close"></div>
      </>
    ) 
  }
}


export default PostCreate;

