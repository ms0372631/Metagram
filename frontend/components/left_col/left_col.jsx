import React from 'react';
import PostIndexContainer from './posts/post_index_container';
import StoryIndexContainer from './stories/story_index_container';

const LeftCol = () => (
  <section className="main">
    <div className="wrapper">
      <div className="left-col">
        <StoryIndexContainer />
        <PostIndexContainer />
      </div>
    </div>
  </section>
)

export default LeftCol
