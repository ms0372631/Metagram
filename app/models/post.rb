class Post < ApplicationRecord

  validates :body, :author_id, presence: true
  
  has_one_attached :photo

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Postlike

  has_many :likers,
    through: :likes,
    source: :author
  
end
