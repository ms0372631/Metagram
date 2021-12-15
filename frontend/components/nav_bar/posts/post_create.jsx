import React from 'react';
import { Link } from 'react-router-dom';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authord: this.props.currentUser.id,
      body: '',
      photoFile: null,
      imageUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.clearState = this.clearState.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    formData.append('post[author_id]', this.state.authorId);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    $.ajax({
      url: 'api/posts',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
    this.props.closeModal();
  }



  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => 
      this.setState({ imageUrl: reader.result, photoFile: file });
  
    if (file) 
      reader.readAsDataURL(file);
    else
      this.setState({ imageUrl: '', photoFile: null });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  clearState() {
    this.setState({
      body: '',
      imageUrl: '',
      photoFile: null
    })
  }


  render() {
    
    let image;
    let submit;

    if (this.state.imageUrl != '') {
      image = ( <img className="modal image" src={this.state.imageUrl} alt="your image" /> )
    }
    else {
      submit = ( <input type='file' onChange={this.updateFile} /> )
    }

    return (
      <>
        <div className="modal-form">
          <div className="modal header">
            <button className="modal header-back" onClick={this.clearState}>back</button>
            <div className="modal header-title">Create new post</div>

            
            <button className="modal header-share" type="submit" form="rightform">Share</button>
 
          </div>
          <div className="modal bottom">
            <form className="modal bottom-left" runat="server">
              {submit}
              {image}
            </form>
            <form id="rightform" className="modal bottom-right" onSubmit={this.handleSubmit} >
              <div className="modal username">{this.props.currentUser.fullname}</div>
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

