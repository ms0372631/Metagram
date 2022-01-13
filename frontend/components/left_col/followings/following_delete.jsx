import React from "react";
import { connect } from "react-redux";
import { deleteFollowing } from "../../../actions/following_actions";
import { requestUsers } from "../../../actions/user_actions";


class FollowingDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    return (
      <div className="unfollow-wrapper">
        <div className="unfollow-container">
          <div className="unfollow">
            <div className="unfollow-profile-wrapper">
              <div className="unfollow-profile-container">
                <div className="unfollow-profile">
                  <img className="unfollow-img" src={this.props.user.photoUrl} alt="" />
                </div>
              </div>
            </div>
            <div className="unfollow-text-wrapper">
              <div className="unfollow-text-container">
                <div className="unfollow-text">
                  <div className="unfollow-text-content">
                    Unfollow @{this.props.user.username}?
                  </div>
                </div>
              </div>
            </div>
            <div className="unfollow-button-container">
              <button className="unfollow-modal-button" onClick={() => { this.props.deleteFollowing(this.props.currentUser.id, this.props.following.id); this.props.closeModal(); }}>Unfollow</button>
              <button className="unfollow-modal-cancel" onClick={() => this.props.closeModal()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.following.receiverId],
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  deleteFollowing: (userId, followingId) => dispatch(deleteFollowing(userId, followingId)),
  requestUsers: () => dispatch(requestUsers())
})

export default connect(mSTP, mDTP)(FollowingDelete);
