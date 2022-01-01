
@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :body, :author_id, :created_at
    if post.photo.attached?
      json.photoUrl url_for(post.photo)
    else
      json.photoUrl ""
    end
  end
end


# if post.photo.attached?
#   json.photoUrl url_for(post.photo)
# else
#   json.photoUrl ""
# end
