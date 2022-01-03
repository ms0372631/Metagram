import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestUser, requestUsers } from '../../../actions/user_actions';

const mSTP = state => ({
  users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mSTP, mDTP)(SearchBar);