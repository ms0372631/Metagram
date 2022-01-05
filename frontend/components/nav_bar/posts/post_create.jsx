import React from 'react';
import { Link } from 'react-router-dom';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
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
    formData.append('post[author_id]', this.state.author_id);
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
    setTimeout(() => location.reload(true), 3000);
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
    
    let image, submit;
    
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
            <button className='header-back-btn'>
              <div className='modal header-back-container'>
                <svg aria-label="Back" className="modal header-back" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={this.clearState}><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
              </div>
            </button>
            <div className="modal header-title">Create new post</div>
            <div className="modal header-share-container">
              <button className="modal header-share" type="submit" form="rightform">Share</button>
            </div>
 
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
        <svg aria-label="Close" className="modal-close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={() => this.props.closeModal()}><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
      </>
    ) 
  }
}


export default PostCreate;

