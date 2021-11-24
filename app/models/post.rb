class Post < ApplicationRecord

  validates :body, :author_id, presence: true
  validates :author_id, uniqueness: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :user

  has_many :comments,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: 

  has_many :likes,
    primary_key: :id,
    foreign_key: :like_id,
    class_name: :like_id
  
end
