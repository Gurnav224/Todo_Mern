# Todo Application

A todo full stack application build with mern stack

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Creating a New User](#creating-a-new-user)
   - [Logging in as a User](#logging-in-as-a-user)
   - [Creating a New Task](#creating-a-new-task)
   - [Getting All Tasks](#getting-all-tasks)
3. [License](#license)

---

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/Gurnav224/Todo_Mern.git

   ```

2. **Install Dependencies**

   ```
   npm i express mongoose jwt bcryptjs body-parser

   ```

3. **Set up environment variables:**

   - Create a .env file in the root directory and add the following:

   ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

   ```

4. **Start the server:**
   - npm start

## Usage

1.  **Creating a New User**:

    - Endpoint: POST /api/auth/register

    - Description: Register a new user with name, email, and password. Returns a JWT token upon successful registration.

    - Example in ThunderClient:

Request:

```json
POST http://localhost:port/api/auth/register
Content-Type: application/json

{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "password": "password123"
}


Response

{
"message": "user registered successfully",
"user": {
"\_id": "666ea789f4467a266446403b",
"name": "Alice Smith",
"email": "alice@example.com",
"tasks": [],
"createdAt": "2024-06-16T08:51:21.643Z",
"updatedAt": "2024-06-16T09:11:22.040Z",
"\_\_v": 0
},
"token": "your_jwt_token_here"
}
```

2. **Logging in as a User**:

- **Endpoint:** `POST /api/auth/login`
- **Description:** Log in with email and password to obtain a JWT token for authentication.
- **Example in ThunderClient:**

  **Request:**
  ```http
  POST http://localhost:port/api/users/login
  Content-Type: application/json

  {
      "email": "alice@example.com",
      "password": "password123"
  }
  ```

  **Response:**
  ```json
  {
      "message": "login successfully",
      "user": {
          "_id": "666ea789f4467a266446403b",
          "name": "Alice Smith",
          "email": "alice@example.com",
          "tasks": [
              "666ea84af4467a266446403f",
              "666ea894f4467a2664464043",
              "666eac02f4467a2664464056",
              "666eac39f4467a266446405a"
          ],
          "createdAt": "2024-06-16T08:51:21.643Z",
          "updatedAt": "2024-06-16T09:11:22.040Z",
          "__v": 4
      },
      "token": "your_jwt_token_here"
  }
  ```


3. **Creating a New Task**:

- **Endpoint:** `POST /api/auth/tasks`
- **Description:** Create a new task with title, description, start date, end date, and progress. Requires a valid JWT token.
- **Example in ThunderClient:**

  **Request:**
  ```json
  POST http://localhost:port/api/auth/tasks
  Content-Type: application/json
  x-auth-token: your_jwt_token_here

  {
      "title": "Complete Project Report",
      "description": "Finalize and submit the project report for the semester.",
      "start_date": "2024-06-01T00:00:00.000Z",
      "end_date": "2024-06-30T00:00:00.000Z",
      "progress": "In Progress"
  }
  ```

  **Response:**
  ```json
  {
      "msg": "new task added successfully",
      "task": {
          "_id": "666ea84af4467a266446403f",
          "title": "Complete Project Report",
          "description": "Finalize and submit the project report for the semester.",
          "start_date": "2024-06-01T00:00:00.000Z",
          "end_date": "2024-06-30T00:00:00.000Z",
          "progress": "In Progress",
          "user_id": "666ea789f4467a266446403b",
          "createdAt": "2024-06-16T09:15:00.000Z",
          "updatedAt": "2024-06-16T09:15:00.000Z"
      }
  }
  ```

4. **Getting All Tasks**:

- **Endpoint:** `GET /api/auth/tasks`
- **Description:** Retrieve all tasks associated with the authenticated user. Requires a valid JWT token.
- **Example in ThunderClient:**

  **Request:**
  ```http
  GET http://localhost:port/api/auth/tasks
  Content-Type: application/json
  x-auth-token: your_jwt_token_here
  ```

  **Response:**
  ```json
  [
      {
          "_id": "666ea84af4467a266446403f",
          "title": "Complete Project Report",
          "description": "Finalize and submit the project report for the semester.",
          "start_date": "2024-06-01T00:00:00.000Z",
          "end_date": "2024-06-30T00:00:00.000Z",
          "progress": "In Progress",
          "user_id": "666ea789f4467a266446403b",
          "createdAt": "2024-06-16T09:15:00.000Z",
          "updatedAt": "2024-06-16T09:15:00.000Z"
      },
      {
          "_id": "666ea894f4467a2664464043",
          "title": "Prepare Presentation",
          "description": "Create slides and prepare for the project presentation.",
          "start_date": "2024-06-15T00:00:00.000Z",
          "end_date": "2024-06-20T00:00:00.000Z",
          "progress": "Not Started",
          "user_id": "666ea789f4467a266446403b",
          "createdAt": "2024-06-16T09:20:00.000Z",
          "updatedAt": "2024-06-16T09:20:00.000Z"
      }
  ]
  ```
