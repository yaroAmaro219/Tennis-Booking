class AddDetailsToReservations < ActiveRecord::Migration[6.0]
  def change
    add_column :reservations, :name, :string
    add_column :reservations, :start_time, :string
    add_column :reservations, :end_time, :string
  end
end
