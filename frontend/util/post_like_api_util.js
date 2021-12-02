

export const fetchPostLikes = postId => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/post_likes`
  })
)

export const createPostLikes = (postLikes, postId) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/post_likes`,
    data: { postLikes }
  })
)

export const deletePostLikes = (postId, postLikesId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/post_likes/${postLikesId}`
  })
)
