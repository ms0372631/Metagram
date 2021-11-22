import React from "react";
import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors),
  formType: 'Log in'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);