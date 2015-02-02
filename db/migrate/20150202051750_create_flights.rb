class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :plane_id
      t.datetime :date
      t.string :origin
      t.string :destination

      t.timestamps null: false
    end
  end
end
