import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <div>
      <Route path='/' component={NavBarContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    </div>
  </div>
)

export default App;