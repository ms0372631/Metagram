class Fullname < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :fullname
    add_column :users, :fullname, :string, null: false
  end
end
