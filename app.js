const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use(errorMiddleware);

module.exports = app;