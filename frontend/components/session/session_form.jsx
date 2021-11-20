import React from "react";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.update({
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
    return (
      <>
        <h3>Instagram</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.props.username} onChange={this.update('username')}/>
            <input type="password" value={this.props.password} onChange={this.update('password')}/>
          <input type="submit" value={this.props.formType}/>
        </form>
        <p>OR</p>
        {this.renderErrors}
      </>
    ) 
  }
}

export default SessionForm;