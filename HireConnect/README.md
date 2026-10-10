<p align="center">
  <img src="https://github.com/suryanshsingh07/Job-Portal/blob/main/frontend/myjob/public/logo.png?raw=true" width="100"/>
</p>

# My Job: The Ultimate Talent Acquisition Ecosystem

## 🌟 Overview

**HireConnect** is a high-performance MERN stack application designed to streamline the modern recruitment lifecycle. It offers a dual-persona experience — dedicated dashboards for **Employers** and **Job Seekers** — featuring real-time tracking, secure authentication and a premium UI built with React 19 and Tailwind 4.0.

### 🚩 Why HireConnect?
Traditional recruitment tools are often clunky and fragmented. My Job solves this by providing a unified, responsive ecosystem where talent meets opportunity with zero friction.

---

## 💎 Key Benefits

### 👔 For Employers
*   **Built-in ATS:** A full Applicant Tracking System to manage candidate pipelines efficiently
*   **Brand Presence:** Customizable company profiles to attract top-tier talent
*   **Hiring Insights:** Real-time analytics on job engagement and application volume
*   **Efficient Filtering:** Quickly identify the best candidates through job-specific applicant views

### 🧑‍💻 For Job Seekers
*   **Digital Resume:** A professional profile showcasing skills, bio and experience
*   **Live Status Tracking:** Real-time updates on your applications (Pending, Shortlisted etc.)
*   **One-Click Apply:** Streamlined flow for applying to multiple roles instantly
*   **Bookmarks:** Save intriguing jobs to apply when you're ready

---

## ✨ Features Deep Dive

### 🏠 Public Landing Page
- **Hero Experience:** Dynamic CTAs for both employers and job seekers
- **Platform Stats:** Real-time counters for active users, jobs and companies
- **Responsive Navigation:** Glassmorphic navbar with mobile-optimized menus

### 📊 Employer Suite
- **Analytics Overview:** Summary cards for active listings and total applicants
- **Job Management:** Full CRUD operations (Create, Read, Update, Delete) for job posts
- **Candidate Pipeline:** View detailed seeker profiles and download resumes directly

### 🔍 Job Seeker Experience
- **Smart Job Feed:** Clean, card-based interface with salary ranges and locations
- **Profile Management:** Centralized hub for updating personal and professional details
- **Application History:** A dedicated list of all past applications with status indicators

---

## 🎯 MVP & Roadmap

### Current MVP Scope (v1.0)
- JWT-based Authentication (Role-based)
- Full Job Posting Lifecycle
- Single-click Application & Resume Uploads
- Basic Analytics Dashboard
- Mobile-responsive UI

### Future Roadmap
- **AI Matching:** Automated candidate ranking based on skill sets
- **Real-time Messaging:** Integrated chat for interviews
- **Dark Mode:** System-wide dark theme support
- **Multi-language Support:** Localization for global reach

---

## 🛠 Tech Stack

### Frontend (Client)
- **Framework:** React 19 (Latest hooks and performance)
- **Build Tool:** Vite 6.0 (Ultra-fast HMR).
- **Styling:** Tailwind CSS 4.0 (Custom design system)
- **Animations:** Framer Motion (Smooth UI transitions)
- **Icons:** Lucide React
- **State/Routing:** React Context & React Router 7

### Backend (Server)
- **Runtime:** Node.js & Express
- **Database:** MongoDB (Mongoose ODM)
- **Security:** Bcrypt (Hashing) & JWT (Auth)
- **File Handling:** Multer (Resume/Avatar storage)
- **Validation:** Clean, status-code driven error handling

---

## 📂 Architecture & Structure

```text
Job-Portal/
├── backend/                # API Engine
│   ├── config/             # DB & Env setup
│   ├── controllers/        # Business logic
│   ├── middlewares/        # Auth & File guards
│   ├── models/             # DB Schemas
│   ├── routes/             # API Endpoints
│   └── server.js           # Entry point
├── frontend/myjob/         # Client Application
│   ├── src/
│   │   ├── components/     # Reusable UI Atoms
│   │   ├── context/        # Auth State
│   │   ├── pages/          # View-level features
│   │   └── utils/          # API Interceptors
│   └── package.json        # Dependencies
└── README.md               # Main Documentation
```

---

## 🔌 API Reference

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Create new user/employer |
| `POST` | `/api/auth/login` | Public | Authentication & JWT issue |
| `GET` | `/api/jobs` | Public | Fetch all active listings |
| `POST` | `/api/jobs` | Employer | Publish new job opportunity |
| `POST` | `/api/applications/:id` | Seeker | Apply for a specific job |
| `GET` | `/api/analytics/overview`| Both | Fetch role-specific stats |

---