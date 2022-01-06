import React from 'react';
import { connect } from "react-redux";

class PostLikeIndexSub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let yesterday = [], week = [], earlier = [];
    return (
      <div>
        
      </div>
    )
  }
};

const mSTP = (state, ownProps) => ({
  post: state.entities.posts[ownProps.postLike.postId]
})

export default connect(mSTP, null)(PostLikeIndexSub)