import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestFollowings } from "../../actions/following_actions";
import { createFollowing } from "../../actions/following_actions";
import { openModal } from "../../actions/modal_actions";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollowings();
  }

  render() {
    
    const {user, followings, createFollowing, currentUser, openModal} = this.props;
    const followingItem = followings.filter(following => following.receiverId === user.id)[0]
    const following = Object.assign({}, {author_id: currentUser.id, receiver_id: user.id})
    
    let followStatus = false;

    for (let i = 0; i < followings.length; ++i) {
      if (followings[i].receiverId === user.id) {
        followStatus = true;
        break;
      }
    }
    console.log(followStatus)
    return (
      <div className="profile-card">
        <div className="profile-pic">
          <Link to={`/user/${user.id}`}>
            <img src={user.photoUrl ? user.photoUrl : "https://res.cloudinary.com/dpx0kwaoi/image/upload/v1642084849/44884218_345707102882519_2446069589734326272_n.jpg_samy6y.jpg"} alt="" />
          </Link>
        </div>
        <div style={{width: "185px"}}>
          <Link to={`/user/${user.id}`}>
            <p className="username">{user.username}</p>
          </Link>
          <p className="sub-text">Suggested For you</p>
        </div>
        {(followStatus) ? (
          <div className="unfollow-btn" onClick={() => openModal('deleteFollowing', followingItem)}>Following</div>
        ) : (
          <button className="action-btn" onClick={() => createFollowing(following, user.id)}>Follow</button>
        )}
      </div>
    )
  }
}

const mSTP = state => ({
  followings: Object.values(state.entities.followings),
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  requestFollowings: () => dispatch(requestFollowings()),
  createFollowing: (following, userId) => dispatch(createFollowing(following, userId)),
  openModal: (modal, ownProps) => dispatch(openModal(modal, ownProps))
})

export default connect(mSTP, mDTP)(UserIndexItem);