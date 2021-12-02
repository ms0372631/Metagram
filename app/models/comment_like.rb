class CommentLike < ApplicationRecord
  
  validates :comment_id, presence: true

  belongs_to :comment,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment

end
