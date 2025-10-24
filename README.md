# Golow Alchemy
### 1. Initialize Project 
 - [x] Initialize npm project `npm init -y`
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add dev script
 - [x] Config debugger
 - [x] Add resources

### 2. Expres
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Setup static middleware
 - [x] Add body parser
 - [x] Add home controller
 - [x] Add route file
 - [x] Add error controller

### 3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config hanlebars engine
 - [x] Use handlebars engine
 - [x] Config handlebars file extension
 - [x] Set views folder
 - [x] Add home view
 - [x] Render home view without layout `res.render('home', {layout: false});`
 - [x] Fix asset paths
 - [x] Add layout
 - [x] Add partials dir
 - [x] Config handlebars to work with mongoose documents `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Connect to db
 - [x] Add error handling on connect
 - [x] Add simple user model

### 5. Register
 - [x] Fix navigation links
 - [x] Add user controller
 - [x] Add user controller to routes
 - [x] Create register view
 - [x] Render register view
 - [x] Modify register form
 - [x] Create post route for register
 - [x] Create user service
 - [x] Redirect after successfull register
 - [x] Instal bcrypt `npm i bcrypt`
 - [x] Hash passwords before safe
 - [x] BONUS: Check if user exists

### 6. Login
 - [x] Fix login navigation link
 - [x] Add login view
 - [x] Add get login action
 - [x] Fix login form
 - [x] Add post login acion
 - [x] Add login method in userService
 - [x] Validate if user exists
 - [x] Validate password
 - [x] Install jsonwebtoke `npm i jsonwebtoken`
 - [x] Generate token
 - [x] Call userService from userController
 - [x] Send token as cookie
 - [x] Redirect to homepage
 - [x] BONUS: Extract jwt secret to constant or env 
 - [x] Auto login on register

### 7. Logout
 - [x] Add logout navigation link
 - [x] Add logout action

### 8. Authentication
 - [x] Install and use cookie-parser `npm i cookie-parser`
 - [x] Create auth middleware
    - [x] Allow if guest (no token)
    - [x] Verify token (clear session if invalid)
    - [x] Attach decoded token to req.user (if token is valid)
 - [x] Use auth middleware

### 9. Authorization
 - [x] Create isAuth middleware
 - [x] Create isGuest middleware
 - [x] Add route guards
 - [x] Add not found page

### 10. Dynamic content
 - [x] Add user data to handlebars context
 - [x] Dynamic navigation
 - [x] Dynamic titles
 - [x] BONUS: Set page title from view
  
### 11. Error handling and Validation
 - [x] Add error message in notification
 - [x] Notification conditional rendering
 - [x] Create getErrorMessage util function
 - [x] Add error handling for register
 - [x] Add register form data persistance
 - [x] Check repeatPassword in service
 - [x] BONUS: Check repeatPassword in model
 - [x] Error handling and data persistance on login 

### 12. Animal
 - [x] Add Animal Model
 - [x] Create Animal
    - [x] Add Create Animal View
    - [x] Add Animal controller
    - [x] Add Animal service
 - [x] - Validation and Error Handling

 ### 13. Dashboard
- [x] Add Dashboard View
- [x] Add Dynamic Data to Dashboard View

 ### 14. Home
- [x] Add a method that returns the last three added
- [x] Add Dynamic Home Data

 ### 15. Details Page
- [x] Add Information About The Selected Animal
- [] Adding Functionality For Button Visibility

 ### 16. Edit Page
 - [x] Edit Animal
 - [x] Add Correct Information To Edit Form
 - [x] Create isAnimalOwner middleware
 - [x] Delete Animal

  ### 17. Donation Functionality
 - [x] Add Donation Functionality

   ### 18. Search
 - [x] Add Search View
 - [x] Create Search Functionality

 ### Create Product Page
 - [x] Fix create products navigation link
 - [x] Add product controller
 - [x] Add controller to routes
 - [x] Add create action with render
 - [x] Add products folder in views
 - [x] Add create product view
 - [x] Add product model
 - [x] Modify create product form
 - [x] Create product post action
 - [x] Create product service with create method
 - [x] Add owner on product creation
 - [x] Add error handling

 ### Product Catalog Page
 - [x] Fix navigation link
 - [x] Add catalog view
 - [x] Add get catalog action with static blogs
 - [x] Get all product service
 - [x] Show dynamic products 

 ### Home page prducts
 - [x] Show dynamic products on home

### Product details
 - [x] Fix details link in products page
 - [x] Fix details link in home page
 - [x] Show static details page
 - [x] Add getOne method in product service
 - [x] Show dynamic details page
 - [x] Hide buttons if not logged
 - [x] Show edit and delete button if author
 - [x] Show recommend and already recommend buttons if logged
 - [x] Implement recommend functionallity
   - [x] Add recommends in product relation
   - [x] Add recommend action
   - [x] Add recommend service method
   - [x] Fix recommend link
 - [x] Show dynamic recommend
 - [x] Show recommend button or already recommended buttons conditionally

 ### Edit blog
 - [x] Fix navigation link in details
 - [x] Add get edit action
 - [x] Show empty edit page
 - [x] Populate edit form with blog data
 - [x] Add post edit action
 - [x] Add edit method in blog service
 - [x] Add error handling