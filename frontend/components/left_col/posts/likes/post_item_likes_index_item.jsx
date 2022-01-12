import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostItemLikesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Link to={`/user/${this.props.user.id}`}>
          <div className="likes-box-item-container">
            <div className="likes-box-img-wrapper">
              <div className="likes-box-img-container">
                <div className="likes-box-img-content">
                  <canvas className="likes-box-canvas" height="108" width="108" style={{position: "absolute", top: "-5px", left: "-5px", width: "54px", height: "54px"}}></canvas>
                  <a className="likes-box-img" href="">
                    <img className="likes-box-profile-pic" src={this.props.user.photoUrl ? this.props.user.photoUrl : "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wXe0UPuQ03kAX8cJBSZ&edm=AEA5CHQBAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT-QiXa_SldO27w2D6vSaPMXtm244ZbJi8ipFGK0DONYaA&oe=61E579CF&_nc_sid=75d5da"} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="likes-box-user-container">
              <div className="likes-box-user-username-wrapper">
                <div className="likes-box-user-username-container">
                  <span className="likes-box-user-username-content">
                    <a className="likes-box-user-username" href="">{this.props.user.username}</a>
                  </span>
                </div>
              </div>
              <div className="likes-box-user-fullname-container">
                <div className="likes-box-user-fullname">{this.props.user.fullname}</div>
              </div>
            </div>
            <div className="likes-box-btn-container">
              {(this.props.currentUser.id === this.props.user.id) ? (
                <></>
              ) : (
                <button className="likes-box-btn">Following</button>
              )}
            </div>
          </div>
        </Link> 
      </>
    )
  }
}

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.postLike.authorId]
})

export default connect(mSTP, null)(PostItemLikesIndexItem);