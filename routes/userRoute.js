const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/login").post(userController.login);
router
  .route("")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
