import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import StoryIndex from './story_index'

const mSTP = state => ({
  users: Object.values(state.entities.users)
});

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mSTP, mDTP)(StoryIndex);