
json.extract! @post, :id, :author_id, :body
json.photoUrl url_for(@post.photo)