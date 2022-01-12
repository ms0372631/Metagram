@followings.each do |following|
  json.set! following.id do
    json.extract! following, :id, :receiver_id, :author_id, :created_at
  end
end