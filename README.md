# ✨ Task Manager Pro

A sophisticated, full-stack Task Management application designed with a focus on modern aesthetics (Glassmorphism) and seamless user experience. Built using **React (Vite)** on the frontend and **Node.js/Express** on the backend.

🚀 **[Live Demo](https://task-manager-lac-ten-72.vercel.app/)**

---

## 🌟 Features

- **Dynamic Task Management**: Add, complete, and delete tasks in real-time.
- **Glassmorphic UI**: Beautifully designed interface with smooth blur effects and modern gradients.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Micro-animations**: Enhanced UX with subtle transitions and hover effects.
- **Robust API**: RESTful backend ensuring efficient communication between client and server.

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Axios for API requests
- CSS3 (Custom Design System with Glassmorphism)

**Backend:**
- Node.js & Express
- CORS & UUID Integration
- In-memory storage (Current version)

---

## 🚦 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/mahfoozashraf23/-Task-Manager.git
cd -Task-Manager
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
*The server will start on `http://localhost:5000`*

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*The app will be accessible at `http://localhost:5173`*

---

## 🌐 Deployment

- **Frontend**: Deployed on **Vercel**.
- **Backend**: Deployed on **Render**.

### Environment Variables
To connect the frontend to the production backend, we use the following environment variable in Vercel:
`VITE_API_URL=https://task-manager-f8nu.onrender.com`

---

## 📝 Notes & Future Improvements
- **Current State**: Task storage is currently **in-memory**. Data is reset when the backend server restarts.
- **Roadmap**: 
  - Integration with **MongoDB** or **Supabase** for persistent data storage.
  - User authentication (JWT/Auth0).
  - Priority levels and due dates for tasks.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

Developed with ❤️ by [Mahfooz Ashraf](https://github.com/mahfoozashraf23)
