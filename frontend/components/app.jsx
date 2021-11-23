import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <Route path='/' component={NavBarContainer} />
    </Switch>
  </div>
)

export default App;