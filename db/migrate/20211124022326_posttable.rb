class Posttable < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :body, :text, null: false
    add_column :posts, :author_id, :integer, null: false
  end
end
