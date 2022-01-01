
json.extract! @post, :id, :author_id, :body, :created_at 
json.photoUrl url_for(@post.photo)