class PostLike < ApplicationRecord

  validats :post_id, presence: true

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
    
end
