

export const fetchPostLikes = postId => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/post_likes`
  })
)

export const createPostLike = (postLikes, postId) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/post_likes`,
    data: { postLikes }
  })
)

export const deletePostLike = (postId, postLikeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/post_likes/${postLikeId}`
  })
)
