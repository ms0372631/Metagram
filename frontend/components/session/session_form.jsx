import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fullname: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  loginDemoUser() {
    const _demoUser = Object.freeze({
      username: 'demoUser',
      password: 'demoPassword',
      email: 'demo@gmail.com',
      fullname: 'Demo User'
    });
    this.props.loginDemo(_demoUser);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  clearState() {
    this.setState({
      username: '',
      password: '',
      email: '',
      fullname: '',
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
      <ul className="error_messages">
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
    let usernameInfo;

    if (this.props.formType === 'Sign up') {
      action = (
        <>
          <p>Have an account?</p>
          <Link className="signup" to="/login">Log In</Link>
        </>
      )
      signupInfo = (
        <>
          <div className="field">
            <input id="email" type="email" value={this.state.email} onChange={this.update('email')} />
            <label htmlFor="email">Mobile Number or Email</label>
          </div>
          <div className="field">
            <input id="fullname" type="fullname" value={this.state.fullname} onChange={this.update('fullname')} />
            <label htmlFor="fullname">Full Name</label>
          </div>
        </>
      )
      usernameInfo = <label htmlFor="username">Username</label>
    }
    else {
      action = (
        <>
          <p>Don't have an account?</p>
          <Link className="signup" to="/signup">Sign Up</Link>
        </>
      )
      usernameInfo = <label htmlFor="username">Phone number, username, or email</label>
    }
    return (
      <div className="login container">
        <div className="box">
          <div className="heading"></div>
            <form className="login-form" onSubmit={this.handleSubmit}>
              {signupInfo}
              <div className="field">
                <input id="username" type="username" value={this.state.username} onChange={this.update('username')}/>
              {usernameInfo}
              </div>
              <div className="field">
                <input id="password" type="password"  value={this.state.password} onChange={this.update('password')}/>
                <label htmlFor="password">Password</label>
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
                <span className="" onClick={this.loginDemoUser}>Log in with Demo</span>
              </button>
              {this.renderErrors()}
              <a className="forgot-password" href="#">Forgot password?</a>
              </div>
            </form>
        </div>
        <div className="box">
            {action}
        </div>
      </div>
    ) 
  }
}

export default SessionForm;