import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
  
    return (
      <>
      <p>this is {this.props.user.username} page</p>
      </>
    )
  }
}

export default UserShow;