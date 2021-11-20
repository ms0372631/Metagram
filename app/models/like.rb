class Like < ApplicationRecord
  t.integer :author_id, null: false
  t.integer :post_id, null: false
  t.integer :comment_id, null: false
end
