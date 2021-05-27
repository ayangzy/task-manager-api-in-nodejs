const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field cannot be empty"],
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, "The email field is required"],
    trim: true,
    validate: [validator.isEmail, "provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "The password field is required"],
  },
});

userSchema.pre(/^find/, function (next) {
  this.select(["name", "email"]);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
