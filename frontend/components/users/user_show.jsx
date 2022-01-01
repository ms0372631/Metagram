import React from 'react';
import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
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

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mSTP, mDTP)(UserShow);