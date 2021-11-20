class Comment < ApplicationRecord
  t.integer :author_id, null: false
  t.integer :post_id, null: false
  t.text :body, null: false
  t.timestamps
end
