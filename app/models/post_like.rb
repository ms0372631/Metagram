class PostLike < ApplicationRecord

  validates :post_id, :author_id, :receiver_id, presence: true

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
    
end
