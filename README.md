# LMS Dashboard (MERN Stack)

## Project Overview
This project is a Learning Management System (LMS) Dashboard built using the MERN stack.  
It allows users to manage courses and lessons, track lesson completion, and view dashboard statistics.

---

## Features

### Dashboard
- Total courses count
- Total lessons count
- Completed lessons count
- Active students (static)

### Courses
- Add new courses (title, description, duration)
- View list of courses

### Lessons
- Add lessons
- Mark lessons as completed
- View lesson status (pending / completed)

### Profile
- View user profile details
- Edit profile (frontend only)

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## API Endpoints

### Courses
- POST /courses – Add course
- GET /courses – Get all courses

### Lessons
- POST /lessons – Add lesson
- GET /lessons – Get lessons
- PUT /lessons/:id – Update lesson status

---

## Project Structure
Dashboard/
├── lms-frontend/
├── controller/
├── routes/
├── model/
├── screenshots/
├── index.js
├── package.json
└── README.md

---

## Screenshots

All required UI screenshots and API testing screenshots (Postman) are available in the `screenshots` folder.

---

## How to Run the Project

### Backend
```bash
npm install
node index.js

## frontend

cd lms-frontend
npm install
npm run dev

