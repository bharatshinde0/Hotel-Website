# Luxury Hotel MERN Website

A complete MERN stack hotel website for **Luxury Hotel** with Home, Services, Gallery, and Contact pages.

## Features

- React frontend with responsive navigation and polished hotel styling
- Express backend API
- MongoDB models for booking and contact submissions
- Graceful in-memory fallback when MongoDB is not connected
- Booking request form and contact form connected to the backend

## Run Locally

1. Install dependencies:

   ```bash
   npm run install-all
   ```

2. Create backend environment file:

   ```bash
   copy backend\.env.example backend\.env
   ```

3. Add your MongoDB connection string in `backend/.env`.

4. Start the app:

   ```bash
   npm run dev
   ```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

If MongoDB is not configured, the forms still work during the running session using in-memory storage.
