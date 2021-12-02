class AddCommentLikeTable < ActiveRecord::Migration[5.2]
  def change
    add_column :post_likes, :post_id, :integer, null: false
    add_column :comment_likes, :comment_id, :integer, null: false
  end
end
