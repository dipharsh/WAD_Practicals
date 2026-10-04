# Web Application Development Practicals

**Name:** Harsh Pansuriya  
**Degree:** B.E. Computer Engineering  
**Semester:** 5th Semester  

A complete collection of 10 hands-on full-stack web development practicals implemented using **HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB**.

---

## 🎯 Project Overview

This repository contains all college practicals combined into a single, cohesive, modern project structure. Each practical is separated into its own directory but can be accessed from the main responsive dashboard.

### 📋 List of Practicals

1. **Practical 1:** Responsive Portfolio Webpage (HTML5, CSS3, Flexbox/Grid)
2. **Practical 2:** Forms, Tables & Media Elements (HTML5 Validation, Responsive Tables, Video/Audio)
3. **Practical 3:** JavaScript DOM Manipulation (Student Marks Calculator, Dynamic DOM)
4. **Practical 4:** Fetch API & Async Communication (JSON Fetching, Loading States, Error Handling)
5. **Practical 5:** Node.js & Express REST API (CRUD Endpoints, In-Browser API Tester)
6. **Practical 6:** Database Integration (MongoDB/Mongoose Connection, Mock Fallback Mode)
7. **Practical 7:** CRUD Operations via API (Full Frontend Student Management with Fetch API)
8. **Practical 8:** React.js Frontend Architecture (Components, useState, useEffect, useMemo, Context)
9. **Practical 9:** Frontend + Backend Integration (React ↔ Express ↔ MongoDB, CORS, Real HTTP calls)
10. **Practical 10:** Library Management System [MINI PROJECT] (Complete Full-Stack Application)

---

## 📂 Project Structure

```text
web-development-practicals/
│
├── index.html                                 # Main Dashboard
├── README.md                                  # Documentation
│
├── practical-01-portfolio/                    # Practical 1
│   └── index.html
├── practical-02-forms-tables-media/           # Practical 2
│   └── index.html
├── practical-03-dom/                          # Practical 3
│   └── index.html
├── practical-04-fetch-api/                    # Practical 4
│   └── index.html
│
├── practical-05-node-express/                 # Practical 5 (Backend)
│   ├── index.html                             # API Tester UI
│   ├── server.js                              # Express Server
│   └── package.json
│
├── practical-06-database/                     # Practical 6 (DB)
│   └── index.html                             # DB Demo UI
│
├── practical-07-crud/                         # Practical 7 (Frontend)
│   └── index.html
│
├── practical-08-react/                        # Practical 8 (Frontend)
│   └── index.html                             # React App (CDN)
│
├── practical-09-integration/                  # Practical 9 (Integration)
│   └── index.html
│
└── practical-10-library-management/           # Practical 10 (Mini Project)
    ├── frontend/
    │   └── index.html                         # React UI
    └── backend/
        ├── server.js                          # Express API
        ├── package.json
        └── .env.example
```

---

## 🚀 How to Run the Project

### Option 1: Frontend Only (Static Mode + Demonstrations)
The entire project has been engineered to be **demonstrable without a backend** by using Mock/Demo fallbacks.

1. Clone or download this repository.
2. Open `index.html` (the file in the root folder) in any modern web browser.
3. Click on any practical card to see it in action.
- *Practicals 5, 6, 9, and 10 have built-in mock modes to simulate the backend seamlessly.*

### Option 2: Running Backend APIs (For Practicals 5 & 10)
To run the actual Node.js servers:

**For Practical 5:**
```bash
cd practical-05-node-express
npm install
node server.js
```
The API will run on `http://localhost:3000`.

**For Practical 10 (Mini Project Backend):**
```bash
cd practical-10-library-management/backend
npm install
copy .env.example .env
node server.js
```
The Library API will run on `http://localhost:3002`.

---

## ⚙️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), React.js (via CDN/Standalone for simplicity)
- **Backend:** Node.js, Express.js, CORS
- **Database:** MongoDB, Mongoose (simulated using mock mode in UI)
- **APIs:** Fetch API, RESTful Architecture

---

## ✨ Features Highlight

- **Responsive Design:** Every page works perfectly on Desktop, Tablet, and Mobile devices.
- **Modern UI:** Built without external CSS frameworks to strictly learn core CSS3 variables, Flexbox, and Grid.
- **No Page Reloads:** All React and JS practicals use dynamic DOM updates.
- **Error Handling:** Complete implementations of `try/catch` and UI error states across the board.
- **Fallback Mechanisms:** Even if public APIs fail (Practical 4), a fallback local dataset ensures the practical works.

---

*Designed and developed for Gujarat Technological University (GTU) Web Application Development course.*
