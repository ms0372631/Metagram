import React from 'react';
import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';
import { requestPostLikes } from '../../actions/post_like_actions';


class UserShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      numberofLikes: 0
    })
  }

  componentDidMount() {
    this.props.requestComments(this.props.post.id);
    this.props.requestPostLikes(this.props.post.id)
    .then(
      () => this.setState({
        numberofLikes: this.props.postLikes.length
      })
    )
  }

  render() { 
    
    const {post, comments} = this.props;

    return (
      <div className="gallery-item" tabIndex="0">
        <img className="gallery-image" src={post.photoUrl} alt="" />
        <div className="gallery-item-info">
          <ul>
            <li className="gallery-like-icon">
            </li>
            <li className="gallery-item-likes">
              <i className="fas fa-heart" aria-hidden="true"> {this.state.numberofLikes}</i>
            </li>
            <li className="gallery-comment-icon">
            </li>
            <li className="gallery-item-comments">
              <i className="fas fa-comment" aria-hidden="true"></i>{comments.length}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  postLikes: Object.values(state.entities.postLikes).filter(postLike => postLike.postId === ownProps.post.id),
  comments: Object.values(state.entities.comments).filter(comment => comment.postId === ownProps.post.id),
})

const mDTP = dispatch => ({
  requestComments: postId => dispatch(requestComments(postId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId))
})

export default connect(mSTP, mDTP)(UserShowItem);