class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references :post, foreign_key: true
      t.references :user, foreign_key: true
      t.text :text
      t.integer :votes, default: 0
      t.integer :parent_id

      t.timestamps
    end
  end
end
