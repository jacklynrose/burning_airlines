class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.datetime :date
      t.string :origin
      t.string :destination
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
