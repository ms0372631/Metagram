import React from 'react';

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
      author_id: 0,
      body: '',
      photoUrl: ''
    })
  }

 


  render() {

    const {currentUser} = this.props;
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
            <div className="modal header-back">back</div>
            <div className="modal header-title">Create new post</div>
            <button className="modal header-share" type="submit" form="rightform">Share</button>
          </div>
          <div className="modal bottom">
            <form className="modal bottom-left" runat="server">
              {submit}
              {image}
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

