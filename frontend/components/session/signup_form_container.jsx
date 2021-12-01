import React from "react";
import SessionForm from "./session_form";
import { connect } from 'react-redux';
import { signup } from "../../actions/session_actions";
import { createUser } from "../../actions/user_actions";
import { removeSessionErrors } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  createUser: user => dispatch(createUser(user)),
  clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);