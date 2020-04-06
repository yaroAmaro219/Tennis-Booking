class User < ApplicationRecord
	has_secure_password

	validates :email, presence: true, uniqueness: true
	validates :email, format: {with: URI::MAilTo::EMAIL_REGEX}
	validates, :password, length: {minimum: 6}

	def frontend_data
{
	id: id,
	first_name: first_name,
	user_name: user_name,
	email: email,
	created_at: created_at,
	updated_at: updated_at

}
end
end
