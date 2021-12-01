
json.array! @posts do |post|
  json.extract! post, :id, :body, :author_id
  if post.photo.attached?
    json.photoUrl url_for(post.photo)
  else
    json.photoUrl ""
  end
end
