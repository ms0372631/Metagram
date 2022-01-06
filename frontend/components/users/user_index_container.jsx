import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import UserIndex from './user _index';

const mSTP = state => ({
  users: (state.session.currentUser) ? Object.values(state.entities.users).filter(user => user.id !== state.session.currentUser.id) : Object.values(state.entities.users),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  requestUsers: () => dispatch(requestUsers())
})


export default connect(mSTP, mDTP)(UserIndex)