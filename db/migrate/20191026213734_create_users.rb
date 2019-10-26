class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :occupation
      t.string :email
      t.boolean :located_in_southern_california, null: false, default: false
      t.boolean :is_invited, null: false, default: false

      t.timestamps
    end
  end
end
