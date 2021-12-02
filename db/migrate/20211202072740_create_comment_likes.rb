class CreateCommentLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :comment_likes do |t|
   
      t.timestamps
    end
  end
end
