# StudentHub - Student Record Manager

A MERN stack web application to add, view, update, delete and search student records.

## College Details

**Laxmi Charitable Trust's**

**Sheth L.U.J College of Arts & Sir M.V. College of Science and Commerce**

Department of Information Technology  
B.Sc. Information Technology — Semester V

## Student Details

| Particulars | Details |
|---|---|
| Name | Siddhesh Kamble |
| Roll No. | T009 |
| Class / Batch | TYIT |
| Subject | Full Stack Development using MERN |
| Academic Year | 2026 |
| Project Title | StudentHub - Student Record Manager |

## Description

StudentHub stores student details (name, roll number, course, email, phone, marks) in MongoDB.

The React frontend displays records in a table with search functionality, and the Express/Mongoose backend provides REST APIs with validation and duplicate-roll-number protection.

## Technologies Used

- React (Vite) with `useState()` and `useEffect()`
- Node.js and Express.js
- MongoDB and Mongoose
- Axios
- Visual Studio Code
- Git and GitHub

## Features

- Add, view, update and delete student records (full CRUD)
- Search by name, roll number, course, email or phone
- Frontend and backend validation (required fields, no spaces-only text, email format, 10-digit phone, marks 0-100)
- Duplicate roll numbers rejected with a clear message (HTTP 409)
- Confirmation dialog before deleting
- Success and error messages for every action

## Project Structure

\```text
studenthub/
  backend/    Express API, Mongoose model, routes, error handler
  frontend/   React app (Vite)
\```

## How to Run

### Prerequisites

Node.js 18+ and MongoDB running locally (or a MongoDB Atlas connection string).

### 1. Backend

\```bash
cd backend
npm install
cp .env.example .env
npm run seed              # Optional: load sample students
npm run dev              # Starts on http://localhost:5000
\```

**For Windows:**
\```bash
copy .env.example .env
\```

### 2. Frontend

\```bash
cd frontend
npm install
npm run dev              # Opens on http://localhost:5173
\```

The Vite development server proxies `/api` to `http://localhost:5000`, so no additional configuration is required.

## API Endpoints

| Method | URL | Purpose |
|--------|-----|---------|
| GET | `/api/students?search=term` | List / search students |
| GET | `/api/students/:id` | Get one student |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

### Sample POST Body

\```json
{
  "name": "Siddhesh Kamble",
  "rollNo": "T009",
  "course": "B.Sc.IT",
  "email": "siddhesh@example.com",
  "phone": "9545040788",
  "marks": 82
}
\```

## Validation Rules

| Field | Rule |
|-------|------|
| Name | Required, 2-60 characters, letters/spaces/. ' - only; spaces-only rejected |
| Roll Number | Required, unique, 3-15 characters (letters, digits, hyphen), stored in uppercase |
| Course | Required, one of B.Sc.IT, B.Sc.CS, B.Com, BMS, BAF, BA |
| Email | Required, valid format, stored in lowercase |
| Phone | Required, 10 digits starting with 6-9 |
| Marks | Required, number between 0 and 100 |

## Testing Checklist

1. Add a valid student → appears in table and MongoDB Compass.
2. Edit a student → changes are saved.
3. Delete a student → confirmation shown and record removed.
4. Search "T00" or "B.Sc.IT" → table filters correctly.
5. Submit empty form → field error messages appear.
6. Enter marks 150 or phone 12345 → validation errors appear.
7. Add an existing roll number T009 → duplicate error appears.
8. Test GET, POST, PUT, DELETE using Postman.
9. Stop the backend → frontend displays an error message.

## GitHub Repository

Repository: `studenthub-student-record-manager`

## Author

**Siddhesh Kamble**  
Roll No.: T009  
Class: TYIT  
B.Sc. Information Technology — Semester V

**Subject:** Full Stack Development using MERN

**Academic Year:** 2026

## College

Laxmi Charitable Trust's  
Sheth L.U.J College of Arts & Sir M.V. College of Science and Commerce  
Department of Information Technology

---
