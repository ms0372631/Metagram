
export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${commentId}`
  })
)

export const fetchComments = postId => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/comments`
  })
)

export const createComment = (comment, postId )=> (
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/comments`,
    data: {comment}
  })
)

export const updateComment = (postId, comment) => (
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${postId}/comments/${comment.id}`,
    data: {comment}
  })
)

export const deleteComment = (postId, commentId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/comments/${commentId}`
  })
)

