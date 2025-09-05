# 💬 Chat Realtime App

A **real-time chat application** built with the **MERN stack** and modern tooling. It supports **user authentication**, **real-time messaging**, and a **responsive UI** for smooth communication.

---

## 🚀 Tech Stack

### 🔹 Backend (Node.js + Express + MongoDB + Socket.IO)
- **Express 4** – routing & middleware  
- **MongoDB + Mongoose** – database management  
- **Socket.IO** – real-time communication  
- **JWT** – authentication & authorization  
- **bcryptjs** – password hashing  
- **Cloudinary** – media storage  
- **cookie-parser & CORS** – session & security  

### 🔹 Frontend (React + Vite + TailwindCSS + DaisyUI)
- **React 19** – UI library  
- **React Router v7** – routing  
- **Zustand** – state management  
- **Axios** – API calls  
- **TailwindCSS** – utility-first CSS  
- **DaisyUI** – Tailwind component library (pre-built components & themes)  
- **Lucide-react** – icons  
- **React Hot Toast** – notifications  
- **Socket.IO Client** – real-time updates  

---

## ✨ Features
- ✅ User Authentication (JWT + bcrypt)  
- ✅ Real-time chat with Socket.IO  
- ✅ Secure storage of messages/media (Cloudinary + MongoDB)  
- ✅ Responsive UI built with TailwindCSS + DaisyUI  
- ✅ Toast notifications for interactions  

---

## 📂 Project Structure

```bash
chat-realtime-app/
│── backend/       # Express.js + MongoDB + Socket.IO
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   ├── models/
│   │   ├── controllers/
│   └── package.json
│
│── client/        # React + Vite + TailwindCSS + DaisyUI
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   └── package.json
│
└── README.md


⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/chat-app.git
cd chat-app

2️⃣ Setup Backend
cd backend
npm install
npm run dev   # start with nodemon
npm start     # start in production

3️⃣ Setup Frontend
cd client
npm install
npm run dev   # start development server


Note: DaisyUI is a Tailwind plugin — it is already included in devDependencies.
Ensure your tailwind.config.js includes DaisyUI in the plugins array:

plugins: [require('daisyui')]

🔑 Environment Variables

Create a .env file in backend/ with:

PORT=8080
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

🚀 Deployment

Frontend: Render (or any static host)

Backend: Render (or any Node hosting with MongoDB access)

📜 License

This project is licensed under the ISC License.

