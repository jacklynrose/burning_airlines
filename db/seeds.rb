# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Plane.create(name: 'Boeing 707', rows: 3, columns: 4)
Plane.create(name: 'Airbus Dreamliner', rows: 8, columns: 4)
Plane.create(name: 'Cessna Joke', rows: 12, columns: 4)

Flight.create(number: 123, origin: 'sydney', destination: 'brisbane', plane_id: 1)
Flight.create(number: 234, origin: 'melbourne', destination: 'darwin', plane_id: 2)
Flight.create(number: 345, origin: 'perth', destination: 'gold coast', plane_id: 3)