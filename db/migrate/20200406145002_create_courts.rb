class CreateCourts < ActiveRecord::Migration[6.0]
  def change
    create_table :courts do |t|
      t.string :name
			t.integer :slot

      t.timestamps
    end
  end
end
