const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({
      status: "success",
      message: "User Created successfully",
      data: {
        data: newUser,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      status: "Success",
      message: "users successfully retrieved",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "server error",
      message: "Failed retrieving users, please try again",
    });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({
        status: "not found",
        message: "The resource your are trying to access does not exist",
      });
    }
    res.status(200).send({
      status: "success",
      message: "user retrieved successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "fail",
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    if (!user) {
      return res.status(404).send({
        status: "not found",
        message: "The resource your are trying to access does not exist",
      });
    }
    res.status(200).send({
      status: "success",
      message: "user updated successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({
        status: "not found",
        message: "The resource your are trying to access does not exist",
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
