Rails.application.routes.draw do
  resources :courts do
		resources :reservations
	end

# ============= Auth ====================
	post '/auth/login', to: 'authentication#login'
	get '/auth/verify', to: 'authentication#verify'
	resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
