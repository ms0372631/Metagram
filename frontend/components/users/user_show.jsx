import React from 'react';
import UserShowSubContainer from './user_show_sub_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    
    if (!this.props.user)
      return ''
 
    return (
      <>
        <NavBarContainer/>
        <UserShowSubContainer user={this.props.user}/>
      </>
    )
  }
}

export default UserShow;