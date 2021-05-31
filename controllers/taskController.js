const Task = require("../models/taskModel");

exports.createNewTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).send({
      status: "success",
      message: "Task crated successfully",
      data: {
        newTask,
      },
    });
  } catch (error) {
    res.status(422).send({
      status: "validation required",
      message: error,
    });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send({
      status: "success",
      message: "All Task",
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send({
        status: "not found",
        message: "The resource you are trying to access does not exist",
      });
    }
    res.status(200).send({
      status: "success",
      message: "Task retrieved successfully",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!task) {
      return res.status(404).send({
        status: "not found",
        message: "The resource you are trying to access does not exist",
      });
    }
    res.status(200).send({
      status: "success",
      message: "Task updated successfully",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({
        status: "not found",
        message: "The resource you are trying to access does not exist",
      });
    }
    res.status(204).send({
      status: "success",
      message: "user deleted successfully",
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};
