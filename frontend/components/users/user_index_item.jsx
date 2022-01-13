import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestFollowings } from "../../actions/following_actions";
import { createFollowing } from "../../actions/following_actions";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollowings();
  }

  render() {

    const {user, followings, createFollowing, currentUser} = this.props;

    let followStatus;
    const following = Object.assign({}, {author_id: currentUser.id, receiver_id: user.id})

    for (let i = 0; i < followings.length; ++i) {
      if (followings[i].receiverId === user.id) {
        followStatus = true
        break;
      }
    }
    
    return (
      <div className="profile-card">
        <div className="profile-pic">
          <Link to={`/user/${user.id}`}>
            <img src={user.photoUrl ? user.photoUrl : "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wXe0UPuQ03kAX8cJBSZ&edm=AEA5CHQBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-QiXa_SldO27w2D6vSaPMXtm244ZbJi8ipFGK0DONYaA&oe=61E579CF&_nc_sid=75d5da"} alt="" />
          </Link>
        </div>
        <div style={{width: "185px"}}>
          <Link to={`/user/${user.id}`}>
            <p className="username">{user.username}</p>
          </Link>
          <p className="sub-text">Suggested For you</p>
        </div>
        {(followStatus) ? (
          <button className="action-btn">Following</button>
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
  createFollowing: (following, userId) => dispatch(createFollowing(following, userId))
})

export default connect(mSTP, mDTP)(UserIndexItem);