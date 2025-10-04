const ToDoItem = require("../models/ToDoItem");

exports.createTodoItem = async (req,res,next) => {
  const {task,date} = req.body;
  const todoItem = new ToDoItem({
    task,
    date
  })
  await todoItem.save();
  console.log("todoItem : ",todoItem)
  res.status(201).json(todoItem)
}

exports.getTodoItems = async (req,res,next) => {
  const todoItems = await ToDoItem.find();
  res.json(todoItems);
}

exports.deleteTodoItem = async (req,res,next) => {
  const id = req.params.id;
  await ToDoItem.findByIdAndDelete(id);
  console.log("DELETED")
  res.json({_id : id})
}

exports.markCompleted = async (req,res,next) => {
  const id = req.params.id;
  const todoItem = await ToDoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem)
}