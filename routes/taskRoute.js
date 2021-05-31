const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router
  .route("")
  .post(taskController.createNewTask)
  .get(taskController.getAllTasks);

router
  .route("/:id")
  .get(taskController.getSingleTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
