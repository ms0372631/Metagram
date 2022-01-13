import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import { requestFollowings } from '../../../actions/following_actions';
import StoryIndex from './story_index'

const mSTP = state => ({
  users: (state.session.currentUser) ? Object.values(state.entities.users).filter(user => user.id !== state.session.currentUser.id) : Object.values(state.entities.users),
  followings: Object.values(state.entities.followings),
  currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestFollowings: userId => dispatch(requestFollowings(userId))
});

export default connect(mSTP, mDTP)(StoryIndex);