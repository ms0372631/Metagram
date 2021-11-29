import React from 'react';
import UserIndextItem from './'

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="main">
          <div className="wrapper">
            <div className="right-col">
              <div className="profile-pic">
                <img src="" alt="" />
              </div>
              <div>
                <p class="username">Current User</p>
                <p class="sub-text">current user fullname</p>
              </div>
              <button className="action-btn">switch</button>
            </div>
            <p className="suggestion-text">Suggestions for you</p>
            <UserIndexItem/>
          </div>

        </section>
      </>
    )
  }
}

export default UserIndex;