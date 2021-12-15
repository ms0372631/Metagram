class RemovePost < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :content
    remove_column :posts, :photo_url
  end
end
