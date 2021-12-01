
export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
)

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
)

export const createUser = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
)