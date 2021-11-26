
import {connect} from 'react-redux';
import StoryIndex from './story_index'

const mSTP = state => ({
  stories: []
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(StoryIndex);

