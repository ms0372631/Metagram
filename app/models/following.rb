class Follow < ApplicationRecord
  validates :receiver_id, :author_id, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiver_id,
    class_name: :User

end