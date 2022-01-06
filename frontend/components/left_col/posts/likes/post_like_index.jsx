import React from "react";
import { connect } from "react-redux";
import PostLikeIndexSub from "./post_like_index_sub";

class PostLikeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      toggleStatus: this.props.toggleStatus
    })
  }

  componentDidMount() {
    this.props.requestPostLikes();
  }

  timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = seconds / 604800;

    if (interval > 1) 
      return Math.floor(interval) + 'w';

    interval = seconds / 86400;
    if (interval > 1)
      return Math.floor(interval) + 'd';
    
    interval = seconds / 3600;
    if (interval > 1)
      return Math.floor(interval) + 'h';
    
    interval = seconds / 60;
    if (interval > 1)
      return Math.floor(interval) + 'm';

    return Math.floor(seconds) + ' s';
  }

  render() {
    console.log(this.props.postLikes);
    if (this.props.postLikes.length === 0)
      return '';

    let likeList, yesterday = [], week = [], earlier = [];

    // for (let i = 0; i < this.props.postLikes[i].length; ++i) {
    //   let time = '';
    //   if (this.timeSince(this.props.postLikes[i].createAt)) 
    // }

    if (this.state.toggleStatus) {
      likeList = (
        <div style={{height: "362px", overflow: "hidden auto"}}>
          <div className="like-drop-down">
            <div className="square" style={{width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "62px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgb(0 0 0 / 10%)"}}/>
            <PostLikeIndexSub/>
          </div>
        </div>
      )
    }

    return (
      <div className="likes-box-container">
        {(this.state.toggleStatus) ? (
          <div style={{height: "362px", overflow: "hidden auto"}}>
            <div className="like-drop-down">
              <div className="square" style={{width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "62px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgb(0 0 0 / 10%)"}}/>
              <PostLikeIndexSub/>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default PostLikeIndex;