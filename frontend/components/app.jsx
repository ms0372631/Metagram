import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PostIndexContainer from './posts/post_index_container';
import StoryIndexContainer from "./stories/story_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route, Link } from 'react-router-dom';


const App = () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route path='/feed' component={PostIndexContainer}/>
    <Route path='/feed' component={StoryIndexContainer}/>
    <AuthRoute exact path='/login' component={LoginFormContainer}/>
    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
  </div>
)

export default App;
