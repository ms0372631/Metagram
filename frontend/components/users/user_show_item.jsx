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
      payload => this.setState({
        numberofLikes: Object.values(payload.postLikes).length
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
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true">{this.state.numberofLikes}</i>
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

const mSTP = (state, ownProps) => {
  let _postLikes;
  if (Object.keys(state.entities.postLikes).length === 1)
    _postLikes = [state.entities.postLikes[Object.keys(state.entities.postLikes)[0]]];
  else
    _postLikes = Object.values(state.entities.postLikes);
  return {

  comments: Object.values(state.entities.comments).filter(comment => comment.postId === ownProps.post.id),
}}

const mDTP = dispatch => ({
  requestComments: postId => dispatch(requestComments(postId)),
  requestPostLikes: postId => dispatch(requestPostLikes(postId))
})

export default connect(mSTP, mDTP)(UserShowItem);