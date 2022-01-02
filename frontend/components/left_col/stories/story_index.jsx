
import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    if (Object.keys(this.props.users).length === 0)
      return "";
 
    return (
      <div className="status-wrapper">
        {this.props.users.map(user => 
          <StoryIndexItem key={user.id} user={user}/>
        )}
      </div>
    )
  }
}

export default StoryIndex