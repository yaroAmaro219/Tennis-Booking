## Tennis-Booking 

## Overview

- The tennis booking app allows people to log in and book a court at a specific time and date. They can see what time's are available, and what time's have been taken. 
- MVP Goals: Create a db for all users and booking actions on courts. Have this connect with the react front end and have it work smoothly and look good.
- Post MVP Goals: Create more functionality like having admin accounts that have the ability to add and delete clinics. Have a section where coach's can post when they are available. They are also able to see different clinics and whose the instructor and whose signed up for them. 

## Link
http://tennis-booking.surge.sh/

## Wireframe
![Sign In Wireframe](https://i.imgur.com/rIDLPvml.png)
![Home Page Wireframe](https://i.imgur.com/Qr98pYgl.png)
![Tennis Clubs Wireframe](https://i.imgur.com/uc1ncILl.png)
![Club Page Wireframe](https://i.imgur.com/krmdWN7l.png)
![Court Schedule Wireframe](https://i.imgur.com/9QAmYuUl.png)
![Book Court Wireframe](https://i.imgur.com/p2LY0vVl.png)
![Profile Wireframe](https://i.imgur.com/vCx9hEJl.png)

## Entity Relationship Diagram (ERD)
![ERD](https://i.imgur.com/WnyoRQDh.png)

## API Endpoint
#### Server-side routes
```  
                                           
courts GET    /courts(.:format)                           					       courts#index
       POST   /courts(.:format)       								       courts#create
 court GET    /courts/:id(.:format)   								       courts#show
       PATCH  /courts/:id(.:format)   								       courts#update
       PUT    /courts/:id(.:format)   								       courts#update
       DELETE /courts/:id(.:format)   								       courts#destroy
court_booking_users
       GET    /courts/:court_id/booking/:booking_id/users(.:format)                                    users#index
       POST   /courts/:court_id/booking/:booking_id/users(.:format)                                    users#create court_booking_user 
       GET    /courts/:court_id/booking/:booking_id/users/:id(.:format)                                users#show
       PATCH  /courts/:court_id/booking/:booking_id/users/:id(.:format)                                users#update
       PUT    /courts/:court_id/booking/:booking_id/users/:id(.:format)                                users#update
       DELETE /courts/:court_id/booking/:booking_id/users/:id(.:format)                                users#destroy         
court_booking_index
       GET    /courts/:court_id/booking(.:format)                                                      booking#index
       POST   /courts/:court_id/booking(.:format)                                                      booking#create
                        court_booking 
       GET    /courts/:court_id/booking/:id(.:format)                                                  booking#show
       PATCH  /courts/:court_id/booking/:id(.:format)                                                  booking#update
       PUT    /courts/:court_id/booking/:id(.:format)                                                  booking#update
       DELETE /courts/:court_id/booking/:id(.:format)                                                  booking#destroy
       GET    /courts(.:format)                                                                        courts#index
       POST   /courts(.:format)                                                                        courts#create
       GET    /courts/:id(.:format)                                                                    courts#show
       PATCH  /courts/:id(.:format)                                                                    courts#update
       PUT    /courts/:id(.:format)                                                                    courts#update
       DELETE /courts/:id(.:format)                                                                    courts#destroy
 users GET    /users(.:format)                                                                         users#index
       POST   /users(.:format)                                                                         users#create
  user GET    /users/:id(.:format)                                                                     users#show
       PATCH  /users/:id(.:format)                                                                     users#update
       PUT    /users/:id(.:format)                                                                     users#update
       DELETE /users/:id(.:format)                                                                     users#destroy

```																			
## Technologies used
	-bcrypt
	-jwt
	-axios
	-react-router

## Major challenges:
	Designing the app as simple as possible and in a fashion that allows for easy scalability

## Timeframes:

```
  | Component | Priority | Estimated Time | Actual Time |
  | --- | :---: |  :---: | :---: |
  | Adding Form | H | 3hrs|  |
  | Working with API | H | 3hrs|  |
  | Creating Join Table | H | 3hrs | |
  | Designing Website (CSS) | H | 10hrs | |
  | Connecting Frontend and Backend | H | 3hrs | |
  | Routes | H | 3hrs | |
  | React | H | 10hrs | |
  | Total | H | 35hrs|  |
```  
## Github: https://github.com/yaroAmaro219/Tennis-Booking/tree/master

## Component heirarchy
	
> The combination and connections between the different files and directories that interact together to make this app possible. 

#### Repo Structure

```
tennis-booking

|___ app
	|___ models
		|___ application_record.rb
		|___ user.rb
		|___ court.rb
		|___ court_slot.rb

	|___ views
		|___ layouts
			|___ mailer.html.erb
			|___ mailer.text.erb

	|___ controllers
		|___ application_controller.rb
		|___ authentication_controller.rb
		|___ users_controller.rb
		|___ courts_controller.rb
		|___ court_slots_controller.rb

	|___ channels
		|___ application_capable
			|___ channel.rb
			|___ connection.rb
	|___ jobs
		|___ application_job.rb
	|___ mailers
		|___ application_mailer.rb

|___ client
	|___ src
		|___ components
			|___ Header.jsx
			|___ LoginForm.jsx
			|___ RegisterForm.jsx
			|___ Footer.jsx
		|___ services
			|___ api-helper.js
		|___ App.css
		|___ App.js
		|___ index.css
		|___ index.js

|___ db
	|___ seeds.rb
	|___ migrate
		|___ create_users.rb
		|___ create_join_table_courts_users.rb
		|___ create_courts.rb

|___ config
	|___ application.rb      
	|___ cable.yml          
	|___ database.yml       
	|___ environments
		|___ development.rb
		|___ production.rb
		|___ test.rb

	|___ locales
		|___ en.yml
	|___ puma.rb            
	|___ schedule.rb        
	|___ storage.yml
	|___ boot.rb            
	|___ credentials.yml.enc 
	|___ environment.rb     
	|___ initializers 
		|___ application_controller_renderer.rb 
		|___ cors.rb                           
		|___ inflections.rb                    
		|___ wrap_parameters.rb
		|___ backtrace_silencers.rb            
		|___ filter_parameter_logging.rb       
		|___ mime_types.rb
	|___ master.key 
	|___ routes.rb 
	|___ spring.rb
			

