class Follow < ApplicationRecord
  validates :receiver_id, presence: true
  
  belongs_to: :user,
    primary_key: :id,
    foreign_key: :user,
    class_name: :User

end