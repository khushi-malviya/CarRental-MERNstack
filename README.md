# CarRental-MERNstack (Live Link - https://car-rental-eight-mauve.vercel.app/)

A full-stack car rental web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to browse, book, and manage car rentals online, and includes admin functionality for managing cars, bookings, and users.

## 🚗 Features

- User registration and authentication (JWT-based)
- Browse available cars
- Book cars for selected dates and manage bookings
- Admin dashboard for cars, bookings, and users
- Responsive design for mobile and desktop
- RESTful API backend

## 🛠️ Tech Stack

**Frontend** (located in `/client`):  
- React.js (Vite-based)
- JavaScript
- Axios (for API requests)
- ESLint & Vite for development

**Backend** (located in `/server`):  
- Node.js
- Express.js
- MongoDB (with Mongoose)

Other tools:  
- JWT for authentication
- dotenv for environment variables


## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khushi-malviya/CarRental-MERNstack.git
   cd CarRental-MERNstack
   ```

2. **Install dependencies for frontend and backend**
   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   - Add `.env` files in both `client` and `server` folders as required.

4. **Run the application**

   - Start the backend:
     ```bash
     cd server
     npm start
     ```

   - Start the frontend:
     ```bash
     cd ../client
     npm run dev
     ```

5. **Open the app:**  
   Visit [http://localhost:5173](http://localhost:5173) (or similar, as per Vite) in your browser.

## 📝 Usage

- Register and log in as a user.
- Browse available cars and make bookings.
- Admins can add/remove cars, manage users, and view all bookings.
