# Project Assist - Backend

The backend REST API for **Project Assist**. This server handles user authentication, data persistence, live code execution, and integrates with Google's GenAI for intelligent code tutoring.

## Link to Backend: https://github.com/IbrahimF1/PerScholas-Capstone-Frontend

## ✨ Features

* **Custom Code Execution Engine:** Evaluates user-submitted JavaScript code dynamically against database test cases and custom user test cases.
* **AI Feedback Integration:** Integrates with the `@google/genai` SDK (`gemma-3-27b-it` model) to analyze failed code submissions and generate helpful hints.
* **Authentication & Authorization:** Secure user registration and login using `bcrypt` for password hashing and `crypto` for session token generation.
* **Database Seeding:** Includes a seeding script containing 45 algorithmic problems (Easy, Medium, Hard) to get the platform up and running instantly.
* **User Statistics Tracking:** Automatically increments problems attempted and solved upon code submission.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **AI Integration:** Google GenAI SDK (`@google/genai`)
* **Security:** Bcrypt (hashing), Crypto (session tokens), CORS

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* MongoDB installed locally or a MongoDB Atlas URI
* A Google Gemini API Key

### Environment Variables
Create a `.env` file in the root of the `backend` directory with the following variables:

```env
PORT=3000
MONGO_URI=your_mongo_uri_here
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### Installation & Setup

1. Navigate to the backend directory:
   ```bash
   cd Capstone/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Seed the Database:** (Run this once to populate the problems and test cases)
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Authentication (`/auth`)
* `POST /login` - Authenticate a user and create a session token.
* `POST /logout` - Invalidate a session token.
* `POST /refresh` - Extend session expiration.

### Users (`/user`)
* `POST /profile` - Register a new user.
* `GET /profile/:id` - Fetch user details and stats.
* `PUT /profile/:id` - Update user details.
* `PUT /settings/:id` - Update user preferences (timer, theme, language).
* `DELETE /profile/:id` - Delete an account.

### Problems (`/problems`)
* `GET /` - Fetch all algorithmic problems.
* `GET /:problem_id` - Fetch a specific problem by ID.

### Submissions (`/submissions`)
* `POST /` - Submit code for execution. Runs test cases and returns pass/fail status.
* `GET /user/:user_id` - Get all submissions by a specific user.

### AI Feedback (`/feedback`)
* `POST /` - Send code, problem description, and error message to Google Gemini to get an AI-generated hint.

## ⚠️ Important Note on Code Execution
This backend currently uses Node's `eval()` function inside `utilities/execute.js` to execute user-submitted code. While perfectly fine for local development and Capstone demonstrations, it is **not secure for production environments**. In a production scenario, this should be replaced with a sandboxed environment (like Docker containers, VMs, or Web Workers) to prevent malicious code execution.
