const express  = require('express');
const todoItemRouter = express.Router();
const todoItemsController = require("../controllers/toDoItemsController")

todoItemRouter.get("/",todoItemsController.getTodoItems);
todoItemRouter.post("/",todoItemsController.createTodoItem);
todoItemRouter.delete("/:id",todoItemsController.deleteTodoItem);
todoItemRouter.put("/:id/completed",todoItemsController.markCompleted);

module.exports = todoItemRouter;