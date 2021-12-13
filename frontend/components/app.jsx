import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import UserShow from './users/user_show'
import Main from "./main";
import Modal from "./modal";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';


const App = () => (
  <>
    <Modal/>
    <AuthRoute exact path='/login' component={LoginFormContainer}/>
    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    <ProtectedRoute path='/' component={NavBarContainer} />
    <ProtectedRoute path='/index' component={Main}/>
    <Route path='/users/:userId' component={UserShow} />
  </>
)

export default App;
  