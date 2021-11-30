import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
import UserIndex from './user _index';

const mSTP = state => ({
  users: Object.values(state.entities.users),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers)
})


export default connect(mSTP, mDTP)(UserIndex)