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
    if (!this.props.comments || this.props.comments.length === 0)
      return "";
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