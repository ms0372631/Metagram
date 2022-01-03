import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserShowContainer from './users/user_show_container'
import UserProfileContainer from './users/user_profile_container'
import Main from "./main";
import Modal from "./modal";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';


const App = () => (
  <>
    <Modal/>
    <Switch>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <ProtectedRoute exact path='/profile' component={UserProfileContainer}/>
      <Route path='/user/:userId' component={UserShowContainer} />
      <ProtectedRoute exact path='/' component={Main}/>
    </Switch>
  </>
)

export default App;
  