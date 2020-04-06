class CreateJoinTableCourtUser < ActiveRecord::Migration[6.0]
  def change
    create_join_table :courts, :users do |t|
      # t.index [:court_id, :user_id]
      # t.index [:user_id, :court_id]
    end
  end
end
