import React from "react";
import { connect } from "react-redux";
import { deleteFollowing } from "../../../actions/following_actions";


class FollowingDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="unfollow-wrapper">
        <div className="unfollow-container">
          <div className="unfollow">
            <div className="unfollow-profile-wrapper">
              <div className="unfollow-profile-container">
                <div className="unfollow-profile">
                  <img className="unfollow-img" src="" alt="" />
                </div>
              </div>
            </div>
            <div className="unfollow-text-wrapper">
              <div className="unfollow-text-container">
                <div className="unfollow-text">
                  <div className="unfollow-text-content">
                    Unfollow @{this}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  
})

const mDTP = dispatch => ({
  deleteFollowing: (userId, followingId) => dispatch(deleteFollowing(userId, followingId))
})

export default connect(mSTP, mDTP)(FollowingDelete);
