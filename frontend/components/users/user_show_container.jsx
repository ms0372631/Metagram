import { connect } from "react-redux";
import UserShow from "./user_show_sub";
import { requestUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mSTP, mDTP)(UserShow)