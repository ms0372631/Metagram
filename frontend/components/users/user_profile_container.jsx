import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUsers } from "../../actions/user_actions";

const mSTP = state => ({
  user: state.session.currentUser
})

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mSTP, mDTP)(UserShow)