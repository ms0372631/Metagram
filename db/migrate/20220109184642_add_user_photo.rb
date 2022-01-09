class AddUserPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :photoUrl, :string
  end
end
