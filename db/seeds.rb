# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Court.destroy_all


User.create!(first_name: "admin", user_name: "admin", email: "admin@email.com", password: "123456")
User.create!(first_name: "admin", user_name: "admin", email: "admin2@email.com", password: "123456")

east_court = Court.create!(name: "east")
west_court = Court.create!(name: "west")

puts "#{Court.count} courts were created"
puts "#{User.count} users were created"
