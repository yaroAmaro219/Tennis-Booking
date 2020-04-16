class AddDateToReservations < ActiveRecord::Migration[6.0]
  def change
    add_column :reservations, :date, :string
  end
end
