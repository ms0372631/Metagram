import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserShow from './users/user_show'
import Main from "./main";
import Modal from "./modal";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';


const App = () => (
  <>
    <Modal/>
    <Switch>
      <ProtectedRoute exact path='/' component={Main}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <Route path='/users/:userId' component={UserShow} />
    </Switch>
  </>
)

export default App;
  