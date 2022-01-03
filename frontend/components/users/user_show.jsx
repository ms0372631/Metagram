import React from 'react';
import UserShowSub from './user_show_sub_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    return (
      <>
        <NavBarContainer/>
        <UserShowSub user={this.props.user}/>
      </>
    )
  }
}

export default UserShow;