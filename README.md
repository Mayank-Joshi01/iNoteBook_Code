# iNoteBook

> A full-stack web application built with the MERN stack.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Stack](https://img.shields.io/badge/stack-MERN-green.svg)

## 📖 About The Project

This a Basic note taking Web applicatoin , with basic authentication , build as a beginner learning project of MERN stack , 

### ✨ Features
* **Full Stack Architecture:** Separated Client and Backend structure.
* **Modern Frontend:** Built with React .
* **Styling:** Responsive design using TailwindCSS.
* **Robust Backend:** Node.js and Express REST API.
* **Database:** MongoDB Atlas for data persistence.

---

## 🛠 Tech Stack

**Client:**
* React
* TailwindCSS
* React Router

**Backend:**
* Node.js
* Express.js
* MongoDB & Mongoose

---

## 📂 Project Structure

```text
├── client/          # Frontend application (React + Vite)
│   ├── src/         # Components, Pages, and Logic
│   └── public/      # Static assets
│
├── server/          # Backend application (Node + Express)
│   ├── models/      # Mongoose Schemas (User, Notes)
│   ├── routes/      # API Endpoints (Auth, Notes)
│   ├── middleware/  # JWT Fetch User Middleware
│   ├── db.js        # Database Connection Logic
│   └── index.js     # Server Entry Point
│
└── README.md        # Project Documentation

```
--- 

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequsite 

* [Node.js](https://nodejs.org/en/download) installed.

* [MongoDB](https://www.mongodb.com/) (Local or Atlas connection string).

* [Git](https://git-scm.com/install/windows) installed.

### Installation

* Clone the repository
```
git clone https://github.com/Mayank-Joshi01/iNoteBook.git
cd iNoteBook
```

* Install Backend Dependencies
```
cd server
npm install
```

* Install Client Dependencies
```
cd ../client
npm install
```

### ⚙️ Configuration
You must set up environment variables for the app to run.

* Backend (.env) Create a file named .env inside the server folder:
```
JWT_SECRET=your_secret_string_here
MONGO_URI=your_mongodb_connection_string_here
```

* Frontend (.env) Create a file named .env inside the client folder:
```
REACT_APP_Backend_Base_URLL=http://localhost:8001
```

--- 

## 🏃‍♂️ Usage

### Development Mode

To run the app locally for development:

* Terminal 1 (Backend):
```
cd server
npm start
```

* Terminal 2 (Frontend):
```
cd client
npm run dev
```

Open http://localhost:5173 in your browser.

### 🌍 Deployment

* Frontend (GitHub Pages) :

The client is deployed to GitHub Pages using the gh-pages branch.

1. Navigate to the client folder:
```
cd client
```

2. Run the deploy script:
```
npm run deploy
```

* Backend 

The Backend can be deployed into [Render](https://render.com/) , [Railway](https://railway.com/) thses are some of the free platform to host a server .

## 🤝 Contributing

1. Fork the repository.

2. Create a new branch (git checkout -b feature-branch).

3. Commit your changes (git commit -m 'Add new feature').

4. Push to the branch (git push origin feature-branch).

5. Open a Pull Request.