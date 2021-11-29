import React from 'react';
import PostIndexContainer from './posts/post_index_container';
import StoryIndexContainer from './stories/story_index_container';

const LeftCol = () => (
  <div className="left-col">
    <StoryIndexContainer />
    <PostIndexContainer />
  </div>
)

export default LeftCol
