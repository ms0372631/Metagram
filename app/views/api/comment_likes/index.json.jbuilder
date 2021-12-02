
@comment_likes.each do |comment_like|
  json.set! comment_like.id do
    json.extract! comment_like:, :id, :post_id
  end
end