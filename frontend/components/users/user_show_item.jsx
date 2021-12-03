import React from 'react';
import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';


class UserShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments(this.props.post.id)
  }

  render() { 
    
    const {post, comments} = this.props;


    return (
      <div className="gallery-item" tabIndex="0">
        <img className="gallery-image" src={post.photoUrl} alt="" />
        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i>42
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i>{comments.length}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  comments: Object.values(state.entities.comments).filter(comment => comment.post_id === ownProps.post.id)
})

const mDTP = dispatch => ({
  requestComments: postId => dispatch(requestComments(postId))
})

export default connect(mSTP, mDTP)(UserShowItem);