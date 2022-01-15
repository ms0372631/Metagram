
import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestFollowings();
  }

  render() {

    const {users, followings, currentUser} = this.props;

    if (Object.keys(users).length === 0)
      return "";
    
    let followingStories = [];
    for (let i = 0; i < users.length; ++i) {
      for (let j = 0; j < followings.length; ++j) {
        if (users[i].id === followings[j].receiverId && followings[j].authorId === currentUser.id) {
          followingStories.push(users[i]);
          break;
        }
      }
    }
      
    return (
      <div className="status-wrapper">
        {followingStories.map(user => 
          <StoryIndexItem key={user.id} user={user}/>
        )}
      </div>
    )
  }
}

export default StoryIndex