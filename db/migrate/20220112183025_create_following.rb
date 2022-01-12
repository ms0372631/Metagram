class CreateFollowing < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.integer :author_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end
  end
end
