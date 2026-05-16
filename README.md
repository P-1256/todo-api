# Todo API

A simple RESTful Todo API built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**.

This project demonstrates a clean backend architecture with:
- Express routing
- MVC structure
- MongoDB integration
- Centralized error handling
- Async error wrapper utilities

---

## Features

- Create todos
- Get all todos
- Get a single todo
- Delete a todo
- MongoDB database connection
- Structured project architecture
- Custom error handling middleware

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```bash
todo-api-main/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── todoController.js
│
├── middlewares/
│   └── errorMiddleware.js
│
├── models/
│   └── Todo.js
│
├── routes/
│   └── todoRoutes.js
│
├── utils/
│   ├── AppError.js
│   └── catchAsync.js
│
├── app.js
├── server.js
├── package.json
└── package-lock.json
