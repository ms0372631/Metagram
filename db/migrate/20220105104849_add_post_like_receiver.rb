class AddPostLikeReceiver < ActiveRecord::Migration[5.2]
  def change
    add_column :post_likes, :receiver_id, :integer, null: false
  end
end
