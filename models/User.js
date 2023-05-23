const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hobbies: [
    {
      type: String,
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
