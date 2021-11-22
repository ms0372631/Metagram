class AddFullNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :full_name, :string, null: false
    add_index :users, :username
    add_index :users, :full_name
    add_index :users, :email
    add_index :users, :session_token
  end
end
