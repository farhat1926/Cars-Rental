# Car Rental Application

A full-stack car rental web application built with React, Node.js, Express, MongoDB, and ImageKit.

# 1. Project Overview

Explain briefly:
- User can browse available cars
- Search cars by location and date
- Book cars
- Manage bookings
- Owner can add, edit, delete, and manage cars
- Authentication system with role user and owner
- 
# 2. Tech Stack
Frontend:
- React + Vite
- Tailwind CSS
- Axios
- React Router

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- 
Storage:
- ImageKit for car images

# 3. Project Structure
CarRental/
│
├── client/ # React Frontend
│ ├── src/
│ └── package.json
│
├── server/ # Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── package.json
│
└── README.md

# 4. Requirements

Before running this project, install:

- Node.js (v18 or higher)
- MongoDB Database
- Git
- 
Check installation:
bash
node -v
npm -v

# 5. Installation & Running Locally
Step 1 - Clone Repository

Clone this repository:

git clone https://github.com/username/car-rental.git

Go to the project directory:

cd car-rental

The project structure:

CarRental/
├── client/
└── server/

Backend Setup
Step 2 - Go to Backend Folder
cd server

Install backend dependencies:

npm install

Step 3 - Setup Environment Variables

Create a new file:

server/.env

Copy the configuration from:

server/.env.example

Example:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

Environment Variable Explanation:
Variable	Description
PORT	Backend server port
MONGODB_URI	MongoDB database connection
JWT_SECRET	Secret key for JWT authentication
IMAGEKIT_PUBLIC_KEY	ImageKit public key
IMAGEKIT_PRIVATE_KEY	ImageKit private key
IMAGEKIT_URL_ENDPOINT	ImageKit image URL endpoint

Step 4 - Run Backend Server

Start backend:

npm run server

If successful, you will see:

Database connected
Server running on port 3000

Backend will run at:

http://localhost:3000

Frontend Setup
Step 5 - Go to Frontend Folder

Open a new terminal:

cd client

Install frontend dependencies:

npm install

Step 6 - Setup Frontend Environment Variables

Create:

client/.env

Add:

VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
Environment Variable Explanation:
Variable	Description
VITE_BASE_URL	Backend API URL
VITE_CURRENCY	Currency symbol used in application

Step 7 - Run Frontend

Start frontend:

npm run dev

Frontend will run at:

http://localhost:5173

Running Application

After both servers are running:

Frontend:

http://localhost:5173

Backend API:

http://localhost:3000

Application flow:

User Browser
      |
      |
React Frontend
      |
      |
Axios API Request
      |
      |
Express Backend
      |
      |
MongoDB Database

# 5. Database Setup

This project uses MongoDB.
Create database:
car-rental

Collections:
users
cars
bookings

# 6. Schema Design Rationale
**User Schema**
User
 |
 |-- name
 |-- email
 |-- password
 |-- role
 |
 └── Owner/User
**Car Schema**
Car

_id
brand
model
year
pricePerDay
category
transmission
fuel_type
location
image
owner
isAvailable

**Relationship:**
User (Owner)
      |
      |
      | owns
      |
     Cars
**Booking Schema**
Booking

_id
car
user
owner
pickupDate
returnDate
status
price

**Relationship:**
User
 |
 | creates
 |
Booking
 |
 | books
 |
Car

# 7. Authentication Flow

**User Registration:**
User
 |
Register
 |
Password hashed
 |
Save MongoDB
 |
Login
 |
JWT Token generated
 |
Stored in localStorage

**Request flow:**
Frontend
   |
   |
JWT Token
   |
   |
Backend Middleware
   |
   |
Validate User
   |
   |
Controller Access


# 8. Architectural Decisions

## Frontend Architecture

The frontend is built using React with a component-based architecture.

Reusable components are separated into independent components such as:

- Navbar
- Footer
- CarCard
- Title
- Loader

This approach makes the application easier to maintain, reuse, and scale.


## Backend Architecture

The backend follows an MVC (Model-View-Controller) architecture.

Structure:

Routes
   |
   |
Controllers
   |
   |
Models
   |
   |
Database


Reasons:

- Routes handle API endpoints
- Controllers handle business logic
- Models manage database schemas

This separation makes the backend easier to debug and maintain.


## Authentication Decision

JWT (JSON Web Token) authentication is used because:

- It is stateless
- Suitable for REST API architecture
- Allows secure user authentication between frontend and backend


## Database Decision

MongoDB is selected because:

- Car rental data has flexible attributes
- Schema can evolve easily
- MongoDB ObjectId references allow relationships between users, cars, and bookings



**9. Application Flow**
Customer Flow
Open Website
      ↓
Register/Login
      ↓
Search Car
      ↓
Select Location + Date
      ↓
View Available Cars
      ↓
Booking
      ↓
My Booking

**Owner Flow**
Register
      ↓
Change Role To Owner
      ↓
Add Car
      ↓
Manage Car
      ↓
Receive Booking
      ↓
Confirm / Cancel Booking
