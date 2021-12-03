import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments(this.props.post.id)
  }

  render () {
    
    return (
      <> 
        { 
          this.props.comments.map(comment => (
            <CommentIndexItem comment={comment}/>
          ))
        }
      </>
    )
  }
}

export default CommentIndex;