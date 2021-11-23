import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fullname: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearState() {
    this.setState({
      username: '',
      password: '',
      email: '',
      fullname: ''
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.clearState();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let action;
    let signupInfo;

    if (this.props.formType === 'Sign up') {
      action = (
        <>
          <p>Have an account?</p>
          <Link className="link" to="/login">Login</Link>
        </>
      )
      signupInfo = (
        <>
          <p>email</p>
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
          <p>fullname</p>
          <input type="text" value={this.state.fullname} onChange={this.update('fullname')}/>
        </>
      )
    }
    else {
      action = (
        <>
          <p>Don't have an account?</p>
          <Link className="link" to="/signup">Signup</Link>
        </>
      )
    }
    return (
      <div className="container">
        <div className="box">
          <h3 className="heading">Instagram</h3>
            <form className="login-form" onSubmit={this.handleSubmit}>
              {signupInfo}
              <div className="field">
                <input id="username" type="username" placeholder="Phone number, username, or email" value={this.state.username} onChange={this.update('username')}/>
                <label for="username">username</label>
              </div>
              <div className="field">
                <input type="password" type="password" placeholder="password" value={this.state.password} onChange={this.update('password')}/>
                <label for="password">password</label>
              </div>
              <button className="login-button" title="login" type="submit" >{this.props.formType}</button>
              <div className="separator">
                <div className="line"></div>
                  <p>OR</p>
                <div className="line"></div>
              </div>
              <div className="other">
              <button className="fb-login-btn" type="button">
                <i className="fa fa-facebook-official fb-icon"></i>
                <span className="">Log in with Facebook</span>
              </button>
              <a className="forgot-password" href="#">Forgot password?</a>
              </div>
            </form>
            {this.renderErrors}
        </div>
        <div className="box">
            {action}
        </div>
      </div>
    ) 
  }
}

export default SessionForm;