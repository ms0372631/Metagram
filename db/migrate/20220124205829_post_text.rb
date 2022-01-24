class PostText < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :body
    add_column :posts, :body, :string, null: false
  end
end
