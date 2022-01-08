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
    if (this.props.postLikes.length === 0)
      return '';

    let likeList, today = [], yesterday = [], week = [], earlier = [];

    for (let i = 0; i < this.props.postLikes.length; ++i) {
      let time = this.timeSince(this.props.postLikes[i].createdAt);
      console.log(time);
      if (time[time.length - 1] === 's' ||  time[time.length - 1] === 'm' || time[time.length - 1] === 'h')
        today.push(this.props.postLikes[i]);
      else if (time[time.length - 1] === 'd' && time[time.length - 2] === '1')
        yesterday.push(this.props.postLikes[i]);
      else if (time[time.length - 1] === 'd')
        week.push(this.props.postLikes[i]);
      else
        earlier.push(this.props.postLikes[i]);
    }

    if (this.state.toggleStatus) {
      likeList = (
          <div className="like-drop-down">
            <div className="square" style={{width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "62px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgb(0 0 0 / 10%)"}}/>
            <PostLikeIndexSub timeFrame={'Today'} postLikes={today}/>
            <PostLikeIndexSub timeFrame={'Yesterday'} postLikes={yesterday}/>
            <PostLikeIndexSub timeFrame={'This Week'} postLikes={week}/>
            <PostLikeIndexSub timeFrame={'Earlier'} postLikes={earlier}/>
          </div>
      )
    }

    return (
      <div className="likes-box-square">
        {likeList}
      </div>
    )
  }
}

export default PostLikeIndex;