import React from "react";

class FollowingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followingId: 0,
      author_id: this.props.currentUser.id,
      receiver_id: this.props.user.id
    }
    console.log(this.props.followingId)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestFollowings()
    .then(
      () => {
        this.setState({
          followingId: this.props.followings.length === 0 ? 0 : (this.props.followings.length === 0 ? 0 : this.props.followings.filter(following => following.receiverId === this.props.user.id)[0].id)
        })
      }
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.followingId !== 0) {
      this.props.deleteFollowing(this.props.user.id, this.state.followingId)
      .then(
        () => this.setState({
          followingId: 0
        })
      )
    }
    else {
      const following = Object.assign({}, this.state);
      this.props.createFollowing(following, this.props.user.id)
      .then(
        payload => this.setState({
          followingId: payload.following.id
        })
      )
    }
  }

  render() {

    return (
      <>
        {(this.state.followingId !== 0) ? (
          <div className="following-btn-wrapper">
            <button className='following-btn-container' onClick={this.handleSubmit}>
              <div className='following-btn'>
                <span className='following-btn-img'></span>
              </div>
            </button>
          </div>

        ) : (
          <button className="unfollowing-btn" onClick={this.handleSubmit}>Follow</button>
        )}
      </>
    )
  }
  
}

export default FollowingCreate;