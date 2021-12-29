@post_likes.each do |post_like|
  json.set! post_like.id do
    json.extract! post_like, :id, :post_id, :author_id
  end
end