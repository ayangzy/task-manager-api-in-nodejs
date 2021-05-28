const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  description: {
    type: Text,
    trim: true,
    required: [true, "the task description is required"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
