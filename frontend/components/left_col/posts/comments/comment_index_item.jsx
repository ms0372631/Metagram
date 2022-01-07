import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../../../actions/modal_actions';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      hover: false
    });
  }

  render() {
    const {user, comment, currentUser, openModal} = this.props;
    return (
      <div onMouseEnter={ () => this.setState({ hover: true }) } onMouseLeave={ () => this.setState({ hover: false }) }> 
        {
           (currentUser && this.state.hover && comment.authorId === currentUser.id )? (
            <div className="description-comment">
              <Link to={`/user/${user.id}`}>
                <span className='description-comment-username'>{user.username}</span> 
              </Link>
              {comment.body}
              <div className='comment-delete' onClick={() => openModal('deleteComment', comment)}></div>
            </div>
           ) : (
            <div className="description-comment">
              <Link to={`/user/${user.id}`}>
                <span className='description-comment-username'>{user.username}</span> 
              </Link>
              {comment.body}
            </div>
           )
        }
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.comment.authorId],
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  openModal: (modal, ownProps) => dispatch(openModal(modal, ownProps))
})


export default connect(mSTP, mDTP)(CommentIndexItem);