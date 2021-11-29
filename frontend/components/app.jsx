import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PostCreateContainer from "./nav_bar/posts/post_create_container";
import UserShowContainer from "./users/user_show_container";
import UserIndexContainer from './users/user_index_container';
import LeftCol from './left_col/left_col';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';


const App = () => (
  <>
    <AuthRoute exact path='/login' component={LoginFormContainer}/>
    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    <ProtectedRoute path='/' component={NavBarContainer} />
    <Route path='/index' component={UserIndexContainer}/>
    <Route path='/index' component={LeftCol}/>
    <Route path='/create' component={PostCreateContainer}/>
    <Route path='/demo' component={UserShowContainer} />
  </>
)

export default App;
