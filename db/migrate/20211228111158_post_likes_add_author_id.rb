class PostLikesAddAuthorId < ActiveRecord::Migration[5.2]
  def change
    add_column :post_likes, :author_id, :integer, null: false
  end
end
