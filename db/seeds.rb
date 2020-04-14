# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Court.destroy_all

user1 = User.create!(first_name: "admin",  email: "admin@email.com", password: "123456")
user2 = User.create!(first_name: "admin",  email: "admin2@email.com", password: "123456")

east = Court.create!(name: "east")
west = Court.create!(name: "west")

Reservation.create!(court_id: east.id, user_id: user1.id, name: "Adam", start_time: "1:00PM", end_time:"2:00PM")

puts "#{Court.count} courts were created"
puts "#{User.count} users were created"

