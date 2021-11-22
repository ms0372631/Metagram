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
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user);
    this.props.processForm(user);
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
          <Link to="/login">Login</Link>
        </>
      )
      signupInfo = (
        <>
          <input type="text" value={this.props.email} onChange={this.update('email')}/>
          <input type="text" value={this.props.fullname} onChange={this.update('fullname')}/>
        </>
      )
    }
    else {
      action = (
        <>
          <p>Don't have an account?</p>
          <Link to="/signup">Signup</Link>
        </>
      )
    }
    return (
      <div>
        <div>
          <h3>Instagram</h3>
            <form onSubmit={this.handleSubmit}>
              {signupInfo}
              <input type="text" value={this.props.username} onChange={this.update('username')}/>
              <input type="password" value={this.props.password} onChange={this.update('password')}/>
              <input type="submit" value={this.props.formType}/>
            </form>
            <p>OR</p>
            {this.renderErrors}
        </div>
        <div>
            {action}
        </div>
      </div>
    ) 
  }
}

export default SessionForm;