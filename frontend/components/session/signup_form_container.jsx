import React from "react";
import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { signup, removeSessionErrors, loginDemo } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(removeSessionErrors()),
  loginDemo: demoUser => dispatch(loginDemo(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);