const mongoose = require('mongoose');

const toDoItemSchema = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false,
  }
},{timestamps: true})

module.exports = mongoose.model('TodoItem',toDoItemSchema);