const Todo = require("../models/Todo");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getTodos = catchAsync(async (req, res, next)=>{

    const todos = await Todo.find();
    
    res.status(200).json({
        status: "success",
        data: todos
    });

});

exports.createTodo = catchAsync(async (req, res, next)=>{

    const todo = await Todo.create(req.body);

    res.status(201).json({
        status: "success",
        data: todo
    });

});

exports.getTodo = catchAsync(async (req, res, next) => {

  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: todo
  });

});

exports.deleteTodo = catchAsync(async (req, res, next) => {

  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(204).json({
    status: "success",
    data: null
  });

});