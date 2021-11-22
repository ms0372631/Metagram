import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Metagram</h1>
      </Link>
    </header>
    <div>
      <Route path='/' component={NavBarContainer} />
      <Route path='/login' component={LoginFormContainer}/>
      <Route path='/signup' component={SignupFormContainer}/>
    </div>
  </div>
)

export default App;