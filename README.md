# 💬 iMessages - Real-Time Chat Application

A modern **full-stack real-time messaging application** inspired by Apple's iMessage, built with the **MERN Stack**, **Socket.IO**, **Clerk Authentication**, and **Zustand**. The application enables users to communicate instantly through one-to-one conversations while providing a beautiful, customizable interface with light/dark themes, accent colors, wallpapers, and responsive design.

## 🌐 Live Demo

🚀 **Application:** https://imessages-frontend.onrender.com/

> **Note:** This project is deployed on Render's free tier. The backend may take **30–60 seconds** to wake up after being idle. This is expected behavior for free Render services.

---

# 📸 Preview

> Add screenshots or GIFs here.

```
/screenshots
    ├── login.png
    ├── chat.png
    ├── themes.png
    └── mobile.png
```

---

# ✨ Features

## 🔐 Authentication

* Secure authentication using **Clerk**
* Protected routes
* Automatic session management
* JWT authentication between frontend and backend
* Persistent login sessions

---

## 💬 Real-Time Messaging

* Instant one-to-one messaging
* Socket.IO powered real-time communication
* Live message delivery
* Real-time online/offline status
* Automatic conversation updates
* Readable timestamps

---

## 🖼️ Media Sharing

* Send images inside conversations
* Image preview support
* Secure file upload handling

---

## 🎨 Beautiful UI

* Light Theme
* Dark Theme
* Multiple Accent Themes
* Dynamic Wallpapers
* Fully Responsive Design
* Modern iMessage-inspired interface

Users can personalize the application by changing:

* Theme
* Accent Color
* Wallpaper

These preferences persist across browser sessions.

---

## 👥 User Experience

* Responsive sidebar
* Search users
* Conversation list
* Active conversation highlighting
* Sound toggle
* Mobile friendly layout
* Smooth navigation

---

## ⚡ State Management

Powered by **Zustand**

Used for:

* Authentication state
* Chat state
* Selected conversation
* Online users
* Messages
* UI preferences
* Persistent settings

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Zustand
* Tailwind CSS
* HeroUI
* Axios
* Socket.IO Client
* Clerk Authentication
* Lucide React Icons
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Clerk Express SDK
* Multer
* CORS

---

## Database

MongoDB

Collections include:

* Users
* Messages

---

# ⚙️ Application Architecture

```
                React Frontend
                       │
                Axios + JWT Token
                       │
             Express REST API
                       │
        Clerk Authentication Middleware
                       │
                   MongoDB
                       │
                 Socket.IO Server
                       │
             Real-Time Communication
```

---

# 🚀 Core Functionalities

### Authentication

* User Login
* User Signup
* Session Validation
* Protected APIs

---

### Messaging

* Send Messages
* Receive Messages
* Real-time Updates
* Image Messages
* Conversation History

---

### Online Presence

* Live Online Users
* Offline Detection
* Instant Status Updates

---

### Personalization

* Wallpaper Picker
* Theme Toggle
* Accent Theme Picker
* Persistent Preferences

---

# 📂 Folder Structure

```
Frontend
│
├── components
├── pages
├── hooks
├── context
├── store
├── lib
├── assets
└── data

Backend
│
├── controllers
├── routes
├── middleware
├── models
├── lib
├── webhooks
└── uploads
```

---

# 🔄 Real-Time Flow

```
User Sends Message
        │
        ▼
Express Controller
        │
        ▼
Save Message in MongoDB
        │
        ▼
Find Receiver Socket
        │
        ▼
Socket.IO Emit
        │
        ▼
Receiver Gets Message Instantly
        │
        ▼
Frontend Updates Zustand Store
        │
        ▼
UI Re-renders Automatically
```

---

# 🔒 Security

* Clerk Authentication
* JWT Authorization
* Protected Backend Routes
* Secure API Requests
* CORS Configuration
* Environment Variables

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/KeshavKaushik07/imessages.git
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Frontend

```env
VITE_API_URL=
VITE_CLERK_PUBLISHABLE_KEY=
```

---

## Backend

```env
PORT=
MONGODB_URI=
CLERK_SECRET_KEY=
FRONTEND_URL=
```

---

# 🎯 What I Learned

While building this project, I gained hands-on experience with:

* Building scalable React applications
* Real-time communication using Socket.IO
* Clerk authentication
* Zustand state management
* JWT-based authorization
* REST API development
* MongoDB data modeling
* Responsive UI design
* Theme customization using CSS variables
* Cross-origin frontend/backend deployment
* Deploying full-stack applications on Render

---

# 🚀 Future Improvements

* Group Chats
* Message Reactions
* Typing Indicators
* Voice Messages
* Video Sharing
* Read Receipts
* Push Notifications
* Message Search
* User Profiles
* Friend Requests
* Emoji Picker

---

# 👨‍💻 Author

**Keshav Kaushik**

Full Stack MERN Developer

GitHub: https://github.com/KeshavKaushik07

---

## ⭐ If you found this project useful, consider giving it a star!
