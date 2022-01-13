
// export const fetchFollowings = userId => (
//   $.ajax({
//     method: 'GET',
//     url: `api/users/${userId}/followings`
//   })
// )

export const fetchFollowings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/followings'
  })
)

export const fetchFollowing = (userId, followingId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/followings/${followingId}`
  })
)

export const createFollowing = (following, userId) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/followings`,
    data: { following }
  })
)

export const deleteFollowing = (userId, followingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/followings/${followingId}`
  })
)