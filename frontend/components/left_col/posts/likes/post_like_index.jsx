import React from "react";


class PostLikeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPostLikes();
  }

  render() {
    return (
      
    )
  }
}

export default PostLikeIndex;