import React from "react";
import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { login, receiveSessionErrors, removeSessionErrors } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => {
 
  return {
  errors: Object.values(state.errors.session),
  formType: 'Log in'
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);