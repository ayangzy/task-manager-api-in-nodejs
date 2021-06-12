const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.route("/login").post(userController.login);
router
  .route("")
  .get(auth, userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(auth, userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
