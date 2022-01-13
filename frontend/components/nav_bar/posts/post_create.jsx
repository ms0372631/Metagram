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
    // this.postCreateButton = this.postCreateButton.bind(this);
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

  postCreateButton(e) {
    const PostCreateContainerEl = e.target.parentElement;
    PostCreateContainerEl.querySelector('#file-upload').click();
  }


  render() {
    
    let image, submit;
    
    if (this.state.imageUrl != '') {
      image = ( <img className="modal image" src={this.state.imageUrl} alt="your image" /> )
    }
    else {
      submit = 
      ( 
        <div className="post-create-container">
          <svg aria-label="Icon to represent media such as images or videos" className="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96" onClick={e => this.postCreateButton(e)}><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
          <div className="post-create-btn" onClick={e => this.postCreateButton(e)}>
              Select from computer
          </div> 
          <input id="file-upload" type='file' onChange={this.updateFile} />
        </div>
      )

    }

    return (
      <>
        <div className="modal-form">
          <div className="modal header">
            <button className='header-back-btn'>
              <div className='modal header-back-container'>
                <svg aria-label="Back" className="modal header-back" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={e => this.clearState(e)}><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
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
              <div className='modal username-container'>
                <div className="modal profile-pic-container">
                  <span className="_2dbep " role="link" tabIndex="-1" style={{width:'28px', height: '28px'}}>
                    <img alt="" className="modal profile-pic" crossOrigin="anonymous" datazztestid="user-avatar" draggable="false" src={this.props.currentUser.photoUrl ? this.props.currentUser.photoUrl : "https://res.cloudinary.com/dpx0kwaoi/image/upload/v1642084849/44884218_345707102882519_2446069589734326272_n.jpg_samy6y.jpg"}/>
                  </span>
              </div>
                <div className="modal username">{this.props.currentUser.fullname}</div>
              </div>
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

