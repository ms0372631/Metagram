class Comment < ApplicationRecord

  validates :author_id, :post_id, :body, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  has_many :likes,
    primary_key: :id,
    foreign_key: :like_id,
    class_name: :like

end
