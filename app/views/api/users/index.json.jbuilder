@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :fullname, :username, :photo_url
  end
end