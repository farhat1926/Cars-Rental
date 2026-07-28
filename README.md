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

How to access it
BACKEND
-> First clone this repository 'git clone https://github.com/username/car-rental.git' 
-> Go to Inside Project : cd car-rental
-> Go to backend folder: cd server
-> create: server/.env => copy from .env.example
-> Run backend: npm run server
-> if successfull you will see : Database connected
                                Server running on port 3000 
-> backend will run: http://localhost:3000

FRONTEND
-> go to frontend: cd client
-> Install dependencies : npm install
-> client/.env => add: VITE_BASE_URL=http://localhost:5000 
                       VITE_CURRENCY=$
-> Run Frontend: npm run dev
-> frontend will run: http://localhost:5173



**5. Database Setup**

This project uses MongoDB.
Create database:
car-rental

Collections:
users
cars
bookings

**6. Schema Design Rationale**
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

**7. Authentication Flow**

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
