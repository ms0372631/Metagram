

export const fetchPostLikes = postId => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/post_likes`
  })
)

export const createPostLike = (post_like, postId) => (
  $.ajax({
    method: 'POST',
    url: `api/posts/${postId}/post_likes`,
    data: { post_like }
  })
)

export const deletePostLike = (postId, postLikeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}/post_likes/${postLikeId}`
  })
)
