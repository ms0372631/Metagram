

export const fetchPostLikes = postId => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/post_likes`
  })
)

export const createPostLike = (postLike, postId) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/post_likes`,
    data: { postLike }
  })
)

export const deletePostLike = (postId, postLikeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/post_likes/${postLikeId}`
  })
)
