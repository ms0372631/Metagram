import React from "react";
import { connect } from "react-redux";
import PostItemLikesIndexItem from "./post_item_likes_index_item";
import { requestFollowings } from "../../../../actions/following_actions";

class PostItemLikesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollowings();
  }

  render() {
    return (
      <div className="likes-box-wrapper">
        <div className="likes-box-container">
          <div>
            <div className="likes-box-header-container">
              <div className="likes-box-header-left"></div>
              <h1 className="likes-box-header-mid">Likes</h1>
              <div className="likes-box-header-right-wrapper">
                <button className="likes-box-header-right-container">
                  <div>
                    <svg aria-label="Close" className="likes-box-header-right" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" onClick={() => this.props.closeModal()}><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="21" y2="3"></line></svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="likes-box-content-wrapper">
            <div className="likes-box-content-container" style={{height: "356px", overflow: "hidden auto"}}>
              <div className="likes-box-content" style={{flexDirection: "column", paddingBottom: "65px", paddingTop: "0px"}}>
                {this.props.postLikes.map(postLike => (
                  <PostItemLikesIndexItem key={postLike.id} postLike={postLike} currentUser={this.props.currentUser} closeModal={this.props.closeModal} followings={this.props.followings.filter(following => following.authorId === this.props.currentUser.id)}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  postLikes: Object.values(state.entities.postLikes).filter(postLike => postLike.postId === ownProps.post.id),
  followings: Object.values(state.entities.followings)
})

const mDTP = dispatch => ({
  requestFollowings: () => dispatch(requestFollowings())
})

export default connect(mSTP, mDTP)(PostItemLikesIndex);