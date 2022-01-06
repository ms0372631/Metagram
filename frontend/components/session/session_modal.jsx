import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Link } from 'react-router-dom';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      formState = 'login'
    })
  }

  render() {
    return (
      <> 
      {
        (this.state.formState) === 'login' ? (
          <LoginFormContainer/>
        ) : (
          <SignupFormContainer/>
        )
      }
      </>
    )
  }
}

export default SessionModal;