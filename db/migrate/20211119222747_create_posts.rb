class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :content, null: false
      t.integer :author_id, null: false
      t.string :photo_url, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end
