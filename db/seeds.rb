# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Court.destroy_all
Reservation.destroy_all

User.create!(first_name: "admin", user_name: "admin", email: "admin@email.com", password: "123456")
User.create!(first_name: "admin", user_name: "admin", email: "admin2@email.com", password: "123456")

east_court = Court.create!(name: "east")
west_court = Court.create!(name: "west")

Reservation.create!(user_id: 1, court_id: 1, name: "admin", start_time: "7:00AM", end_time: "8:00AM")

puts "#{Court.count} courts were created"
puts "#{User.count} users were created"
