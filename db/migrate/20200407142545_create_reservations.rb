class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
			t.string :name
			t.string :start_time
			t.string :end_time
      t.references :user, null: false, foreign_key: true
      t.references :court, null: false, foreign_key: true
			

      t.timestamps
    end
  end
end
