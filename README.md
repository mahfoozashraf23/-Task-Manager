# Task Manager App

A full-stack Task Manager application built with React, Node.js, and Express.

## Project Structure
- `frontend/`: React application (Vite)
- `backend/`: Node.js/Express API

## Setup Instructions

### Backend
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   The API will run on `http://localhost:5000`.

### Frontend
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`.

## Assumptions & Notes
- Task storage is in-memory on the backend. Restarting the server will reset the tasks.
- The frontend assumes the backend is accessible at `http://localhost:5000`.
- Basic validation is implemented on both frontend and backend.
- Premium aesthetics were implemented using glassmorphism and modern CSS animations.
