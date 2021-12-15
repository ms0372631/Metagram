class DropPostContent < ActiveRecord::Migration[5.2]
  def change
    drop_table :post_contents
  end
end
