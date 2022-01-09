class AddUserPhotoUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :photoUrl
    add_column :users, :photo_url, :string
  end
end
