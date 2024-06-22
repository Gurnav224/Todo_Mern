# To-Do Application API Documentation

## Base URL
`http://localhost:3000/api/v1`

---

### Register New User
**Endpoint:** `POST /register`

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "SecurePass123!",
    "tasks": []
}
```

** Response **
```json
{
    "message": "User registered successfully",
    "user": {
        "_id": "60d9f5f1c2b9b341d8d5c47f",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "tasks": [],
        "createdAt": "2024-06-22T13:00:00.000Z",
        "updatedAt": "2024-06-22T13:00:00.000Z"
    }
}
```

### Login User
**Endpoint:** ` POST /login`

**Request Body:**

```json 
{
    "email": "johndoe@example.com",
    "password": "SecurePass123!"
}
```

**Response** 
```json 

{
    "message": "Login successful",
    "token": "jwt-token-here"
}

```


### Get All Tasks of User
**Endpoint:** ` GET /tasks`

**Response** 
```json 
{
  "msg": "successfully get all tasks",
  "tasks": [
    {
      "_id": "6676d2a2e0b394cfd16277af",
      "title": "Team Meeting",
      "description": "Weekly team meeting to discuss project updates",
      "progress": "Not Started",
      "start_date": "2024-06-23T09:00:00.000Z",
      "end_date": "2024-06-23T10:00:00.000Z",
      "user_id": "6676c3cae0b394cfd16277a7",
      "createdAt": "2024-06-22T13:33:22.296Z",
      "updatedAt": "2024-06-22T13:33:22.296Z",
      "__v": 0
    },
    {
      "_id": "6676e38c93ecc3df55d9b355",
      "title": "Code Review",
      "description": "Review the new feature code",
      "progress": "Completed",
      "start_date": "2024-06-18T10:00:00.000Z",
      "end_date": "2024-06-18T12:00:00.000Z",
      "user_id": "6676c3cae0b394cfd16277a7",
      "createdAt": "2024-06-22T14:45:32.229Z",
      "updatedAt": "2024-06-22T14:45:32.229Z",
      "__v": 0
    },
    {
      "_id": "6676e3ac93ecc3df55d9b359",
      "title": "Client Presentation",
      "description": "Present the project progress to the client",
      "progress": "In Progress",
      "start_date": "2024-06-24T11:00:00.000Z",
      "end_date": "2024-06-24T12:30:00.000Z",
      "user_id": "6676c3cae0b394cfd16277a7",
      "createdAt": "2024-06-22T14:46:04.989Z",
      "updatedAt": "2024-06-22T14:46:04.989Z",
      "__v": 0
    },
    {
      "_id": "6676f0b88462dcc4d6bb32d9",
      "title": "Documentation Update",
      "description": "Update the project documentation with recent changes",
      "progress": "Not Started",
      "start_date": "2024-06-25T13:00:00.000Z",
      "end_date": "2024-06-25T15:00:00.000Z",
      "user_id": "6676c3cae0b394cfd16277a7",
      "createdAt": "2024-06-22T15:41:44.420Z",
      "updatedAt": "2024-06-22T15:41:44.420Z",
      "__v": 0
    },
    {
      "_id": "6676f1618462dcc4d6bb32dd",
      "title": "Complete Project Report",
      "description": "Prepare the final report for the project",
      "progress": "In Progress",
      "start_date": "2024-06-20T08:00:00.000Z",
      "end_date": "2024-06-30T17:00:00.000Z",
      "user_id": "6676c3cae0b394cfd16277a7",
      "createdAt": "2024-06-22T15:44:33.627Z",
      "updatedAt": "2024-06-22T15:44:33.627Z",
      "__v": 0
    }
  ]
}
```


### Create New Task
**Endpoint** `POST / tasks`

**Request Body**
```json
{
    "title": "Documentation Update",
    "description": "Update the project documentation with recent changes",
    "progress": "Not Started",
    "start_date": "2024-06-25T13:00:00Z",
    "end_date": "2024-06-25T15:00:00Z",
    "user_id": "60d9f5f1c2b9b341d8d5c47f"
}
```
**Response**
```json 
{
  "message": "Task created successfully",
  "task": {
    "_id": "6676d2a2e0b394cfd16277af",
    "title": "Documentation Update",
    "description": "Update the project documentation with recent changes",
    "progress": "Not Started",
    "start_date": "2024-06-25T13:00:00.000Z",
    "end_date": "2024-06-25T15:00:00.000Z",
    "user_id": "60d9f5f1c2b9b341d8d5c47f",
    "createdAt": "2024-06-22T13:33:22.296Z",
    "updatedAt": "2024-06-22T13:33:22.296Z",
    "__v": 0
  }
}
```


### Get Single Task by ID
**Endpoint:**  `GET /tasks/:taskId`

**Response**

```json 
{
  "msg": "successfully get single task",
  "task": {
    "_id": "6676d2a2e0b394cfd16277af",
    "title": "Team Meeting",
    "description": "Weekly team meeting to discuss project updates",
    "progress": "Not Started",
    "start_date": "2024-06-23T09:00:00.000Z",
    "end_date": "2024-06-23T10:00:00.000Z",
    "user_id": "6676c3cae0b394cfd16277a7",
    "createdAt": "2024-06-22T13:33:22.296Z",
    "updatedAt": "2024-06-22T13:33:22.296Z",
    "__v": 0
  }
}
```

### Update a Task by ID
**Response** `PUT /tasks/:taskId`

**Request Body**

```json 
{
    "title": "Documentation Update",
    "description": "Update the project documentation with recent changes",
    "progress": "In Progress",
    "start_date": "2024-06-25T13:00:00.000Z",
    "end_date": "2024-06-25T15:00:00.000Z",
    "user_id": "60d9f5f1c2b9b341d8d5c47f"
}
```

**Response**
```json
{
  "message": "Task updated successfully",
  "task": {
    "_id": "6676d2a2e0b394cfd16277af",
    "title": "Documentation Update",
    "description": "Update the project documentation with recent changes",
    "progress": "In Progress",
    "start_date": "2024-06-25T13:00:00.000Z",
    "end_date": "2024-06-25T15:00:00.000Z",
    "user_id": "60d9f5f1c2b9b341d8d5c47f",
    "createdAt": "2024-06-22T13:33:22.296Z",
    "updatedAt": "2024-06-22T16:06:09.697Z",
  }
}

```


### DELETE a Task by ID
**Response** `DELETE /tasks/:taskId`

```json
{
  "delete": "successfully",
  "deleteTask": {
    "_id": "6676d2a2e0b394cfd16277af",
    "title": "Documentation Update",
    "description": "Update the project documentation with recent changes",
    "progress": "In Progress",
    "start_date": "2024-06-25T13:00:00.000Z",
    "end_date": "2024-06-25T15:00:00.000Z",
    "user_id": "60d9f5f1c2b9b341d8d5c47f",
    "createdAt": "2024-06-22T13:33:22.296Z",
    "updatedAt": "2024-06-22T16:06:09.697Z",
    "__v": 0
  }
}```